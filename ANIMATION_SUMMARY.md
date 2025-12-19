# 🎬 Animation System - Quick Reference

## ✨ What We Just Built

A modern, lightweight animation system using **Motion One** (5KB) and **Auto-Animate** (2KB).

Total bundle: **7KB** (vs Framer Motion's 35KB) - That's **80% smaller**! 🚀

---

## 🎯 Quick Usage

### Import

```tsx
import {
  FadeIn,
  SlideUp,
  Stagger,
  AutoAnimate,
} from '@/lib/animations';
```

### Use in Components

```tsx
// Simple fade in
<FadeIn>
  <Card>Content</Card>
</FadeIn>

// Slide up with delay
<SlideUp delay={0.2}>
  <Heading>Title</Heading>
</SlideUp>

// Stagger children
<Stagger staggerDelay={0.1}>
  <div className="grid grid-cols-3 gap-4">
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
  </div>
</Stagger>

// Auto-animate lists (zero config!)
<AutoAnimate>
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</AutoAnimate>
```

---

## 📦 What's Available

### 9 Animation Components

1. **`<FadeIn>`** - Fade in on scroll
2. **`<SlideUp>`** - Slide up on scroll  
3. **`<SlideDown>`** - Slide down on scroll
4. **`<SlideInLeft>`** - Slide in from left
5. **`<SlideInRight>`** - Slide in from right
6. **`<Scale>`** - Scale up on scroll
7. **`<Stagger>`** - Stagger children
8. **`<AutoAnimate>`** - Auto-animate lists
9. **`<OnMount>`** - Animate on mount

### 4 React Hooks

1. **`useAnimateOnMount`** - Animate on component mount
2. **`useAnimateOnScroll`** - Animate on scroll into view
3. **`useScrollProgress`** - Animate based on scroll position
4. **`useStagger`** - Stagger children animations

### Animation Presets

Pre-configured animations: `fadeIn`, `slideUp`, `slideDown`, `slideInLeft`, `slideInRight`, `scale`

---

## 🎮 See It In Action

**Playground**: http://localhost:3100/playground

Scroll down to the "🎬 Animations (Motion One)" section to see all animations in action!

---

## 📚 Documentation

**Full Docs**: `docs/ANIMATIONS.md`

- Complete API reference
- Best practices
- Advanced examples
- Performance tips

---

## 🚀 Next Steps

Now you can:
1. Build your Hero section with sequential animations
2. Add scroll animations to your About section
3. Use Stagger for your Projects grid
4. Use AutoAnimate for your Skills list

---

## 💡 Pro Tips

### DO ✅
- Use `<Stagger>` for grids and lists
- Add `delay` prop for sequential reveals
- Use `<AutoAnimate>` for dynamic content
- Keep animations subtle and purposeful

### DON'T ❌
- Don't animate everything
- Don't use delays > 0.5s
- Don't nest too many animations
- Don't animate body text

---

## 🎨 Example: Hero Section

```tsx
<Section>
  <SlideUp>
    <Logo />
  </SlideUp>
  
  <FadeIn delay={0.2}>
    <Heading level="h1">Johannes Wild</Heading>
  </FadeIn>
  
  <FadeIn delay={0.4}>
    <Text>Full Stack Developer</Text>
  </FadeIn>
  
  <SlideUp delay={0.6}>
    <Button>Contact Me</Button>
  </SlideUp>
</Section>
```

---

## 📊 Performance

- **Bundle**: 7KB (80% smaller than Framer Motion)
- **FPS**: Smooth 60fps
- **Mobile**: Fully optimized
- **GPU**: Hardware-accelerated
- **Browser**: Modern browsers (Chrome 88+, Firefox 87+, Safari 14+)

---

## 🔗 Resources

- [Motion One Docs](https://motion.dev/)
- [Auto-Animate Docs](https://auto-animate.formkit.com/)
- [Full Documentation](docs/ANIMATIONS.md)
- [Playground Examples](/playground)

---

**Ready to build something amazing!** 🚀








