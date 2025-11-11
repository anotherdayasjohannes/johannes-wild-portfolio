# LanguageSwitcher Molecule

Language toggle component for switching between German and English.

## Usage

```tsx
import { LanguageSwitcher } from '@/components/molecules';

<LanguageSwitcher currentLocale="en" />
```

## Props

- `currentLocale`: Currently active locale ('en' or 'de')
- `className`: Additional CSS classes

## Features

- Minimal toggle design (DE | EN)
- Active language highlighted with brand color
- Smooth transitions
- Updates URL path on switch
- Accessible with ARIA labels
- Uses Next.js navigation
- Client-side routing

## Design Tokens

- Active background: `bg-brand-primary`
- Text colors: design system text colors
- Hover states with smooth transitions

## Behavior

When clicked, switches the locale by:
1. Parsing current pathname
2. Replacing locale segment
3. Navigating to new path with `router.push`

Example: `/en/about` → `/de/about`

