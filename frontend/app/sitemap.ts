import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/paths";

// The children have no pages; if they ever get one, keep it out of here and set noindex.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_ORIGIN}/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_ORIGIN}/johannes`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_ORIGIN}/johannes/trainer-abrechnung`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${SITE_ORIGIN}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_ORIGIN}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
