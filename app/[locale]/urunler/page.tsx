import type { Metadata } from 'next';
import { Link } from '@/lib/i18n-navigation';
import Image from 'next/image';
import { ArrowRight, Network, Zap } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { PRODUCT_CATALOG } from '@/lib/data/product-catalog';
import { subcatNameKey, groupTaglineKey } from '@/lib/product-i18n';
import { localizedAlternates } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'urunler_page' });
  return {
    title: t('hero_title'),
    description: t('hero_subtitle'),
    alternates: localizedAlternates(locale, '/urunler'),
  };
}

const groupIcons: Record<string, React.ElementType> = {
  remote: Network,
  'plug-in': Zap,
};

const groupImages: Record<string, string> = {
  remote: '/nokta-dizayn-urunler-gorselleri/remote-sistem-temsili.png',
  'plug-in': '/nokta-dizayn-urunler-gorselleri/plug-in-sistem-temsili.png',
};

export default async function UrunlerPage() {
  const t = await getTranslations('urunler_page');
  const tc = await getTranslations('product_catalog');

  function getTagline(slug: string): string {
    try { return tc(groupTaglineKey(slug)); } catch { return ''; }
  }
  function getSubName(slug: string, fallback: string): string {
    try { return tc(subcatNameKey(slug)); } catch { return fallback; }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-80 h-80 bg-[#11B5FF]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"
          aria-hidden="true"
        />
        <div className="section-container relative z-10">
          <h1 className="text-white mb-4">{t('hero_title')}</h1>
          <p className="text-[#E9EEF3]/65 max-w-2xl text-lg leading-relaxed">
            {t('hero_subtitle')}
          </p>
        </div>
      </section>

      {/* Group selection cards */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {PRODUCT_CATALOG.map((group) => {
              const Icon = groupIcons[group.slug] ?? Network;
              const totalProducts = group.subCategories.reduce(
                (acc, s) => acc + s.products.length,
                0
              );
              const image = groupImages[group.slug];
              const tagline = getTagline(group.slug);
              return (
                <Link
                  key={group.slug}
                  href={`/urunler/${group.slug}`}
                  className="group bg-white border border-[#D9E1EA] rounded-2xl overflow-hidden flex flex-col hover:shadow-[0_8px_40px_rgba(7,27,52,0.12)] hover:border-[#0A6DB8]/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative bg-[#F0F4F8] overflow-hidden">
                    {image && (
                      <Image
                        src={image}
                        alt={group.name}
                        width={800}
                        height={450}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    <span className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-[#071B34]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                      <Icon size={18} className="text-[#11B5FF]" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col gap-4 flex-1">
                    {/* Title */}
                    <div>
                      <h2 className="font-sora font-bold text-2xl text-[#071B34] mb-1">
                        {group.name}
                      </h2>
                      <p className="text-sm text-[#475569]">{tagline}</p>
                    </div>

                    {/* Sub-categories list */}
                    <ul className="space-y-1.5 flex-1">
                      {group.subCategories.map((sub) => (
                        <li key={sub.slug} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#11B5FF] shrink-0" />
                          <span className="text-sm text-[#475569]">
                            {getSubName(sub.slug, sub.name)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Stats + CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E9EEF3]">
                      <span className="text-xs text-[#8D99A8]">
                        {t('stats_label', {
                          categories: group.subCategories.length,
                          products: totalProducts,
                        })}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-[#0A6DB8] group-hover:gap-2 transition-all">
                        {t('explore')} <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
