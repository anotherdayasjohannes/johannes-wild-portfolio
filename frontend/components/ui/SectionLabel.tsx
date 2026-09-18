type SectionLabelProps = {
  children: string;
  className?: string;
  as?: "span" | "h2" | "p";
};

/** Small uppercase label in parentheses, e.g. "(Stationen)". */
export function SectionLabel({
  children,
  className = "",
  as: Tag = "span",
}: SectionLabelProps) {
  return (
    <Tag className={`block text-label uppercase text-fg ${className}`}>
      ({children})
    </Tag>
  );
}
