import { routing } from '@/i18n.routing';
import { SOLUTIONS } from '@/lib/data/solutions';
import { PRODUCT_CATALOG } from '@/lib/data/product-catalog';
import { PROJECTS } from '@/lib/data/projects';

const BASE_URL = 'https://www.noktadizayn.com.tr';

const LOCALES = routing.locales;
const DEFAULT_LOCALE = routing.defaultLocale;

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

type RouteDef = {
  /** Locale-independent path, without leading/trailing slash. Empty string = homepage. */
  path: string;
  changeFrequency: ChangeFreq;
  priority: number;
};

/** localePrefix: 'as-needed' -> default locale (tr) has no prefix, others are prefixed. */
function localizedUrl(path: string, locale: string): string {
  const suffix = path ? `/${path}` : '';
  if (locale === DEFAULT_LOCALE) {
    return `${BASE_URL}${suffix || '/'}`;
  }
  return `${BASE_URL}/${locale}${suffix}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildStaticRoutes(): RouteDef[] {
  const staticRoutes: RouteDef[] = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: 'magaza-sistemleri', changeFrequency: 'weekly', priority: 0.9 },
    { path: 'urunler', changeFrequency: 'weekly', priority: 0.9 },
    { path: 'urunler/katalog', changeFrequency: 'monthly', priority: 0.7 },
    { path: 'urunler/sutluk', changeFrequency: 'monthly', priority: 0.7 },
    { path: 'urunler/sarkuteri', changeFrequency: 'monthly', priority: 0.7 },
    { path: 'proje-muhendislik', changeFrequency: 'monthly', priority: 0.7 },
    { path: 'servis-destek', changeFrequency: 'monthly', priority: 0.8 },
    { path: 'kurumsal', changeFrequency: 'monthly', priority: 0.7 },
    { path: 'surdurulebilirlik', changeFrequency: 'monthly', priority: 0.6 },
    { path: 'referanslar', changeFrequency: 'monthly', priority: 0.8 },
    { path: 'iletisim', changeFrequency: 'yearly', priority: 0.8 },
    { path: 'fuar-standlari', changeFrequency: 'monthly', priority: 0.8 },
  ];

  const solutionRoutes: RouteDef[] = SOLUTIONS.map((s) => ({
    path: `magaza-sistemleri/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const referenceRoutes: RouteDef[] = PROJECTS.map((p) => ({
    path: `referanslar/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const productRoutes: RouteDef[] = PRODUCT_CATALOG.flatMap((group) => [
    { path: `urunler/${group.slug}`, changeFrequency: 'monthly' as const, priority: 0.85 },
    ...group.subCategories.map((sub) => ({
      path: `urunler/${group.slug}/${sub.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...group.subCategories.flatMap((sub) =>
      sub.products.map((p) => ({
        path: `urunler/${group.slug}/${sub.slug}/${p.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    ),
  ]);

  return [...staticRoutes, ...solutionRoutes, ...referenceRoutes, ...productRoutes];
}

export function GET() {
  const routes = buildStaticRoutes();
  const lastmod = new Date().toISOString();

  const urlEntries = routes.flatMap(({ path, changeFrequency, priority }) =>
    LOCALES.map((locale) => {
      const alternates = LOCALES.map(
        (l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${escapeXml(localizedUrl(path, l))}"/>`
      ).join('\n');
      const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(localizedUrl(path, DEFAULT_LOCALE))}"/>`;

      return [
        '<url>',
        `<loc>${escapeXml(localizedUrl(path, locale))}</loc>`,
        alternates,
        xDefault,
        `<lastmod>${lastmod}</lastmod>`,
        `<changefreq>${changeFrequency}</changefreq>`,
        `<priority>${priority.toFixed(1)}</priority>`,
        '</url>',
      ].join('\n');
    })
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urlEntries,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
    },
  });
}
