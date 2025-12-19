# 🎯 Polish Upgrade Plan

## Goal: Dennis Snellenberg-Level Polish

Transform the portfolio from "good" to "jaw-dropping" through smooth scroll, scroll-triggered animations, custom cursor, and kinetic typography.

---

## Progress Tracker

### Phase 0: Preparation ⏳
- [ ] Document baseline typography
- [ ] Create `/lib/lenis/` structure
- [ ] Create `/lib/gsap/` structure
- [ ] Create `/components/ui/` structure

### Phase 1: Lenis Smooth Scroll ⏳
- [ ] Install `@studio-freight/lenis`
- [ ] Create `LenisProvider.tsx`
- [ ] Create `useLenis.ts` hook
- [ ] Integrate into layout
- [ ] Test anchor links
- [ ] Test mobile scroll

### Phase 2: GSAP + ScrollTrigger ⏳
- [ ] Install `gsap` and `@gsap/react`
- [ ] Create `GSAPProvider.tsx`
- [ ] Sync GSAP with Lenis
- [ ] Create scroll animation utilities
- [ ] Test basic scroll animations

### Phase 3: Custom Cursor ⏳
- [ ] Create `Cursor` component
- [ ] Create `CursorProvider.tsx`
- [ ] Add magnetic effect to buttons
- [ ] Add hover state changes
- [ ] Hide on touch devices

### Phase 4: Animated Text ⏳
- [ ] Install `split-type`
- [ ] Create `AnimatedText` component
- [ ] Create text reveal animations
- [ ] Test with i18n (EN/DE)

### Phase 5: Compose Page ⏳
- [ ] Add all sections to home page
- [ ] Add scroll-triggered entrances
- [ ] Test section transitions

### Phase 6: Polish ⏳
- [ ] Page transitions
- [ ] Micro-interactions
- [ ] Loading states
- [ ] Final review

---

## Dependencies to Install

```bash
# In Codespaces terminal, from /frontend:
npm install @studio-freight/lenis gsap @gsap/react split-type
```

---

## Key Files

| File | Purpose |
|------|---------|
| `lib/lenis/LenisProvider.tsx` | Smooth scroll context |
| `lib/gsap/GSAPProvider.tsx` | GSAP plugin registration |
| `components/ui/Cursor/index.tsx` | Custom cursor |
| `components/ui/AnimatedText/index.tsx` | Text animations |

---

## Testing Checklist

Before each phase completion:
- [ ] Desktop Chrome
- [ ] Desktop Safari
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)
- [ ] Reduced motion preference respected
- [ ] No console errors
- [ ] No hydration mismatches
