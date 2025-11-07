import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
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
