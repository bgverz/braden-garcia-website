"use client";

import gsap from "gsap";

// GSAP is used only for the hero boot-sequence timeline — everything else
// uses Framer Motion's whileInView.
export function useGsap() {
  return { gsap };
}
