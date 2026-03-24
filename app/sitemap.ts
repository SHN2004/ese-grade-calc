import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://help-me-survive-college.vercel.app/', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://help-me-survive-college.vercel.app/grade-calculator', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://help-me-survive-college.vercel.app/attendance-calculator', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://help-me-survive-college.vercel.app/cgpa-calculator', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}
