"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/providers/motion-provider";
import { useMediaQuery } from "@/hooks/use-media-query";
import { CURSOR_HOTSPOT, CURSOR_ICONS, type CursorState } from "./cursor-icons";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])';

// Brief enough to read as a snappy acknowledgment, not a loading delay.
const BUSY_DURATION_MS = 320;

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [hoverState, setHoverState] = useState<CursorState>("default");
  const [busy, setBusy] = useState(false);
  // Incremented (never reset) each reduced-motion click so a repeat click on
  // the same target still remounts the pulse element and restarts the CSS
  // animation — toggling a className alone wouldn't retrigger it.
  const [pulseKey, setPulseKey] = useState(0);
  const busyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Default true (assume touch) so there's no flash of a desktop cursor on
  // touch devices before the real pointer type is known.
  const isTouch = useMediaQuery("(pointer: coarse)", true);
  const reducedMotion = useReducedMotion();

  const activeState: CursorState = busy ? "busy" : hoverState;
  const Icon = CURSOR_ICONS[activeState];
  const [hotX, hotY] = CURSOR_HOTSPOT[activeState];

  useEffect(() => {
    if (isTouch) return;

    const el = rootRef.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let raf = 0;

    // Reduced motion: snap straight to the real position every frame instead
    // of easing toward it — the eased follow is itself continuous motion.
    const ease = reducedMotion ? 1 : 0.35;

    const tick = () => {
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Hover state swap is a plain React state update (no transition), so it
    // reads as instant — there's nothing to animate between arrow and hand.
    const onOver = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) setHoverState("pointer");
    };
    const onOut = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) setHoverState("default");
    };

    // Visibility is tied to the pointer actually being over the window, not
    // to "has moved at least once" — the cursor must be visible immediately
    // on load, before any mousemove has fired.
    const onLeaveWindow = () => {
      el.style.opacity = "0";
    };
    const onEnterWindow = () => {
      el.style.opacity = "1";
    };

    // Click feedback: busy-spin briefly, then fall back to whatever state is
    // actually under the cursor once the timeout clears it. Only fires for
    // primary interactive elements — also covers keyboard-triggered clicks
    // (Enter/Space), which dispatch a real click event at the focused element.
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) return;

      if (reducedMotion) {
        setPulseKey((k) => k + 1);
        return;
      }

      setBusy(true);
      if (busyTimeout.current) clearTimeout(busyTimeout.current);
      busyTimeout.current = setTimeout(() => setBusy(false), BUSY_DURATION_MS);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });
    window.addEventListener("click", onClick);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onEnterWindow);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
      window.removeEventListener("click", onClick);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onEnterWindow);
      if (busyTimeout.current) clearTimeout(busyTimeout.current);
    };
  }, [isTouch, reducedMotion]);

  if (isTouch) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-150"
      style={{ willChange: "transform" }}
    >
      {/* Hotspot alignment (static, per-state) lives on this wrapper, kept
          separate from the pulse animation below so a scale keyframe never
          clobbers the translate offset mid-animation. */}
      <div style={{ transform: `translate(${-hotX}px, ${-hotY}px)` }}>
        <div key={pulseKey} className={`inline-block ${pulseKey > 0 && reducedMotion ? "cursor-ack-pulse" : ""}`}>
          <Icon />
        </div>
      </div>
    </div>
  );
}
