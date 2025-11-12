/**
 * Fallback content when Sanity data is not yet available
 * This ensures the site works even before running the migration
 */

import type { SiteSettings, Navigation, Hero, Footer } from './types';

export const fallbackSiteSettings: SiteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
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
      label: { de: 'GitHub', en: 'GitHub' },
      order: 0,
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/johanneswild',
      label: { de: 'LinkedIn', en: 'LinkedIn' },
      order: 1,
    },
    {
      platform: 'email',
      url: 'mailto:hello@example.com',
      label: { de: 'E-Mail', en: 'Email' },
      order: 2,
    },
  ],
  contactEmail: 'hello@example.com',
};

export const fallbackNavigation: Navigation = {
  _id: 'mainNavigation',
  _type: 'navigation',
  name: 'Main Navigation',
  items: [
    {
      label: { de: 'Über mich', en: 'About' },
      href: '#about',
      order: 0,
    },
    {
      label: { de: 'Erfahrung', en: 'Experience' },
      href: '#experience',
      order: 1,
    },
    {
      label: { de: 'Projekte', en: 'Projects' },
      href: '#projects',
      order: 2,
    },
    {
      label: { de: 'Fähigkeiten', en: 'Skills' },
      href: '#skills',
      order: 3,
    },
    {
      label: { de: 'Kontakt', en: 'Contact' },
      href: '#contact',
      order: 4,
    },
  ],
  ctaLabel: {
    de: 'Kontakt aufnehmen',
    en: 'Get in Touch',
  },
};

export const fallbackHero: Hero = {
  _id: 'hero',
  _type: 'hero',
  name: 'Johannes Wild',
  rotatingTitles: {
    de: ['Strategischer Denker', 'Digitaler Leader', 'Markenaufbauer', 'Innovationstreiber'],
    en: ['Strategic Thinker', 'Digital Leader', 'Brand Builder', 'Innovation Driver'],
  },
  tagline: {
    de: 'Marken helfen, sich im digitalen Zeitalter durch analytisches Denken und strukturierte Umsetzung abzuheben.',
    en: 'Helping brands stand out in the digital era through analytical thinking and structured execution.',
  },
  primaryCTA: {
    label: { de: 'Lass uns zusammenarbeiten', en: "Let's Work Together" },
    href: '#contact',
  },
  heroImage: {
    _type: 'image',
    asset: {
      _ref: 'fallback',
      _type: 'reference',
    },
  },
  imageAlt: {
    de: 'Johannes Wild',
    en: 'Johannes Wild',
  },
  stats: [
    {
      value: '10+',
      label: { de: 'JAHRE FÜHRUNGSERFAHRUNG', en: 'YEARS LEADERSHIP' },
      order: 0,
    },
    {
      value: '50+',
      label: { de: 'PROJEKTE UMGESETZT', en: 'PROJECTS DELIVERED' },
      order: 1,
    },
    {
      value: '3',
      label: { de: 'KONTINENTE', en: 'CONTINENTS' },
      order: 2,
    },
  ],
};

export const fallbackFooter: Footer = {
  _id: 'footer',
  _type: 'footer',
  quickLinksLabel: {
    de: 'Schnellzugriff',
    en: 'Quick Links',
  },
  quickLinks: [
    {
      label: { de: 'Über mich', en: 'About' },
      href: '#about',
      order: 0,
    },
    {
      label: { de: 'Erfahrung', en: 'Experience' },
      href: '#experience',
      order: 1,
    },
    {
      label: { de: 'Projekte', en: 'Projects' },
      href: '#projects',
      order: 2,
    },
    {
      label: { de: 'Fähigkeiten', en: 'Skills' },
      href: '#skills',
      order: 3,
    },
    {
      label: { de: 'Kontakt', en: 'Contact' },
      href: '#contact',
      order: 4,
    },
  ],
  legalLinks: [
    {
      label: { de: 'Datenschutz', en: 'Privacy Policy' },
      href: '/privacy',
      order: 0,
    },
    {
      label: { de: 'AGB', en: 'Terms of Service' },
      href: '/terms',
      order: 1,
    },
    {
      label: { de: 'Impressum', en: 'Imprint' },
      href: '/imprint',
      order: 2,
    },
  ],
  getInTouchLabel: {
    de: 'Kontakt',
    en: 'Get in Touch',
  },
  getInTouchText: {
    de: 'Ich bin immer offen für Gespräche über neue Projekte, kreative Ideen oder Möglichkeiten.',
    en: "I'm always open to discussing new projects, creative ideas, or opportunities.",
  },
};

