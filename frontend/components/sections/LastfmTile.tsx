import Image from "next/image";
import { StaggerItem } from "@/components/motion/Stagger";
import { wildwuchs } from "@/content/wildwuchs";
import { relativeTime, type LastfmData, type LastfmTrack } from "@/lib/wildwuchs/lastfm";

const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

/**
 * "Gerade gehört" in three layouts, chosen by data.variant:
 * now (current + last three), month (top artists and album), rhythm (weekday bars).
 */
export function LastfmTile({ data }: { data: LastfmData }) {
  const { current } = data;
  const status = current.nowPlaying
    ? wildwuchs.gehoert.nowPlaying
    : current.playedAt
      ? `${wildwuchs.gehoert.lastPlayed} · ${relativeTime(current.playedAt)}`
      : wildwuchs.gehoert.lastPlayed;

  return (
    <StaggerItem className="col-span-12 grid content-start gap-4 pb-10 md:col-span-4">
      <div className="flex items-baseline justify-between gap-4">
        <p className="marker text-ui font-medium text-pink-text">
          {data.variant === "month" ? "Diesen Monat gehört" : wildwuchs.gehoert.label}
        </p>
        <p className="text-ui font-retina text-ink-2">
          {data.variant === "month" ? "30 Tage" : status}
          {" · "}
          <a href={data.profileUrl} className="u [--u-color:var(--pink)]" target="_blank" rel="noopener noreferrer">
            via {wildwuchs.gehoert.source}
          </a>
        </p>
      </div>

      {data.variant === "now" ? <VariantNow data={data} /> : null}
      {data.variant === "month" ? <VariantMonth data={data} /> : null}
      {data.variant === "rhythm" ? <VariantRhythm data={data} /> : null}

      {data.playcount ? (
        <div className="flex items-baseline justify-between border-t border-line pt-4 text-ui font-retina text-ink-2">
          <span>
            {wildwuchs.gehoert.scrobblesLabel} {data.since ?? ""}
          </span>
          <b className="tnum text-lead font-light text-pink">{data.playcount.toLocaleString("de-DE")}</b>
        </div>
      ) : null}
    </StaggerItem>
  );
}

function Cover({ src, size = 96 }: { src: string | null; size?: number }) {
  return (
    <div className="tile aspect-square" style={{ width: size }}>
      {src ? <Image src={src} alt="" width={size} height={size} className="h-full w-full object-cover" /> : null}
    </div>
  );
}

function CurrentTrack({ track }: { track: LastfmTrack }) {
  return (
    <div className="grid grid-cols-[96px_1fr] items-center gap-5 border-t border-line pt-4">
      <Cover src={track.cover} />
      <div>
        <p className="flex items-baseline gap-2 text-body font-normal leading-tight">
          {track.nowPlaying ? (
            <span
              aria-hidden
              className="relative -top-px inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-pink motion-reduce:animate-none"
            />
          ) : null}
          <span>{track.track}</span>
        </p>
        <p className="mt-1.5 text-ui font-retina leading-read text-ink-2">
          {track.artist}
          {track.album ? ` · ${track.album}` : ""}
        </p>
      </div>
    </div>
  );
}

function VariantNow({ data }: { data: LastfmData }) {
  return (
    <>
      <CurrentTrack track={data.current} />
      {data.recent.length > 0 ? (
        <ol className="text-ui font-retina leading-tight">
          {data.recent.map((t, i) => (
            <li key={`${t.track}-${i}`} className="flex items-baseline justify-between gap-4 border-t border-line py-2">
              <span className="truncate">
                <span className="text-ink">{t.track}</span>
                <span className="text-ink-2"> · {t.artist}</span>
              </span>
              <span className="tnum shrink-0 text-ink-2">{t.playedAt ? relativeTime(t.playedAt) : ""}</span>
            </li>
          ))}
        </ol>
      ) : null}
    </>
  );
}

function VariantMonth({ data }: { data: LastfmData }) {
  return (
    <>
      {data.topAlbum ? (
        <div className="grid grid-cols-[96px_1fr] items-center gap-5 border-t border-line pt-4">
          <Cover src={data.topAlbum.cover} />
          <div>
            <p className="text-body font-normal leading-tight">{data.topAlbum.name}</p>
            <p className="mt-1.5 text-ui font-retina leading-read text-ink-2">
              {data.topAlbum.artist} · Album des Monats
            </p>
          </div>
        </div>
      ) : null}
      <ol className="text-body">
        {data.topArtists.map((a, i) => (
          <li key={a.name} className="flex items-baseline gap-4 border-t border-line py-2">
            <span className="solid w-5 shrink-0 text-ui font-medium text-pink">{i + 1}</span>
            <span className="truncate font-normal">{a.name}</span>
            <span className="tnum ml-auto shrink-0 text-ui font-retina text-ink-2">{a.playcount} Titel</span>
          </li>
        ))}
      </ol>
    </>
  );
}

function VariantRhythm({ data }: { data: LastfmData }) {
  const max = Math.max(1, ...data.weekdays);
  const total = data.weekdays.reduce((a, b) => a + b, 0);
  return (
    <>
      <CurrentTrack track={data.current} />
      <figure className="border-t border-line pt-4">
        <div className="grid h-16 grid-cols-7 items-end gap-2" role="img" aria-label={`Scrobbles je Wochentag, letzte ${total} Titel`}>
          {data.weekdays.map((n, i) => (
            <div
              key={WEEKDAYS[i]}
              className="w-full bg-pink-text"
              style={{ height: `${Math.max(2, Math.round((n / max) * 100))}%` }}
              title={`${WEEKDAYS[i]}: ${n}`}
            />
          ))}
        </div>
        <figcaption className="mt-2 grid grid-cols-7 gap-2 text-ui font-retina leading-tight text-ink-2">
          {WEEKDAYS.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </figcaption>
        <p className="mt-3 text-ui font-retina text-ink-2">
          Wochentage der letzten <span className="tnum">{total}</span> Titel
        </p>
      </figure>
    </>
  );
}
