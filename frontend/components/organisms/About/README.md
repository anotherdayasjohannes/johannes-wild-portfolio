# About Organism

Professional about section with bio and key facts.

## Usage

```tsx
import { About } from '@/components/organisms';

<About
  title="About Me"
  bio={bioContent} // PortableText array from Sanity
  keyFacts={[
    { label: 'Birthplace', value: 'Kempten', order: 0 },
    { label: 'Age', value: '43', order: 1 },
    // ...
  ]}
  cvUrl="/path/to/cv.pdf"
/>
```

## Props

- `title`: Section heading
- `bio`: PortableText content from Sanity
- `keyFacts`: Array of label/value pairs
- `cvUrl`: Optional CV download link
- `className`: Additional CSS classes

## Features

- Two-column responsive layout
- Portable Text rendering for rich bio content
- Key facts card with structured data
- CTA buttons for CV download and contact
- Scroll animations using FadeIn/SlideUp
- Uses design system atoms (Heading, Text, Button, Card)

## Design Tokens

- Background: `bg-dark-surface`
- Text colors: `text-dark-text-primary`, `text-dark-text-secondary`
- Border: `border-dark-border`






