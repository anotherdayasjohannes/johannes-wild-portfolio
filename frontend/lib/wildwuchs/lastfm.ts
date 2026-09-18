export type LastfmTrack = {
  track: string;
  artist: string;
  album: string | null;
  cover: string | null;
  nowPlaying: boolean;
  playedAt: Date | null;
};

export type LastfmArtist = { name: string; playcount: number };

export type LastfmAlbum = { name: string; artist: string; cover: string | null; playcount: number };

export type LastfmVariant = "now" | "month" | "rhythm";

export type LastfmData = {
  variant: LastfmVariant;
  current: LastfmTrack;
  /** Variant "now": the tracks after the current one. */
  recent: LastfmTrack[];
  /** Variant "month". */
  topArtists: LastfmArtist[];
  topAlbum: LastfmAlbum | null;
  /** Variant "rhythm": scrobbles per weekday, Monday first, from the last 200 tracks. */
  weekdays: number[];
  playcount: number | null;
  since: number | null;
  profileUrl: string;
};

type ApiTrack = {
  name: string;
  artist: { "#text"?: string; name?: string };
  album?: { "#text"?: string };
  image?: Array<{ size: string; "#text": string }>;
  date?: { uts: string };
  "@attr"?: { nowplaying?: string };
};

const API = "https://ws.audioscrobbler.com/2.0/";
const TIMEOUT_MS = 3000;

function pickImage(images?: Array<{ size: string; "#text": string }>): string | null {
  const url =
    images?.find((i) => i.size === "extralarge")?.["#text"] ||
    images?.find((i) => i.size === "large")?.["#text"] ||
    "";
  return url.length > 0 ? url : null;
}

function toTrack(t: ApiTrack): LastfmTrack {
  return {
    track: t.name,
    artist: t.artist.name ?? t.artist["#text"] ?? "",
    album: t.album?.["#text"] || null,
    cover: pickImage(t.image),
    nowPlaying: t["@attr"]?.nowplaying === "true",
    playedAt: t.date?.uts ? new Date(Number(t.date.uts) * 1000) : null,
  };
}

/** Monday = 0 … Sunday = 6, in Johannes's time zone. */
function weekdayIndex(date: Date): number {
  const name = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Europe/Berlin" }).format(date);
  return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(name);
}

/**
 * Server-only. Returns null when credentials are missing, a call fails or
 * exceeds TIMEOUT_MS, so the tile is simply omitted and the page never breaks.
 * Recent tracks revalidate every 60 s, everything else every 300 s.
 */
export async function getLastfm(variant: LastfmVariant = "now"): Promise<LastfmData | null> {
  const key = process.env.LASTFM_API_KEY;
  const user = process.env.LASTFM_USER;
  if (!key || !user) return null;

  const call = async <T,>(method: string, extra: string, revalidate: number): Promise<T | null> => {
    try {
      const res = await fetch(
        `${API}?method=${method}&user=${encodeURIComponent(user)}&api_key=${key}&format=json${extra}`,
        { next: { revalidate }, signal: AbortSignal.timeout(TIMEOUT_MS) },
      );
      if (!res.ok) console.error("[lastfm]", method, res.status);
      return res.ok ? ((await res.json()) as T) : null;
    } catch (e) {
      console.error("[lastfm]", method, e instanceof Error ? e.message : e);
      return null;
    }
  };

  const recentLimit = variant === "rhythm" ? 200 : variant === "now" ? 4 : 1;

  const [recentRes, infoRes, artistsRes, albumsRes] = await Promise.all([
    call<{ recenttracks?: { track?: ApiTrack[] } }>(
      "user.getrecenttracks",
      `&limit=${recentLimit}&extended=1`,
      60,
    ),
    call<{ user?: { playcount?: string; registered?: { unixtime?: string } } }>("user.getinfo", "", 300),
    variant === "month"
      ? call<{ topartists?: { artist?: Array<{ name: string; playcount: string }> } }>(
          "user.gettopartists",
          "&period=1month&limit=3",
          300,
        )
      : Promise.resolve(null),
    variant === "month"
      ? call<{
          topalbums?: {
            album?: Array<{
              name: string;
              playcount: string;
              artist: { name: string };
              image?: Array<{ size: string; "#text": string }>;
            }>;
          };
        }>("user.gettopalbums", "&period=1month&limit=1", 300)
      : Promise.resolve(null),
  ]);

  const tracks = (recentRes?.recenttracks?.track ?? []).map(toTrack);
  if (tracks.length === 0) return null;

  // The API prepends a now-playing entry without a date; it must not count twice.
  const [current, ...rest] = tracks;
  const dated = tracks.filter((t) => t.playedAt);

  const weekdays = [0, 0, 0, 0, 0, 0, 0];
  for (const t of dated) {
    const i = weekdayIndex(t.playedAt as Date);
    if (i >= 0) weekdays[i] += 1;
  }

  const topAlbumRaw = albumsRes?.topalbums?.album?.[0];

  return {
    variant,
    current,
    recent: rest.slice(0, 3),
    topArtists: (artistsRes?.topartists?.artist ?? []).map((a) => ({
      name: a.name,
      playcount: Number(a.playcount),
    })),
    topAlbum: topAlbumRaw
      ? {
          name: topAlbumRaw.name,
          artist: topAlbumRaw.artist.name,
          cover: pickImage(topAlbumRaw.image),
          playcount: Number(topAlbumRaw.playcount),
        }
      : null,
    weekdays,
    playcount: infoRes?.user?.playcount ? Number(infoRes.user.playcount) : null,
    since: infoRes?.user?.registered?.unixtime
      ? new Date(Number(infoRes.user.registered.unixtime) * 1000).getFullYear()
      : null,
    profileUrl: `https://www.last.fm/user/${encodeURIComponent(user)}`,
  };
}

export function relativeTime(date: Date): string {
  const min = Math.max(1, Math.round((Date.now() - date.getTime()) / 60000));
  if (min < 60) return `vor ${min} Min`;
  const h = Math.round(min / 60);
  if (h < 24) return `vor ${h} Std`;
  return `vor ${Math.round(h / 24)} Tagen`;
}
