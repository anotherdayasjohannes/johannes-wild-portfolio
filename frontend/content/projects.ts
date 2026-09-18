import type { Project } from "./types";

export const projectsLabel = "Projekte";

// Bilder liegen in public/projects/ (WebP, 1400px). Reihenfolge = Anzeige.
const shot = (name: string, alt: string) => ({
  src: `/projects/${name}.webp`,
  alt,
  width: 1400,
  height: 787,
});

export const projects: Project[] = [
  {
    slug: "3lectrify",
    title: "Website und Design-System",
    client: "3lectrify",
    year: "2025 – 2026",
    role: "Konzeption, Architektur, Frontend, CMS, Deployment",
    summary:
      "Ein junges Unternehmen für Gebäude-Elektrifizierung brauchte eine Website, die komplexe Energiethemen verständlich macht und vom Marketing-Team selbst gepflegt werden kann. Entstanden ist eine Next.js-Plattform mit Sanity CMS, Live-Preview, dokumentiertem Design-System in Storybook und GSAP-Animationen.",
    tags: ["Next.js", "Sanity", "Storybook", "GSAP", "Design-System"],
    url: "https://www.3lectrify.com",
    image: shot("3lectrify", "Startseite von 3lectrify.com"),
  },
  {
    slug: "moonich",
    title: "Corporate-Website „Brands for Atmosphere“",
    client: "MOONICH",
    year: "2026",
    role: "Konzept, Design-Umsetzung, Entwicklung, Betrieb",
    summary:
      "Vier Marken, ein Dach. Die Gruppe brauchte einen klaren Auftritt, der HEATSCOPE, NEOZ, heatme und Regiestuhl verbindet, ohne die einzelnen Markenwelten zu verwässern. Umgesetzt als schlanke Next.js-Site mit Sanity als Redaktionssystem und Sentry-Monitoring.",
    tags: ["Next.js", "Tailwind 4", "Sanity", "Sentry"],
    url: "https://www.moonich.de",
    image: shot("moonich", "Startseite von moonich.de"),
  },
  {
    slug: "heatme",
    title: "Blueprint für Multi-Brand-Websites",
    client: "heatme",
    year: "2026",
    role: "Architektur, Entwicklung, Dokumentation",
    summary:
      "Statt drei Markenwebsites einzeln zu bauen, entstand mit heatme ein wiederverwendbares Fundament: gemeinsame Sanity-Schemas, Styleguide-Seite, Tailwind-4-Tokens und eine dokumentierte Fork-Anleitung. NEOZ und Heizstrahler-Direkt bauen direkt darauf auf. Neue Marken gehen in Tagen statt Wochen live.",
    tags: ["Next.js 16", "React 19", "Sanity v5", "Tailwind 4", "Multi-Brand"],
    url: "https://www.heatme.de",
    image: shot("heatme", "Startseite von heatme.de"),
  },
  {
    slug: "neoz",
    title: "Markenwebsite für kabellose Design-Leuchten",
    client: "NEOZ",
    year: "2026",
    role: "Fork-Aufbau, Lokalisierung, Feature-Entwicklung, Betrieb",
    summary:
      "Hochwertige Leuchten für Hotellerie und Gastronomie brauchen eine Website, die Material und Atmosphäre zeigt und international funktioniert. Auf Basis des heatme-Blueprints entstand eine zweisprachige Site mit next-intl, Sanity-Redaktion und Vercel Analytics.",
    tags: ["Next.js", "next-intl", "Sanity", "Tailwind 4"],
    url: "https://www.neoz-leuchten.de",
    image: shot("neoz", "Startseite von neoz-leuchten.de"),
  },
  {
    slug: "heizstrahler-direkt",
    title: "Fachhandel mit Shopify-Anbindung",
    client: "Heizstrahler-Direkt",
    year: "2026",
    role: "Architektur, Entwicklung, Shop-Integration, QA",
    summary:
      "Ein Fachhändler für Infrarotheizungen wollte Beratung und Verkauf zusammenbringen: redaktionelle Ratgeber und Produktseiten mit Live-Preisen aus dem Shop. Die Lösung koppelt Sanity-Inhalte mit der Shopify Storefront API, ergänzt um Mega-Menü, E2E-Tests mit Playwright und Sentry-Monitoring.",
    tags: ["Next.js", "Shopify Storefront API", "Sanity", "Playwright", "E-Commerce"],
    url: "https://www.heizstrahler-direkt.de",
    image: shot("heizstrahler-direkt", "Startseite von heizstrahler-direkt.de"),
  },
  {
    slug: "energy-flat-living",
    title: "Website für Wohnen mit Energie-Pauschale",
    client: "Energy Flat Living",
    year: "2025 – 2026",
    role: "Relaunch-Konzept, Designsystem, Entwicklung, CMS-Setup",
    summary:
      "Ein neues Wohnkonzept für Kommunen und Unternehmen musste erklärbar und vertrauenswürdig präsentiert werden. Von einer statischen Eleventy-Seite wurde die Site zu einer Next.js-Plattform mit eigenem Designsystem, Sanity CMS und GSAP-Storytelling weiterentwickelt.",
    tags: ["Next.js", "Sanity", "GSAP", "Design-System", "Relaunch"],
    url: "https://www.energyflatliving.de",
    image: shot("energyflatliving", "Startseite von energyflatliving.de"),
  },
  {
    slug: "regiestuhl",
    title: "Shop-Migration von Shopware zu Shopify",
    client: "Regiestuhl",
    year: "2025 – 2026",
    role: "Migrationsplanung, SEO und Redirects, Test-Automatisierung, Analytics",
    summary:
      "Ein etablierter Onlineshop mit fünf Jahren Historie sollte auf Shopify wechseln, ohne Rankings und Umsatz zu verlieren. Dazu gehörten ein vollständiges Redirect-Mapping in drei Sprachen, SEO-optimierte Metatexte, KI-gestützte Playwright-Tests und ein Dashboard, das alten und neuen Shop datenbasiert vergleicht.",
    tags: ["Shopify", "Migration", "SEO", "Playwright", "Evidence.dev"],
    url: "https://regiestuhl.de",
    image: shot("regiestuhl", "Startseite von regiestuhl.de"),
  },
  {
    slug: "trainer-abrechnung",
    title: "Offline-PWA für den Skiclub",
    client: "SCR Trainer-Abrechnung",
    year: "2026",
    role: "Idee, Design, Entwicklung, ehrenamtlich",
    summary:
      "Trainer des Skiclub Reichersbeuern füllten für Stunden- und Unkostenabrechnung zwei Excel-Dateien mit denselben Daten doppelt aus. Die gerätelokale PWA erfasst jedes Training einmal, berechnet Fahrtkosten automatisch und erzeugt beide Formulare druckfertig. Ohne Server, ohne Login, alle Daten bleiben auf dem Gerät.",
    tags: ["React", "TypeScript", "Vite", "PWA", "Offline-first", "Ehrenamt"],
    url: "/trainer-abrechnung",
    image: {
      src: "/projects/scr-trainer-abrechnung.webp",
      alt: "Übersicht der SCR Trainer-Abrechnung auf dem Desktop",
      width: 1400,
      height: 875,
    },
  },
];
