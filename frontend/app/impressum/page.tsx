import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { impressum, legalUpdated } from "@/content/legal";
import { rootCanonical } from "@/lib/paths";

export const metadata: Metadata = {
  title: impressum.title,
  alternates: { canonical: rootCanonical("/impressum") },
};

export default function ImpressumPage() {
  return (
    <LegalPage
      label="Rechtliches"
      title={impressum.title}
      intro={impressum.intro}
      sections={impressum.sections}
      updated={legalUpdated}
    />
  );
}
