# TODO

Phasen nach dem Restart-Proposal (Sep 2026), ergänzt um den Redesign-Durchgang „München 72“.

## Phase 1: Fundament

- [x] Alten `frontend/`- und `studio/`-Stand sowie veraltete Zusammenfassungen entfernen
- [x] Neues Scaffold: Next.js 14.2, App Router, TypeScript strict, Tailwind, ESLint, Port 3100
- [x] Motion-Primitive: SplitText, FadeUp, Stagger, Varianten mit `useReducedMotion`
- [x] Vercel-Projekt verbunden (Root `frontend`); Framework Preset Next.js prüfen (PR #7)

## Phase 2: Inhalt

- [x] Startseite mit Texten aus dem WordPress-Export (Profil, Stationen, Stimmen, Kontakt)
- [x] Projektseite `/trainer-abrechnung` (Beschreibung, Screenshot, App-Link, Installation als PWA, Datenschutz, Kontakt)
- [x] Acht Projekte aus dem Inventar mit Screenshots (WebP)
- [x] Impressum und Datenschutzerklärung als vollständige Entwürfe (`content/legal.ts`)
- [ ] Impressum und Datenschutzerklärung juristisch prüfen lassen; Last.fm als Drittdienst ergänzen
- [ ] Testimonials: Freigabe der drei Zitate einholen
- [ ] Favicon (W auf Rosé) und Open-Graph-Bild
- [ ] Sitemap und robots unter `/johannes`

## Redesign „München 72“ (Branch `redesign/muenchen-72`)

- [x] Tokens A (hell) und C (dunkel über `prefers-color-scheme`), Fokusring Hellblau, Selection Rosé
- [x] Schrift-Weiche: At Haüss (privat, `SITE_FONT=hauss`) / Hanken Grotesk (Fallback, committed)
- [x] Hero: JOHANNES-Label, WILD Semibold 600 mit orangem Punkt, Claim grau/schwarz, Porträt 4:5
- [x] Header mit „● wir Wilden“, Footer mit Kontakt-Lead und Credits
- [x] Stationen als Aicher-Spalten (Index orange, Zeitraum tabular, aktuelles Jahr orange)
- [x] Projekte als 16:9-Mosaik (voll/halb) mit Meta-Zeile
- [x] Wildwuchs: Helden, Dinge die bleiben, einer der Wilden, Last.fm „Gerade gehört“ (nur mit Env)
- [x] Rechts- und Trainer-Seiten auf die neuen Tokens
- [ ] WILD-Gewicht bestätigen: 600 (gebaut) oder 500 (Vergleichs-Screenshot)
- [ ] „Dinge, die bleiben“: Modelle und Jahre von Johannes
- [ ] At Haüss Web-Lizenz kaufen oder Hanken Grotesk akzeptieren
- [ ] Weitere Live-Kacheln: Discogs (Token), Strava (OAuth), siehe Konzept
- [ ] Namensspiel „Vertikal“ (WILD im linken Rand der Unterseiten), optional

## Phase 3: Launch

- [x] Domain entschieden: `wirwilden.de/johannes` (Fallback `wilderserver.de/johannes`), `basePath` gesetzt
- [ ] `wirwilden.de` auf Vercel zeigen lassen; Redirect `/` → `/johannes` entfernen, sobald eine Familien-Startseite existiert
- [ ] Vercel Deployment Protection für Produktion lockern oder Custom Domain anbinden
- [ ] Falls Fallback: DNS bei netcup auf Vercel umstellen, UCS-Portal nach `ucs.wilderserver.de`
- [ ] WordPress-Container in Univention entfernen
- [ ] GoDaddy-Hosting für `wirwilden.de` kündigen, Mail und Hochzeits-Redirect behalten
- [ ] Zugänglichkeits- und Performance-Check (Lighthouse)

## Später

- [ ] Theme-Toggle zusätzlich zur Systemeinstellung
- [ ] Englische Fassung
- [ ] Sanity (Projekt `6bj2fvps`) nur, falls Pflege ohne Code nötig wird
