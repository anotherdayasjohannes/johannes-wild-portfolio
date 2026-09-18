import type { Project } from "./types";
import { photos } from "./site";

export const projectsLabel = "Projekte";

// TODO: Echte Einträge aus dem Projekt-Inventar ergänzen, sobald es vorliegt.
export const projects: Project[] = [
  {
    slug: "trainer-abrechnung",
    title: "SCR Trainer-Abrechnung",
    client: "Skiclub Reichersbeuern",
    year: "2026",
    role: "Konzept, Design, Entwicklung",
    summary:
      "Offline-App für die Stunden- und Unkostenabrechnung der Trainerinnen und Trainer. Erzeugt druckfertige Dokumente, Daten bleiben auf dem Gerät.",
    tags: ["PWA", "TypeScript", "Offline"],
    url: "/trainer-abrechnung",
    image: photos.project,
  },
  {
    // TODO: Platzhalter durch ein reales Projekt ersetzen.
    slug: "platzhalter",
    title: "Weiteres Projekt",
    client: "Folgt",
    year: "—",
    role: "Folgt",
    summary: "Dieser Eintrag wird mit dem Projekt-Inventar befüllt.",
    tags: ["TODO"],
  },
];
