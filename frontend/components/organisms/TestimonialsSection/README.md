# TestimonialsSection Organism

Testimonial quotes in a three-column card layout.

## Usage

```tsx
import { TestimonialsSection } from '@/components/organisms';

<TestimonialsSection
  title="What People Say"
  testimonials={[
    {
      name: 'Matthias Huisken',
      position: 'Managing Director',
      company: 'iFixit Europe',
      quote: 'Great guy doing the right thing for the company.',
      image: {
        asset: {
          url: '/images/testimonials/matthias.jpg',
        },
        alt: 'Matthias Huisken',
      },
      order: 0,
    },
    // ...
  ]}
/>
```

## Props

- `title`: Section heading
- `testimonials`: Array of testimonial objects
- `className`: Additional CSS classes

## Features

- Three-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Elevated cards with quotes
- Author info with optional image
- Sorted by order field
- Stagger animation for cards
- Uses design system atoms (Heading, Text, Card)
- Consistent card heights with flex layout

## Design Tokens

- Background: `bg-dark-bg`
- Card variant: `elevated`
- Border: `border-dark-border`
- Text colors from design system

