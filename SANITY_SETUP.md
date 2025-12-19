# 🎨 Sanity CMS Integration - Complete!

## What Changed?

Your portfolio is now **fully object-based** with Sanity CMS! All content is:
✅ Editable in Sanity Studio (no code changes needed)
✅ Bilingual (German/English)
✅ Structured and reusable

## Architecture

### Before (Hardcoded JSON ❌)
```
Frontend → messages/en.json → Hardcoded translations
Frontend → messages/de.json → Hardcoded translations
```

### After (Sanity CMS ✅)
```
Frontend → Sanity API → Bilingual documents → Studio UI
```

## Content Structure

All content uses **locale fields** for bilingual support:

```typescript
{
  title: {
    de: "Über mich",
    en: "About"
  }
}
```

## Next Steps

### 1. Run the Content Migration

```bash
# Terminal 1: Get your Sanity API token
# Go to: https://sanity.io/manage
# Project: Johannes Wild Portfolio (6bj2fvps)
# API → Tokens → Add Token (Editor permission)

# Export the token
export SANITY_API_TOKEN="your-token-here"

# Run migration
cd studio
npm run migrate
```

### 2. Start Sanity Studio

```bash
cd studio
npm run dev
# Opens at: http://localhost:3444
```

### 3. Complete Manual Steps

1. **Upload Hero Image**
   - Go to **Hero Section** in Studio
   - Upload profile image

2. **Update Social Links**
   - Go to **Site Settings**
   - Update URLs to your actual profiles
   - Update contact email

3. **Add Content**
   - **About**: Add your bio
   - **Experience**: Add work history
   - **Skills**: Add technical skills
   - **Projects**: Add portfolio projects

### 4. Start Frontend (Already Connected!)

```bash
cd frontend
npm run dev
# Opens at: http://localhost:3100
```

## Available Content Types in Studio

### Global Content (Singletons)
- **Site Settings**: Company name, tagline, social links, contact
- **Navigation**: Header menu links
- **Hero Section**: Name, titles, tagline, CTA, stats
- **Footer**: Quick links, legal links, contact section

### Collection Content
- **About**: Bio, profile image, key facts, CV
- **Experience**: Work history with dates and descriptions
- **Skills**: Technical, language, and soft skills
- **Projects**: Portfolio items with images and links
- **Testimonials**: Client reviews
- **Interests**: Personal interests

## Bilingual Workflow

### How to Edit Content:
1. Open Sanity Studio
2. Select any document
3. Fill in **both** German (`de`) and English (`en`) fields
4. Save
5. Frontend automatically fetches the correct language based on URL (`/en` or `/de`)

### Language Filter
Studio has a language filter plugin - switch between languages to see only one language at a time while editing.

## Technical Details

### Frontend Integration
- **Client**: `@sanity/client` for data fetching
- **Queries**: GROQ queries in `lib/sanity/queries.ts`
- **Types**: Full TypeScript types in `lib/sanity/types.ts`
- **Image URLs**: `@sanity/image-url` for optimized images

### Environment Variables
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=6bj2fvps
NEXT_PUBLIC_SANITY_DATASET=production
```

### Caching Strategy
- **Production**: Uses Sanity CDN (fast, cached)
- **Development**: Direct API calls (fresh data)
- **ISR**: Configure in Next.js for automatic revalidation

## File Structure

```
studio/
├── schemas/           # Content models
│   ├── siteSettings.ts
│   ├── navigation.ts
│   ├── hero.ts
│   ├── footer.ts
│   ├── about.ts
│   ├── experience.ts
│   ├── skill.ts
│   └── project.ts
├── scripts/
│   └── migrate-content.ts  # Migration script
└── sanity.config.ts        # Sanity configuration

frontend/
├── lib/sanity/
│   ├── client.ts      # Sanity client setup
│   ├── queries.ts     # GROQ queries
│   ├── types.ts       # TypeScript types
│   └── index.ts       # Exports
└── app/[locale]/
    └── page.tsx       # Now fetches from Sanity!
```

## Common Tasks

### Add a New Field to Hero
1. Edit `studio/schemas/hero.ts`
2. Add new field with `localeString` or `localeText` type
3. Restart Studio (`npm run dev`)
4. Add content in Studio
5. Update query in `frontend/lib/sanity/queries.ts`
6. Use new field in `frontend/app/[locale]/page.tsx`

### Update Navigation Links
1. Open Sanity Studio
2. Go to **Navigation**
3. Edit items (add/remove/reorder)
4. Save - changes are live immediately!

### Change Social Media Links
1. Open Sanity Studio
2. Go to **Site Settings**
3. Edit **Social Links**
4. Update URLs
5. Save - live immediately!

## Benefits

✅ **No Code Changes**: Update all content in Studio UI
✅ **Version Control**: Sanity tracks all content changes
✅ **Preview Mode**: See changes before publishing
✅ **Collaboration**: Multiple editors can work simultaneously
✅ **Scalable**: Easy to add new content types
✅ **Type-Safe**: Full TypeScript support
✅ **Bilingual**: Native support for German and English

## Troubleshooting

### "Missing required Sanity content"
- Run the migration script first
- Check Studio for created documents
- Verify environment variables

### Content not updating on frontend
- Check `useCdn` setting in `lib/sanity/client.ts`
- In dev, CDN is disabled for fresh data
- In production, add ISR revalidation

### Images not loading
- Upload images in Studio
- Check image URL generation in queries
- Verify Sanity image API is accessible

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Studio Customization](https://www.sanity.io/docs/studio)
- [Localization Guide](https://www.sanity.io/guides/localization)

---

🎉 **You're all set!** Your portfolio is now a modern, CMS-powered, bilingual website!






