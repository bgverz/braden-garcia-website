"use client";

import { createContext, useContext, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

const ReducedMotionContext = createContext(false);

export function useReducedMotion() {
  return useContext(ReducedMotionContext);
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)", false);

  // Keeps the CSS-only reduced-motion fallback (see globals.css) in
  // agreement with the JS-driven one used by components.
  useEffect(() => {
    document.documentElement.classList.toggle("reduced-motion", reduced);
  }, [reduced]);

  return (
    <ReducedMotionContext.Provider value={reduced}>
      {children}
    </ReducedMotionContext.Provider>
  );
}
