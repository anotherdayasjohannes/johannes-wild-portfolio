# ContactSection Organism

Contact form and information section.

## Usage

```tsx
import { ContactSection } from '@/components/organisms';

<ContactSection
  title="Get in Touch"
  subtitle="I'm always open to discussing new projects, creative ideas, or opportunities."
  contactInfo={{
    phone: '+49 171 9319346',
    email: 'johannes.wild@me.com',
    address: 'Bahnhofstraße 11\n83677 Reichersbeuern\nGermany',
  }}
  formLabels={{
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    error: 'Something went wrong. Please try again.',
  }}
  infoLabels={{
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
  }}
/>
```

## Props

- `title`: Section heading
- `subtitle`: Optional subtitle text
- `contactInfo`: Phone, email, and address
- `formLabels`: Localized form labels
- `infoLabels`: Localized info labels
- `className`: Additional CSS classes

## Features

- Two-column responsive layout (form + contact info)
- Fully functional contact form with validation
- Form status messages (success/error)
- Clickable phone and email links
- Styled inputs with focus states
- Submit button with loading state
- Slide animations for both columns
- Uses design system atoms (Heading, Text, Button, Card)

## Form Implementation

The form currently simulates submission. To implement actual email sending:
1. Create an API route (e.g., `/api/contact`)
2. Use a service like SendGrid, Mailgun, or Resend
3. Replace the `setTimeout` in `handleSubmit` with an actual API call

## Design Tokens

- Background: `bg-dark-surface`
- Card variant: `elevated`
- Input backgrounds: `bg-dark-bg`
- Focus border: `border-brand-primary`
- Status colors: green/red with opacity

