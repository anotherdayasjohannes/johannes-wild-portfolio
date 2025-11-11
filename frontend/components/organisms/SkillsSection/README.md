# SkillsSection Organism

Categorized skills display with animated skill bars.

## Usage

```tsx
import { SkillsSection } from '@/components/organisms';

<SkillsSection
  title="Skills & Expertise"
  categoryLabels={{
    soft: 'Soft Skills',
    language: 'Languages',
    technical: 'Technical Skills',
  }}
  skills={[
    {
      name: 'Analytical Thinking',
      category: 'soft',
      level: 6, // 1-6 scale
      color: 'blue',
      order: 0,
    },
    {
      name: 'English',
      category: 'language',
      level: 80, // 0-100 percentage
      color: 'green',
      order: 0,
    },
    // ...
  ]}
/>
```

## Props

- `title`: Section heading
- `skills`: Array of skill objects
- `categoryLabels`: Optional labels for each category
- `className`: Additional CSS classes

## Features

- Three-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Automatic skill grouping by category
- Animated skill bars on scroll
- Sorted by order within each category
- Different level scales:
  - Soft/Technical: 1-6 scale (converted to percentage)
  - Languages: 0-100 percentage
- Color coding per skill
- Uses design system atoms (Heading, Text, Card, SkillBar)

## Design Tokens

- Background: `bg-dark-surface`
- Card variant: `elevated`
- Spacing: Design token spacing

