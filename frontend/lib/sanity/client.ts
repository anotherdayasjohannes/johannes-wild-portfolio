import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6bj2fvps',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Set to true for production, false for preview/draft mode
});

/**
 * Fetch data from Sanity with locale support
 * 
 * @param query - GROQ query string
 * @param params - Query parameters including locale
 * @returns Fetched data
 * 
 * @example
 * const about = await fetchSanity(aboutQuery, { locale: 'en' });
 */
export async function fetchSanity<T = any>(
  query: string,
  params: Record<string, any> = {}
): Promise<T> {
  return client.fetch<T>(query, params);
}

