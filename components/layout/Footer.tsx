import Link from 'next/link';
import { Linkedin, Youtube, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

const solutions = [
  { label: 'Market Raf Sistemleri', href: '/magaza-sistemleri#bolum-01' },
  { label: 'Kasap, Balık & Dondurulmuş Gıda', href: '/magaza-sistemleri#bolum-02' },
  { label: 'Fast Food', href: '/magaza-sistemleri#bolum-03' },
  { label: 'Coffee Shops', href: '/magaza-sistemleri#bolum-04' },
  { label: 'Manav Reyon Sistemleri', href: '/magaza-sistemleri#bolum-05' },
  { label: 'Fırın Reyon Sistemleri', href: '/magaza-sistemleri#bolum-06' },
];

const products = [
  { label: 'Remote Sütlük', href: '/urunler' },
  { label: 'Remote Şarküteri', href: '/urunler' },
  { label: 'Remote Derin Dondurucu', href: '/urunler' },
  { label: 'Remote Yatay Freezer', href: '/urunler' },
  { label: 'Plug-In Sütlük', href: '/urunler' },
  { label: 'Plug-In Şarküteri', href: '/urunler' },
  { label: 'Plug-In Promosyon', href: '/urunler' },
];

const corporate = [
  { label: 'Hakkımızda', href: '/kurumsal' },
  { label: 'Proje & Mühendislik', href: '/proje-muhendislik' },
  { label: 'Sürdürülebilirlik', href: '/surdurulebilirlik' },
  { label: 'Referanslar', href: '/referanslar' },
  { label: 'Servis & Destek', href: '/servis-destek' },
  { label: 'İletişim', href: '/iletisim' },
];

export function Footer() {
  return (
    <footer className="bg-[#071B34] text-[#E9EEF3]" role="contentinfo">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-1 font-sora font-bold text-lg text-white tracking-tight mb-4"
            >
              NOKTA DİZAYN
              <span className="w-2 h-2 rounded-full bg-[#11B5FF] mt-0.5" aria-hidden="true" />
            </Link>
            <p className="text-sm text-[#E9EEF3]/65 leading-relaxed mb-6">
              2003&apos;ten bu yana entegre mağaza sistemleri — soğutma ekipmanları, raf ve reyon
              sistemleri, kasa üniteleri ve mağaza mobilyaları. 60+ ülkede 30.000+ nokta.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/8 hover:bg-[#11B5FF]/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/8 hover:bg-[#11B5FF]/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/8 hover:bg-[#11B5FF]/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Store Systems */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Mağaza Sistemleri
            </h3>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#E9EEF3]/65 hover:text-[#11B5FF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Ürünler
            </h3>
            <ul className="space-y-2.5">
              {products.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#E9EEF3]/65 hover:text-[#11B5FF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              Kurumsal
            </h3>
            <ul className="space-y-2.5">
              {corporate.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#E9EEF3]/65 hover:text-[#11B5FF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
              İletişim
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[#11B5FF] mt-0.5 shrink-0" />
                <span className="text-sm text-[#E9EEF3]/65 leading-snug">
                  Merkez Mah. Sanayi Cad. No:1<br />
                  İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#11B5FF] shrink-0" />
                <a
                  href="tel:+902121234567"
                  className="text-sm text-[#E9EEF3]/65 hover:text-[#11B5FF] transition-colors"
                >
                  +90 (212) 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#11B5FF] shrink-0" />
                <a
                  href="mailto:info@noktadizayn.com.tr"
                  className="text-sm text-[#E9EEF3]/65 hover:text-[#11B5FF] transition-colors"
                >
                  info@noktadizayn.com.tr
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={14} className="text-[#11B5FF] mt-0.5 shrink-0" />
                <span className="text-sm text-[#E9EEF3]/65 leading-snug">
                  Pzt – Cum: 09:00 – 18:00<br />
                  Hafta sonu: Kapalı
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#E9EEF3]/45">
            © 2025 Nokta Dizayn. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/kvkk" className="text-xs text-[#E9EEF3]/45 hover:text-[#E9EEF3]/75 transition-colors">KVKK</Link>
            <Link href="/gizlilik" className="text-xs text-[#E9EEF3]/45 hover:text-[#E9EEF3]/75 transition-colors">Gizlilik</Link>
            <Link href="/cerez-politikasi" className="text-xs text-[#E9EEF3]/45 hover:text-[#E9EEF3]/75 transition-colors">Çerez Politikası</Link>
            <span className="text-xs text-[#E9EEF3]/45">|</span>
            <LanguageSwitcher variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
