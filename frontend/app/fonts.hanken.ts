import { Hanken_Grotesk } from "next/font/google";

// Committed fallback: closest free neo-grotesque to At Haüss (same x-height and
// cap height, has Light 300). No ss02, so solid index numerals degrade to plain.
export const sans = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-sans",
  display: "swap",
});

export const fontName = "Hanken Grotesk";
export const fontCredit: string | null = null;
