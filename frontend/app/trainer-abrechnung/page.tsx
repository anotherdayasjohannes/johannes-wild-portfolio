import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { PageIntro } from "@/components/layout/PageIntro";
import { FadeUp } from "@/components/motion/FadeUp";
import { Accordion } from "@/components/ui/Accordion";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { trainerTool } from "@/content/trainer-abrechnung";

export const metadata: Metadata = {
  title: trainerTool.name,
  description: trainerTool.tagline,
};

export default function TrainerAbrechnungPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          label={trainerTool.label}
          title={trainerTool.name}
          lead={trainerTool.tagline}
        />

        <Section label="Was die App macht">
          <div className="grid gap-10 md:grid-cols-12 md:gap-5">
            <FadeUp className="md:col-span-7">
              <div className="grid max-w-2xl gap-5 text-body">
                {trainerTool.description.map((p, i) => (
                  <p key={p} className={i === 0 ? "text-lead" : "text-fg/80"}>
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                {trainerTool.appUrl ? (
                  <Pill href={trainerTool.appUrl}>App öffnen</Pill>
                ) : (
                  <p className="text-caption text-muted">
                    Die öffentliche App-Adresse folgt.
                  </p>
                )}
              </div>
            </FadeUp>
            <FadeUp className="md:col-span-4 md:col-start-9">
              <dl className="border-t border-line">
                {trainerTool.facts.map((fact) => (
                  <div
                    key={fact.term}
                    className="grid grid-cols-3 gap-4 border-b border-line py-3 text-caption"
                  >
                    <dt className="text-muted">{fact.term}</dt>
                    <dd className="col-span-2">{fact.detail}</dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>
        </Section>

        <Section label={trainerTool.installLabel} tone="surface">
          <FadeUp>
            <p className="mb-10 max-w-2xl text-body text-fg/80">{trainerTool.installIntro}</p>
            <Accordion items={trainerTool.install} />
          </FadeUp>
        </Section>

        <Section label={trainerTool.privacyLabel}>
          <FadeUp>
            <div className="grid max-w-2xl gap-5 text-body">
              {trainerTool.privacy.map((p, i) => (
                <p key={p} className={i === 0 ? "text-lead" : "text-fg/80"}>
                  {p}
                </p>
              ))}
            </div>
          </FadeUp>
        </Section>

        <Section id="kontakt" label={trainerTool.contactLabel} className="pb-40 md:pb-55">
          <FadeUp>
            <p className="max-w-2xl text-body text-fg/80">{trainerTool.contact}</p>
            <div className="mt-10 grid gap-3 text-lead">
              <a href={`mailto:${site.email}`} className="link-wipe w-fit">
                {site.email}
              </a>
              <a
                href={trainerTool.repoUrl}
                className="link-wipe w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quellcode auf GitHub
              </a>
            </div>
          </FadeUp>
        </Section>
      </main>
    </>
  );
}
