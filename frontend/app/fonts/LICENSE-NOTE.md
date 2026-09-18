# Fonts

## At Haüss (Arillatype.Studio)

Not in this repository. Johannes Wild holds the family under the non-commercial
**Only-designers EULA v1.1** (order W24/0099, Feb 2024). That licence covers
mockups and private previews, not a public website, and forbids subsetting or
modifying the files.

- EULA and invoice: `media/fonts/at-hauss/Arillatype-Onlydesigners-EULA-v1_1.pdf`
  and `Arillatype-Invoice-w24-0099.pdf` in the project store.
- Local use: place `AtHaussVARVF.woff2` unmodified in `app/fonts/private/`
  (gitignored) and run with `SITE_FONT=hauss`. `app/fonts.hauss.ts` loads it via
  `next/font/local` with `weight: "100 900"`.
- Before launch: buy the Web licence at arillatype.studio, or keep the fallback.

## Hanken Grotesk (Google Fonts, OFL)

Committed fallback, loaded by `app/fonts.hanken.ts` via `next/font/google`
(variable weight 100–900). Used whenever `SITE_FONT` is not `hauss`.
