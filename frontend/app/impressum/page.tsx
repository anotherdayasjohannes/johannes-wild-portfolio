import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { impressum } from "@/content/legal";
import { canonical } from "@/lib/paths";

export const metadata: Metadata = {
  title: impressum.title,
  robots: { index: false },
  alternates: { canonical: canonical("/impressum") },
};

export default function ImpressumPage() {
  return (
    <LegalPage
      label="Rechtliches"
      title={impressum.title}
      intro={impressum.intro}
      sections={impressum.sections}
    />
  );
}
