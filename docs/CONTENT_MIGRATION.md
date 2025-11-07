# Content Migration Guide

This document contains the content extracted from your WordPress site to migrate into Sanity.

## 📋 Content Inventory

### Personal Information (Profile Schema)
```yaml
name: "Johannes Wild"
tagline: "ist ihr neuer Joker!"
email: [Extract from contact form]
phone: [Extract from contact form]
location: [Extract from site if available]
```

### About / Bio
```
Hallo, ich bin Johannes Wild! Analytisches Denken und strukturiertes Arbeiten 
erlauben es mir, mich schnell in neue und komplexe Domänen, Herausforderungen 
und Prozesse hineinzudenken. Ich arbeite team- und lösungsorientiert. 
Technologie für mich und andere nutzbar zu machen ist für mich selbstverständlich 
– genauso wie Flexibilität. Ich arbeite proaktiv und verantwortungsbewusst und 
sehr gerne im Team.
```

### Motivation Section
[Extract from the "Motivation" section on your site]

---

## 🛠️ Skills to Add

Based on your current site, create skill categories in Sanity Studio:

### Example Structure:
```json
{
  "category": "Frontend Development",
  "skills": [
    {"name": "React", "level": 90},
    {"name": "Next.js", "level": 85},
    {"name": "TypeScript", "level": 85},
    {"name": "Tailwind CSS", "level": 80}
  ],
  "order": 1
}
```

### Categories to Create:
1. **Frontend Development**
   - [List your frontend skills]

2. **Backend Development**
   - [List your backend skills]

3. **Tools & Technologies**
   - [List tools, frameworks, etc.]

4. **Soft Skills**
   - [List soft skills]

---

## 💼 Experience Entries

### Template for Each Job:
```json
{
  "title": "Position Title",
  "company": "Company Name",
  "location": "City, Country",
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD" // or leave empty if current
  "current": false, // or true
  "description": [
    "• Responsibility 1",
    "• Responsibility 2",
    "• Achievement 1"
  ],
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "companyUrl": "https://company.com"
}
```

### Your Experience:
[Extract from your WordPress site and fill in]

1. **Position 1**
   - Title:
   - Company:
   - Period:
   - Description:
   - Technologies:

2. **Position 2**
   - [Continue...]

---

## 🚀 Projects to Add

### Template:
```json
{
  "title": "Project Name",
  "description": "Short one-liner description",
  "fullDescription": "Detailed description with challenges, solutions, impact",
  "technologies": ["React", "Node.js", "etc"],
  "projectUrl": "https://project.com",
  "githubUrl": "https://github.com/...",
  "featured": true, // for important projects
  "order": 1
}
```

### Your Projects:
[Extract from your site]

1. **Project 1**
   - Name:
   - Description:
   - Technologies:
   - Links:

---

## 📷 Images to Prepare

### Required Images:
1. **Hero Image** (Your profile photo)
   - Current location: [Extract from WordPress]
   - Recommended size: 800x800px minimum
   - Format: JPG or WebP
   - Upload to: Sanity Studio → Profile → Hero Image

2. **Project Screenshots**
   - One image per project
   - Recommended size: 1200x800px
   - Format: JPG or WebP

### Image Optimization Tips:
- Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app) to compress
- Maintain aspect ratios
- Sanity will handle responsive versions

---

## 📝 Migration Steps

### Phase 1: Setup (Do First)
1. [ ] Complete technical setup (see SETUP.md)
2. [ ] Verify Sanity Studio is running
3. [ ] Test creating a sample entry

### Phase 2: Add Content to Sanity
1. [ ] **Profile**
   - [ ] Add personal information
   - [ ] Upload hero image
   - [ ] Write bio
   - [ ] Add contact details
   - [ ] Add social media links

2. [ ] **Skills**
   - [ ] Create skill categories
   - [ ] Add skills with proficiency levels
   - [ ] Set display order

3. [ ] **Experience**
   - [ ] Add each position
   - [ ] Include descriptions
   - [ ] List technologies
   - [ ] Add company links

4. [ ] **Projects**
   - [ ] Add project entries
   - [ ] Upload project images
   - [ ] Mark featured projects
   - [ ] Set display order

### Phase 3: Verify
1. [ ] Check all content appears in Studio
2. [ ] Test fetching in frontend (see it on localhost:3000)
3. [ ] Verify images load correctly
4. [ ] Check formatting and styling

---

## 🔍 Content Extraction from WordPress

### How to Extract Content:

1. **Export from WordPress**:
   - Go to: `Tools` → `Export` → `All content`
   - Download XML file
   - Or manually copy content from each page

2. **Images**:
   - Download from: `Media Library` in WordPress
   - Or inspect page source and download from URLs

3. **Current Site HTML**:
   You can use the uploaded HTML file to extract:
   - Text content
   - Image URLs
   - Structure and sections

---

## 💡 Tips for Better Content

### Writing Descriptions:
- **Be specific**: Instead of "worked on projects", say "led development of X feature"
- **Use numbers**: "Improved performance by 40%", "Managed team of 5"
- **Focus on impact**: What was the result of your work?

### Skill Levels (Be honest!):
- **90-100%**: Expert, could teach others
- **70-89%**: Proficient, use regularly
- **50-69%**: Comfortable, need occasional reference
- **30-49%**: Basic understanding
- **<30%**: Familiar with concepts

### Project Descriptions:
Include:
- Problem you solved
- Technologies you used
- Your specific role
- Measurable results

---

## ✅ Checklist

- [ ] Profile information complete
- [ ] Hero image uploaded and optimized
- [ ] All skills categorized and added
- [ ] Experience entries complete with dates
- [ ] Projects added with images
- [ ] Social media links tested
- [ ] All content reviewed for typos
- [ ] Content appears correctly on frontend

---

## 📞 Next Steps

After migrating content:
1. Test the frontend to ensure everything displays correctly
2. Update TODO.md with completed tasks
3. Move to Phase 2: Building components and styling
4. Gradually add "cool" features

**Need help?** Ask Claude about:
- Schema structure
- Content organization
- Best practices
- Anything else!
