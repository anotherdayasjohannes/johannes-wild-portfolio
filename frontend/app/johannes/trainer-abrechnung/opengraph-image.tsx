import { ImageResponse } from "next/og";
import { trainerTool } from "@/content/trainer-abrechnung";
import { og, ogFonts, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const alt = `${trainerTool.name}. ${trainerTool.tagline}`;
export const size = OG_SIZE;
export const contentType = "image/png";

/** Variant of the Johannes card for the trainer app: label, app title, tagline. */
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
          justifyContent: "space-between",
          background: og.bg,
          color: og.ink,
          fontFamily: "Hanken",
          padding: 56,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: og.ink2 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 14, color: "#a64b00", fontWeight: 600 }}>
            <span style={{ width: 12, height: 12, background: "#a64b00" }} />
            Projekt
          </span>
          <span>wirwilden.de/johannes</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 128,
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              marginLeft: -4,
            }}
          >
            <span>SCR Trainer-</span>
            <span style={{ display: "flex" }}>
              Abrechnung<span style={{ color: og.signal, fontWeight: 400 }}>.</span>
            </span>
          </div>
          <div style={{ fontSize: 40, lineHeight: 1.2, marginTop: 36, color: og.ink2, maxWidth: 900 }}>
            {trainerTool.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
