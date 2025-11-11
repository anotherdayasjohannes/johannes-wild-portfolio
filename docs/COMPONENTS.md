# 📚 Component Documentation

Complete reference guide for all design system components.

---

## 🎨 Design Tokens

Located in `lib/design-tokens.ts` - the foundation of the design system.

```typescript
import { tokens } from '@/lib/design-tokens';

// Access tokens
tokens.colors.brand.primary     // #3B82F6
tokens.spacing[8]                // 2rem (32px)
tokens.typography.fontSize.xl    // 1.25rem (20px)
```

### Available Token Categories:
- `colors` - Brand, neutral, background, text, border, semantic
- `typography` - fontFamily, fontSize, fontWeight, lineHeight, letterSpacing
- `spacing` - 0 to 32 (4px to 128px)
- `borderRadius` - none to full
- `shadows` - sm to 2xl, plus glow effects
- `transitions` - duration and timing functions
- `zIndex` - layering scale
- `breakpoints` - responsive design

---

## ⚛️ Atoms (Primitives)

### Button

Flexible button component with multiple variants and states.

```typescript
import { Button } from '@/components';

<Button 
  variant="primary"      // primary | secondary | ghost | outline
  size="md"              // sm | md | lg
  isLoading={false}
  disabled={false}
  fullWidth={false}
  leftIcon={<Icon />}
  rightIcon={<Icon />}
  onClick={() => {}}
>
  Click Me
</Button>
```

**Examples:**

```tsx
// Primary button (default)
<Button variant="primary" size="lg">
  Contact Me
</Button>

// Ghost button with icon
<Button variant="ghost" leftIcon={<ArrowIcon />}>
  Learn More
</Button>

// Loading state
<Button isLoading>
  Submitting...
</Button>

// Full width button
<Button fullWidth variant="primary">
  Get Started
</Button>
```

**Props:**
- `variant`: Visual style - primary (default), secondary, ghost, outline
- `size`: Button size - sm, md (default), lg
- `isLoading`: Shows loading spinner
- `disabled`: Disables the button
- `fullWidth`: Makes button full width
- `leftIcon`/`rightIcon`: Icons before/after text
- Plus all standard HTML button props

---

### Text

Typography component for body text.

```typescript
import { Text } from '@/components';

<Text 
  variant="body"         // body | caption | label | small
  color="primary"        // primary | secondary | tertiary | accent | success | warning | error
  align="left"           // left | center | right
  weight="normal"        // light | normal | medium | semibold | bold
  as="p"                 // p | span | div
>
  Your text here
</Text>
```

**Examples:**

```tsx
// Body text (default)
<Text>
  This is standard body text.
</Text>

// Secondary color text
<Text color="secondary">
  Less emphasized text.
</Text>

// Caption text (larger)
<Text variant="caption" weight="medium">
  Larger introductory text.
</Text>

// Label text (smaller)
<Text variant="label" color="tertiary">
  Form label or small description.
</Text>

// Inline text
<Text as="span" color="accent">
  Highlighted inline text
</Text>
```

---

### Heading

Semantic heading component with flexible sizing.

```typescript
import { Heading } from '@/components';

<Heading 
  level="h2"             // h1 | h2 | h3 | h4 | h5 | h6
  size="4xl"             // xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | 7xl
  color="primary"        // primary | secondary | accent
  weight="bold"          // normal | medium | semibold | bold | extrabold
  gradient={false}       // Gradient text effect
>
  Your heading
</Heading>
```

**Examples:**

```tsx
// H1 with default size
<Heading level="h1">
  Johannes Wild
</Heading>

// H2 with custom size
<Heading level="h2" size="3xl">
  About Me
</Heading>

// Gradient heading (eye-catching!)
<Heading level="h1" gradient>
  Portfolio
</Heading>

// Smaller heading
<Heading level="h3" size="xl" weight="semibold">
  Skills
</Heading>
```

**Auto-sizing:**
If `size` prop is not provided, it defaults based on level:
- h1 → 5xl
- h2 → 4xl
- h3 → 3xl
- h4 → 2xl
- h5 → xl
- h6 → lg

---

### Container

Responsive container for content width management.

```typescript
import { Container } from '@/components';

<Container 
  size="lg"              // sm | md | lg | xl | full
  center={true}          // Auto-center with margins
>
  Your content
</Container>
```

**Examples:**

