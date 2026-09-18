import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { Wildwuchs } from "@/components/sections/Wildwuchs";
import { FadeUp } from "@/components/motion/FadeUp";
import { ProjectMosaic } from "@/components/ui/ProjectMosaic";
import { SectionHead } from "@/components/ui/SectionHead";
import { Stations } from "@/components/ui/Stations";
import { about } from "@/content/about";
import { projects, projectsLabel } from "@/content/projects";
import { photos, site } from "@/content/site";
import { stations, stationsLabel } from "@/content/stations";
import { testimonials, testimonialsLabel } from "@/content/testimonials";
import { asset } from "@/lib/paths";

export default function HomePage() {
  const years = "2025 – 2026";

  return (
    <>
      <Header overlay />
      <main>
        <Hero
          firstName={site.firstName}
          surname={site.surname}
          fullName={site.name}
          claim={site.claim}
          roleLine={site.roleLine}
          portrait={photos.hero}
        />

        <section id="profil" className="mt-step">
          <SectionHead label="Profil" tone="neutral" hint={site.focus} aside={site.location} />
          <div className="mt-gutter grid grid-cols-12 gap-x-gutter gap-y-10 px-gutter">
            <FadeUp className="col-span-12 md:col-span-6">
              <p className="marker max-w-[28ch] text-lead font-light [&::before]:text-pink">{about.statement}</p>
              <div className="mt-11 grid max-w-[46ch] gap-4 text-body font-retina text-ink-2">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </FadeUp>
            <FadeUp className="col-span-12 md:col-span-6">
              <figure className="tile aspect-square">
                <Image
                  src={asset(photos.about.src)}
                  alt={photos.about.alt}
                  fill
                  sizes="(min-width: 810px) 50vw, 100vw"
                  className="object-cover object-[62%_30%]"
                />
              </figure>
            </FadeUp>
          </div>
        </section>

        <section id="stationen" className="mt-section">
          <SectionHead label={stationsLabel} tone="work" hint="Rolle, Organisation" aside="Was" />
          <Stations items={stations} />
        </section>

        <section id="projekte" className="mt-section">
          <SectionHead
            label={projectsLabel}
            tone="work"
            hint={`${projects.length} Websites und Werkzeuge`}
            aside={<span className="tnum">{years}</span>}
          />
          <ProjectMosaic projects={projects} />
        </section>

        <section id="stimmen" className="mt-section">
          <SectionHead label={testimonialsLabel} tone="work" hint="Drei Sätze von Wegbegleitern" />
          <div className="mt-step">
            <FadeUp>
              <Testimonials items={testimonials} />
            </FadeUp>
          </div>
        </section>

        <Wildwuchs />
      </main>
    </>
  );
}
