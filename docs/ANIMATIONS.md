# Animation System

Modern, lightweight animation system using **Motion One** (5KB) and **Auto-Animate** (2KB).

## 📦 What's Included

### Animation Components
- `<FadeIn>` - Fade in on scroll
- `<SlideUp>` - Slide up on scroll
- `<SlideDown>` - Slide down on scroll
- `<SlideInLeft>` - Slide in from left
- `<SlideInRight>` - Slide in from right
- `<Scale>` - Scale up on scroll
- `<Stagger>` - Stagger children animations
- `<AutoAnimate>` - Automatic list animations (zero config!)
- `<OnMount>` - Animate on component mount

### Hooks
- `useAnimateOnMount` - Animate element on mount
- `useAnimateOnScroll` - Animate on scroll into view
- `useScrollProgress` - Animate based on scroll progress
- `useStagger` - Stagger children animations

### Utilities
- `animationPresets` - Pre-configured animation settings
- `animateOnScroll` - Imperative scroll animation
- `animateStagger` - Imperative stagger animation
- `animateOnScrollProgress` - Scroll-linked animation

---

## 🚀 Quick Start

### Basic Usage

```tsx
import { FadeIn, SlideUp } from '@/lib/animations';

function MyComponent() {
  return (
    <>
      {/* Simple fade in */}
      <FadeIn>
        <Card>This fades in when scrolled into view</Card>
      </FadeIn>

      {/* Slide up with delay */}
      <SlideUp delay={0.2}>
        <Heading>This slides up 0.2s later</Heading>
      </SlideUp>
    </>
  );
}
```

### Sequential Animations

```tsx
<FadeIn>
  <Heading>First</Heading>
</FadeIn>

<FadeIn delay={0.2}>
  <Text>Second (after 0.2s)</Text>
</FadeIn>

<FadeIn delay={0.4}>
  <Button>Third (after 0.4s)</Button>
</FadeIn>
```

### Stagger (List Animations)

```tsx
import { Stagger } from '@/lib/animations';

<Stagger staggerDelay={0.1}>
  <div className="grid grid-cols-3 gap-4">
    <Card>Item 1</Card>
    <Card>Item 2</Card>
    <Card>Item 3</Card>
    {/* Children animate one by one with 0.1s delay */}
  </div>
</Stagger>
```

### AutoAnimate (Dynamic Lists)

```tsx
import { AutoAnimate } from '@/lib/animations';

function SkillsList() {
  const [skills, setSkills] = useState([...]);

  return (
    <AutoAnimate>
      {skills.map(skill => (
        <SkillBar key={skill.id} {...skill} />
      ))}
      {/* Automatically animates when items are added/removed/reordered! */}
    </AutoAnimate>
  );
}
```

---

## 📚 Component API

### FadeIn

Fades in element when scrolled into view.

```tsx
<FadeIn
  delay={0}          // Delay in seconds (default: 0)
  className=""       // Additional CSS classes
  as="div"           // HTML element to render (default: 'div')
>
  {children}
</FadeIn>
```

### SlideUp

Slides up and fades in when scrolled into view.

```tsx
<SlideUp
  delay={0}          // Delay in seconds
  className=""       // Additional CSS classes
  as="div"           // HTML element to render
>
  {children}
</SlideUp>
```

### SlideInLeft / SlideInRight

Slides in from left or right when scrolled into view.

```tsx
<SlideInLeft delay={0} className="" as="div">
  {children}
</SlideInLeft>

<SlideInRight delay={0} className="" as="div">
  {children}
</SlideInRight>
```

### Scale

Scales up from 90% to 100% while fading in.

```tsx
<Scale delay={0} className="" as="div">
  {children}
</Scale>
```

### Stagger

Animates children with sequential delays.

```tsx
<Stagger
  staggerDelay={0.1}  // Delay between each child (seconds)
  className=""        // Additional CSS classes
  as="div"            // HTML element to render
>
  <div>Child 1</div>
  <div>Child 2</div>
  <div>Child 3</div>
</Stagger>
```

### AutoAnimate

Automatically animates children when added/removed/reordered.

```tsx
<AutoAnimate
  duration={250}           // Animation duration in ms
  easing="ease-in-out"     // CSS easing function
  className=""             // Additional CSS classes
  as="div"                 // HTML element to render
>
  {dynamicChildren}
</AutoAnimate>
```

### OnMount

Animates immediately on component mount (no scroll trigger).

```tsx
<OnMount delay={0} className="" as="div">
  {children}
</OnMount>
```

---

## 🎨 Advanced Usage

### Custom Element

Change the rendered HTML element:

```tsx
<FadeIn as="section">
  <Heading>This is in a section tag</Heading>
</FadeIn>

<SlideUp as="article" className="my-article">
  <Text>This is in an article tag</Text>
</SlideUp>
```

### Combining Animations

```tsx
<SlideUp>
  <GlassCard hover>
    <FadeIn delay={0.2}>
      <Heading>Nested animations!</Heading>
    </FadeIn>
    <FadeIn delay={0.4}>
      <Text>Each element animates independently</Text>
    </FadeIn>
    <Stagger staggerDelay={0.1}>
      <div className="flex gap-2">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </div>
    </Stagger>
  </GlassCard>
</SlideUp>
```

### Using Hooks

```tsx
import { useAnimateOnScroll } from '@/lib/animations';

function MyComponent() {
  const ref = useAnimateOnScroll({
    opacity: [0, 1],
    y: [50, 0],
    duration: 0.8,
  });

  return (
    <div ref={ref as any}>
      Custom animation!
    </div>
  );
}
```

### Custom Animation

