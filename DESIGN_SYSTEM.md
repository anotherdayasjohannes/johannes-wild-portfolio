# 🎨 Design System Architecture

This project follows **Atomic Design** methodology for a scalable, maintainable component system.

## 🏗️ Architecture Layers

```
┌─────────────────────────────────────┐
│     Design Tokens (Foundation)      │  ← Colors, spacing, typography
├─────────────────────────────────────┤
│     Atoms (Primitives)              │  ← Button, Text, Heading, Icon
├─────────────────────────────────────┤
│     Molecules (Simple Components)   │  ← Card, SkillBar, SocialLink
├─────────────────────────────────────┤
│     Organisms (Complex Components)  │  ← Hero, Timeline, ContactForm
├─────────────────────────────────────┤
│     Templates (Page Layouts)        │  ← MainLayout, SectionWrapper
├─────────────────────────────────────┤
│     Pages (Actual Pages)            │  ← Home, Blog, About
└─────────────────────────────────────┘
```

---

## 📂 Folder Structure

```
frontend/
├── lib/
│   └── design-tokens.ts         # Foundation: Colors, spacing, typography, etc.
│
├── components/
│   ├── atoms/                   # ⚛️ PRIMITIVES
│   │   ├── Button/
│   │   ├── Text/
│   │   ├── Heading/
│   │   ├── Container/
│   │   ├── Icon/
│   │   └── Link/
│   │
│   ├── molecules/               # 🧬 SIMPLE COMPONENTS
│   │   ├── Card/
│   │   ├── SkillBar/
│   │   ├── SocialLink/
│   │   ├── ExperienceCard/
│   │   └── TestimonialCard/
│   │
│   ├── organisms/               # 🦠 COMPLEX COMPONENTS
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── ExperienceTimeline/
│   │   ├── SkillsGrid/
│   │   ├── ProjectsGrid/
│   │   ├── TestimonialsSection/
│   │   └── ContactForm/
│   │
│   └── templates/               # 📄 LAYOUTS
│       ├── MainLayout/
│       ├── Section/
│       └── PageWrapper/
│
└── app/
    └── page.tsx                # 📱 HOME PAGE (composes everything)
```

---

## 🎯 Component Guidelines

### ⚛️ **Atoms (Primitives)**
- Single-purpose, reusable elements
- Accept design tokens as props
- No business logic
- Highly composable

**Examples:**
- `<Button variant="primary" size="lg">Click</Button>`
- `<Heading level="h1" size="4xl">Title</Heading>`
- `<Text color="secondary">Description</Text>`

---

### 🧬 **Molecules (Simple Components)**
- Combinations of atoms
- Specific purpose
- Still reusable

**Examples:**
- `<Card>` (Container + Text + Button)
- `<SkillBar name="React" level={90} />`
- `<SocialLink platform="github" url="..." />`

---

### 🦠 **Organisms (Complex Components)**
- Feature-complete sections
- Combine molecules and atoms
- May connect to data

**Examples:**
- `<Hero profile={data} />`
- `<ExperienceTimeline experiences={data} />`
- `<ContactForm onSubmit={...} />`

---

### 📄 **Templates (Layouts)**
- Page structure
- Define slots for organisms
- Handle responsive behavior

**Examples:**
- `<MainLayout>` (Header + Main + Footer)
- `<Section>` (Wrapper with consistent padding)

---

## 🎨 Design Tokens

Located in `lib/design-tokens.ts`:

```typescript
import { tokens } from '@/lib/design-tokens';

// Use tokens instead of hardcoding values
color: tokens.colors.brand.primary
padding: tokens.spacing[8]
fontSize: tokens.typography.fontSize['2xl']
```

### Available Token Categories:
- ✅ **Colors** - brand, neutral, background, text, border, semantic
- ✅ **Typography** - fontFamily, fontSize, fontWeight, lineHeight
- ✅ **Spacing** - consistent scale (4px to 128px)
- ✅ **Border Radius** - sm to full
- ✅ **Shadows** - including glow effects for dark theme
- ✅ **Transitions** - duration and timing functions
- ✅ **Z-Index** - layering scale
- ✅ **Breakpoints** - responsive design

---

## 🚀 Development Workflow

1. **Start with tokens** ✅
2. **Build atoms** (Button, Text, Heading, etc.)
3. **Compose molecules** (Card, SkillBar, etc.)
4. **Create organisms** (Hero, Timeline, etc.)
5. **Define templates** (Layouts)
6. **Build pages** (Home page)

---

## 📝 Component Template

Each component should have:

```
ComponentName/
├── index.tsx          # Component implementation
├── types.ts           # TypeScript interfaces
└── ComponentName.stories.tsx  # (Optional) Storybook stories
```

**Example Component:**

```typescript
// atoms/Button/types.ts
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

// atoms/Button/index.tsx
import { tokens } from '@/lib/design-tokens';
import { ButtonProps } from './types';

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children,
  onClick 
}: ButtonProps) => {
  // Implementation using design tokens
};
```

---

## 🎯 Benefits of This Approach

✅ **Consistency** - Design tokens ensure visual harmony
✅ **Reusability** - Build once, use everywhere
✅ **Maintainability** - Change tokens, update entire system
✅ **Scalability** - Easy to add new components
✅ **Type Safety** - TypeScript for all components
✅ **Testability** - Isolated, pure components
✅ **Documentation** - Clear hierarchy and purpose

---

## 🔄 Next Steps

- [ ] Build Atoms (Button, Text, Heading, Container, Icon, Link)
- [ ] Build Molecules (Card, SkillBar, SocialLink, etc.)
- [ ] Build Organisms (Hero, About, Timeline, etc.)
- [ ] Create Templates (MainLayout, Section)
- [ ] Compose Homepage

Let's build something solid! 🚀

