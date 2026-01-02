import { MetadataRoute } from 'next';
// Path relatif untuk memastikan file JSON terbaca dari folder root
import carsData from '../data/cars.json';

interface Car {
  slug: string;
}

const cars = carsData as Car[];

export default function sitemap(): MetadataRoute.Sitemap {
  // Update domain sesuai target final Anda
  const baseUrl = 'https://lifecalc.app';

  const carEntries = cars.map((car) => ({
    url: `${baseUrl}/finance/${car.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/finance`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...carEntries,
  ];
}