import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { og, ogFonts, ogImageDataUrl, OG_SIZE } from "@/lib/og";

export const runtime = "nodejs";
export const alt = "Johannes Wild. Übernimmt Verantwortung. Gestaltet Lösungen.";
export const size = OG_SIZE;
export const contentType = "image/png";

/** München 72 card: JOHANNES label, WILD with the orange full stop, tagline, portrait right. */
export default async function Image() {
  const [fonts, portrait] = await Promise.all([ogFonts(), ogImageDataUrl("og/johannes.jpg")]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: og.bg,
          color: og.ink,
          fontFamily: "Hanken",
          padding: 56,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", flex: 1, paddingRight: 48 }}>
          <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "0.14em", color: og.ink2, marginBottom: 14 }}>
            JOHANNES
          </div>
          <div style={{ display: "flex", fontSize: 232, fontWeight: 600, lineHeight: 0.82, letterSpacing: "-0.02em", marginLeft: -8 }}>
            WILD
            <span style={{ color: og.signal, fontWeight: 400 }}>.</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 38, lineHeight: 1.2, marginTop: 40, color: og.ink2 }}>
            <span>{site.claim[0]}</span>
            <span style={{ color: og.ink }}>{site.claim[1]}</span>
          </div>
          <div style={{ fontSize: 22, color: og.ink2, marginTop: 22 }}>{site.roleLine}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain img */}
        <img
          src={portrait}
          alt=""
          width={400}
          height={400}
          style={{ width: 400, height: 400, objectFit: "cover", border: `1px solid rgba(17,17,17,0.18)` }}
        />
      </div>
    ),
    { ...size, fonts },
  );
}
