import type { NavItem, Photo } from "./types";

export const site = {
  name: "Johannes Wild",
  wordmark: "Johannes Wild",
  title: "Johannes Wild",
  description:
    "Johannes Wild. Advocacy, Aufbau und Beratung. Stationen, Stimmen und Kontakt.",
  positioning: "Übernimmt Verantwortung. Gestaltet Lösungen.",
  email: "johannes.wild@me.com",
  linkedin: "https://www.linkedin.com/in/johanneswild",
  linkedinLabel: "linkedin.com/in/johanneswild",
  location: "Reichersbeuern, Oberbayern",
  photoCredit: "Fotos: Bernhard Huber",
  copyrightYear: new Date().getFullYear(),
};

export const nav: NavItem[] = [
  { label: "Über mich", href: "/#ueber-mich" },
  { label: "Stationen", href: "/#stationen" },
  { label: "Projekte", href: "/#projekte" },
];

export const footerLinks: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

// Paths are relative to public/. Prefix with asset() from lib/paths when rendering.
export const photos = {
  heroDesktop: {
    src: "/photos/0248_3lectrify.jpg",
    alt: "Johannes Wild lehnt an einer Glaswand, Blick zur Seite",
    width: 1600,
    height: 1067,
  },
  heroMobile: {
    src: "/photos/0264_3lectrify-ret1.jpg",
    alt: "Johannes Wild, lächelnd, Porträt vor Glaswand",
    width: 1067,
    height: 1600,
  },
  about: {
    src: "/photos/0255_3lectrify-ret1.jpg",
    alt: "Johannes Wild, ruhiges Porträt",
    width: 1600,
    height: 1067,
  },
} satisfies Record<string, Photo>;
