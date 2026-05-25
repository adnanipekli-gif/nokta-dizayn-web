'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/lib/i18n-navigation';
import { cn } from '@/lib/utils';

const LOCALES = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
] as const;

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'footer';
  className?: string;
}

export function LanguageSwitcher({ variant = 'navbar', className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleSwitch(nextLocale: string) {
    if (nextLocale === locale) return;
    router.replace(pathname, { locale: nextLocale });
  }

  if (variant === 'footer') {
    return (
      <div className={cn('flex items-center gap-1', className)}>
        {LOCALES.map((loc, i) => (
          <span key={loc.code} className="flex items-center gap-1">
            {i > 0 && <span className="text-xs text-[#E9EEF3]/25">/</span>}
            <button
              onClick={() => handleSwitch(loc.code)}
              className={cn(
                'text-xs transition-colors',
                locale === loc.code
                  ? 'text-[#E9EEF3]/75 font-medium'
                  : 'text-[#E9EEF3]/45 hover:text-[#E9EEF3]/75'
              )}
              aria-label={`Dil: ${loc.label}`}
              aria-current={locale === loc.code ? 'true' : undefined}
            >
              {loc.label}
            </button>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {LOCALES.map((loc, i) => (
        <span key={loc.code} className="flex items-center gap-0.5">
          {i > 0 && <span className="text-[0.6rem] opacity-30">/</span>}
          <button
            onClick={() => handleSwitch(loc.code)}
            className={cn(
              'text-sm font-medium transition-colors px-1',
              locale === loc.code
                ? 'text-[#11B5FF]'
                : 'text-inherit opacity-60 hover:opacity-100 hover:text-[#0A6DB8]'
            )}
            aria-label={`Switch to ${loc.label}`}
            aria-current={locale === loc.code ? 'true' : undefined}
          >
            {loc.label}
          </button>
        </span>
      ))}
    </div>
  );
}
