import localFont from "next/font/local";

// At Haüss variable (Arillatype.Studio). The file lives in app/fonts/private/,
// which is gitignored: the current EULA does not allow use on a public site and
// forbids subsetting, so the file is loaded as-is and only when SITE_FONT=hauss.
export const sans = localFont({
  src: "./fonts/private/AtHaussVARVF.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
});

export const fontName = "At Haüss";
export const fontCredit: string | null = "Schrift: At Haüss, Arillatype.Studio";