```tsx
import { useAnimateOnScroll } from '@/lib/animations';

function MyComponent() {
  const ref = useAnimateOnScroll({
    opacity: [0, 1],
    scale: [0.5, 1],
    rotate: [0, 360],
    duration: 1,
    easing: 'ease-out',
  });

  return <div ref={ref as any}>Spins in!</div>;
}
```

---

## 🎯 Best Practices

### DO ✅

- **Use sparingly** - Not every element needs animation
- **Stagger lists** - Use `<Stagger>` for grids and lists
- **Sequential reveals** - Use `delay` prop for storytelling
- **AutoAnimate for dynamic content** - Perfect for filtered lists
- **Test on mobile** - Animations should feel smooth on all devices

### DON'T ❌

- **Don't over-animate** - Too many animations = overwhelming
- **Don't animate text** - Keep body text static for readability
- **Don't use long delays** - Keep delays under 0.5s
- **Don't animate everything** - Use animation to direct attention
- **Don't nest too deeply** - Max 2-3 levels of nested animations

### Good Patterns

```tsx
// ✅ Hero section with sequential reveals
<SlideUp>
  <Logo />
</SlideUp>
<FadeIn delay={0.2}>
  <Heading>Johannes Wild</Heading>
</FadeIn>
<FadeIn delay={0.4}>
  <Text>Full Stack Developer</Text>
</FadeIn>

// ✅ Project grid with stagger
<Stagger staggerDelay={0.15}>
  <div className="grid grid-cols-3 gap-6">
    {projects.map(project => (
      <ProjectCard key={project.id} {...project} />
    ))}
  </div>
</Stagger>

// ✅ Skills with auto-animate
<AutoAnimate>
  {skills.map(skill => (
    <SkillBar key={skill.id} {...skill} />
  ))}
</AutoAnimate>
```

### Bad Patterns

```tsx
// ❌ Too many nested animations
<FadeIn>
  <SlideUp>
    <Scale>
      <SlideInLeft>
        <div>Too much!</div>
      </SlideInLeft>
    </Scale>
  </SlideUp>
</FadeIn>

// ❌ Animating body text
<FadeIn>
  <Text>Long paragraph of body text that should just be static...</Text>
</FadeIn>

// ❌ Delays too long
<FadeIn delay={2}>
  <Heading>Users will get impatient!</Heading>
</FadeIn>
```

---

## 🎬 Animation Presets

Built-in animation configurations:

```typescript
animationPresets = {
  // Timing
  fast: { duration: 0.3 },
  normal: { duration: 0.5 },
  slow: { duration: 0.8 },
  
  // Easing
  easeOut: { easing: 'ease-out' },
  easeInOut: { easing: 'ease-in-out' },
  spring: { easing: 'spring(1, 100, 10, 0)' },
  
  // Effects
  fadeIn: { opacity: [0, 1], duration: 0.5, easing: 'ease-out' },
  slideUp: { opacity: [0, 1], y: [20, 0], duration: 0.5, easing: 'ease-out' },
  slideDown: { opacity: [0, 1], y: [-20, 0], duration: 0.5, easing: 'ease-out' },
  slideInLeft: { opacity: [0, 1], x: [-20, 0], duration: 0.5, easing: 'ease-out' },
  slideInRight: { opacity: [0, 1], x: [20, 0], duration: 0.5, easing: 'ease-out' },
  scale: { opacity: [0, 1], scale: [0.9, 1], duration: 0.5, easing: 'ease-out' },
}
```

---

## 📊 Performance

### Bundle Size
- **Motion One**: 5KB gzipped
- **Auto-Animate**: 2KB gzipped
- **Total**: 7KB (vs Framer Motion's 35KB)

### Performance Characteristics
- ✅ GPU-accelerated (uses transform and opacity)
- ✅ 60fps on modern devices
- ✅ Respects `prefers-reduced-motion`
- ✅ Runs on main thread AND Web Animations API
- ✅ No layout thrashing

### Mobile Performance
All animations are tested and optimized for mobile devices. They use hardware-accelerated CSS properties (opacity, transform) for smooth 60fps performance.

---

## 🌐 Browser Support

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

**Note**: Graceful degradation for older browsers (elements appear without animation).

---

## 💡 Examples

See the [Playground](/playground) for interactive examples of all animation components!

### Hero Section

```tsx
<Section>
  <OnMount>
    <Logo />
  </OnMount>
  
  <SlideUp delay={0.2}>
    <Heading level="h1">Johannes Wild</Heading>
  </SlideUp>
  
  <FadeIn delay={0.4}>
    <Text>Full Stack Developer</Text>
  </FadeIn>
  
  <SlideUp delay={0.6}>
    <Button>Contact Me</Button>
  </SlideUp>
</Section>
```

### Skills Section

```tsx
<Section>
  <FadeIn>
    <Heading>My Skills</Heading>
  </FadeIn>
  
  <AutoAnimate className="space-y-4">
    <SkillBar name="React" level={6} />
    <SkillBar name="TypeScript" level={5} />
    <SkillBar name="Node.js" level={6} />
  </AutoAnimate>
</Section>
```

### Projects Grid

```tsx
<Section>
  <FadeIn>
    <Heading>Featured Projects</Heading>
  </FadeIn>
  
  <Stagger staggerDelay={0.15}>
    <div className="grid grid-cols-3 gap-6">
      {projects.map(project => (
        <GlassCard hover key={project.id}>
          <ProjectDetails {...project} />
        </GlassCard>
      ))}
    </div>
  </Stagger>
</Section>
```

---

## 🔗 Resources

- [Motion One Documentation](https://motion.dev/)
- [Auto-Animate Documentation](https://auto-animate.formkit.com/)
- [MDN: Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [Playground Examples](/playground)

---

**Built with ❤️ using Motion One + Auto-Animate**

