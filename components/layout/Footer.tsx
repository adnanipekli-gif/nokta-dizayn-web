import { Link } from '@/lib/i18n-navigation';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Printer } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

export async function Footer() {
  const t = await getTranslations('footer');

  const solutions = [
    { labelKey: 'market_raf',   href: '/magaza-sistemleri#bolum-01' },
    { labelKey: 'kasap_balik',  href: '/magaza-sistemleri#bolum-02' },
    { label: 'Fast Food',       href: '/magaza-sistemleri#bolum-03' },
    { label: 'Coffee Shops',    href: '/magaza-sistemleri#bolum-04' },
    { labelKey: 'manav_reyonu', href: '/magaza-sistemleri#bolum-05' },
    { labelKey: 'firin_reyon',  href: '/magaza-sistemleri#bolum-06' },
  ] as const;

  const products = [
    { labelKey: 'remote_sutluk',   href: '/urunler/remote/remote-sutluk' },
    { labelKey: 'remote_sarkuteri',href: '/urunler/remote/remote-sarkuteri' },
    { labelKey: 'remote_derin',    href: '/urunler/remote/remote-derin-dondurucu' },
    { labelKey: 'remote_freezer',  href: '/urunler/remote/remote-yatay-freezer' },
    { labelKey: 'plugin_sutluk',   href: '/urunler/plug-in/plug-in-sutluk' },
    { labelKey: 'plugin_sarkuteri',href: '/urunler/plug-in/plug-in-sarkuteri' },
    { labelKey: 'plugin_promosyon',href: '/urunler/plug-in/plug-in-promosyon' },
  ] as const;

  const corporate = [
    { labelKey: 'hakkimizda',       href: '/kurumsal' },
    { labelKey: 'proje_muhendislik',href: '/proje-muhendislik' },
    { labelKey: 'surdurulebilirlik',href: '/surdurulebilirlik' },
    { labelKey: 'referanslar',      href: '/referanslar' },
    { labelKey: 'servis_destek',    href: '/servis-destek' },
    { labelKey: 'iletisim_baslik',  href: '/iletisim' },
  ] as const;

  return (
    <footer className="bg-[#071B34] text-[#E9EEF3]" role="contentinfo">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://www.ndgrouptr.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ND Group Companies"
                className="flex items-center shrink-0"
              >
                <Image
                  src="/nd-group-logo.png"
                  alt="ND Group Companies"
                  width={56}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
              </a>
              <div className="w-px h-6 bg-white/20 shrink-0" />
              <Link href="/" aria-label="Nokta Dizayn">
                <Image
                  src="/nokta-dizayn-logo.png"
                  alt="Nokta Dizayn"
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-sm text-[#E9EEF3]/65 leading-relaxed">
              {t('brand_desc')}
            </p>
          </div>

          {/* Store Systems */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              {t('magaza_sistemleri')}
            </h3>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#E9EEF3]/65 hover:text-[#11B5FF] transition-colors">
                    {'labelKey' in item ? t(item.labelKey) : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              {t('urunler')}
            </h3>
            <ul className="space-y-2.5">
              {products.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#E9EEF3]/65 hover:text-[#11B5FF] transition-colors">
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              {t('kurumsal')}
            </h3>
            <ul className="space-y-2.5">
              {corporate.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#E9EEF3]/65 hover:text-[#11B5FF] transition-colors">
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              {t('iletisim_baslik')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#11B5FF] mt-0.5 shrink-0" />
                <span className="text-sm text-[#E9EEF3]/65 leading-snug">
                  Emek Mahallesi, Şems Caddesi No:7<br />
                  Sancaktepe, İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#11B5FF] shrink-0" />
                <a href="tel:+902163136767" className="text-sm text-[#E9EEF3]/65 hover:text-[#11B5FF] transition-colors">
                  +90 (216) 313 67 67
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Printer size={14} className="text-[#11B5FF] shrink-0" />
                <span className="text-sm text-[#E9EEF3]/65">
                  +90 (216) 314 06 24
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#11B5FF] shrink-0" />
                <a href="mailto:bilgi@noktadizayn.com.tr" className="text-sm text-[#E9EEF3]/65 hover:text-[#11B5FF] transition-colors">
                  bilgi@noktadizayn.com.tr
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#11B5FF] shrink-0" />
                <a href="mailto:musterihizmetleri@noktadizayn.com.tr" className="text-sm text-[#E9EEF3]/65 hover:text-[#11B5FF] transition-colors">
                  musterihizmetleri@noktadizayn.com.tr
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={14} className="text-[#11B5FF] mt-0.5 shrink-0" />
                <span className="text-sm text-[#E9EEF3]/65 leading-snug">{t('hours')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#E9EEF3]/45">
            © 2026 Nokta Dizayn. {t('rights')}
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/kvkk" className="text-xs text-[#E9EEF3]/45 hover:text-[#E9EEF3]/75 transition-colors">{t('kvkk')}</Link>
            <Link href="/gizlilik" className="text-xs text-[#E9EEF3]/45 hover:text-[#E9EEF3]/75 transition-colors">{t('gizlilik')}</Link>
            <Link href="/cerez-politikasi" className="text-xs text-[#E9EEF3]/45 hover:text-[#E9EEF3]/75 transition-colors">{t('cerez')}</Link>
            <span className="text-xs text-[#E9EEF3]/45">|</span>
            <LanguageSwitcher variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
