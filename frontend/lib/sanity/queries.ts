import { client } from './client';
import type {
  SiteSettings,
  Navigation,
  Hero,
  Footer,
  About,
  Experience,
  Skill,
  Project,
} from './types';

// Site Settings Query
export async function getSiteSettings(): Promise<SiteSettings | null> {
  const query = `*[_type == "siteSettings"][0]{
    _id,
    _type,
    companyName,
    tagline,
    copyright,
    socialLinks[] | order(order asc) {
      platform,
      url,
      label,
      order
    },
    contactEmail
  }`;

  return client.fetch(query);
}

// Navigation Query
export async function getNavigation(name: string = 'Main Navigation'): Promise<Navigation | null> {
  const query = `*[_type == "navigation" && name == $name][0]{
    _id,
    _type,
    name,
    items[] | order(order asc) {
      label,
      href,
      order
    },
    ctaLabel
  }`;

  return client.fetch(query, { name });
}

// Hero Query
export async function getHero(): Promise<Hero | null> {
  const query = `*[_type == "hero"][0]{
    _id,
    _type,
    name,
    rotatingTitles,
    tagline,
    primaryCTA,
    secondaryCTA,
    heroImage{
      asset->{
        _id,
        url
      },
      hotspot
    },
    imageAlt,
    stats[] | order(order asc) {
      value,
      label,
      order
    }
  }`;

  return client.fetch(query);
}

// Footer Query
export async function getFooter(): Promise<Footer | null> {
  const query = `*[_type == "footer"][0]{
    _id,
    _type,
    quickLinksLabel,
    quickLinks[] | order(order asc) {
      label,
      href,
      order
    },
    legalLinks[] | order(order asc) {
      label,
      href,
      order
    },
    getInTouchLabel,
    getInTouchText
  }`;

  return client.fetch(query);
}

// About Query
export async function getAbout(): Promise<About | null> {
  const query = `*[_type == "about"][0]{
    _id,
    _type,
    title,
    bio,
    profileImage{
      asset->{
        _id,
        url
      },
      hotspot
    },
    keyFacts[] | order(order asc) {
      label,
      value,
      order
    },
    cvFile
  }`;

  return client.fetch(query);
}

// Experience Query
export async function getExperiences(): Promise<Experience[]> {
  const query = `*[_type == "experience"] | order(order asc) {
    _id,
    _type,
    position,
    company,
    location,
    startDate,
    endDate,
    current,
    description,
    order
  }`;

  return client.fetch(query);
}

// Skills Query
export async function getSkills(): Promise<Skill[]> {
  const query = `*[_type == "skill"] | order(category asc, order asc) {
    _id,
    _type,
    name,
    category,
    level,
    color,
    order
  }`;

  return client.fetch(query);
}

// Projects Query
export async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(order asc) {
    _id,
    _type,
    title,
    description,
    image{
      asset->{
        _id,
        url
      },
      hotspot
    },
    tags,
    link,
    order
  }`;

  return client.fetch(query);
}

// Fetch all page data at once for better performance
export async function getPageData() {
  const [siteSettings, navigation, hero, footer, about, experiences, skills, projects] = await Promise.all([
    getSiteSettings(),
    getNavigation(),
    getHero(),
    getFooter(),
    getAbout(),
    getExperiences(),
    getSkills(),
    getProjects(),
  ]);

  return {
    siteSettings,
    navigation,
    hero,
    footer,
    about,
    experiences,
    skills,
    projects,
  };
}
