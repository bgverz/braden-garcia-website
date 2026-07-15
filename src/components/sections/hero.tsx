"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { boot, personal } from "@/content";
import { useReducedMotion } from "@/components/providers/motion-provider";

type Line = { kind: "cmd"; prompt: string; cmd: string } | { kind: "output"; text: string };

const LINES: Line[] = boot.lines.map((l) =>
  "cmd" in l ? { kind: "cmd", prompt: l.prompt, cmd: l.cmd } : { kind: "output", text: l.output }
);

const START_DELAY_MS = 150;
const CHAR_MS = 32; // typing speed per character
const CMD_PAUSE_MS = 220; // beat after a command finishes typing
const OUTPUT_PAUSE_MS = 260; // beat after an output line prints

// The signature moment: a boot sequence that types itself out on load, like a
// terminal starting up. Command lines "type" (char count driven by rAF),
// output lines just "print" (appear whole after a short beat).
export function Hero() {
  const reducedMotion = useReducedMotion();
  const [animVisibleCount, setAnimVisibleCount] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [typingIndex, setTypingIndex] = useState(-1);
  const [animDone, setAnimDone] = useState(false);

  // Reduced motion shows the finished state immediately — no animation to
  // run, so nothing to sync from an effect; these are derived at render time.
  const visibleCount = reducedMotion ? LINES.length : animVisibleCount;
  const done = reducedMotion || animDone;

  useEffect(() => {
    if (reducedMotion) return;

    let timer = 0;
    let raf = 0;

    const step = (i: number) => {
      if (i >= LINES.length) {
        setAnimDone(true);
        return;
      }
      const line = LINES[i];
      setAnimVisibleCount(i + 1);

      if (line.kind === "cmd") {
        setTypingIndex(i);
        setTypedChars(0);
        const started = performance.now();
        const tick = (now: number) => {
          const chars = Math.min(line.cmd.length, Math.floor((now - started) / CHAR_MS));
          setTypedChars(chars);
          if (chars < line.cmd.length) {
            raf = requestAnimationFrame(tick);
          } else {
            timer = window.setTimeout(() => step(i + 1), CMD_PAUSE_MS);
          }
        };
        raf = requestAnimationFrame(tick);
      } else {
        timer = window.setTimeout(() => step(i + 1), OUTPUT_PAUSE_MS);
      }
    };

    timer = window.setTimeout(() => step(0), START_DELAY_MS);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 md:px-12"
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-md border border-border bg-bg-raised/60 shadow-[0_0_0_1px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg-muted/40" />
            <span className="ml-3 font-mono text-xs text-fg-dim">bgarcia@portfolio — zsh</span>
          </div>

          <div className="min-h-[220px] px-5 py-6 font-mono text-sm leading-relaxed md:text-base">
            {LINES.map((line, i) => {
              if (i >= visibleCount) return null;
              const isLastCmdTyping = !reducedMotion && !done && line.kind === "cmd" && i === typingIndex;

              if (line.kind === "cmd") {
                const text = isLastCmdTyping ? line.cmd.slice(0, typedChars) : line.cmd;
                return (
                  <div key={i} className="text-fg">
                    <span className="text-accent">{line.prompt}</span>
                    <span className="text-fg-dim"> $ </span>
                    <span>{text}</span>
                    {isLastCmdTyping && (
                      <span aria-hidden="true" className="animate-pulse text-accent">
                        ▌
                      </span>
                    )}
                  </div>
                );
              }
              return (
                <div key={i} className="pl-0 text-fg-dim">
                  {line.text}
                </div>
              );
            })}
            {done && (
              <div aria-hidden="true" className="mt-1 text-fg">
                <span className="text-accent">~/braden</span>
                <span className="text-fg-dim"> $ </span>
                <span className="inline-block h-[1em] w-[0.55em] translate-y-[2px] animate-pulse bg-accent align-middle" />
              </div>
            )}
          </div>
        </div>

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={done ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <h1 className="font-mono text-4xl font-medium tracking-tight text-fg md:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-fg-dim md:text-xl">{personal.role}</p>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={reducedMotion ? undefined : { opacity: 0 }}
        animate={done ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-fg-muted"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
