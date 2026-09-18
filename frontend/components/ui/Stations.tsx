import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { Station } from "@/content/types";

type StationsProps = {
  items: Station[];
};

/**
 * CV on the module, Aicher-style label columns:
 * index (orange, solid numerals) · period (tabular) · role and organisation · summary.
 */
export function Stations({ items }: StationsProps) {
  return (
    <Stagger as="ol" className="px-gutter text-body">
      {items.map((item, i) => {
        const current = /heute/i.test(item.period);
        const [start, end] = item.period.split(" – ");
        const muted = item.periodUncertain ? "opacity-60" : "";
        return (
          <StaggerItem
            as="li"
            key={`${item.period}-${item.org}`}
            className="grid grid-cols-12 gap-x-gutter gap-y-2 border-t border-line py-6 last:border-b md:py-7"
          >
            <span className="solid col-span-2 text-lead font-normal leading-tight text-orange md:col-span-1">
              {i + 1}
            </span>
            <span className="tnum col-span-10 pt-1 leading-tight text-ink-2 md:col-span-2">
              <span className={muted}>{start}</span>
              {end ? (
                <>
                  {" – "}
                  <span className={current ? "font-medium text-orange-text" : muted}>{end}</span>
                </>
              ) : null}
            </span>
            <div className="col-span-12 md:col-span-3">
              <h3 className="font-normal">{item.role}</h3>
              <p className="text-ink-2">{item.org}</p>
            </div>
            {item.summary ? (
              <p className="col-span-12 max-w-[56ch] font-light text-ink-2 md:col-span-6">
                {item.summary}
              </p>
            ) : null}
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
