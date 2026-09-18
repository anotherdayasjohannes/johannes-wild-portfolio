/**
 * The personal site lives under /johannes on wirwilden.de; the family page at /.
 * There is no Next.js basePath any more, so asset() is the identity. It stays
 * as the single place to change if assets ever move to a CDN or prefix.
 */
export const PERSONAL_PATH = "/johannes";

export const SITE_ORIGIN = "https://wirwilden.de";

export function asset(path: string): string {
  return path;
}

/** Canonical path for a personal route, e.g. canonical("/trainer-abrechnung") → /johannes/trainer-abrechnung. */
export function canonical(path = "/"): string {
  return path === "/" ? PERSONAL_PATH : `${PERSONAL_PATH}${path}`;
}

/** Canonical path for a domain-level route (family page, Impressum, Datenschutz). */
export function rootCanonical(path = "/"): string {
  return path;
}
