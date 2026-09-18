import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { family } from "@/content/family";
import { rootCanonical, SITE_ORIGIN } from "@/lib/paths";
import { sans } from "./fonts";
import "./globals.css";

// Domain-level metadata: no first names of the children anywhere.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: family.title,
    template: `%s · ${family.title}`,
  },
  description: family.description,
  alternates: { canonical: rootCanonical("/") },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: family.title,
    title: family.title,
    description: family.description,
    url: rootCanonical("/"),
  },
  twitter: { card: "summary_large_image", title: family.title, description: family.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f1ee" },
    { media: "(prefers-color-scheme: dark)", color: "#171615" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={sans.variable}>
      <body className="flex min-h-svh flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
