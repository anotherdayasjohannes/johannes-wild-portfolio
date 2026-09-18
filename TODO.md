# TODO

Phasen nach dem Restart-Proposal (Sep 2026).

## Phase 1: Fundament

- [x] Alten `frontend/`- und `studio/`-Stand sowie veraltete Zusammenfassungen entfernen
- [x] Neues Scaffold: Next.js 14.2, App Router, TypeScript strict, Tailwind, ESLint, Port 3100
- [x] Design-Tokens als CSS-Variablen (warm hell, dunkle Variante vorbereitet)
- [x] Switzer self-hosted, Instrument Serif für das Zitat
- [x] Motion-Primitive: SplitText, FadeUp, Hero-Scale, Varianten mit `useReducedMotion`
- [x] Komponenten: Header, Hero, SectionLabel, HairlineList, Quote, Accordion, Footer
- [x] Hero mit echtem Foto (Desktop/Mobile-Quelle)
- [ ] Vercel-Preview-Deployment einrichten

## Phase 2: Inhalt

- [x] Startseite mit Texten aus dem WordPress-Export (Über mich, Stationen, Stimmen, Kontakt)
- [x] Projektseite `/trainer-abrechnung` (Beschreibung, Installation als PWA, Datenschutz, Kontakt)
- [x] `/impressum` und `/datenschutz` als Struktur
- [ ] Positionierungszeile unter dem Namen mit Johannes abstimmen (`content/site.ts`)
- [ ] Impressum und Datenschutz vervollständigen (TODO-Marker in `content/legal.ts`), juristisch prüfen
- [ ] App-Adresse der Trainer-Abrechnung eintragen (`content/trainer-abrechnung.ts`)
- [ ] Screenshots der Trainer-App auf der Projektseite
- [ ] Testimonials: Freigabe der drei Zitate einholen
- [ ] Nutzungsrechte der Fotos für das Web mit Bernhard Huber bestätigen
- [ ] Favicon und Open-Graph-Bild
- [ ] `metadataBase`, Sitemap und robots, sobald die Domain feststeht

## Phase 3: Launch

- [ ] Domain entscheiden: `wilderserver.de` oder neue Brand-Domain
- [ ] DNS bei netcup auf Vercel umstellen, UCS-Portal nach `ucs.wilderserver.de`
- [ ] WordPress-Container in Univention entfernen
- [ ] GoDaddy-Hosting für `wirwilden.de` kündigen, Mail und Hochzeits-Redirect behalten
- [ ] Zugänglichkeits- und Performance-Check (Lighthouse)

## Später

- [ ] Dunkles Theme aktivierbar machen (Variablen liegen bereit)
- [ ] Englische Fassung
- [ ] Sanity (Projekt `6bj2fvps`) nur, falls Pflege ohne Code nötig wird