```tsx
// Standard container (default lg)
<Container>
  <p>Content constrained to max-width with padding</p>
</Container>

// Small container for narrow content
<Container size="sm">
  <p>Narrower content area (good for blog posts)</p>
</Container>

// Full width
<Container size="full">
  <p>Full width with padding</p>
</Container>
```

**Max Widths:**
- `sm`: 768px
- `md`: 1024px
- `lg`: 1280px (default)
- `xl`: 1400px
- `full`: 100%

---

### Link

Smart link component handling internal and external links.

```typescript
import { Link } from '@/components';

<Link 
  href="/path"
  variant="default"      // default | underline | button
  external={false}       // Add external link icon
>
  Link text
</Link>
```

**Examples:**

```tsx
// Internal link (uses Next.js Link)
<Link href="/about">
  About Me
</Link>

// External link with icon
<Link href="https://github.com" external>
  GitHub Profile
</Link>

// Underlined link
<Link href="/projects" variant="underline">
  View Projects
</Link>

// Button-styled link
<Link href="/contact" variant="button">
  Get In Touch
</Link>

// Email link
<Link href="mailto:johannes.wild@me.com">
  Send Email
</Link>
```

---

## 🧬 Molecules (Simple Components)

### Card

Container component with multiple visual styles.

```typescript
import { Card } from '@/components';

<Card 
  variant="default"      // default | elevated | outlined | glass
  hover={false}          // Add hover effects
  padding="md"           // sm | md | lg
>
  Card content
</Card>
```

**Examples:**

```tsx
// Default card
<Card>
  <h3>Card Title</h3>
  <p>Card content here</p>
</Card>

// Glass effect card (semi-transparent)
<Card variant="glass" padding="lg">
  <h3>Frosted Glass</h3>
  <p>With blur effect</p>
</Card>

// Interactive card with hover
<Card variant="elevated" hover>
  <h3>Hover Me!</h3>
  <p>Scales on hover</p>
</Card>

// Outlined card with small padding
<Card variant="outlined" padding="sm">
  <p>Compact card</p>
</Card>
```

**Variants:**
- `default`: Solid background with border
- `elevated`: Solid background with shadow
- `outlined`: Transparent with thick border
- `glass`: Semi-transparent with blur

---

### SkillBar

Animated progress bar for displaying skills or ratings.

```typescript
import { SkillBar } from '@/components';

<SkillBar 
  name="Skill Name"
  level={5}              // Current level
  maxLevel={6}           // Maximum level (default 6)
  showPercentage={true}  // Show level/maxLevel
  color="blue"           // blue | green | purple | pink
  animated={true}        // Animate on mount
/>
```

**Examples:**

```tsx
// Your rating system (6/6)
<SkillBar 
  name="Analytisches Denken" 
  level={6} 
  maxLevel={6}
  color="blue"
/>

// Percentage mode (100 scale)
<SkillBar 
  name="Deutsch" 
  level={100} 
  maxLevel={100}
  color="green"
  showPercentage={false}
/>

// Without animation
<SkillBar 
  name="TypeScript" 
  level={90}
  maxLevel={100}
  animated={false}
/>
```

**Perfect for:**
- Your "Benefits" section (6/6 ratings)
- Language proficiency (percentage)
- Technical skills
- Any measurable competency

---

### SocialLink

Icon links for social media and contact methods.

```typescript
import { SocialLink } from '@/components';

<SocialLink 
  platform="github"      // github | linkedin | twitter | email | website | phone
  url="https://..."
  label="Custom Label"   // Optional custom label
  size="md"              // sm | md | lg
  showLabel={false}      // Show text label
/>
```

**Examples:**

```tsx
// Icon only
<SocialLink 
  platform="github" 
  url="https://github.com/anotherdayasjohannes" 
/>

// With label
<SocialLink 
  platform="linkedin" 
  url="https://linkedin.com/in/yourprofile"
  showLabel
/>

// Email with custom label
<SocialLink 
  platform="email" 
  url="mailto:johannes.wild@me.com"
  label="Email Me"
  showLabel
/>

// Phone
<SocialLink 
  platform="phone" 
  url="tel:+4917193193446"
  label="+49 171 9319346"
  showLabel
/>

// Large size
<SocialLink 
  platform="twitter" 
  url="https://twitter.com/..."
  size="lg"
/>
```

**Available Platforms:**
- `github` - GitHub icon
- `linkedin` - LinkedIn icon
- `twitter` - Twitter/X icon
- `email` - Email envelope icon
- `website` - Globe icon
- `phone` - Phone icon

---

