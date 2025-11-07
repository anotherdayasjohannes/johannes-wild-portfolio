# Johannes Wild - Personal Portfolio

Modern portfolio site built with Next.js, Sanity CMS, and deployed on Vercel.

## 🏗️ Project Structure

```
johannes-wild-portfolio/
├── frontend/          # Next.js application
├── studio/           # Sanity Studio CMS
└── docs/             # Documentation
```

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
```bash
# Terminal 1 - Frontend (http://localhost:3000)
cd frontend
npm run dev

# Terminal 2 - Sanity Studio (http://localhost:3333)
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
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Sanity Forms

## 📝 Notes

Keep it simple first, make it cool later! 🚀
