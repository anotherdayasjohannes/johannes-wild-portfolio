import type { NavItem, Photo } from "./types";

export const site = {
  name: "Johannes Wild",
  wordmark: "Johannes Wild",
  title: "Johannes Wild",
  description:
    "Johannes Wild. Advocacy, Aufbau und Beratung. Stationen, Stimmen und Kontakt.",
  // TODO: Positionierung mit Johannes abstimmen (offene Entscheidung im Proposal).
  positioning:
    "Leitet Advocacy und Beratung bei iFixit. Baut Marken, Teams und Werkzeuge, die Bestand haben.",
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
  { label: "Projekt", href: "/trainer-abrechnung" },
];

export const footerLinks: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

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
  project: {
    src: "/photos/0042_3lectrify.jpg",
    alt: "Hände mit Notizbuch am Tisch",
    width: 1600,
    height: 1067,
  },
} satisfies Record<string, Photo>;
