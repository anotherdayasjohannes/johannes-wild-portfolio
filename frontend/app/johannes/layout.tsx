import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import { canonical } from "@/lib/paths";

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: canonical("/") },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: site.name,
    description: site.positioning,
    url: canonical("/"),
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.positioning },
};

/** Personal site under /johannes: pages render their own Header, the Footer is shared. */
export default function JohannesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
