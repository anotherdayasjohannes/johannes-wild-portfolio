import type { NavItem, Photo } from "./types";

export const site = {
  name: "Johannes Wild",
  firstName: "Johannes",
  surname: "WILD",
  wordmark: "Johannes Wild",
  title: "Johannes Wild",
  description:
    "Johannes Wild. Übernimmt Verantwortung. Gestaltet Lösungen. Stationen, Projekte, Wildwuchs und Kontakt.",
  // Two sentences: the first reads grey, the second ink.
  claim: ["Übernimmt Verantwortung.", "Gestaltet Lösungen."] as const,
  positioning: "Übernimmt Verantwortung. Gestaltet Lösungen.",
  roleLine: "Head of Digital & Marketing · Mitgründer · Reichersbeuern",
  roleShort: "Head of Digital & Marketing · Mitgründer",
  focus: "Digital, Marketing, Aufbau",
  email: "johannes.wild@me.com",
  linkedin: "https://www.linkedin.com/in/johanneswild",
  linkedinLabel: "linkedin.com/in/johanneswild",
  bluesky: "https://bsky.app/profile/johannesthewild.eurosky.social",
  blueskyHandle: "@johannesthewild.eurosky.social",
  github: "https://github.com/anotherdayasjohannes",
  location: "Reichersbeuern, Oberbayern",
  photoCredit: "Fotos: Bernhard Huber",
  photoCreditUrl: "https://bernhardhuber.com/",
  contactLead: "Kaffee? Gerne.",
  copyrightYear: new Date().getFullYear(),
};

/** Rendered wherever the social links appear (footer Kontakt column). rel="me" for profile verification. */
export const socials: NavItem[] = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "Bluesky", href: site.bluesky },
  { label: "GitHub", href: site.github },
];

export const family = {
  label: "wir Wilden",
  href: "https://wirwilden.de",
};

export const nav: NavItem[] = [
  { label: "Profil", href: "/johannes#profil" },
  { label: "Stationen", href: "/johannes#stationen" },
  { label: "Projekte", href: "/johannes#projekte" },
  { label: "Wildwuchs", href: "/johannes#wildwuchs" },
  { label: "Kontakt", href: "/johannes#kontakt" },
];

export const footerPages: NavItem[] = [
  { label: "Profil", href: "/johannes#profil" },
  { label: "Stationen", href: "/johannes#stationen" },
  { label: "Projekte", href: "/johannes#projekte" },
  { label: "Wildwuchs", href: "/johannes#wildwuchs" },
  { label: "Trainer-Abrechnung", href: "/johannes/trainer-abrechnung" },
];

export const footerLinks: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

// Paths are relative to public/. Prefix with asset() from lib/paths when rendering.
export const photos = {
  hero: {
    src: "/photos/0264_3lectrify-ret1.jpg",
    alt: "Johannes Wild, lächelnd, Porträt vor Glaswand",
    width: 1067,
    height: 1600,
  },
  about: {
    src: "/photos/0087_3lectrify.webp",
    alt: "Johannes Wild in einer Besprechung mit Kolleginnen und Kollegen am Holztisch, Pläne und Laptops",
    width: 1400,
    height: 934,
  },
} satisfies Record<string, Photo>;
