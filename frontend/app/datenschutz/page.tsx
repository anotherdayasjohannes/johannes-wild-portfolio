import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { datenschutz } from "@/content/legal";
import { rootCanonical } from "@/lib/paths";

export const metadata: Metadata = {
  title: datenschutz.title,
  alternates: { canonical: rootCanonical("/datenschutz") },
};

export default function DatenschutzPage() {
  return (
    <LegalPage
      label="Rechtliches"
      title={datenschutz.title}
      intro={datenschutz.intro}
      sections={datenschutz.sections}
    />
  );
}
