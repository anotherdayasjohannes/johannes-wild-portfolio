// Sanity document types for portfolio content

export interface LocaleString {
  de: string;
  en: string;
}

export interface LocaleText {
  de: string;
  en: string;
}

export interface LocaleStringArray {
  de: string[];
  en: string[];
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

// Site Settings
export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  companyName: string;
  tagline: LocaleString;
  copyright: LocaleString;
  socialLinks: Array<{
    platform: string;
    url: string;
    label: LocaleString;
    order: number;
  }>;
  contactEmail: string;
}

// Navigation
export interface Navigation {
  _id: string;
  _type: 'navigation';
  name: string;
  items: Array<{
    label: LocaleString;
    href: string;
    order: number;
  }>;
  ctaLabel: LocaleString;
}

// Hero
export interface Hero {
  _id: string;
  _type: 'hero';
  name: string;
  rotatingTitles: LocaleStringArray;
  tagline: LocaleText;
  primaryCTA: {
    label: LocaleString;
    href: string;
  };
  secondaryCTA?: {
    label: LocaleString;
    href: string;
  };
  heroImage: SanityImage;
  imageAlt: LocaleString;
  stats: Array<{
    value: string;
    label: LocaleString;
    order: number;
  }>;
}

// Footer
export interface Footer {
  _id: string;
  _type: 'footer';
  quickLinksLabel: LocaleString;
  quickLinks: Array<{
    label: LocaleString;
    href: string;
    order: number;
  }>;
  legalLinks: Array<{
    label: LocaleString;
    href: string;
    order: number;
  }>;
  getInTouchLabel: LocaleString;
  getInTouchText?: LocaleText;
}

// About
export interface About {
  _id: string;
  _type: 'about';
  title: LocaleString;
  bio: any; // Rich text / block content
  profileImage?: SanityImage;
  keyFacts?: Array<{
    label: LocaleString;
    value: LocaleString;
    order: number;
  }>;
  cvFile?: {
    de?: any;
    en?: any;
  };
}

// Experience
export interface Experience {
  _id: string;
  _type: 'experience';
  position: LocaleString;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: LocaleStringArray;
  order: number;
}

// Skill
export interface Skill {
  _id: string;
  _type: 'skill';
  name: LocaleString;
  category: 'soft' | 'language' | 'technical';
  level: number;
  color: string;
  order: number;
}

// Project
export interface Project {
  _id: string;
  _type: 'project';
  title: LocaleString;
  description: LocaleText;
  image?: SanityImage;
  tags?: string[];
  link?: string;
  order: number;
}

// Helper function to get localized string
export function getLocalizedString(field: LocaleString | undefined, locale: string): string {
  if (!field) return '';
  return field[locale as keyof LocaleString] || field.en || field.de || '';
}

// Helper function to get localized text
export function getLocalizedText(field: LocaleText | undefined, locale: string): string {
  if (!field) return '';
  return field[locale as keyof LocaleText] || field.en || field.de || '';
}

// Helper function to get localized string array
export function getLocalizedStringArray(field: LocaleStringArray | undefined, locale: string): string[] {
  if (!field) return [];
  return field[locale as keyof LocaleStringArray] || field.en || field.de || [];
}






