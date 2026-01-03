import { MetadataRoute } from 'next'
import { URLS } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  // Get current date for lastmod
  const currentDate = new Date().toISOString().split('T')[0]

  return [
    {
      url: URLS.home,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: URLS.certificate,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: URLS.contact,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

