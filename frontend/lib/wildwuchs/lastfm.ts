export type LastfmNow = {
  track: string;
  artist: string;
  album: string | null;
  cover: string | null;
  nowPlaying: boolean;
  playedAt: Date | null;
  playcount: number | null;
  since: number | null;
  /** Public profile, used for the attribution link. */
  profileUrl: string;
};

const TIMEOUT_MS = 3000;

type RecentTracksResponse = {
  recenttracks?: {
    track?: Array<{
      name: string;
      artist: { "#text"?: string; name?: string };
      album?: { "#text"?: string };
      image?: Array<{ size: string; "#text": string }>;
      date?: { uts: string };
      "@attr"?: { nowplaying?: string };
    }>;
  };
};

type UserInfoResponse = {
  user?: { playcount?: string; registered?: { unixtime?: string } };
};

const API = "https://ws.audioscrobbler.com/2.0/";

/**
 * Server-only. Returns null when credentials are missing, the call fails or
 * takes longer than TIMEOUT_MS, so the tile is simply omitted and the page
 * never breaks. Fetched with ISR (60 s), never from the browser.
 */
export async function getLastfmNow(): Promise<LastfmNow | null> {
  const key = process.env.LASTFM_API_KEY;
  const user = process.env.LASTFM_USER;
  if (!key || !user) return null;

  const params = (method: string, extra = "") =>
    `${API}?method=${method}&user=${encodeURIComponent(user)}&api_key=${key}&format=json${extra}`;

  try {
    const [recentRes, infoRes] = await Promise.all([
      fetch(params("user.getrecenttracks", "&limit=1&extended=1"), {
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(TIMEOUT_MS),
      }),
      fetch(params("user.getinfo"), {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(TIMEOUT_MS),
      }),
    ]);
    if (!recentRes.ok) return null;

    const recent = (await recentRes.json()) as RecentTracksResponse;
    const info = infoRes.ok ? ((await infoRes.json()) as UserInfoResponse) : {};
    const t = recent.recenttracks?.track?.[0];
    if (!t) return null;

    const cover =
      t.image?.find((i) => i.size === "extralarge")?.["#text"] ||
      t.image?.find((i) => i.size === "large")?.["#text"] ||
      null;
    const since = info.user?.registered?.unixtime
      ? new Date(Number(info.user.registered.unixtime) * 1000).getFullYear()
      : null;

    return {
      track: t.name,
      artist: t.artist.name ?? t.artist["#text"] ?? "",
      album: t.album?.["#text"] || null,
      cover: cover && cover.length > 0 ? cover : null,
      nowPlaying: t["@attr"]?.nowplaying === "true",
      playedAt: t.date?.uts ? new Date(Number(t.date.uts) * 1000) : null,
      playcount: info.user?.playcount ? Number(info.user.playcount) : null,
      since,
      profileUrl: `https://www.last.fm/user/${encodeURIComponent(user)}`,
    };
  } catch {
    return null;
  }
}
