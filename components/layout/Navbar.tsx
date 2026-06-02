'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAVIGATION } from '@/lib/data/navigation';
import { Button } from '@/components/ui/Button';
import { DynIcon } from '@/lib/icons';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import type { NavGroup } from '@/lib/types';

// ── Two-panel product dropdown ──────────────────────────────
function ProductDropdown({ groups, onClose }: { groups: NavGroup[]; onClose: () => void }) {
  const groupsWithChildren = groups.filter((g) => g.children && g.children.length > 0);
  const [activeSlug, setActiveSlug] = useState(groupsWithChildren[0]?.slug ?? '');
  const router = useRouter();
  const active = groupsWithChildren.find((g) => g.slug === activeSlug) ?? groupsWithChildren[0];

  return (
    <div
      className="flex rounded-2xl shadow-elevated border border-[#D9E1EA] bg-white overflow-hidden"
      style={{ minWidth: 480 }}
      onMouseLeave={onClose}
      role="menu"
    >
      {/* Left — group selector */}
      <div className="w-44 bg-[#F7F9FC] border-r border-[#D9E1EA] py-2 shrink-0">
        {groups.map((group) => {
          const isDirect = !group.children || group.children.length === 0;
          const isActive = group.slug === activeSlug;
          return (
            <button
              key={group.slug}
              onMouseEnter={() => !isDirect && setActiveSlug(group.slug)}
              onClick={() => { router.push(group.href); onClose(); }}
              className={cn(
                'w-full flex items-start gap-3 px-4 py-3.5 text-left transition-colors duration-150',
                isActive ? 'bg-[#071B34]' : 'hover:bg-[#E9EEF3]'
              )}
            >
              <span className={cn('mt-0.5 shrink-0', isActive ? 'text-[#11B5FF]' : 'text-[#475569]')}>
                <DynIcon name={group.icon} size={16} />
              </span>
              <span>
                <span className={cn('block text-sm font-semibold leading-tight', isActive ? 'text-white' : 'text-[#071B34]')}>
                  {group.label}
                </span>
                <span className={cn('block text-[0.68rem] leading-snug mt-0.5', isActive ? 'text-white/55' : 'text-[#8D99A8]')}>
                  {group.tagline}
                </span>
              </span>
              <ChevronRight
                size={12}
                className={cn('ml-auto mt-1 shrink-0', isActive ? 'text-white/50' : 'text-[#C0CBDA]')}
              />
            </button>
          );
        })}
      </div>

      {/* Right — subcategories */}
      <div className="flex-1 py-2">
        {(active?.children ?? []).map((child) => (
          <Link
            key={child.label}
            href={child.href}
            role="menuitem"
            onClick={onClose}
            className="flex items-start gap-3 px-4 py-3 hover:bg-[#F7F9FC] transition-colors group"
          >
            <span className="mt-0.5 p-1.5 rounded-md bg-[#E9EEF3] group-hover:bg-[#071B34]/10 transition-colors shrink-0">
              <DynIcon name={child.icon} size={15} className="text-[#475569] group-hover:text-[#0A6DB8]" />
            </span>
            <span>
              <span className="block text-sm font-medium text-[#071B34] group-hover:text-[#0A6DB8] transition-colors">
                {child.label}
              </span>
              <span className="block text-xs text-[#8D99A8] mt-0.5 leading-snug">
                {child.description}
              </span>
            </span>
          </Link>
        ))}

        {/* View all link */}
        <div className="mx-4 mt-1 pt-2 border-t border-[#E9EEF3]">
          <Link
            href={active.href}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A6DB8] hover:text-[#071B34] transition-colors"
          >
            {active.label} ürünlerinin tümü
            <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Main Navbar ─────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileGroupExpanded, setMobileGroupExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  // Product detail pages (/urunler/group/sub/product) have a white top — force solid navbar
  const strippedPath = pathname.replace(/^\/(tr|en)/, '') || '/';
  const isLightTopPage =
    /^\/urunler\/[^/]+\/[^/]+\/[^/]+/.test(strippedPath) ||
    strippedPath === '/urunler/katalog';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isSolid = mobileOpen;
  const isGlass = (scrolled || isLightTopPage) && !isSolid;

  const navBg = isSolid
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D9E1EA]'
    : isGlass
    ? 'bg-[#071B34]/60 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_24px_rgba(7,27,52,0.25)]'
    : 'bg-transparent';

  const logoColor = isSolid ? 'text-[#071B34]' : 'text-white';
  const linkColor = isSolid ? 'text-[#071B34]' : 'text-white/90';

  return (
    <>
      <header
        className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', navBg)}
        role="banner"
      >
        <nav
          ref={menuRef}
          className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16"
          aria-label="Ana navigasyon"
        >
          {/* Logo */}
          <Link href="/" aria-label="Nokta Dizayn - Ana sayfa">
            <Image
              src="/nokta-dizayn-logo.png"
              alt="Nokta Dizayn"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {NAVIGATION.map((item) => (
              <li key={item.label} className="relative">
                {/* Two-level (groups) dropdown */}
                {item.groups ? (
                  <>
                    <button
                      onClick={() => { if (item.href) router.push(item.href); }}
                      onMouseEnter={() => setOpenMenu(item.label)}
                      className={cn(
                        'flex items-center gap-1 whitespace-nowrap px-2.5 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                        linkColor,
                        'hover:text-[#0A6DB8]',
                        openMenu === item.label && 'text-[#0A6DB8]'
                      )}
                      aria-expanded={openMenu === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          openMenu === item.label && 'rotate-180'
                        )}
                      />
                    </button>

                    {openMenu === item.label && (
                      <div className="absolute top-full left-0 mt-1 z-50">
                        <ProductDropdown
                          groups={item.groups}
                          onClose={() => setOpenMenu(null)}
                        />
                      </div>
                    )}
                  </>
                ) : item.children ? (
                  <>
                    <button
                      onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                      onMouseEnter={() => setOpenMenu(item.label)}
                      className={cn(
                        'flex items-center gap-1 whitespace-nowrap px-2.5 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                        linkColor,
                        'hover:text-[#0A6DB8]',
                        openMenu === item.label && 'text-[#0A6DB8]'
                      )}
                      aria-expanded={openMenu === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          openMenu === item.label && 'rotate-180'
                        )}
                      />
                    </button>

                    {openMenu === item.label && (
                      <div
                        className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-elevated border border-[#D9E1EA] py-3 z-50 min-w-[280px] max-h-[calc(100vh-80px)] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#D9E1EA]"
                        onMouseLeave={() => setOpenMenu(null)}
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            role="menuitem"
                            className="flex items-start gap-3 px-4 py-3 hover:bg-[#F7F9FC] transition-colors group"
                          >
                            <span className="mt-0.5 p-1.5 rounded-md bg-[#E9EEF3] group-hover:bg-[#071B34]/10 transition-colors">
                              <DynIcon name={child.icon} size={16} className="shrink-0" />
                            </span>
                            <span>
                              <span className="block text-sm font-medium text-[#071B34] group-hover:text-[#0A6DB8] transition-colors">
                                {child.label}
                              </span>
                              <span className="block text-xs text-[#8D99A8] mt-0.5 leading-snug">
                                {child.description}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className={cn(
                      'whitespace-nowrap px-2.5 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                      linkColor,
                      'hover:text-[#0A6DB8]',
                      pathname === item.href && 'text-[#0A6DB8]'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher variant="navbar" className={cn(linkColor)} />
            <Button variant="primary" size="sm" href="/iletisim?form=teklif">
              Teklif Al
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn('lg:hidden p-2 rounded-md', linkColor)}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div
            className="lg:hidden bg-white border-t border-[#D9E1EA] max-h-[calc(100vh-64px)] overflow-y-auto"
            role="dialog"
            aria-label="Mobil menü"
          >
            <div className="section-container py-4">
              <Button
                variant="primary"
                size="md"
                href="/iletisim?form=teklif"
                fullWidth
                className="mb-4"
              >
                Teklif Al
              </Button>

              <ul className="space-y-1" role="list">
                {NAVIGATION.map((item) => (
                  <li key={item.label}>
                    {/* Two-level mobile accordion */}
                    {item.groups ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                          }
                          className="w-full flex items-center justify-between px-3 py-3 rounded-md text-sm font-medium text-[#071B34] hover:bg-[#F7F9FC] transition-colors"
                          aria-expanded={mobileExpanded === item.label}
                        >
                          {item.label}
                          <ChevronDown
                            size={14}
                            className={cn(
                              'transition-transform duration-200',
                              mobileExpanded === item.label && 'rotate-180'
                            )}
                          />
                        </button>

                        {mobileExpanded === item.label && (
                          <div className="ml-3 mt-1 space-y-1">
                            {item.groups.map((group) => (
                              <div key={group.slug}>
                                {/* Group header */}
                                <button
                                  onClick={() =>
                                    setMobileGroupExpanded(
                                      mobileGroupExpanded === group.slug ? null : group.slug
                                    )
                                  }
                                  className="w-full flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-semibold text-[#071B34] hover:bg-[#F7F9FC] transition-colors"
                                >
                                  <span className="p-1 rounded bg-[#E9EEF3]">
                                    <DynIcon name={group.icon} size={13} className="text-[#475569]" />
                                  </span>
                                  {group.label}
                                  <ChevronDown
                                    size={12}
                                    className={cn(
                                      'ml-auto transition-transform duration-200',
                                      mobileGroupExpanded === group.slug && 'rotate-180'
                                    )}
                                  />
                                </button>

                                {/* Group children */}
                                {mobileGroupExpanded === group.slug && (
                                  <div className="ml-4 space-y-0.5">
                                    {(group.children ?? []).map((child) => (
                                      <Link
                                        key={child.label}
                                        href={child.href}
                                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-[#475569] hover:text-[#071B34] hover:bg-[#F7F9FC] transition-colors"
                                      >
                                        <DynIcon name={child.icon} size={14} className="shrink-0" />
                                        {child.label}
                                      </Link>
                                    ))}
                                    <Link
                                      href={group.href}
                                      className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0A6DB8] hover:text-[#071B34] transition-colors"
                                    >
                                      Tümünü gör <ArrowRight size={11} />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                          }
                          className="w-full flex items-center justify-between px-3 py-3 rounded-md text-sm font-medium text-[#071B34] hover:bg-[#F7F9FC] transition-colors"
                          aria-expanded={mobileExpanded === item.label}
                        >
                          {item.label}
                          <ChevronDown
                            size={14}
                            className={cn(
                              'transition-transform duration-200',
                              mobileExpanded === item.label && 'rotate-180'
                            )}
                          />
                        </button>
                        {mobileExpanded === item.label && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href + child.label}
                                href={child.href}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-[#475569] hover:text-[#071B34] hover:bg-[#F7F9FC] transition-colors"
                              >
                                <DynIcon name={child.icon} size={16} className="shrink-0" />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href || '/'}
                        className="block px-3 py-3 rounded-md text-sm font-medium text-[#071B34] hover:bg-[#F7F9FC] transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
