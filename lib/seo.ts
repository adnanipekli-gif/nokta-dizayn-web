import { routing } from '@/i18n.routing';
import { getPathname } from '@/lib/i18n-navigation';

export const SITE_URL = 'https://www.noktadizayn.com.tr';

const LOCALES = routing.locales;
const DEFAULT_LOCALE = routing.defaultLocale;

/**
 * Absolute, locale-correct URL for a given locale-independent pathname
 * (e.g. '/urunler' or '/'), respecting the 'as-needed' locale prefix
 * (default locale "tr" has no prefix, others do — e.g. /en/urunler).
 */
export function absoluteUrl(locale: string, pathname: string): string {
  const path = getPathname({ href: pathname, locale: locale as never });
  return `${SITE_URL}${path}`;
}

/**
 * Builds `alternates.canonical` + `alternates.languages` (incl. x-default)
 * for a locale-independent pathname, for use in a page's generateMetadata.
 */
export function localizedAlternates(locale: string, pathname: string) {
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, absoluteUrl(l, pathname)])
  ) as Record<string, string>;
  languages['x-default'] = absoluteUrl(DEFAULT_LOCALE, pathname);

  return {
    canonical: absoluteUrl(locale, pathname),
    languages,
  };
}
