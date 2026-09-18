import { SectionLabel } from "@/components/ui/SectionLabel";

type PageIntroProps = {
  label: string;
  title: string;
  lead?: string;
};

/** Top block of a subpage: "(Label)", display title, optional lead. */
export function PageIntro({ label, title, lead }: PageIntroProps) {
  return (
    <div className="px-gutter pb-16 pt-16 md:pb-30 md:pt-30">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="mt-6 max-w-5xl text-display">{title}</h1>
      {lead ? <p className="mt-8 max-w-2xl text-lead">{lead}</p> : null}
    </div>
  );
}
