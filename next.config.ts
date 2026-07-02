import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js's dev server blocks cross-origin requests to its internal
  // /_next/* endpoints (HMR websocket, RSC payloads) by default, as a
  // DNS-rebinding protection — this only allows "localhost" out of the box.
  // Without this, loading the dev server from the LAN IP (e.g. to test on a
  // phone, or from this machine's network address) silently breaks React
  // hydration: the HMR websocket handshake gets rejected with a 403, static
  // HTML/CSS still renders, but no client component ever mounts.
  //
  // Dev-only — next start / a real deployment has no such restriction, so
  // this can't affect production. Update the IP below if your LAN address
  // changes (shown in the "Network:" line `next dev` prints on startup).
  allowedDevOrigins: ["10.1.30.151"],
};

export default nextConfig;
