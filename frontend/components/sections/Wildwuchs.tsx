import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionHead } from "@/components/ui/SectionHead";
import { wildwuchs } from "@/content/wildwuchs";
import { LastfmTile } from "@/components/sections/LastfmTile";
import { getLastfm, type LastfmVariant } from "@/lib/wildwuchs/lastfm";

/** Switch the "Gerade gehört" layout here: "now" | "month" | "rhythm". */
const LASTFM_VARIANT: LastfmVariant = "now";

/**
 * The personal section. Static tiles from content/wildwuchs.ts; the Last.fm
 * tile appears only when LASTFM_API_KEY and LASTFM_USER are set (server fetch, ISR).
 */
export async function Wildwuchs() {
  const now = await getLastfm(LASTFM_VARIANT);

  return (
    <section id="wildwuchs" className="mt-section">
      <SectionHead label={wildwuchs.label} tone="personal" hint={wildwuchs.hint} as="p" />

      <div className="grid grid-cols-12 gap-x-gutter px-gutter pt-10 md:pt-step">
        <h2 className="col-span-12 text-mark md:col-span-5" aria-label={wildwuchs.label}>
          <span aria-hidden>
            <span className="font-air">Wild</span>
            <span className="font-black">wuchs</span>
          </span>
        </h2>
        <p className="col-span-12 max-w-[30ch] text-lead font-light md:col-span-6 md:col-start-7">
          {wildwuchs.statement}
        </p>
      </div>

      <Stagger className="mt-step grid grid-cols-12 gap-x-gutter px-gutter">
        {now ? <LastfmTile data={now} /> : null}

        <Tile label={wildwuchs.helden.label}>
          <ol className="text-body">
            {wildwuchs.helden.items.map((h, i) => (
              <li key={h.name} className="flex items-baseline gap-4 border-t border-line py-2.5">
                <span className="solid w-5 shrink-0 text-ui font-medium text-pink">{i + 1}</span>
                <span className="font-normal">{h.name}</span>
                <span className="ml-auto text-ui font-retina text-ink-2">{h.note}</span>
              </li>
            ))}
          </ol>
        </Tile>

        <Tile label={wildwuchs.dinge.label}>
          <ul className="text-body">
            {wildwuchs.dinge.items.map((d) => (
              <li key={d.thing} className="flex items-baseline gap-4 border-t border-line py-2.5">
                <span className="font-normal">{d.thing}</span>
                {d.detail ? (
                  <span className="ml-auto text-right text-ui font-retina text-ink-2">{d.detail}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </Tile>

        {/* Without the live tile, "wir Wilden" takes the third column; with it, a closing row. */}
        <StaggerItem
          className={
            now
              ? "col-span-12 mt-step flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4 border-t border-line pt-5"
              : "col-span-12 grid content-start gap-4 pb-10 md:col-span-4"
          }
        >
          {now ? null : <p className="marker text-ui font-medium text-pink-text">Familie</p>}
          <div className={now ? "contents" : "grid gap-5 border-t border-line pt-4"}>
            <p className="text-lead font-light">
              {wildwuchs.wirWilden.lead} <span className="font-semibold">{wildwuchs.wirWilden.strong}</span>
            </p>
            <ArrowLink
              href={wildwuchs.wirWilden.href}
              tone="pink"
              className="marker w-fit text-ui font-medium text-pink-text"
            >
              {wildwuchs.wirWilden.linkLabel}
            </ArrowLink>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

function Tile({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <StaggerItem className="col-span-12 grid content-start gap-4 pb-10 pt-0 md:col-span-4">
      <p className="marker text-ui font-medium text-pink-text">{label}</p>
      {children}
    </StaggerItem>
  );
}

