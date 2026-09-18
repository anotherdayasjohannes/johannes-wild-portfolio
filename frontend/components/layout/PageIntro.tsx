import { SectionHead, type Tone } from "@/components/ui/SectionHead";

type PageIntroProps = {
  label: string;
  tone?: Tone;
  title: string;
  lead?: string;
  hint?: string;
};

/** Top block of a subpage: section head row, display title, optional lead. */
export function PageIntro({ label, tone = "admin", title, lead, hint }: PageIntroProps) {
  return (
    <div className="pt-step">
      <SectionHead label={label} tone={tone} hint={hint} as="p" />
      <div className="grid grid-cols-12 gap-x-gutter px-gutter pt-10 md:pt-step">
        <h1 className="col-span-12 text-display font-light md:col-span-10">{title}</h1>
        {lead ? (
          <p className="col-span-12 mt-8 max-w-[30ch] text-lead font-light text-ink-2 md:col-span-6 md:mt-10">
            {lead}
          </p>
        ) : null}
      </div>
    </div>
  );
}
