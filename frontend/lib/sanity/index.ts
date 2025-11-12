// Export Sanity client and utilities
export { client, previewClient, urlFor } from './client';

// Export types
export type {
  LocaleString,
  LocaleText,
  LocaleStringArray,
  SanityImage,
  SiteSettings,
  Navigation,
  Hero,
  Footer,
  About,
  Experience,
  Skill,
  Project,
} from './types';

export {
  getLocalizedString,
  getLocalizedText,
  getLocalizedStringArray,
} from './types';

// Export queries
export {
  getSiteSettings,
  getNavigation,
  getHero,
  getFooter,
  getAbout,
  getExperiences,
  getSkills,
  getProjects,
  getPageData,
} from './queries';
