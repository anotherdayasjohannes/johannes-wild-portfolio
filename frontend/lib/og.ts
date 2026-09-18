import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Shared bits for the Open Graph images (next/og ImageResponse).
 * Satori needs TTF/OTF/WOFF, so the OG images always use the bundled Hanken
 * Grotesk statics; At Haüss exists only as WOFF2 and stays out of the images.
 */
export const OG_SIZE = { width: 1200, height: 630 };

export const og = {
  bg: "#f1f1ee",
  ink: "#111111",
  ink2: "#5f6973",
  signal: "#f3821d",
  tiles: ["#71bcdf", "#f3821d", "#f471aa", "#8dc168"],
};

const root = process.cwd();

export async function ogFonts() {
  const [regular, semibold] = await Promise.all([
    readFile(path.join(root, "app/fonts/og/HankenGrotesk-Regular.ttf")),
    readFile(path.join(root, "app/fonts/og/HankenGrotesk-SemiBold.ttf")),
  ]);
  return [
    { name: "Hanken", data: toArrayBuffer(regular), weight: 400 as const, style: "normal" as const },
    { name: "Hanken", data: toArrayBuffer(semibold), weight: 600 as const, style: "normal" as const },
  ];
}

export async function ogImageDataUrl(publicPath: string, mime = "image/jpeg") {
  const buf = await readFile(path.join(root, "public", publicPath));
  return `data:${mime};base64,${buf.toString("base64")}`;
}

function toArrayBuffer(buf: Buffer): ArrayBuffer {
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}
