# Quick Reference - Common Tasks

Quick copy-paste commands for common development tasks.

## 🚀 Starting Development

```bash
# Start both frontend and Sanity Studio
# Terminal 1:
cd frontend && npm run dev

# Terminal 2:
cd studio && npm run dev
```

---

## 📦 Installing New Packages

### Frontend
```bash
cd frontend
npm install package-name
```

### Common packages you might need:
```bash
# Animations
npm install framer-motion

# Forms
npm install react-hook-form

# Icons
npm install react-icons

# Date handling
npm install date-fns
```

---

## 🎨 Creating New Components

### Basic Component Template
```typescript
// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg transition-colors ${
        variant === 'primary' 
          ? 'bg-dark-accent-primary hover:bg-blue-600' 
          : 'bg-dark-surface hover:bg-dark-border'
      } ${className}`}
    >
      {children}
    </button>
  );
}
```

### Section Component Template
```typescript
// components/sections/HeroSection.tsx
export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Your content here */}
      </div>
    </section>
  );
}
```

---

## 🗄️ Fetching Data from Sanity

### In Server Component (App Router)
```typescript
// app/page.tsx
import { client, queries } from '@/lib/sanity';

export default async function Home() {
  const profile = await client.fetch(queries.profile);
  const skills = await client.fetch(queries.skills);
  
  return (
    <main>
      <h1>{profile.name}</h1>
      {/* Use the data */}
    </main>
  );
}
```

### With Loading State
```typescript
'use client';

import { useEffect, useState } from 'react';
import { client, queries } from '@/lib/sanity';

export default function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    client.fetch(queries.profile)
      .then(setData)
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return <div>{/* Use data */}</div>;
}
```

---

## 🖼️ Working with Images

### Display Sanity Image
```typescript
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

<Image
  src={urlFor(imageData).width(800).height(600).url()}
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### With Blur Placeholder
```typescript
<Image
  src={urlFor(imageData).width(800).url()}
  alt="Description"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL={urlFor(imageData).width(20).url()}
/>
```

---

## ✨ Adding Animations

### With Framer Motion
```bash
npm install framer-motion
```

```typescript
'use client';

import { motion } from 'framer-motion';

export default function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Content here
    </motion.div>
  );
}
```

### Scroll Animations
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content appears on scroll
</motion.div>
```

---

## 📝 Creating New Sanity Schemas

### Basic Schema Template
```typescript
// studio/schemas/newSchema.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'schemaName',
  title: 'Schema Title',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
```

### Don't forget to export it!
```typescript
// studio/schemas/index.ts
import newSchema from './newSchema'

export const schemaTypes = [
  // ... other schemas
  newSchema,
]
```

---

## 🎨 Tailwind Patterns

### Responsive Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

### Card Component
```tsx
<div className="bg-dark-surface p-6 rounded-lg border border-dark-border hover:border-dark-accent-primary transition-colors">
  {/* Card content */}
</div>
```

### Section Spacing
```tsx
<section className="py-20 px-4 md:px-8 lg:px-12">
  <div className="max-w-6xl mx-auto">
    {/* Section content */}
  </div>
</section>
```

### Gradient Text
```tsx
<h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
  Gradient Heading
</h1>
```

---

## 🔍 Debugging

### Check Sanity Connection
```typescript
// Add this to any page temporarily
const test = await client.fetch('*[_type == "profile"][0]');
console.log('Sanity data:', test);
```

### Check Environment Variables
```typescript
// In a component
console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
```

### Clear Next.js Cache
```bash
cd frontend
rm -rf .next
npm run dev
```

---

## 📱 Testing Responsive Design

### Browser Dev Tools
1. Open DevTools (F12 or Cmd+Option+I)
2. Click device toolbar icon
3. Test different screen sizes

### Common Breakpoints (Tailwind)
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

---

## 🚢 Deployment Commands

### Deploy Frontend to Vercel
```bash
cd frontend
vercel # Follow prompts
# Or connect GitHub and auto-deploy
```

### Deploy Sanity Studio
```bash
cd studio
sanity deploy
```

### Update Sanity Schemas
```bash
cd studio
sanity deploy # Redeploy studio
```

---

## 🔧 Useful NPM Scripts

### Frontend
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run linter
```

### Studio
```bash
npm run dev      # Start studio dev
npm run build    # Build studio
npm run deploy   # Deploy to Sanity hosting
```

---

## 💾 Git Commands

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Regular Workflow
```bash
git status                    # Check changes
git add .                     # Stage all changes
git commit -m "Description"   # Commit changes
git push                      # Push to remote
```

### Create Feature Branch
```bash
git checkout -b feature/my-feature
# Make changes
git add .
git commit -m "Add feature"
git push -u origin feature/my-feature
```

---

## 🆘 Common Fixes

### Port 3000 Already in Use
```bash
lsof -ti:3000 | xargs kill -9
```

### Sanity Studio Won't Start
```bash
cd studio
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### TypeScript Errors
```bash
cd frontend
rm -rf .next
npm run build
```

### Can't Fetch from Sanity
1. Check Project ID in `.env.local`
2. Check API token
3. Verify CORS settings in Sanity dashboard
4. Restart dev server

---

## 📚 Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 🤝 Claude + Cursor Tips

### Ask Claude:
- "How should I structure this component?"
- "What's the best way to fetch this data?"
- "Can you review my code?"
- "Help me debug this error"

### Use Cursor For:
- Quick code changes (`Cmd+K`)
- Autocomplete while typing
- File navigation
- Running terminal commands

---

**Pro tip**: Bookmark this file in your browser for quick access! 🔖
