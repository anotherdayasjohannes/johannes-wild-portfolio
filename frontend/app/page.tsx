import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { FadeUp } from "@/components/motion/FadeUp";
import { Section } from "@/components/ui/Section";
import { HairlineList } from "@/components/ui/HairlineList";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { about } from "@/content/about";
import { projects, projectsLabel } from "@/content/projects";
import { photos, site } from "@/content/site";
import { stations, stationsLabel } from "@/content/stations";
import { testimonials, testimonialsLabel } from "@/content/testimonials";
import { asset } from "@/lib/paths";

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
                  src={asset(photos.about.src)}
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

        <Section id="projekte" label={projectsLabel}>
          <ul className="grid gap-x-5 gap-y-16 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <FadeUp>
                  <ProjectCard project={project} />
                </FadeUp>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="stimmen" label={testimonialsLabel}>
          <FadeUp>
            <Testimonials items={testimonials} />
          </FadeUp>
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
