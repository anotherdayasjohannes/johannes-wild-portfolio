import type { ReactNode } from "react";
import { SectionLabel } from "./SectionLabel";

type SectionProps = {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  tone?: "bg" | "surface";
};

/** Page section with 20px gutter, optional "(Label)" row and top hairline. */
export function Section({
  id,
  label,
  children,
  className = "",
  tone = "bg",
}: SectionProps) {
  const toneClass = tone === "surface" ? "bg-surface" : "bg-bg";
  return (
    <section
      id={id}
      className={`${toneClass} px-gutter pb-30 pt-10 md:pb-40 md:pt-16 ${className}`}
    >
      {label ? (
        <div className="mb-10 border-t border-line pt-3 md:mb-16">
          <SectionLabel as="h2">{label}</SectionLabel>
        </div>
      ) : null}
      {children}
    </section>
  );
}
