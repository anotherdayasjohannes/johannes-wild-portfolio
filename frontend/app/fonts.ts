import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";

// Switzer (Indian Type Foundry, free via Fontshare), self-hosted.
export const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

// Free stand-in for Season Mix: used only for the display quote.
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
