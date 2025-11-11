# 🚀 Quick Start Guide

Get up and running with the design system in 5 minutes!

---

## 1. Import Components

```typescript
// Import individual components
import { Button, Heading, Text, Card } from '@/components';

// Or import by category
import { Button, Text, Heading } from '@/components/atoms';
import { Card, SkillBar } from '@/components/molecules';
import { Section } from '@/components/templates';
```

---

## 2. Use Design Tokens

```typescript
import { tokens } from '@/lib/design-tokens';

// Access colors
tokens.colors.brand.primary       // #3B82F6
tokens.colors.background.primary  // #0A0A0A

// Access spacing
tokens.spacing[4]  // 1rem (16px)
tokens.spacing[8]  // 2rem (32px)

// Access typography
tokens.typography.fontSize.xl      // 1.25rem
tokens.typography.fontWeight.bold  // 700
```

---

## 3. Build Your First Section

```tsx
import { Section, Container, Heading, Text, Button } from '@/components';

export function MySection() {
  return (
    <Section spacing="lg">
      <Container>
        <Heading level="h2" className="mb-4">
          Welcome
        </Heading>
        <Text color="secondary" className="mb-6">
          This is my first section using the design system!
        </Text>
        <Button variant="primary">
          Get Started
        </Button>
      </Container>
    </Section>
  );
}
```

---

## 4. Create a Skills Section

```tsx
import { Section, Card, Heading, SkillBar } from '@/components';

export function SkillsSection() {
  return (
    <Section spacing="xl" background="secondary">
      <Card variant="glass" padding="lg">
        <Heading level="h3" className="mb-6">
          My Skills
        </Heading>
        <div className="space-y-4">
          <SkillBar 
            name="Analytisches Denken" 
            level={6} 
            maxLevel={6}
            color="blue"
          />
          <SkillBar 
            name="Kreativität" 
            level={5} 
            maxLevel={6}
            color="purple"
          />
          <SkillBar 
            name="Teamfähigkeit" 
            level={6} 
            maxLevel={6}
            color="green"
          />
        </div>
      </Card>
    </Section>
  );
}
```

---

## 5. Add Social Links

```tsx
import { SocialLink } from '@/components';

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <SocialLink 
        platform="github" 
        url="https://github.com/anotherdayasjohannes"
        showLabel
      />
      <SocialLink 
        platform="linkedin" 
        url="https://linkedin.com/in/yourprofile"
        showLabel
      />
      <SocialLink 
        platform="email" 
        url="mailto:johannes.wild@me.com"
        label="Email Me"
        showLabel
      />
    </div>
  );
}
```

---

## 6. View the Playground

See all components in action:

```bash
# Your servers should be running
# Frontend: http://localhost:3100
# Visit: http://localhost:3100/playground
```

The playground shows:
- All component variants
- Interactive examples
- Usage patterns
- Visual reference

---

## 💡 Common Patterns

### Hero Section Pattern

```tsx
<Section spacing="xl" background="primary">
  <Container>
    <div className="text-center">
      <Heading level="h1" gradient className="mb-4">
        Johannes Wild
      </Heading>
      <Text variant="caption" color="secondary" className="mb-8">
        Full Stack Developer & Tech Enthusiast
      </Text>
      <div className="flex gap-4 justify-center">
        <Button variant="primary" size="lg">
          Contact Me
        </Button>
        <Button variant="outline" size="lg">
          View Work
        </Button>
      </div>
    </div>
  </Container>
</Section>
```

### Grid Layout Pattern

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card variant="default" hover>
    <Heading level="h4">Card 1</Heading>
    <Text color="secondary">Description</Text>
  </Card>
  <Card variant="default" hover>
    <Heading level="h4">Card 2</Heading>
    <Text color="secondary">Description</Text>
  </Card>
  <Card variant="default" hover>
    <Heading level="h4">Card 3</Heading>
    <Text color="secondary">Description</Text>
  </Card>
</div>
```

### Two-Column Layout Pattern

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>
    <Heading level="h2" className="mb-4">
      About Me
    </Heading>
    <Text className="mb-4">
      First paragraph...
    </Text>
    <Text>
      Second paragraph...
    </Text>
  </div>
  <div>
    <Card variant="glass" padding="lg">
      {/* Image or additional content */}
    </Card>
  </div>
</div>
```

---

## 🎨 Styling Tips

### Use Tailwind Utilities

```tsx
// Spacing
<div className="mt-8 mb-12 px-4">

// Flexbox
<div className="flex items-center justify-between gap-4">

// Grid
<div className="grid grid-cols-3 gap-6">

// Responsive
<div className="text-center md:text-left">
<div className="hidden lg:block">
```

### Combine with Component Props

```tsx
<Card 
  variant="glass" 
  hover 
  className="transform transition-all duration-500"
>
  Custom animations + component styles
</Card>
```

---

## 📚 Next Steps

1. **Explore the Playground**
   - http://localhost:3100/playground
   - See all components and variations

2. **Read Full Documentation**
   - `docs/COMPONENTS.md` - Complete component reference
   - `docs/DESIGN_SYSTEM.md` - Architecture guide
   - `lib/design-tokens.ts` - Token reference

3. **Build Your Page**
   - Start with Hero section
   - Add sections one by one
   - Compose components together

4. **Connect to Sanity**
   - Add content in Studio (port 3444)
   - Fetch with GROQ queries
   - Display in your components

---

## 🆘 Troubleshooting

### Import Errors

```typescript
// Make sure path alias is correct
import { Button } from '@/components';  // ✅
import { Button } from '../components'; // ❌ (unless relative makes sense)
```

### TypeScript Errors

Check prop types in `types.ts` files:
```typescript
// components/atoms/Button/types.ts
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  // ... etc
}
```

### Styling Not Appearing

1. Make sure Tailwind is configured correctly
2. Check `tailwind.config.ts` includes component paths
3. Restart dev server if needed

---

## 🎯 Pro Tips

1. **Use the Section component** for consistent spacing
2. **Keep Container** for proper content width
3. **Use design tokens** instead of hardcoded values
4. **Check the playground** when unsure about a prop
5. **Compose, don't customize** - build with existing components first

---

**Happy Coding!** 🚀

Check out the playground and start building your portfolio!



