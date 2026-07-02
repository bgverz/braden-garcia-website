"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

// Registers ScrollTrigger exactly once per client session. GSAP is used only
// for the hero boot sequence and pinned chapter transitions — everything
// else uses Framer Motion's whileInView.
export function useGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}
