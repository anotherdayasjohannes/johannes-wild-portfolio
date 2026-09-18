import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { PageIntro } from "@/components/layout/PageIntro";
import { FadeUp } from "@/components/motion/FadeUp";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionHead } from "@/components/ui/SectionHead";
import { site } from "@/content/site";
import { trainerTool } from "@/content/trainer-abrechnung";
import { asset, canonical } from "@/lib/paths";

export const metadata: Metadata = {
  title: trainerTool.name,
  description: trainerTool.tagline,
  alternates: { canonical: canonical("/trainer-abrechnung") },
  openGraph: { url: canonical("/trainer-abrechnung") },
};

export default function TrainerAbrechnungPage() {
  return (
    <>
      <Header />
      <main>
        <PageIntro
          label={trainerTool.label}
          tone="work"
          title={trainerTool.name}
          lead={trainerTool.tagline}
          hint="Skiclub Reichersbeuern · 2026"
        />

        <FadeUp className="mt-step px-gutter">
          <figure className="tile aspect-video">
            <Image
              src={asset(trainerTool.screenshot.src)}
              alt={trainerTool.screenshot.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </figure>
        </FadeUp>

        <section className="mt-section">
          <SectionHead label="Was die App macht" tone="work" />
          <div className="mt-gutter grid grid-cols-12 gap-x-gutter gap-y-10 px-gutter">
            <FadeUp className="col-span-12 md:col-span-6">
              <div className="grid max-w-[46ch] gap-4 text-body">
                {trainerTool.description.map((p, i) => (
                  <p key={p} className={i === 0 ? "max-w-[30ch] text-lead font-light" : "font-retina text-ink-2"}>
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-8 text-body">
                <ArrowLink href={trainerTool.appUrl} tone="orange">
                  App öffnen
                </ArrowLink>
              </p>
            </FadeUp>
            <FadeUp className="col-span-12 md:col-span-5 md:col-start-8">
              <dl className="text-body">
                {trainerTool.facts.map((fact) => (
                  <div key={fact.term} className="grid grid-cols-3 gap-x-gutter border-t border-line py-2.5 last:border-b">
                    <dt className="text-ink-2">{fact.term}</dt>
                    <dd className="col-span-2">{fact.detail}</dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>
        </section>

        <section className="mt-section">
          <SectionHead label={trainerTool.installLabel} tone="work" hint="iPhone, Android, Desktop" />
          <FadeUp className="mt-gutter px-gutter">
            <p className="mb-8 max-w-[46ch] text-body font-retina text-ink-2">{trainerTool.installIntro}</p>
            <Accordion items={trainerTool.install} />
          </FadeUp>
        </section>

        <section className="mt-section">
          <SectionHead label={trainerTool.privacyLabel} tone="admin" />
          <FadeUp className="mt-gutter grid grid-cols-12 gap-x-gutter px-gutter">
            <div className="col-span-12 grid gap-4 text-body md:col-span-8">
              {trainerTool.privacy.map((p, i) => (
                <p key={p} className={i === 0 ? "max-w-[30ch] text-lead font-light" : "max-w-[46ch] font-retina text-ink-2"}>
                  {p}
                </p>
              ))}
            </div>
          </FadeUp>
        </section>

        <section className="mt-section">
          <SectionHead label={trainerTool.contactLabel} tone="work" />
          <FadeUp className="mt-gutter grid grid-cols-12 gap-x-gutter px-gutter">
            <div className="col-span-12 md:col-span-6">
              <p className="max-w-[46ch] text-body font-retina text-ink-2">{trainerTool.contact}</p>
              <div className="mt-6 grid gap-2 text-body">
                <ArrowLink href={`mailto:${site.email}`} tone="orange" className="w-fit">
                  {site.email}
                </ArrowLink>
                <ArrowLink href={trainerTool.repoUrl} tone="orange" className="w-fit">
                  Quellcode auf GitHub
                </ArrowLink>
              </div>
            </div>
          </FadeUp>
        </section>
      </main>
    </>
  );
}