## 📄 Templates (Layouts)

### Section

Wrapper component for consistent page sections.

```typescript
import { Section } from '@/components';

<Section 
  spacing="lg"           // sm | md | lg | xl
  fullWidth={false}      // Skip Container wrapper
  background="transparent" // primary | secondary | transparent
>
  Section content
</Section>
```

**Examples:**

```tsx
// Standard section with large spacing
<Section spacing="lg">
  <Heading level="h2">About Me</Heading>
  <Text>Content here...</Text>
</Section>

// Section with background
<Section spacing="xl" background="secondary">
  <Heading level="h2">Skills</Heading>
  {/* Skills content */}
</Section>

// Full width section (no Container)
<Section fullWidth spacing="md">
  {/* You handle width/padding */}
</Section>

// Compact section
<Section spacing="sm">
  <Text>Smaller vertical spacing</Text>
</Section>
```

**Spacing Scale:**
- `sm`: 32-48px vertical padding
- `md`: 48-64px vertical padding
- `lg`: 64-96px vertical padding (default)
- `xl`: 96-128px vertical padding

---

## 🎯 Usage Patterns

### Combining Components

Components are designed to work together:

```tsx
<Section spacing="xl">
  <Container>
    <Heading level="h2" className="mb-6">
      My Skills
    </Heading>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card variant="glass" padding="lg">
        <Heading level="h4" className="mb-4">
          Soft Skills
        </Heading>
        <div className="space-y-4">
          <SkillBar name="Teamfähigkeit" level={6} maxLevel={6} />
          <SkillBar name="Kommunikation" level={5} maxLevel={6} />
        </div>
      </Card>
      
      <Card variant="glass" padding="lg">
        <Heading level="h4" className="mb-4">
          Languages
        </Heading>
        <div className="space-y-4">
          <SkillBar name="Deutsch" level={100} maxLevel={100} />
          <SkillBar name="Englisch" level={80} maxLevel={100} />
        </div>
      </Card>
    </div>
    
    <div className="mt-8 flex gap-4">
      <Button variant="primary">Contact Me</Button>
      <Button variant="ghost">View CV</Button>
    </div>
  </Container>
</Section>
```

### Responsive Design

All components are responsive by default. Use Tailwind classes:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card>Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols</Card>
</div>

<Heading 
  level="h1" 
  className="text-4xl md:text-5xl lg:text-6xl"
>
  Responsive heading
</Heading>
```

---

## 🎨 Theming & Customization

### Using Tailwind Classes

All components accept `className` prop for customization:

```tsx
<Button className="mt-4 shadow-lg">
  Custom Styles
</Button>

<Text className="max-w-prose">
  Text with max width
</Text>
```

### Common Utility Classes

```tsx
// Spacing
className="mt-4 mb-8 px-6"

// Layout
className="flex items-center gap-4"
className="grid grid-cols-3 gap-6"

// Typography
className="text-center uppercase tracking-wide"

// Responsive
className="hidden md:block"
className="w-full md:w-auto"
```

---

## 📝 Best Practices

1. **Always use semantic HTML**
   ```tsx
   // Good
   <Heading level="h1">Main Title</Heading>
   
   // Avoid
   <Heading level="h3" size="6xl">Looks like H1 but isn't</Heading>
   ```

2. **Use design tokens when possible**
   ```tsx
   // Good
   import { tokens } from '@/lib/design-tokens';
   style={{ color: tokens.colors.brand.primary }}
   
   // Avoid
   style={{ color: '#3B82F6' }}
   ```

3. **Compose components**
   ```tsx
   // Good - Build complex UIs from simple components
   <Card>
     <Heading level="h3">Title</Heading>
     <Text>Description</Text>
     <Button>Action</Button>
   </Card>
   ```

4. **Keep variants semantic**
   ```tsx
   // Good
   <Button variant="primary">Main Action</Button>
   <Button variant="ghost">Secondary Action</Button>
   
   // Avoid overusing primary
   <Button variant="primary">Everything</Button>
   <Button variant="primary">Is Primary</Button>
   ```

---

## 🧪 Testing

View all components in action:
- **Playground**: http://localhost:3100/playground
- **Component Props**: Check `types.ts` files for each component

---

## 📖 Further Reading

- `DESIGN_SYSTEM.md` - Architecture overview
- `design-tokens.ts` - Token reference
- `PROGRESS.md` - What we've built
- Component source code - Detailed implementation

---

**Need Help?** Check the playground page or component source files!



