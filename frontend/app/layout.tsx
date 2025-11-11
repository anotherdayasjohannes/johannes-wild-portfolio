import "./globals.css";

/**
 * Root layout - minimal wrapper for locale-based routing
 * The actual layout with fonts, metadata, etc. is in [locale]/layout.tsx
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
