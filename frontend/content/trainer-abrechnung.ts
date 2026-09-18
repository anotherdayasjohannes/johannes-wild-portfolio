import type { AccordionEntry, Photo } from "./types";

export const trainerTool = {
  label: "Projekt",
  name: "SCR Trainer-Abrechnung",
  tagline: "Stunden- und Unkostenabrechnung in einer App. Auf dem Gerät, offline.",
  href: "/johannes/trainer-abrechnung",
  appUrl: "https://scr-trainer-abrechnung.vercel.app",
  repoUrl: "https://github.com/anotherdayasjohannes/scr-trainer-abrechnung",
  screenshot: {
    src: "/projects/scr-trainer-abrechnung.webp",
    alt: "Übersicht der SCR Trainer-Abrechnung: Saison, Stunden, Unkosten und Trainingsliste",
    width: 1400,
    height: 875,
  } satisfies Photo,
  description: [
    "Die SCR Trainer-Abrechnung ist eine Progressive Web App für die Trainerinnen und Trainer des Skiclub Reichersbeuern. Sie ersetzt Zettel und Tabellen am Saisonende.",
    "Trainingsstunden und Auslagen werden im Laufe der Saison erfasst. Am Ende erzeugt die App die Stundenabrechnung nach § 3 Nr. 26 EStG (Übungsleiterpauschale) und die Unkostenabrechnung als druckfertiges Dokument oder PDF.",
    "Die App läuft vollständig im Browser und funktioniert offline. Es gibt keinen Server, kein Konto und keinen Login.",
  ],
  facts: [
    { term: "Für", detail: "Trainerinnen und Trainer des Skiclub Reichersbeuern" },
    { term: "Erzeugt", detail: "Stundenabrechnung (§ 3 Nr. 26 EStG), Unkostenabrechnung" },
    { term: "Ausgabe", detail: "Druck oder PDF" },
    { term: "Daten", detail: "Nur auf dem Gerät, im Browser-Speicher" },
    { term: "Technik", detail: "Progressive Web App, offline nutzbar" },
  ],
  installLabel: "Als App installieren",
  installIntro:
    "Die App wird nicht über einen App Store verteilt. Sie lässt sich direkt aus dem Browser auf den Home-Bildschirm legen und verhält sich dann wie eine installierte App.",
  install: [
    {
      title: "iPhone und iPad (Safari)",
      body: [
        "Die App-Adresse in Safari öffnen.",
        "Auf das Teilen-Symbol tippen.",
        "„Zum Home-Bildschirm“ wählen und mit „Hinzufügen“ bestätigen.",
      ],
    },
    {
      title: "Android (Chrome)",
      body: [
        "Die App-Adresse in Chrome öffnen.",
        "Das Menü mit den drei Punkten öffnen.",
        "„App installieren“ oder „Zum Startbildschirm hinzufügen“ wählen.",
      ],
    },
    {
      title: "Desktop (Chrome, Edge)",
      body: [
        "Die App-Adresse öffnen.",
        "Auf das Installieren-Symbol rechts in der Adressleiste klicken.",
        "Die Installation bestätigen. Die App erscheint danach wie ein normales Programm.",
      ],
    },
  ] satisfies AccordionEntry[],
  privacyLabel: "Datenschutz",
  privacy: [
    "Alle Eingaben werden ausschließlich im lokalen Speicher des Browsers auf dem eigenen Gerät abgelegt. Es werden keine Daten an einen Server übertragen, es gibt keine Analyse- oder Tracking-Dienste.",
    "Wer den Browser-Speicher löscht oder die App entfernt, löscht damit auch die erfassten Daten. Ein Export als PDF vor dem Löschen ist deshalb sinnvoll.",
  ],
  contactLabel: "Kontakt",
  contact:
    "Fragen, Fehler oder Wünsche zur App bitte per E-Mail. Der Quellcode ist auf GitHub einsehbar.",
};
