# Johannes Wild – Website

Persönliche Website von Johannes Wild und Landing Page für die SCR Trainer-Abrechnung. Neustart im September 2026 auf einem frischen Next.js-Fundament, Gestaltung „München 72“ (Aicher-Kennfarben, Rams-Zurückhaltung) mit „Anthrazit“ als Dark Mode.

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
├── app/            # Routen: /, /trainer-abrechnung, /impressum, /datenschutz; fonts.ts als Schrift-Weiche
├── components/     # layout/, sections/ (Hero, Testimonials, Wildwuchs), ui/, motion/
├── content/        # Texte, Stationen, Projekte, Stimmen, Wildwuchs, Rechtliches (TS)
├── lib/            # paths.ts (basePath, asset(), canonical()), wildwuchs/lastfm.ts
└── public/         # photos/ (Fotos: Bernhard Huber), projects/ (Screenshots, WebP)
docs/               # Ältere Projektdokumentation
```

## Entwicklung

```bash
cd frontend
npm install
cp .env.local.example .env.local   # optional: Last.fm-Zugang eintragen
npm run dev                        # http://localhost:3100/johannes
npm run lint
npm run build
```

Port 3100 ist fest eingestellt. Die Seite läuft unter dem Pfad `/johannes` (`basePath` in `next.config.mjs`); `/` leitet vorerst dorthin weiter. Statische Bilder werden über `asset()` aus `lib/paths.ts` eingebunden, da `next/image` den `basePath` nicht selbst voranstellt.

Produktiv: `https://wirwilden.de/johannes` (Fallback `wilderserver.de/johannes`).

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

Farbe ist Information: Orange kennzeichnet Arbeit (Stationen, Projekte), Rosé Persönliches (Wildwuchs, wir Wilden), Grau Verwaltung. Akzente tragen nie einen Satz. Ein lautes Element pro Seite: der orange Punkt hinter WILD. Raster: 12 Spalten, 30 px Gutter, keine maximale Breite. Schriftgrößen 15 · 21 · 34, Zeilenhöhen 1,0 · 1,3 · 1,5.

## Inhalte pflegen

Alle Texte liegen in `frontend/content/*.ts`. Offene Punkte stehen in `TODO.md`.
