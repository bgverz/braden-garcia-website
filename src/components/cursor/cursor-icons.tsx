"use client";

import { useId } from "react";
import type { ComponentType } from "react";

// Windows Aero (Vista/7) inspired: glossy chrome body, a turquoise glass
// tint, soft slate-blue outline. Every icon shares this gradient treatment
// and a comparable canvas size, so switching states never changes scale.
function AeroGradientDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="45%" stopColor="#bdeef2" />
        <stop offset="100%" stopColor="#8b98a8" />
      </linearGradient>
    </defs>
  );
}

function AeroArrow() {
  const id = useId();
  return (
    <svg
      width="26"
      height="30"
      viewBox="0 0 26 30"
      style={{ filter: "drop-shadow(1px 2px 0.5px rgba(0,0,0,0.45))" }}
    >
      <AeroGradientDefs id={id} />
      <path
        d="M2 2 L2 22.5 L6.8 18 L10.3 25.8 L13.2 24.5 L9.8 17 L16.5 17 Z"
        fill={`url(#${id})`}
        stroke="#3b4656"
        strokeWidth="1.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AeroHand() {
  const id = useId();
  return (
    <svg
      width="24"
      height="30"
      viewBox="0 0 24 30"
      style={{ filter: "drop-shadow(1px 2px 0.5px rgba(0,0,0,0.45))" }}
    >
      <AeroGradientDefs id={id} />
      <path
        d="M9 2 L14 2 L14 14 L18 14 L18 17 L22 17 L22 28 L9 28 L9 21 L5 21 L5 16 L9 14 Z"
        fill={`url(#${id})`}
        stroke="#3b4656"
        strokeWidth="1.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

// The classic Aero "system busy" ring, shown briefly as click feedback —
// arrow plus a spinning ring together, same as Windows' real AppStarting
// cursor. Reduced motion never renders this (see CustomCursor).
function AeroBusy() {
  return (
    <div className="relative inline-block">
      <AeroArrow />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="absolute left-[12px] top-[17px]"
        style={{ animation: "cursor-busy-spin 0.8s linear infinite" }}
      >
        <circle
          cx="10"
          cy="10"
          r="7.5"
          fill="none"
          stroke="#2f8fd6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="9 6 9 6"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

// Hotspot = the exact local (x, y) in each icon's own SVG that should land
// on the real cursor position. Adding a state later means adding one icon
// component and one entry here — nothing else changes.
export const CURSOR_HOTSPOT = {
  default: [2, 2],
  pointer: [9, 2],
  busy: [2, 2],
} as const satisfies Record<string, readonly [number, number]>;

export type CursorState = keyof typeof CURSOR_HOTSPOT;

export const CURSOR_ICONS: Record<CursorState, ComponentType> = {
  default: AeroArrow,
  pointer: AeroHand,
  busy: AeroBusy,
};
