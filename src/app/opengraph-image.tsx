import { ImageResponse } from "next/og";
import { personal } from "@/content";

// Social-share card, generated at build time in the site's terminal style.
// Satori only ships a default sans font — close enough for a share card;
// the palette carries the terminal identity.

export const alt = `${personal.name} — ${personal.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0c0b",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 920,
            borderRadius: 12,
            border: "1px solid #3a4136",
            background: "#12140f",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderBottom: "1px solid #262b24",
              padding: "18px 24px",
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#545e51" }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#545e51" }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#545e51" }} />
            <div style={{ marginLeft: 14, fontSize: 22, color: "#838f83" }}>
              bgarcia@portfolio — zsh
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "44px 48px 52px",
            }}
          >
            <div style={{ display: "flex", fontSize: 28, color: "#5fb86a" }}>
              ~ <span style={{ color: "#838f83", margin: "0 12px" }}>$</span>
              <span style={{ color: "#dce2d8" }}>whoami</span>
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 76,
                fontWeight: 600,
                color: "#dce2d8",
                letterSpacing: -2,
              }}
            >
              {personal.name}
            </div>
            <div style={{ marginTop: 18, fontSize: 34, color: "#838f83" }}>{personal.role}</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
