import { MetadataRoute } from 'next';
import { SOLUTIONS } from '@/lib/data/solutions';
import { PRODUCT_CATALOG } from '@/lib/data/product-catalog';

const BASE_URL = 'https://www.noktadizayn.com.tr';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/magaza-sistemleri`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/urunler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/proje-muhendislik`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/servis-destek`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/kurumsal`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/surdurulebilirlik`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/iletisim`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
  ];

  const solutionRoutes: MetadataRoute.Sitemap = SOLUTIONS.map((s) => ({
    url: `${BASE_URL}/magaza-sistemleri/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = PRODUCT_CATALOG.flatMap((group) => [
    { url: `${BASE_URL}/urunler/${group.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    ...group.subCategories.map((sub) => ({
      url: `${BASE_URL}/urunler/${group.slug}/${sub.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...group.subCategories.flatMap((sub) =>
      sub.products.map((p) => ({
        url: `${BASE_URL}/urunler/${group.slug}/${sub.slug}/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    ),
  ]);

  return [...staticRoutes, ...solutionRoutes, ...productRoutes];
}
