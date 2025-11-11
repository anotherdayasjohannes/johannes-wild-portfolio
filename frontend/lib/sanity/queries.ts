import { groq } from 'next-sanity';

/**
 * GROQ queries for all content types with locale support
 * Queries automatically extract the correct language field based on the locale parameter
 */

/**
 * Get About content
 * @param locale - 'en' or 'de'
 */
export const aboutQuery = groq`
  *[_type == "about"][0] {
    "title": title[$locale],
    "bio": bio[$locale],
    profileImage {
      asset->{
        _id,
        url
      },
      alt
    },
    keyFacts[] {
      "label": label[$locale],
      "value": value[$locale],
      order
    } | order(order asc),
    "cvUrl": cvFile[$locale].asset->url
  }
`;

/**
 * Get all work experiences
 * @param locale - 'en' or 'de'
 */
export const experiencesQuery = groq`
  *[_type == "experience"] | order(order asc) {
    "position": position[$locale],
    company,
    location,
    startDate,
    endDate,
    current,
    "description": description[$locale],
    order
  }
`;

/**
 * Get skills by category
 * @param locale - 'en' or 'de'
 * @param category - Optional filter: 'soft', 'language', or 'technical'
 */
export const skillsQuery = groq`
  *[_type == "skill"] | order(category asc, order asc) {
    "name": name[$locale],
    category,
    level,
    color,
    order
  }
`;

export const skillsByCategoryQuery = groq`
  *[_type == "skill" && category == $category] | order(order asc) {
    "name": name[$locale],
    category,
    level,
    color,
    order
  }
`;

/**
 * Get all testimonials
 * @param locale - 'en' or 'de'
 */
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    name,
    position,
    company,
    "quote": quote[$locale],
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    order
  }
`;

/**
 * Get all personal interests
 * @param locale - 'en' or 'de'
 */
export const interestsQuery = groq`
  *[_type == "interest"] | order(order asc) {
    "title": title[$locale],
    "description": description[$locale],
    icon,
    order
  }
`;

/**
 * Get all projects (existing schema)
 */
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    description,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    technologies,
    link,
    order
  }
`;

/**
 * Get a single project by ID
 */
export const projectByIdQuery = groq`
  *[_type == "project" && _id == $id][0] {
    _id,
    title,
    description,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    technologies,
    link,
    order
  }
`;

