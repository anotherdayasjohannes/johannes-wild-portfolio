/**
 * Migration script to populate Sanity with initial bilingual content
 * Run with: npx ts-node --esm scripts/migrate-content.ts
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '6bj2fvps',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Set this in your environment
  useCdn: false,
});

// Content from frontend/messages/*.json
const content = {
  siteSettings: {
    _type: 'siteSettings',
    _id: 'siteSettings',
    companyName: 'Johannes Wild',
    tagline: {
      de: 'Digitale Exzellenz aufbauen, ein Projekt nach dem anderen.',
      en: 'Building digital excellence, one project at a time.',
    },
    copyright: {
      de: 'Alle Rechte vorbehalten.',
      en: 'All rights reserved.',
    },
    socialLinks: [
      {
        platform: 'github',
        url: 'https://github.com/anotherdayasjohannes',
        label: {
          de: 'GitHub',
          en: 'GitHub',
        },
        order: 0,
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/johanneswild',
        label: {
          de: 'LinkedIn',
          en: 'LinkedIn',
        },
        order: 1,
      },
      {
        platform: 'email',
        url: 'mailto:hello@example.com',
        label: {
          de: 'E-Mail',
          en: 'Email',
        },
        order: 2,
      },
    ],
    contactEmail: 'hello@example.com',
  },
  navigation: {
    _type: 'navigation',
    _id: 'mainNavigation',
    name: 'Main Navigation',
    items: [
      {
        label: {
          de: 'Über mich',
          en: 'About',
        },
        href: '#about',
        order: 0,
      },
      {
        label: {
          de: 'Erfahrung',
          en: 'Experience',
        },
        href: '#experience',
        order: 1,
      },
      {
        label: {
          de: 'Projekte',
          en: 'Projects',
        },
        href: '#projects',
        order: 2,
      },
      {
        label: {
          de: 'Fähigkeiten',
          en: 'Skills',
        },
        href: '#skills',
        order: 3,
      },
      {
        label: {
          de: 'Kontakt',
          en: 'Contact',
        },
        href: '#contact',
        order: 4,
      },
    ],
    ctaLabel: {
      de: 'Kontakt aufnehmen',
      en: 'Get in Touch',
    },
  },
  hero: {
    _type: 'hero',
    _id: 'hero',
    name: 'Johannes Wild',
    rotatingTitles: {
      de: [
        'Strategischer Denker',
        'Digitaler Leader',
        'Markenaufbauer',
        'Innovationstreiber',
      ],
      en: [
        'Strategic Thinker',
        'Digital Leader',
        'Brand Builder',
        'Innovation Driver',
      ],
    },
    tagline: {
      de: 'Marken helfen, sich im digitalen Zeitalter durch analytisches Denken und strukturierte Umsetzung abzuheben.',
      en: 'Helping brands stand out in the digital era through analytical thinking and structured execution.',
    },
    primaryCTA: {
      label: {
        de: 'Lass uns zusammenarbeiten',
        en: "Let's Work Together",
      },
      href: '#contact',
    },
    imageAlt: {
      de: 'Johannes Wild',
      en: 'Johannes Wild',
    },
    stats: [
      {
        value: '10+',
        label: {
          de: 'JAHRE FÜHRUNGSERFAHRUNG',
          en: 'YEARS LEADERSHIP',
        },
        order: 0,
      },
      {
        value: '50+',
        label: {
          de: 'PROJEKTE UMGESETZT',
          en: 'PROJECTS DELIVERED',
        },
        order: 1,
      },
      {
        value: '3',
        label: {
          de: 'KONTINENTE',
          en: 'CONTINENTS',
        },
        order: 2,
      },
    ],
  },
  footer: {
    _type: 'footer',
    _id: 'footer',
    quickLinksLabel: {
      de: 'Schnellzugriff',
      en: 'Quick Links',
    },
    quickLinks: [
      {
        label: {
          de: 'Über mich',
          en: 'About',
        },
        href: '#about',
        order: 0,
      },
      {
        label: {
          de: 'Erfahrung',
          en: 'Experience',
        },
        href: '#experience',
        order: 1,
      },
      {
        label: {
          de: 'Projekte',
          en: 'Projects',
        },
        href: '#projects',
        order: 2,
      },
      {
        label: {
          de: 'Fähigkeiten',
          en: 'Skills',
        },
        href: '#skills',
        order: 3,
      },
      {
        label: {
          de: 'Kontakt',
          en: 'Contact',
        },
        href: '#contact',
        order: 4,
      },
    ],
    legalLinks: [
      {
        label: {
          de: 'Datenschutz',
          en: 'Privacy Policy',
        },
        href: '/privacy',
        order: 0,
      },
      {
        label: {
          de: 'AGB',
          en: 'Terms of Service',
        },
        href: '/terms',
        order: 1,
      },
      {
        label: {
          de: 'Impressum',
          en: 'Imprint',
        },
        href: '/imprint',
        order: 2,
      },
    ],
    getInTouchLabel: {
      de: 'Kontakt',
      en: 'Get in Touch',
    },
    getInTouchText: {
      de: "Ich bin immer offen für Gespräche über neue Projekte, kreative Ideen oder Möglichkeiten.",
      en: "I'm always open to discussing new projects, creative ideas, or opportunities.",
    },
  },
};

async function migrate() {
  console.log('🚀 Starting content migration...\n');

  try {
    // Create or update Site Settings
    console.log('📝 Creating Site Settings...');
    await client.createOrReplace(content.siteSettings);
    console.log('✅ Site Settings created\n');

    // Create or update Navigation
    console.log('📝 Creating Navigation...');
    await client.createOrReplace(content.navigation);
    console.log('✅ Navigation created\n');

    // Create or update Hero
    console.log('📝 Creating Hero...');
    await client.createOrReplace(content.hero);
    console.log('✅ Hero created\n');

    // Create or update Footer
    console.log('📝 Creating Footer...');
    await client.createOrReplace(content.footer);
    console.log('✅ Footer created\n');

    console.log('🎉 Migration completed successfully!');
    console.log('\n📌 Next steps:');
    console.log('1. Open Sanity Studio (npm run dev in studio directory)');
    console.log('2. Upload hero image manually');
    console.log('3. Update social links and contact email');
    console.log('4. Add About, Experience, Skills, and Projects content');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

migrate();

