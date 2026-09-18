import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { datenschutz } from "@/content/legal";

export const metadata: Metadata = {
  title: datenschutz.title,
  robots: { index: false },
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
