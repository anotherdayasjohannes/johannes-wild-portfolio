import { Header } from "@/components/layout/Header";
import { PageIntro } from "@/components/layout/PageIntro";
import type { LegalSection } from "@/content/types";

type LegalPageProps = {
  label: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

const TODO_PATTERN = /^\[TODO:.*\]$/;

export function LegalPage({ label, title, intro, sections }: LegalPageProps) {
  return (
    <>
      <Header />
      <main>
        <PageIntro label={label} title={title} lead={intro} />
        <div className="px-gutter pb-30 md:pb-40">
          <dl className="border-t border-line">
            {sections.map((section) => (
              <div
                key={section.heading}
                className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-5 md:py-8"
              >
                <dt className="text-body font-medium md:col-span-4">{section.heading}</dt>
                <dd className="grid gap-2 text-body md:col-span-6 md:col-start-6">
                  {section.paragraphs.map((p) => (
                    <p
                      key={p}
                      className={TODO_PATTERN.test(p) ? "text-muted" : "text-fg/80"}
                    >
                      {p}
                    </p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </>
  );
}
