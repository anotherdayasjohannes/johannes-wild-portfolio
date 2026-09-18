/**
 * Mirrors `basePath` in next.config.mjs. `next/link` prefixes it on its own;
 * `next/image` and `getImageProps` do not, so static assets go through `asset()`.
 */
export const BASE_PATH = "/johannes";

export const SITE_ORIGIN = "https://wirwilden.de";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}

/** Canonical URL for a route, e.g. canonical("/impressum"). */
export function canonical(path = "/"): string {
  return path === "/" ? BASE_PATH : `${BASE_PATH}${path}`;
}
