import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import { instrumentSerif, switzer } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#f5f0ed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${switzer.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-svh flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
