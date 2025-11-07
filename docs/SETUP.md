# Setup Guide - Johannes Wild Portfolio

## 🚀 Initial Setup

### Step 1: Prerequisites
Make sure you have installed:
- Node.js 18+ ([https://nodejs.org](https://nodejs.org))
- Git ([https://git-scm.com](https://git-scm.com))
- A code editor (VS Code recommended with Cursor)

### Step 2: Install Dependencies

```bash
# Navigate to project root
cd johannes-wild-portfolio

# Install frontend dependencies
cd frontend
npm install

# Install Sanity Studio dependencies
cd ../studio
npm install
```

### Step 3: Set Up Sanity Project

1. **Create a Sanity account** at [sanity.io](https://www.sanity.io/)

2. **Initialize Sanity project**:
```bash
cd studio
npm install -g @sanity/cli
sanity init
```

Follow the prompts:
- Choose "Create new project"
- Name it "johannes-wild-portfolio"
- Use default dataset (production)
- Copy the **Project ID** shown

3. **Update configuration files**:
   - Update `studio/sanity.config.ts` with your Project ID
   - Update `frontend/.env.local` (copy from `.env.local.example`)

### Step 4: Configure Environment Variables

Create `frontend/.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

To get your API token:
```bash
cd studio
sanity manage
```
Go to "API" → "Tokens" → "Add API token"
- Name: "Frontend Read Token"
- Permissions: "Viewer"

### Step 5: Run the Project

Open two terminal windows:

**Terminal 1 - Frontend**:
```bash
cd frontend
npm run dev
```
Visit: [http://localhost:3000](http://localhost:3000)

**Terminal 2 - Sanity Studio**:
```bash
cd studio
npm run dev
```
Visit: [http://localhost:3333](http://localhost:3333)

---

## 📝 Workflow: Claude + Cursor

### When to Use Claude (AI Assistant)
Use Claude for:
- **Architecture decisions** - "Should I use Server Components or Client Components?"
- **Schema design** - "What fields should my Experience schema have?"
- **Complex logic** - "How should I structure my data fetching?"
- **Code reviews** - "Can you review this component?"
- **Planning** - "What's the best way to implement X?"
- **Documentation** - "Explain how this works"

**How to interact with Claude**:
1. Ask specific questions
2. Share code snippets for review
3. Request explanations
4. Get architectural guidance

### When to Use Cursor (Code Editor)
Use Cursor for:
- **Implementation** - Writing actual code
- **Styling** - CSS and Tailwind classes
- **Debugging** - Fixing errors
- **Refactoring** - Improving code structure
- **Quick edits** - Small changes and updates
- **File navigation** - Moving between files

**Cursor AI Features**:
- `Cmd/Ctrl + K` - Inline AI editing
- `Cmd/Ctrl + L` - Chat with AI about code
- Tab completion with AI suggestions

### Recommended Workflow

1. **Plan with Claude** 📋
   - "I want to add a skills section with progress bars"
   - Get schema design, component structure, approach

2. **Implement with Cursor** 💻
   - Create the component files
   - Write the actual code
   - Style with Tailwind

3. **Test & Debug with Cursor** 🔍
   - Run the dev server
   - Fix any errors
   - Adjust styling

4. **Review with Claude** ✅
   - Share the code for review
   - Get optimization suggestions
   - Ensure best practices

5. **Iterate** 🔄
   - Make improvements
   - Add more features
   - Repeat!

---

## 🗂️ Project Structure Guide

### Frontend (`/frontend`)
```
frontend/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page (main one-pager)
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/         # Page sections (Hero, About, etc.)
│   ├── ui/               # Reusable UI components
│   └── layout/           # Layout components (Header, Footer)
├── lib/                   # Utilities
│   ├── sanity.ts         # Sanity client & queries
│   └── utils.ts          # Helper functions
└── public/               # Static assets
    └── images/          # Images
```

### Studio (`/studio`)
```
studio/
├── schemas/              # Content type definitions
│   ├── profile.ts       # Personal info schema
│   ├── skill.ts         # Skills schema
│   ├── experience.ts    # Work experience schema
│   ├── project.ts       # Projects schema
│   └── index.ts         # Export all schemas
└── sanity.config.ts     # Studio configuration
```

---

## 🎨 Development Tips

### Component Organization
Create components in this order:
1. **Layout components** (Header, Footer, PageWrapper)
2. **Section components** (HeroSection, AboutSection, etc.)
3. **UI components** (Button, Card, SkillBar)

### Styling Approach
- Use Tailwind CSS utility classes
- Dark theme by default (already configured)
- Consistent spacing: 4, 8, 16, 24, 32px (rem equivalents)
- Responsive: mobile-first approach

### Data Flow
1. Define schema in Sanity Studio
2. Create/edit content in Studio
3. Write GROQ query in `lib/sanity.ts`
4. Fetch data in page/component
5. Display data

---

## 🚢 Deployment Guide

### Deploy to Vercel

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo>
git push -u origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Framework Preset: Next.js
   - Root Directory: `frontend`
   - Add environment variables from `.env.local`
   - Deploy!

3. **Deploy Sanity Studio**:
```bash
cd studio
sanity deploy
```
Choose a unique name like `johannes-wild-studio`

---

## 📚 Learning Resources

- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Sanity**: [sanity.io/docs](https://www.sanity.io/docs)
- **Tailwind**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **TypeScript**: [typescriptlang.org/docs](https://www.typescriptlang.org/docs)

---

## 🆘 Common Issues

### "Module not found" errors
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Sanity connection issues
- Check Project ID in both configs
- Verify API token permissions
- Ensure CORS settings allow localhost

---

## ✅ Next Steps

1. [ ] Complete setup steps above
2. [ ] Add sample content in Sanity Studio
3. [ ] Test that content appears on frontend
4. [ ] Start building components!
5. [ ] Check TODO.md for task tracking

---

**Questions?** Ask Claude! 🤖
