# ExperienceTimeline Organism

Vertical timeline showing work experience with expandable details.

## Usage

```tsx
import { ExperienceTimeline } from '@/components/organisms';

<ExperienceTimeline
  title="Work Experience"
  currentLabel="Present"
  experiences={[
    {
      position: 'Department Head',
      company: 'iFixit GmbH',
      location: 'Munich',
      startDate: '2020-01-01',
      current: true,
      description: [
        'Lead advocacy team',
        'Represent in stakeholder meetings',
        // ...
      ],
      order: 0,
    },
    // ...
  ]}
/>
```

## Props

- `title`: Section heading
- `experiences`: Array of experience objects
- `currentLabel`: Text for current positions (default: "Present")
- `className`: Additional CSS classes

## Features

- Vertical timeline with connecting line
- Year markers on the left
- Expandable cards for detailed descriptions
- Click to expand/collapse details
- Sorted by order field
- Current position highlighting
- Stagger animation for timeline items
- Uses design system atoms (Heading, Text, Card)

## Design Tokens

- Background: `bg-dark-bg`
- Timeline line: `bg-brand-primary/30`
- Timeline dots: `bg-brand-primary`
- Text colors from design system

