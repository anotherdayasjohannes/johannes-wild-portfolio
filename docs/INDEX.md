# 📖 Documentation Index

Complete guide to your portfolio project.

---

## 🚀 Getting Started

**New to the project?** Start here:

1. **[Quick Start Guide](QUICKSTART.md)** ⚡
   - Get up and running in 5 minutes
   - Import components and build your first section
   - Common patterns and pro tips

2. **[Setup Instructions](SETUP.md)** 🛠️
   - Initial project setup
   - Sanity configuration
   - Development workflow

3. **[Codespaces Setup](../CODESPACES_SETUP.md)** ☁️
   - Cloud development environment
   - No local setup needed
   - Push to GitHub and start coding

---

## 📚 Core Documentation

### Design System

4. **[Design System Architecture](../DESIGN_SYSTEM.md)** 🏗️
   - Atomic Design methodology
   - Component hierarchy
   - Folder structure
   - Development workflow

5. **[Component Documentation](COMPONENTS.md)** 📦
   - Complete component reference
   - All props and variants
   - Usage examples
   - Best practices

6. **[Design Tokens](../frontend/lib/design-tokens.ts)** 🎨
   - Colors, typography, spacing
   - The foundation of the design system
   - Single source of truth

---

## 📊 Progress & Planning

7. **[Progress Report](../PROGRESS.md)** ✅
   - What's been built
   - Architecture decisions
   - Component stats
   - Next steps

8. **[TODO List](../TODO.md)** 📝
   - Task tracking
   - Phase planning
   - Claude + Cursor workflow

---

## 🎯 Feature Guides

9. **[Content Migration](CONTENT_MIGRATION.md)** 🔄
   - Extract from WordPress
   - Import to Sanity
   - Content structure

10. **[Quick Reference](QUICK_REFERENCE.md)** ⚡
    - Common commands
    - Useful patterns
    - Troubleshooting

11. **[Cursor Setup](CURSOR_SETUP.md)** 💻
    - IDE configuration
    - Working with Claude
    - Development tips

---

## 🎮 Interactive Tools

### Playground

**Component Showcase**: http://localhost:3100/playground

Visual reference for all components:
- All variants and states
- Interactive examples
- Copy-paste ready code
- See components in action

### Sanity Studio

**Content Management**: http://localhost:3444

Your CMS dashboard:
- Add/edit content
- Manage schemas
- Upload images
- Preview changes

---

## 📁 Project Structure Reference

```
johannes-wild-portfolio/
├── frontend/                       # Next.js Application
│   ├── app/
│   │   ├── page.tsx               # Home page
│   │   ├── playground/            # Component showcase
│   │   └── layout.tsx             # Root layout
│   ├── components/
│   │   ├── atoms/                 # Primitives
│   │   ├── molecules/             # Simple components
│   │   ├── organisms/             # Complex components (TBD)
│   │   └── templates/             # Layouts
│   └── lib/
│       ├── design-tokens.ts       # Design foundation
│       └── sanity.ts              # Sanity client & queries
│
├── studio/                         # Sanity Studio
│   ├── schemas/
│   │   ├── profile.ts
│   │   ├── skill.ts
│   │   ├── experience.ts
│   │   ├── project.ts
│   │   └── testimonial.ts
│   └── sanity.config.ts
│
└── docs/                           # Documentation
    ├── INDEX.md                    # This file
    ├── QUICKSTART.md
    ├── COMPONENTS.md
    ├── SETUP.md
    └── ...
```

---

## 🎯 Quick Links by Task

### "I want to build a page"
→ [Quick Start](QUICKSTART.md) + [Component Docs](COMPONENTS.md)

### "I want to add content"
→ [Content Migration](CONTENT_MIGRATION.md) + Sanity Studio (port 3444)

### "I want to see components"
→ http://localhost:3100/playground

### "I want to understand the architecture"
→ [Design System](../DESIGN_SYSTEM.md) + [Progress Report](../PROGRESS.md)

### "I need to set things up"
→ [Setup Guide](SETUP.md) or [Codespaces](../CODESPACES_SETUP.md)

### "I want to deploy"
→ [Setup Guide](SETUP.md) - Deployment section

---

## 🛠️ Development Workflow

### Typical Session

1. **Start servers** (in Codespaces or locally)
   ```bash
   # Terminal 1 - Frontend
   cd frontend && npm run dev
   
   # Terminal 2 - Sanity Studio
   cd studio && npm run dev
   ```

2. **View playground**
   - http://localhost:3100/playground
   - Reference component examples

3. **Build features**
   - Import components
   - Compose organisms
   - Connect to Sanity data

4. **Add content**
   - http://localhost:3444
   - Fill in Sanity Studio

5. **Test & iterate**
   - View on port 3100
   - Adjust components
   - Update content

### Git Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit
git commit -m "feat: add hero section"

# Push
git push
```

---

## 📖 Documentation Standards

All documentation follows these principles:

- **Practical** - Real examples, not theory
- **Complete** - All props and variants
- **Searchable** - Easy to find what you need
- **Up-to-date** - Reflects current code

---

## 🆘 Getting Help

### Common Issues

1. **Import errors**
   - Check path alias: `@/components`
   - Verify component exports

2. **Styling not working**
   - Restart dev server
   - Check Tailwind config

3. **Sanity connection**
   - Verify Project ID
   - Check .env.local

### Resources

- **Playground** - See components working
- **Component Docs** - Full reference
- **Source Code** - Implementation details
- **Design Tokens** - Token reference

---

## 🚀 Next Steps

After reading the docs:

1. **Explore the playground** 
   - http://localhost:3100/playground

2. **Build your first section**
   - Use Quick Start guide
   - Compose existing components

3. **Add your content**
   - Open Sanity Studio
   - Fill in your information

4. **Build organisms**
   - Hero section
   - Experience timeline
   - Skills grid
   - Testimonials
   - Contact form

5. **Compose home page**
   - Bring it all together!

---

## 📊 Documentation Status

- ✅ Quick Start Guide
- ✅ Component Documentation
- ✅ Design System Architecture
- ✅ Setup Instructions
- ✅ Codespaces Guide
- ✅ Progress Report
- ✅ Interactive Playground
- ✅ This Index

**Everything you need to build a professional portfolio!** 🎉

---

## 💡 Documentation Philosophy

> "Good documentation means you can work independently without constant questions."

This documentation is designed to:
- **Empower** you to build confidently
- **Reference** when you forget details
- **Learn** the system architecture
- **Scale** as the project grows

---

**Happy building!** 🚀

Start with the [Quick Start Guide](QUICKSTART.md) and dive into the [Playground](http://localhost:3100/playground)!








