import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johannes Wild - Portfolio",
  description: "Analytisches Denken und strukturiertes Arbeiten erlauben es mir, mich schnell in neue und komplexe Domänen, Herausforderungen und Prozesse hineinzudenken.",
  keywords: ["Johannes Wild", "Portfolio", "Developer", "Consultant"],
  authors: [{ name: "Johannes Wild" }],
  openGraph: {
    title: "Johannes Wild - Portfolio",
    description: "Portfolio von Johannes Wild",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased font-sans">
        {/* Border lines - matching current design */}
        <div className="fixed top-0 left-0 right-0 h-[2px] bg-dark-border z-50" />
        <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-dark-border z-50" />
        <div className="fixed top-0 left-0 bottom-0 w-[2px] bg-dark-border z-50" />
        <div className="fixed top-0 right-0 bottom-0 w-[2px] bg-dark-border z-50" />
        
        {children}
      </body>
    </html>
  );
}
