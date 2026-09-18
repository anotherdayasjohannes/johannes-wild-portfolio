# Johannes Wild – Website

Persönliche Website von Johannes Wild und Landing Page für die SCR Trainer-Abrechnung. Neustart im September 2026 auf einem frischen Next.js-Fundament; der alte `frontend/`-Stand und das Sanity Studio wurden entfernt.

## Stack

- Next.js 14.2 (App Router), React 18, TypeScript strict
- Tailwind CSS 3.4 mit CSS-Variablen für das Theme (warm hell, dunkle Variante vorbereitet)
- Framer Motion 11 (Varianten, `useReducedMotion`)
- Schriften: Switzer (self-hosted, Fontshare), Instrument Serif (Google) für das Display-Zitat
- Inhalte als typisierte Dateien in `frontend/content/`, kein CMS
- Deployment: Vercel

## Struktur

```
frontend/
├── app/            # Routen: /, /trainer-abrechnung, /impressum, /datenschutz
├── components/     # layout/, sections/, ui/, motion/
├── content/        # Texte, Stationen, Stimmen, Fotos, Rechtliches (TS)
└── public/photos/  # Web-Previews der Porträts (Fotos: Bernhard Huber)
docs/               # Ältere Projektdokumentation
```

## Entwicklung

```bash
cd frontend
npm install
npm run dev     # http://localhost:3100
npm run lint
npm run build
```

Port 3100 ist fest eingestellt, um Konflikte mit anderen Projekten zu vermeiden.

## Inhalte pflegen

Alle Texte liegen in `frontend/content/*.ts`. Offene Punkte sind dort mit `TODO` markiert (Positionierung, App-Adresse, Impressums- und Datenschutzangaben).

## Status

Phase 1 (Fundament) steht. Offene Phasen in `TODO.md`.
