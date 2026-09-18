import type { ReactNode } from "react";

export type Tone = "work" | "personal" | "admin" | "neutral";

export const toneText: Record<Tone, string> = {
  work: "text-orange-text",
  personal: "text-pink-text",
  admin: "text-ink-2",
  neutral: "text-ink",
};

type SectionHeadProps = {
  label: string;
  tone?: Tone;
  hint?: ReactNode;
  aside?: ReactNode;
  as?: "h2" | "p";
};

/**
 * Section header on the 12-column module: "● Label" in the section colour
 * (cols 1–2), a hint (3–6), an aside (7–12), hairline below.
 */
export function SectionHead({ label, tone = "neutral", hint, aside, as: Tag = "h2" }: SectionHeadProps) {
  return (
    <header className="grid grid-cols-12 gap-x-gutter border-b border-line px-gutter pb-3 text-ui font-retina text-ink-2">
      <Tag className={`marker col-span-6 font-medium md:col-span-2 ${toneText[tone]}`}>{label}</Tag>
      {hint ? <p className="col-span-6 text-right md:col-span-4 md:text-left">{hint}</p> : null}
      {aside ? <p className="col-span-12 hidden md:col-span-6 md:block">{aside}</p> : null}
    </header>
  );
}
