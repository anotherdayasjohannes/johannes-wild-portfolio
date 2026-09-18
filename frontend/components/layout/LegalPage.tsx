import { Header } from "@/components/layout/Header";
import { PageIntro } from "@/components/layout/PageIntro";
import type { LegalSection } from "@/content/types";

type LegalPageProps = {
  label: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  updated?: string;
};

export function LegalPage({ label, title, intro, sections, updated }: LegalPageProps) {
  return (
    <>
      <Header />
      <main>
        <PageIntro label={label} title={title} lead={intro} />
        <div className="px-gutter pb-30 md:pb-40">
          <div className="border-t border-line">
            {sections.map((section) => (
              <section
                key={section.heading}
                className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-5 md:py-12"
              >
                <h2 className="text-h2 md:col-span-5">{section.heading}</h2>
                <div className="grid max-w-2xl gap-4 text-body text-fg/80 md:col-span-6 md:col-start-7">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {section.items ? (
                    <ul className="grid gap-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-fg" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
          {updated ? <p className="mt-6 text-meta text-muted">{updated}</p> : null}
        </div>
      </main>
    </>
  );
}
