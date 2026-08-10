import { SITE_URL } from '@/lib/seo';

/**
 * Note: BreadcrumbList JSON-LD is emitted by the shared <Breadcrumb> layout
 * component (components/layout/Breadcrumb.tsx) itself, mirroring whatever
 * items each page passes it — no separate helper needed here.
 */

/**
 * Product schema for a catalog product detail page.
 * Intentionally omits `offers` — no price/stock data exists in the source data.
 */
export function productJsonLd(params: {
  name: string;
  description: string;
  images: string[];
  url: string;
  brand?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    description: params.description,
    image: params.images.map((src) => `${SITE_URL}${src}`),
    url: params.url,
    brand: {
      '@type': 'Brand',
      name: params.brand ?? 'Nokta Dizayn',
    },
  };
}

/**
 * Service schema for a store-systems/solution detail page.
 */
export function serviceJsonLd(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: params.url,
    provider: {
      '@type': 'Organization',
      name: 'Nokta Dizayn',
      url: SITE_URL,
    },
  };
}
