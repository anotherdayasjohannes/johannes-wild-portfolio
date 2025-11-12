// Locale types
import { localeString, localeText, localeBlockContent } from './locale'

// Documents
import profile from './profile'
import about from './about'
import skill from './skill'
import experience from './experience'
import project from './project'
import testimonial from './testimonial'
import interest from './interest'
import siteSettings from './siteSettings'
import navigation from './navigation'
import hero from './hero'
import footer from './footer'

export const schemaTypes = [
  // Locale types must be registered first
  localeString,
  localeText,
  localeBlockContent,
  
  // Global content
  siteSettings,
  navigation,
  hero,
  footer,
  
  // Documents
  profile,
  about,
  skill,
  experience,
  project,
  testimonial,
  interest,
]
