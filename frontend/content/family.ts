import { site } from "./site";

export type FamilyLink = { label: string; href: string };

export type FamilyMember = {
  /** Two lines when the name breaks, e.g. ["Sandra", "Maria"]. */
  name: string[];
  fullName: string;
  /** CSS variable of the tile colour: one colour, one person. */
  color: "hellblau" | "orange" | "rose" | "gruen";
  /** Whole tile links here (Johannes). */
  href?: string;
  /** Small trailing links (Sandra Maria). */
  links?: FamilyLink[];
  /** One line under the name. */
  sub?: string;
  /** Small text top right of the tile. */
  head?: string;
  /** Square, 800 × 800 WebP in public/photos/family/. Optional, so the children can get one later. */
  portrait?: { src: string; alt: string };
};

export const family = {
  title: "wir Wilden",
  description: "Familie Wild, Reichersbeuern.",
  wordmark: ["wir", "Wilden"] as const,
  place: "Reichersbeuern",
  footer: "Familie Wild, Reichersbeuern",
  gridLabel: "Familie Wild",
  members: [
    {
      name: ["Sandra", "Maria"],
      fullName: "Sandra Maria Wild",
      color: "hellblau",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sandrawild/" },
        { label: "Bluesky", href: "https://bsky.app/profile/sandra-wild.bsky.social" },
      ],
      portrait: { src: "/photos/family/sandra-maria.webp", alt: "Sandra Maria Wild, Porträt" },
    },
    {
      name: ["Johannes"],
      fullName: "Johannes Wild",
      color: "orange",
      href: "/johannes",
      head: "wirwilden.de/johannes",
      sub: site.roleShort,
      portrait: { src: "/photos/family/johannes.webp", alt: "Johannes Wild, Porträt" },
    },
    // Children: first names only, no photos, no details, no sub-pages.
    {
      name: ["Valentin", "Maria"],
      fullName: "Valentin Maria Wild",
      color: "rose",
      sub: "folgt",
    },
    {
      name: ["Leonie"],
      fullName: "Leonie Wild",
      color: "gruen",
      sub: "folgt",
    },
  ] satisfies FamilyMember[],
};
