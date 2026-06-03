import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['tr', 'en', 'de', 'fr', 'es'],
  defaultLocale: 'tr',
  localePrefix: 'as-needed', // TR has no prefix: /en/, /de/, /fr/, /es/
  localeDetection: false,    // Always open in Turkish, ignore browser language
});
