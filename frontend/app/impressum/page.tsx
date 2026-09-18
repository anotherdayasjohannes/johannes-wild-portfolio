import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { impressum } from "@/content/legal";

export const metadata: Metadata = {
  title: impressum.title,
  robots: { index: false },
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
