import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to true for production
});

// Helper function for generating image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Common GROQ queries
export const queries = {
  profile: `*[_type == "profile"][0]{
    _id,
    name,
    tagline,
    heroImage,
    bio,
    motivation,
    email,
    phone,
    location,
    socialLinks
  }`,
  
  skills: `*[_type == "skill"] | order(order asc){
    _id,
    category,
    skills,
    order
  }`,
  
  experience: `*[_type == "experience"] | order(startDate desc){
    _id,
    title,
    company,
    location,
    startDate,
    endDate,
    current,
    description,
    technologies,
    companyUrl
  }`,
  
  projects: `*[_type == "project"] | order(featured desc, order asc){
    _id,
    title,
    slug,
    description,
    fullDescription,
    image,
    technologies,
    projectUrl,
    githubUrl,
    featured,
    order
  }`,
  
  featuredProjects: `*[_type == "project" && featured == true] | order(order asc){
    _id,
    title,
    slug,
    description,
    image,
    technologies,
    projectUrl,
    githubUrl
  }`,
  
  testimonials: `*[_type == "testimonial"] | order(order asc){
    _id,
    name,
    position,
    company,
    quote,
    image,
    order
  }`,
};
