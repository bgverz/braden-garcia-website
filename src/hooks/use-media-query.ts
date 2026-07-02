"use client";

import { useSyncExternalStore } from "react";

// Subscribes to a media query via useSyncExternalStore rather than
// effect+setState — avoids the extra render pass and hydration mismatches
// that come from syncing external browser state through an effect.
export function useMediaQuery(query: string, serverSnapshot = false) {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    () => serverSnapshot
  );
}
