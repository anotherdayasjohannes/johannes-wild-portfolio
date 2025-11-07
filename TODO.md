# TODO - Johannes Wild Portfolio

Track progress and coordinate between Claude (planning/architecture) and Cursor (implementation).

## 🎯 Current Sprint: Foundation Setup

### ✅ Completed
- [x] Project structure created
- [x] README documentation

### 🏗️ In Progress
- [ ] Initialize Next.js with TypeScript
- [ ] Initialize Sanity Studio
- [ ] Create Git repository

### 📋 Next Up
- [ ] Configure Tailwind CSS
- [ ] Set up Sanity schemas
- [ ] Create basic layout components

---

## Phase 1: Foundation (Week 1-2)

### Frontend Setup
- [ ] Initialize Next.js 14 with App Router
- [ ] Configure TypeScript
- [ ] Set up Tailwind CSS
- [ ] Install dependencies:
  - [ ] @sanity/client
  - [ ] framer-motion
  - [ ] react-hook-form
  - [ ] next-sanity
  - [ ] @portabletext/react
- [ ] Create basic layout structure
- [ ] Set up dark theme configuration
- [ ] Configure fonts (similar to current site)

### Sanity Studio Setup
- [ ] Initialize Sanity project
- [ ] Create schemas:
  - [ ] siteSettings (singleton)
  - [ ] profile (singleton)
  - [ ] skills
  - [ ] experience
  - [ ] projects
  - [ ] testimonials (optional)
- [ ] Configure Sanity Vision plugin
- [ ] Set up image handling

### Git & Deployment
- [ ] Initialize Git repository
- [ ] Create `.gitignore`
- [ ] First commit with base structure
- [ ] Connect to GitHub
- [ ] Link to Vercel
- [ ] Set up environment variables

---

## Phase 2: Content & Components (Week 2-3)

### Components to Build
- [ ] Layout
  - [ ] Header/Navigation
  - [ ] Footer
  - [ ] PageWrapper (with border lines)
- [ ] Sections
  - [ ] HeroSection (with photo)
  - [ ] AboutSection
  - [ ] MotivationSection
  - [ ] SkillsSection (with progress bars)
  - [ ] ExperienceTimeline
  - [ ] ProjectsGrid
  - [ ] ContactSection
- [ ] UI Components
  - [ ] Button
  - [ ] Card
  - [ ] SkillBar
  - [ ] SectionTitle
  - [ ] ContactForm

### Content Migration
- [ ] Extract content from WordPress HTML
- [ ] Structure content for Sanity
- [ ] Import profile information
- [ ] Import skills data
- [ ] Import experience entries
- [ ] Import project descriptions
- [ ] Migrate images
- [ ] Set up contact form handling

### Sanity Integration
- [ ] Create Sanity client utility
- [ ] Write GROQ queries
- [ ] Implement data fetching
- [ ] Add loading states
- [ ] Test content updates

---

## Phase 3: Polish & Launch (Week 3-4)

### Styling & Animations
- [ ] Replicate dark theme aesthetic
- [ ] Add smooth scroll behavior
- [ ] Implement scroll-triggered animations
- [ ] Add hover effects
- [ ] Optimize for mobile
- [ ] Add loading animations
- [ ] Implement typing animation (for hero)

### Features
- [ ] Contact form submission
- [ ] Form validation
- [ ] Success/error messages
- [ ] Social media links
- [ ] Download CV functionality (optional)
- [ ] Language toggle DE/EN (future)

### SEO & Performance
- [ ] Meta tags configuration
- [ ] Open Graph tags
- [ ] Sitemap generation
- [ ] Image optimization
- [ ] Performance audit
- [ ] Accessibility audit
- [ ] Analytics setup (GA4)

### Deployment
- [ ] Test production build
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] Set up SSL
- [ ] Test on multiple devices
- [ ] Final review

---

## Phase 4: Make It Cool 😎 (Ongoing)

### Future Enhancements
- [ ] Particle/glitch effects on hero
- [ ] Interactive skill visualization
- [ ] Project hover effects
- [ ] Parallax scrolling
- [ ] Custom cursor
- [ ] Dark/light theme toggle
- [ ] Blog functionality
- [ ] Case studies section
- [ ] Testimonials slider
- [ ] Easter eggs 🥚

---

## 📝 Notes & Decisions

### Technology Decisions
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity.io
- **Hosting**: Vercel
- **Animations**: Framer Motion

### Design Decisions
- Keep initial version close to current design (dark theme, clean layout)
- Focus on performance and simplicity first
- Add "cool" features incrementally

### Content Structure
- Single-page application (same as current)
- Sections: Hero, About, Motivation, Skills, Experience, Projects, Contact
- German language (English translation later)

---

## 🤝 Collaboration Notes

### When to use Claude:
- Planning new features
- Schema design
- Architecture decisions
- Code reviews
- Complex problem solving

### When to use Cursor:
- Component implementation
- Styling and CSS
- Bug fixing
- Refactoring
- Quick iterations

### Communication:
- Update this TODO.md as you complete tasks
- Add notes/questions in the relevant section
- Mark blockers with ⚠️
- Mark urgent items with 🔥

---

## ⚠️ Blockers & Questions

None yet! Let's build! 🚀

---

## 🎉 Wins & Milestones

- Project structure created! ✨
