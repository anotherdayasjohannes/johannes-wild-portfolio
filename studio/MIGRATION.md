# Content Migration Guide

## Overview
This guide helps you migrate your bilingual content from JSON files to Sanity CMS.

## Prerequisites
1. Sanity project is set up (`projectId: 6bj2fvps`)
2. You have a Sanity API token with write access

## Getting a Sanity API Token

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project: **Johannes Wild Portfolio**
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Name it: `Migration Token`
6. Permissions: **Editor** or **Admin**
7. Copy the token (you'll only see it once!)

## Running the Migration

### Step 1: Set your token
```bash
export SANITY_API_TOKEN="your-token-here"
```

### Step 2: Run the migration
```bash
cd studio
npm run migrate
```

### Step 3: Verify in Sanity Studio
```bash
npm run dev
```

Open http://localhost:3444 and verify:
- ✅ Site Settings
- ✅ Navigation
- ✅ Hero Section
- ✅ Footer

## Manual Steps After Migration

### 1. Upload Hero Image
The migration script cannot upload the hero image automatically. You need to:
1. Open Sanity Studio
2. Go to **Hero Section**
3. Click **Hero Image** field
4. Upload the image: `frontend/public/images/hero-image.jpg` (or use Unsplash URL)

### 2. Update Contact Information
1. Go to **Site Settings**
2. Update **Contact Email** to your real email
3. Update **Social Links** URLs with your actual profiles

### 3. Add Additional Content
The migration only creates the site-wide content. You still need to add:
- **About**: Your bio and profile
- **Experience**: Work history
- **Skills**: Technical and soft skills
- **Projects**: Portfolio projects

## Content Structure

All content uses bilingual fields:
```typescript
{
  de: "German text",
  en: "English text"
}
```

## Troubleshooting

### "Missing SANITY_API_TOKEN"
- Make sure you exported the token in your current terminal session
- Run: `echo $SANITY_API_TOKEN` to verify

### "Permission denied"
- Check your token has **Editor** or **Admin** permissions
- Try generating a new token

### "Document not found"
- This is normal for first-time migration
- The script creates new documents

## Next Steps
After migration, update the frontend to fetch from Sanity instead of JSON files.

