# Johannes Wild - Personal Portfolio

**Status:** 🟢 **Design System Complete** | 🟡 **Content Integration Next**

Modern executive portfolio built with Next.js 14, Sanity CMS, and a production-ready Atomic Design system.

> *"Less but better"* - Dieter Rams philosophy applied throughout

---

## 🏗️ Project Structure

```
johannes-wild-portfolio/
├── frontend/          # Next.js application with design system
├── studio/           # Sanity Studio CMS
└── docs/             # Documentation
```

## 🎨 Design System

This project features a **production-ready Atomic Design** system:

- **Design Tokens** ✅ - Adobe Color palette, Geist typography, spacing scale
- **Atoms** ✅ - Button, Text, Heading, Link, Logo, Container (8 components)
- **Molecules** ✅ - Card, SkillBar, SocialLink, GlassCard (4 components)
- **Organisms** ✅ - Header, Hero, Footer (3 components built, more planned)
- **Templates** ✅ - Section wrapper with responsive layouts
- **Animations** ✅ - Motion One + AutoAnimate system (9 components, 4 hooks)

👉 **Interactive Playground**: `/playground` (when running)  
👉 **Full Demo**: `/demo-page` (Header + Hero + Footer integration)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup

1. **Clone and Install**
```bash
git clone <your-repo>
cd johannes-wild-portfolio

# Install frontend
cd frontend
npm install

# Install Sanity Studio
cd ../studio
npm install
```

2. **Environment Variables**

Create `.env.local` in `/frontend`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

3. **Run Development**

**For GitHub Codespaces (Recommended):**
```bash
# Terminal 1 - Frontend (Codespaces will forward port 3100)
cd frontend
npm run dev

# Terminal 2 - Sanity Studio (Codespaces will forward port 3444)
cd studio
npm run dev
```
**Access via:** Your Codespaces forwarded port URLs (click "Ports" tab)

**For Local Development:**
```bash
# Terminal 1 - Frontend (http://localhost:3100)
cd frontend
npm run dev

# Terminal 2 - Sanity Studio (http://localhost:3444)
cd studio
npm run dev
```

## 🔄 Workflow: Claude + Cursor Team

### Phase 1: Foundation (Current)
- [x] Project structure setup
- [ ] Next.js configuration
- [ ] Sanity schemas
- [ ] Basic components
- [ ] Initial styling

### Phase 2: Content Migration
- [ ] Extract content from WordPress
- [ ] Import to Sanity
- [ ] Connect frontend to Sanity API

### Phase 3: Polish & Deploy
- [ ] Animations
- [ ] Performance optimization
- [ ] SEO setup
- [ ] Deploy to Vercel

### Working with Claude & Cursor
1. **Planning with Claude** - Architecture, schemas, complex logic
2. **Coding with Cursor** - Implementation, styling, debugging
3. **Review with Claude** - Code review, optimization suggestions

## 📁 Key Files to Know

- `frontend/app/` - Next.js 14 App Router
- `frontend/components/` - React components
- `frontend/lib/sanity.ts` - Sanity client configuration
- `studio/schemas/` - Content models
- `TODO.md` - Current tasks and progress

## 🎨 Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **CMS**: Sanity.io
- **Deployment**: Vercel
- **Animations**: Motion One (5KB) + Auto-Animate (2KB)
- **Forms**: React Hook Form + Sanity Forms
- **Fonts**: Geist Sans & Geist Mono

## 📚 Documentation

### 🎯 **Start Here**
- **[SESSION SUMMARY](SESSION_SUMMARY.md)** ⭐ - What we built today (Nov 7, 2025)
- **[NEXT STEPS](NEXT_STEPS.md)** ⭐ - Roadmap for completion

### 📖 Complete Guides
- **[Quick Start](docs/QUICKSTART.md)** - Get started in 5 minutes
- **[Component Docs](docs/COMPONENTS.md)** - Complete component reference
- **[Animation System](docs/ANIMATIONS.md)** - Motion One + AutoAnimate guide
- **[Design System](DESIGN_SYSTEM.md)** - Atomic Design architecture
- **[Color Palette](COLOR_PALETTE.md)** - Adobe Color branding
- **[Codespaces Guide](CODESPACES_SETUP.md)** - Cloud development setup

## 🎮 Playground

Interactive component showcase at `/playground`:

**In GitHub Codespaces:**
1. Run `cd frontend && npm run dev`
2. Open your forwarded port URL (Ports tab → port 3100)
3. Navigate to `/playground`

**Local Development:**
```bash
cd frontend && npm run dev
# Visit: http://localhost:3100/playground
```

## 📝 Notes

Professional design system built with Atomic Design methodology! 🚀
