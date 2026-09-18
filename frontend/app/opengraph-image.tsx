import { ImageResponse } from "next/og";
import { family } from "@/content/family";
import { og, ogFonts, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "wir Wilden. Familie Wild, Reichersbeuern.";
export const size = OG_SIZE;
export const contentType = "image/png";

/** Typographic root card: "wir Wilden" and the four tile colours. No names, no portraits. */
export default async function Image() {
  const fonts = await ogFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: og.bg,
          color: og.ink,
          fontFamily: "Hanken",
          padding: 56,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: og.ink2 }}>
          <span>{family.footer}</span>
          <span>wirwilden.de</span>
        </div>
        <div style={{ display: "flex", flex: 1, alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 150, lineHeight: 0.9, letterSpacing: "-0.02em", marginLeft: -6 }}>
            <span style={{ fontWeight: 400, marginRight: 30 }}>wir</span>
            <span style={{ fontWeight: 600 }}>Wilden</span>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {og.tiles.map((c) => (
              <div key={c} style={{ width: 84, height: 84, background: c }} />
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
