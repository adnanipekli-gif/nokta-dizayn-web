'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, Link } from '@/lib/i18n-navigation';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const LOCALES = [
  { code: 'tr', label: 'TR', name: 'Türkçe' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'es', label: 'ES', name: 'Español' },
] as const;

type LocaleCode = (typeof LOCALES)[number]['code'];

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'footer';
  className?: string;
}

export function LanguageSwitcher({ variant = 'navbar', className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  /* ── Footer variant: inline links ───────────────────────── */
  if (variant === 'footer') {
    return (
      <div className={cn('flex items-center gap-1 flex-wrap', className)}>
        {LOCALES.map((loc, i) => (
          <span key={loc.code} className="flex items-center gap-1">
            {i > 0 && <span className="text-xs text-[#E9EEF3]/25">/</span>}
            <Link
              href={pathname}
              locale={loc.code as LocaleCode}
              className={cn(
                'text-xs transition-colors',
                locale === loc.code
                  ? 'text-[#E9EEF3]/75 font-medium'
                  : 'text-[#E9EEF3]/45 hover:text-[#E9EEF3]/75'
              )}
              aria-label={loc.name}
              aria-current={locale === loc.code ? 'true' : undefined}
            >
              {loc.label}
            </Link>
          </span>
        ))}
      </div>
    );
  }

  /* ── Navbar variant: dropdown ────────────────────────────── */
  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-sm font-medium px-2 py-1.5 rounded-md opacity-75 hover:opacity-100 transition-opacity"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={current.name}
      >
        {current.label}
        <ChevronDown
          size={12}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-1 bg-white rounded-xl shadow-lg border border-[#D9E1EA] py-1 z-50 min-w-[140px]"
          role="listbox"
        >
          {LOCALES.map((loc) => (
            <Link
              key={loc.code}
              href={pathname}
              locale={loc.code as LocaleCode}
              onClick={() => setOpen(false)}
              role="option"
              aria-selected={locale === loc.code}
              className={cn(
                'flex items-center gap-2.5 px-3 py-2 transition-colors',
                locale === loc.code
                  ? 'bg-[#EAF4FD] text-[#0A6DB8] font-semibold'
                  : 'text-[#475569] hover:bg-[#F7F9FC] hover:text-[#071B34]'
              )}
            >
              <span className="font-mono text-xs font-bold w-6 shrink-0">{loc.label}</span>
              <span className="text-xs">{loc.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
