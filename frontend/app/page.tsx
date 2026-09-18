import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { FadeUp } from "@/components/motion/FadeUp";
import { Section } from "@/components/ui/Section";
import { HairlineList } from "@/components/ui/HairlineList";
import { Pill } from "@/components/ui/Pill";
import { about } from "@/content/about";
import { photos, site } from "@/content/site";
import { stations, stationsLabel } from "@/content/stations";
import { testimonials, testimonialsLabel } from "@/content/testimonials";
import { trainerTool } from "@/content/trainer-abrechnung";

export default function HomePage() {
  return (
    <>
      <Header tone="photo" />
      <main>
        <Hero
          name={site.name}
          positioning={site.positioning}
          desktop={photos.heroDesktop}
          mobile={photos.heroMobile}
        />

        <Section id="ueber-mich" label={about.label}>
          <div className="grid gap-10 md:grid-cols-12 md:gap-5">
            <FadeUp className="md:col-span-7">
              <p className="text-lead">{about.statement}</p>
              <div className="mt-10 grid max-w-2xl gap-5 text-body text-fg/80">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </FadeUp>
            <FadeUp className="md:col-span-4 md:col-start-9">
              <div className="relative aspect-portrait overflow-hidden">
                <Image
                  src={photos.about.src}
                  alt={photos.about.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </Section>

        <Section id="stationen" label={stationsLabel}>
          <FadeUp>
            <HairlineList items={stations} />
          </FadeUp>
        </Section>

        <Section id="stimmen" label={testimonialsLabel}>
          <FadeUp>
            <Testimonials items={testimonials} />
          </FadeUp>
        </Section>

        <Section id="projekt" label={trainerTool.label}>
          <div className="grid gap-10 md:grid-cols-12 md:gap-5">
            <FadeUp className="md:col-span-5">
              <Link href={trainerTool.href} className="group block">
                <div className="relative aspect-portrait overflow-hidden">
                  <Image
                    src={photos.project.src}
                    alt={photos.project.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="scale-[1.03] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] motion-reduce:transition-none"
                  />
                </div>
                <div className="flex justify-between pt-3 text-meta">
                  <span className="font-medium">{trainerTool.name}</span>
                  <span className="text-muted">PWA · 2026</span>
                </div>
              </Link>
            </FadeUp>
            <FadeUp className="md:col-span-6 md:col-start-7">
              <h3 className="text-h2">{trainerTool.tagline}</h3>
              <p className="mt-8 max-w-xl text-body text-fg/80">{trainerTool.teaser}</p>
              <div className="mt-10">
                <Pill href={trainerTool.href}>{trainerTool.ctaLabel}</Pill>
              </div>
            </FadeUp>
          </div>
        </Section>

        <Section id="kontakt" label="Kontakt" className="pb-40 md:pb-55">
          <FadeUp>
            <h2 className="text-display max-w-4xl">Sprechen wir über Ihr Vorhaben.</h2>
            <div className="mt-12 grid gap-3 text-lead md:mt-16">
              <a href={`mailto:${site.email}`} className="link-wipe w-fit">
                {site.email}
              </a>
              <a
                href={site.linkedin}
                className="link-wipe w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.linkedinLabel}
              </a>
            </div>
            <p className="mt-10 text-caption text-muted">{site.location}</p>
          </FadeUp>
        </Section>
      </main>
    </>
  );
}
