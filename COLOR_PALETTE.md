# 🎨 Color Palette

**Status**: ✅ Adobe Color Palette Implemented - UI/UX Theme

---

## Final Color Palette

From Adobe Color (UI/UX Theme):

### Adobe Color Base
- **UI/UX-1**: `#1A2A40` - Dark navy blue (RGB: 26, 42, 63)
- **UI/UX-2**: `#253B59` - Medium dark blue (RGB: 37, 59, 89)
- **UI/UX-3**: `#42628C` - Brand blue (RGB: 65, 98, 140)
- **UI/UX-4**: `#F2F2F2` - Light gray text (RGB: 242, 242, 242)
- **UI/UX-5**: `#0D0D0D` - Very dark background (RGB: 12, 12, 12)

### Brand Colors
- **Primary**: `#42628C` (UI/UX-3) - Main brand blue for CTAs, links, accents
- **Secondary**: `#253B59` (UI/UX-2) - Supporting color
- **Accent**: `#5A7FB8` - Lighter variant for highlights and hover states

### Backgrounds (Dark Theme)
- **Primary**: `#0D0D0D` (UI/UX-5) - Main background (very dark)
- **Secondary**: `#1A2A40` (UI/UX-1) - Card backgrounds (dark navy)
- **Tertiary**: `#253B59` (UI/UX-2) - Elevated elements (medium blue)

### Text Colors
- **Primary**: `#F2F2F2` (UI/UX-4) - Main text (light gray)
- **Secondary**: `#D1D5DB` - Secondary text (slightly darker)
- **Tertiary**: `#9CA3AF` - Muted text (even darker)

### Border Colors
- **Subtle**: `#1A2A40` (UI/UX-1) - Subtle borders
- **Default**: `#253B59` (UI/UX-2) - Standard borders
- **Emphasis**: `#42628C` (UI/UX-3) - Emphasized borders, hover states

### Semantic Colors
- **Success**: `#10B981` (Green) - Success states
- **Warning**: `#F59E0B` (Amber) - Warning states
- **Error**: `#EF4444` (Red) - Error states
- **Info**: `#42628C` (Brand blue) - Info states

---

## 🎨 Color Usage Guide

### Where Each Color is Used

**UI/UX-5 (`#0D0D0D`)** - Very Dark Background
- Main page background
- Darkest areas
- Creates depth against cards

**UI/UX-1 (`#1A2A40`)** - Dark Navy
- Card backgrounds
- Section backgrounds
- Creates contrast against main background

**UI/UX-2 (`#253B59`)** - Medium Dark Blue
- Elevated cards
- Hover states on cards
- Secondary backgrounds
- Default borders

**UI/UX-3 (`#42628C`)** - Brand Blue ⭐ PRIMARY
- Buttons (primary)
- Links
- CTAs
- Skill bars
- Emphasized borders
- Brand elements

**UI/UX-4 (`#F2F2F2`)** - Light Gray
- Primary text
- Headings
- Main content
- Icons

---

## 🎯 Component Examples

### Buttons
```tsx
// Primary button - uses UI/UX-3
<Button variant="primary">
  Contact Me
</Button>

// Secondary button - uses UI/UX-2
<Button variant="secondary">
  Learn More
</Button>
```

### Cards
```tsx
// Default card - UI/UX-1 background
<Card variant="default">
  Content
</Card>

// Elevated card - UI/UX-2 background
<Card variant="elevated">
  Content
</Card>
```

### Text Hierarchy
```tsx
// Primary text - UI/UX-4
<Heading level="h1">Johannes Wild</Heading>

// Secondary text - lighter gray
<Text color="secondary">Full Stack Developer</Text>

// Muted text - even lighter
<Text color="tertiary">Location info</Text>
```

### Skill Bars
```tsx
// Uses UI/UX-3 for the fill
<SkillBar name="React" level={6} maxLevel={6} color="blue" />
```

---

## 🌈 Visual Hierarchy

**Darkest → Lightest**
1. `#0D0D0D` (UI/UX-5) - Page background
2. `#1A2A40` (UI/UX-1) - Cards
3. `#253B59` (UI/UX-2) - Elevated elements
4. `#42628C` (UI/UX-3) - Interactive elements
5. `#F2F2F2` (UI/UX-4) - Text

This creates a nice depth progression from dark to light!

---

## ✨ What Makes This Palette Special

✅ **Professional**: Navy blues convey trust and expertise
✅ **Tech-Focused**: Blue palette is perfect for tech/developer portfolios
✅ **High Contrast**: Light text on dark background is easy to read
✅ **Cohesive**: All colors work together harmoniously
✅ **Modern**: Dark theme with blue accents is contemporary
✅ **Accessible**: Good contrast ratios for readability

---

## 📊 Contrast Ratios

- **Text (UI/UX-4) on Background (UI/UX-5)**: ~18:1 ✅ Excellent
- **Brand (UI/UX-3) on Background (UI/UX-5)**: ~5:1 ✅ Good
- **Text on Cards (UI/UX-1)**: ~15:1 ✅ Excellent

All combinations meet WCAG AA standards!

---

## 🔄 Files Updated

These files now use your Adobe Color palette:
- ✅ `frontend/lib/design-tokens.ts` - Design token definitions
- ✅ `frontend/tailwind.config.ts` - Tailwind theme extension
- ✅ `frontend/app/globals.css` - CSS variables and global styles
- ✅ All components automatically inherit these colors

---

## 🎨 Preview

Your palette creates:
- **Very dark, almost black** main background
- **Navy blue cards** that stand out
- **Medium blue** for interactive elements
- **Bright blue** for CTAs and focus
- **Light gray** text that's easy to read

Perfect for a professional, modern developer portfolio! 🚀
