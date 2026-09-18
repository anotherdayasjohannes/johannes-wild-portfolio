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
        <PageIntro label={label} tone="admin" title={title} lead={intro} hint={updated} />
        <div className="mt-step px-gutter">
          <div className="border-t border-line">
            {sections.map((section) => (
              <section
                key={section.heading}
                className="grid grid-cols-12 gap-x-gutter gap-y-3 border-b border-line py-6 md:py-8"
              >
                <h2 className="col-span-12 text-body font-medium md:col-span-4">{section.heading}</h2>
                <div className="col-span-12 grid max-w-[56ch] gap-3 text-body font-retina text-ink md:col-span-7 md:col-start-6">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {section.items ? (
                    <ul className="grid gap-1.5 leading-list">
                      {section.items.map((item) => (
                        <li key={item} className="marker text-ink-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.link ? (
                    <p>
                      <a
                        href={section.link.href}
                        className="u case"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {section.link.label} <span aria-hidden>→</span>
                      </a>
                    </p>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
