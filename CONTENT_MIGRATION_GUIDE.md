# Content Migration Guide - WordPress to Sanity

This guide will help you migrate all content from your WordPress site (https://wilderserver.de/wordpress/) to Sanity Studio.

## 📋 Prerequisites

1. Start Sanity Studio: `cd studio && npm run dev`
2. Access Studio at: Your Codespaces port 3333 URL
3. Have your WordPress site open for reference

## 🎯 Content to Migrate

### 1. About Section

**Document Type:** `about`

**From WordPress:** 
- Bio text (German and English)
- Born in Kempten
- Age: 43
- Family status
- Location

**In Sanity Studio:**
1. Click "About" in the sidebar
2. Fill in both German and English fields:
   - **Title**: "Über mich" (DE) / "About Me" (EN)
   - **Bio**: Copy the bio text from WordPress
   - **Profile Image**: Upload your professional photo
   - **Key Facts**: Add 5-6 facts with label/value pairs:
     - Birthplace: Kempten
     - Age: 43
     - Location: Reichersbeuern
     - Marital Status: your info
     - Children: your info
   - **CV File**: Upload German and English CV PDFs

---

### 2. Work Experience

**Document Type:** `experience` (Create 4 separate documents)

**From WordPress:**

#### Experience 1: iFixit GmbH
- **Position (DE)**: Abteilungsleiter Advocacy
- **Position (EN)**: Department Head Advocacy
- **Company**: iFixit GmbH
- **Location**: Munich
- **Start Date**: 2020-01
- **Current**: Yes ✓
- **Order**: 0 (most recent)
- **Description (DE)**:
  - Leite das Advocacy-Team
  - Vertrete iFixit in Stakeholder-Gesprächen
  - Entwickle Kampagnenstrategien

#### Experience 2: KENNETHCOBONPUE GmbH
- **Position (DE)**: Geschäftsführer & Mitgründer
- **Position (EN)**: Managing Director & Co-Founder
- **Company**: KENNETHCOBONPUE GmbH
- **Start Date**: 2010-01
- **End Date**: 2020-12
- **Order**: 1
- **Description (DE)**:
  - Marke von Grund auf entwickelt
  - E-Commerce-Plattform aufgebaut
  - Team von 15 Mitarbeitern geleitet

#### Experience 3: 21TORR
- **Position (DE)**: Senior Concept Developer
- **Position (EN)**: Senior Concept Developer
- **Company**: 21TORR
- **Start Date**: 2007-01
- **End Date**: 2010-12
- **Order**: 2
- **Description (DE)**:
  - Konzepte für digitale Produkte entwickelt
  - Strategische Beratung für Kunden

#### Experience 4: BDKJ-Bayern e.V.
- **Position (DE)**: IT-Berater
- **Position (EN)**: IT Consultant
- **Company**: BDKJ-Bayern e.V.
- **Start Date**: 2001-01
- **End Date**: 2011-12
- **Order**: 3
- **Description (DE)**:
  - IT-Infrastruktur beraten
  - Digitalisierungsprojekte begleitet

---

### 3. Skills (Benefits from WordPress)

**Document Type:** `skill` (Create ~11 documents)

#### Soft Skills (Category: `soft`)
1. **Analytisches Denken** (Analytical Thinking) - Level: 6/6 - Order: 0 - Color: blue
2. **Kreativität** (Creativity) - Level: 5/6 - Order: 1 - Color: purple
3. **Teamfähigkeit** (Teamwork) - Level: 6/6 - Order: 2 - Color: green
4. **Lösungsorientierung** (Solution-Oriented) - Level: 6/6 - Order: 3 - Color: blue
5. **Strukturiertes Arbeiten** (Structured Work) - Level: 6/6 - Order: 4 - Color: green

#### Languages (Category: `language`)
6. **Deutsch** (German) - Level: 100 - Order: 0 - Color: green
7. **Englisch** (English) - Level: 80 - Order: 1 - Color: blue
8. **Spanisch** (Spanish) - Level: 70 - Order: 2 - Color: purple

#### Technical Skills (Category: `technical`)
9. **IT-Tools** (IT Tools) - Level: 5/6 (83%) - Order: 0 - Color: pink
10. **Digital Marketing** - Level: 5/6 (83%) - Order: 1 - Color: blue
11. **E-Commerce** - Level: 5/6 (83%) - Order: 2 - Color: green

---

### 4. Testimonials

**Document Type:** `testimonial` (Create 3 documents)

#### Testimonial 1: Matthias Huisken
- **Name**: Matthias Huisken
- **Position**: Managing Director
- **Company**: iFixit Europe
- **Quote (DE)**: "Ein großartiger Mensch, der das Richtige für das Unternehmen tut."
- **Quote (EN)**: "A great guy doing the right thing for the company."
- **Order**: 0
- **Image**: Upload if available

#### Testimonial 2: Kenneth Cobonpue
- **Name**: Kenneth Cobonpue
- **Position**: Designer & Founder
- **Company**: Kenneth Cobonpue
- **Quote (DE)**: "Hat die Marke von Grund auf entwickelt und erfolgreich gemacht."
- **Quote (EN)**: "Developed the brand from scratch and made it successful."
- **Order**: 1
- **Image**: Upload if available

#### Testimonial 3: Klaus Grotz
- **Name**: Klaus Grotz
- **Position**: Managing Director
- **Company**: 21TORR
- **Quote (DE)**: "Ein kluger Denker mit großer Begeisterungsfähigkeit."
- **Quote (EN)**: "A smart thinker with great enthusiasm."
- **Order**: 2
- **Image**: Upload if available

---

### 5. Personal Interests (Optional)

**Document Type:** `interest` (Create 5-6 documents)

Examples based on typical interests:
1. **Title**: "Nachhaltigkeit" (DE) / "Sustainability" (EN) - Icon: 🌱 - Order: 0
2. **Title**: "Technologie" (DE) / "Technology" (EN) - Icon: 💻 - Order: 1
3. **Title**: "Design" (DE) / "Design" (EN) - Icon: 🎨 - Order: 2
4. **Title**: "Reisen" (DE) / "Travel" (EN) - Icon: ✈️ - Order: 3
5. **Title**: "Familie" (DE) / "Family" (EN) - Icon: 👨‍👩‍👧‍👦 - Order: 4

---

## ✅ Migration Checklist

- [ ] Create 1 About document with all key facts
- [ ] Create 4 Experience documents (iFixit, KENNETHCOBONPUE, 21TORR, BDKJ)
- [ ] Create 11 Skill documents (5 soft, 3 languages, 3 technical)
- [ ] Create 3 Testimonial documents (Matthias, Kenneth, Klaus)
- [ ] Create 5-6 Interest documents (optional)
- [ ] Upload profile image to About
- [ ] Upload CV files (German and English) to About
- [ ] Upload testimonial images if available
- [ ] Verify all German translations are accurate
- [ ] Verify all English translations are complete

---

## 🔄 Testing After Migration

1. Navigate to: Your Codespaces port 3100 URL
2. Test German version: `/de/about`, `/de/experience`, `/de/contact`
3. Test English version: `/en/about`, `/en/experience`, `/en/contact`
4. Verify all content displays correctly
5. Test language switcher (DE ↔ EN)

---

## 💡 Tips

- **Order numbers**: Lower numbers appear first (0 = most recent/important)
- **Levels for skills**: 
  - Soft/Technical: 1-6 scale (will be converted to percentage)
  - Languages: 0-100 percentage
- **Localized fields**: Always fill BOTH German and English versions
- **Images**: Use high-quality, professional images
- **CV files**: Ensure PDFs are named clearly (e.g., `CV_Johannes_Wild_DE.pdf`)

---

## 🆘 Need Help?

If content isn't showing on the website:
1. Check that the document is published in Sanity (green checkmark)
2. Verify both German and English fields are filled
3. Check the browser console for errors
4. Hard refresh the page (Cmd+Shift+R or Ctrl+Shift+R)






