import type { Station } from "@/content/types";

type HairlineListProps = {
  items: Station[];
};

/** CV rows separated by 1px hairlines: period, role and organisation, summary. */
export function HairlineList({ items }: HairlineListProps) {
  return (
    <ol className="border-t border-line">
      {items.map((item) => (
        <li
          key={`${item.period}-${item.org}`}
          className="grid grid-cols-1 gap-2 border-b border-line py-5 md:grid-cols-12 md:gap-5 md:py-6"
        >
          <span className="text-meta text-muted md:col-span-2 md:pt-1">
            {item.period}
          </span>
          <div className="md:col-span-5">
            <h3 className="text-body font-medium leading-tight">{item.role}</h3>
            <p className="text-body text-muted">{item.org}</p>
          </div>
          {item.summary ? (
            <p className="text-caption text-fg/80 md:col-span-5 md:pt-1">
              {item.summary}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
