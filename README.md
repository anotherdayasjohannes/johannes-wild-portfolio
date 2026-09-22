# Johannes Wild – Website

Website unter wirwilden.de: Startseite der Familie Wild (vier Kacheln) unter `/`, persönliche Seite von Johannes Wild unter `/johannes`, Landing Page für die SCR Trainer-Abrechnung, Impressum und Datenschutz für die ganze Domain. Neustart im September 2026 auf einem frischen Next.js-Fundament, Gestaltung „München 72“ (Aicher-Kennfarben, Rams-Zurückhaltung) mit „Anthrazit“ als Dark Mode.

## Stack

- Next.js 14.2 (App Router), React 18, TypeScript strict
- Tailwind CSS 3.4, Tokens als CSS-Variablen in `frontend/app/globals.css` (hell/dunkel über `prefers-color-scheme`)
- Framer Motion 11 (Varianten, `useReducedMotion`)
- Schrift: At Haüss (Arillatype.Studio, lizenzpflichtig, nicht im Repo) oder Hanken Grotesk (Google) als Fallback, siehe `frontend/app/fonts/LICENSE-NOTE.md`
- Inhalte als typisierte Dateien in `frontend/content/`, kein CMS
- Deployment: Vercel

## Struktur

```
frontend/
├── app/            # /, /johannes, /johannes/trainer-abrechnung, /impressum, /datenschutz, sitemap, robots; fonts.ts als Schrift-Weiche
├── components/     # family/ (Kacheln, Rahmen), layout/, sections/ (Hero, Testimonials, Wildwuchs), ui/, motion/
├── content/        # family.ts, site.ts, Stationen, Projekte, Stimmen, Wildwuchs, Rechtliches (TS)
├── lib/            # paths.ts (asset(), canonical(), rootCanonical()), wildwuchs/lastfm.ts
└── public/         # photos/ (Porträts, Fotos: Bernhard Huber; family/), projects/ (Screenshots, WebP)
docs/               # Ältere Projektdokumentation
```

## Entwicklung

```bash
cd frontend
npm install
cp .env.local.example .env.local   # optional: Last.fm-Zugang eintragen
npm run dev                        # http://localhost:3100 (Familie), /johannes (Johannes)
npm run lint
npm run build
```

Port 3100 ist fest eingestellt. Kein `basePath`: die Familienseite liegt in `app/page.tsx`, alles Persönliche in `app/johannes/` mit eigenem Layout. `/johannes/impressum` und `/johannes/datenschutz` leiten auf die Root-Seiten um. `asset()` in `lib/paths.ts` ist derzeit die Identität und bleibt als zentrale Stelle für Asset-Pfade; `canonical()` präfixt persönliche Routen mit `/johannes`, `rootCanonical()` gilt für Domain-Seiten.

Produktiv: `https://wirwilden.de` und `https://wirwilden.de/johannes`.

## Domains

| Domain | Ziel |
|---|---|
| `wirwilden.de`, `www.wirwilden.de` | diese App (Familie unter `/`, Johannes unter `/johannes`) |
| `valentinwild.de`, `leoniewild.de` (je mit `www`) | 307 auf `https://www.wirwilden.de/`, solange die Kinder keine eigenen Seiten haben |
| `wilderserver.de`, `www.wilderserver.de` | 308 auf `https://www.wirwilden.de/johannes`; alte Lebenslauf- und LinkedIn-Links landen dauerhaft auf der persönlichen Seite |

Die Host-Regeln stehen in `next.config.mjs` (`redirects()` mit `has: host`).

Alle Domains hängen am selben Vercel-Projekt; DNS jeweils `@` A-Record auf Vercel, `www` CNAME auf das von Vercel angezeigte Ziel. Ein Hosting-Paket wird für keine der Domains benötigt.

### Schrift

Standard ist Hanken Grotesk. Mit der lizenzierten At Haüss baut man lokal so:

```bash
# AtHaussVARVF.woff2 unverändert nach frontend/app/fonts/private/ legen (gitignored)
SITE_FONT=hauss npm run build
```

`next.config.mjs` biegt dann `app/fonts.ts` auf `app/fonts.hauss.ts` um. Vor dem Launch muss eine Web-Lizenz gekauft werden, sonst bleibt der Fallback.

### Umgebungsvariablen

| Variable | Zweck |
|---|---|
| `LASTFM_API_KEY` | Kachel „Gerade gehört“ im Abschnitt Wildwuchs |
| `LASTFM_USER` | Last.fm-Benutzername |
| `SITE_FONT` | `hauss` für die lizenzierte Schrift, sonst leer |

Lokal in `frontend/.env.local` (gitignored, Vorlage `.env.local.example`). Produktiv werden die Werte in den Vercel-Projekteinstellungen gesetzt. Fehlen die Last.fm-Variablen oder antwortet die API nicht innerhalb von 3 s, entfällt die Kachel; die Seite bleibt intakt.

## Gestaltung

Startseite: 2 × 2 Kacheln, eine Farbe pro Person (Hellblau, Orange, Rosé, Grün aus der erweiterten 1972-Palette, `--tile-*`), Tinte `#111` auf allen Kacheln auch im Dark Mode. Kinder nur mit Vornamen und „folgt“, keine Fotos, keine Unterseiten, keine Namen in Titel oder Beschreibung.

Persönliche Seite: 
Farbe ist Information: Orange kennzeichnet Arbeit (Stationen, Projekte), Rosé Persönliches (Wildwuchs, wir Wilden), Grau Verwaltung. Akzente tragen nie einen Satz. Ein lautes Element pro Seite: der orange Punkt hinter WILD. Raster: 12 Spalten, 30 px Gutter, keine maximale Breite. Schriftgrößen 15 · 21 · 34, Zeilenhöhen 1,0 · 1,3 · 1,5.

## Inhalte pflegen

Alle Texte liegen in `frontend/content/*.ts`. Offene Punkte stehen in `TODO.md`.
