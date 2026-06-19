'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentPropsWithoutRef } from 'react';

const NON_DEFAULT_LOCALES = ['en', 'de', 'fr', 'es', 'ar', 'it', 'ru', 'zh'];

type Props = ComponentPropsWithoutRef<typeof NextLink>;

export function LocaleLink({ href, ...props }: Props) {
  const pathname = usePathname();
  const hrefStr = typeof href === 'string' ? href : String(href);

  // External URLs or anchors — pass through unchanged
  if (!hrefStr.startsWith('/')) {
    return <NextLink href={href} {...props} />;
  }

  // Detect active non-default locale from current URL segment
  const segment = pathname.split('/')[1];
  const locale = NON_DEFAULT_LOCALES.includes(segment) ? segment : null;

  // Prepend locale prefix if we're in a non-default locale and href isn't already prefixed
  const localizedHref =
    locale && !hrefStr.startsWith(`/${locale}/`) && hrefStr !== `/${locale}`
      ? `/${locale}${hrefStr}`
      : hrefStr;

  return <NextLink href={localizedHref} {...props} />;
}
