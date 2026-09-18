import type { LegalSection } from "./types";

// Platzhalterstruktur. Alle mit TODO markierten Angaben vor dem Launch ergänzen
// und juristisch prüfen lassen.

export const impressum = {
  title: "Impressum",
  intro: "Angaben gemäß § 5 DDG.",
  sections: [
    {
      heading: "Verantwortlich",
      paragraphs: [
        "Johannes Wild",
        "[TODO: Straße und Hausnummer]",
        "[TODO: PLZ Ort]",
        "Deutschland",
      ],
    },
    {
      heading: "Kontakt",
      paragraphs: [
        "E-Mail: johannes.wild@me.com",
        "[TODO: Telefonnummer, falls angegeben werden soll]",
      ],
    },
    {
      heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      paragraphs: ["Johannes Wild, Anschrift wie oben."],
    },
    {
      heading: "Haftung für Inhalte und Links",
      paragraphs: [
        "[TODO: Haftungshinweis für eigene Inhalte und externe Links ergänzen.]",
      ],
    },
    {
      heading: "Urheberrecht",
      paragraphs: [
        "Die Inhalte dieser Seite unterliegen dem deutschen Urheberrecht.",
        "Fotos: Bernhard Huber. [TODO: Nutzungsrechte für die Web-Verwendung bestätigen.]",
      ],
    },
  ] satisfies LegalSection[],
};

export const datenschutz = {
  title: "Datenschutz",
  intro:
    "Diese Erklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden.",
  sections: [
    {
      heading: "Verantwortlicher",
      paragraphs: [
        "Johannes Wild, [TODO: Anschrift wie im Impressum], johannes.wild@me.com.",
      ],
    },
    {
      heading: "Hosting",
      paragraphs: [
        "Die Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf verarbeitet der Hoster technisch notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seite und Browser-Kennung in Server-Logs.",
        "[TODO: Rechtsgrundlage (Art. 6 Abs. 1 lit. f DSGVO), Speicherdauer und Hinweis auf den Auftragsverarbeitungsvertrag mit Vercel ergänzen.]",
      ],
    },
    {
      heading: "Cookies und Tracking",
      paragraphs: [
        "Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken ein und verwendet keine Tracking-Dienste.",
        "[TODO: Anpassen, falls später Analytics oder externe Einbettungen hinzukommen.]",
      ],
    },
    {
      heading: "Schriften",
      paragraphs: [
        "Schriften werden lokal von dieser Website ausgeliefert. Es findet keine Verbindung zu Schriftanbietern statt.",
      ],
    },
    {
      heading: "Kontaktaufnahme",
      paragraphs: [
        "Bei Kontaktaufnahme per E-Mail werden die übermittelten Angaben zur Bearbeitung der Anfrage gespeichert. Die Daten werden nicht ohne Einwilligung weitergegeben.",
      ],
    },
    {
      heading: "SCR Trainer-Abrechnung",
      paragraphs: [
        "Die unter /trainer-abrechnung vorgestellte App speichert Daten ausschließlich im Browser des eigenen Geräts. Es findet keine Übertragung an einen Server statt.",
      ],
    },
    {
      heading: "Ihre Rechte",
      paragraphs: [
        "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.",
        "[TODO: Zuständige Aufsichtsbehörde (Bayerisches Landesamt für Datenschutzaufsicht) mit Anschrift ergänzen.]",
      ],
    },
  ] satisfies LegalSection[],
};
