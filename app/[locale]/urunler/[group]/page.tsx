import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { PRODUCT_CATALOG } from '@/lib/data/product-catalog';
import { subcatNameKey, groupTaglineKey } from '@/lib/product-i18n';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

const groupHeroImages: Record<string, string> = {
  remote: '/nokta-dizayn-urunler-gorselleri/remote-sistem-temsili.png',
  'plug-in': '/nokta-dizayn-urunler-gorselleri/plug-in-sistem-temsili.png',
};

interface Props {
  params: Promise<{ group: string }>;
}

export function generateStaticParams() {
  return PRODUCT_CATALOG.map((g) => ({ group: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { group: groupSlug } = await params;
  const group = PRODUCT_CATALOG.find((g) => g.slug === groupSlug);
  if (!group) return {};
  return {
    title: `${group.name} — Nokta Dizayn`,
    description: group.tagline,
    alternates: { canonical: `https://www.noktadizayn.com.tr/urunler/${group.slug}` },
  };
}

export default async function GroupPage({ params }: Props) {
  const { group: groupSlug } = await params;
  const group = PRODUCT_CATALOG.find((g) => g.slug === groupSlug);
  if (!group) notFound();

  const t = await getTranslations('urunler_page');
  const tn = await getTranslations('nav');
  const tc = await getTranslations('product_catalog');

  function getTagline(): string {
    try { return tc(groupTaglineKey(group!.slug)); } catch { return group!.tagline; }
  }
  function getSubName(slug: string): string {
    try { return tc(subcatNameKey(slug)); } catch { return slug; }
  }

  const heroImage = groupHeroImages[group.slug];
  const tagline = getTagline();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-[#071B34] relative overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-[#071B34]/75" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: tn('urunler'), href: '/urunler' },
                { label: group.name },
              ]}
            />
          </div>
          <h1 className="text-white mb-3">{group.name} {t('products_suffix')}</h1>
          <p className="text-[#E9EEF3]/65 max-w-xl text-lg leading-relaxed">
            {tagline}
          </p>
        </div>
      </section>

      {/* Sub-category cards */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {group.subCategories.map((sub) => {
              const previewImage = sub.products[0]?.images[0];
              const subName = getSubName(sub.slug);
              return (
                <Link
                  key={sub.slug}
                  href={`/urunler/${group.slug}/${sub.slug}`}
                  className="group bg-white border border-[#D9E1EA] rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(7,27,52,0.12)] hover:border-[#0A6DB8]/30 transition-all duration-300"
                >
                  {/* Preview image */}
                  <div className="relative aspect-[16/9] bg-[#F0F4F8] overflow-hidden">
                    {previewImage ? (
                      <Image
                        src={previewImage}
                        alt={subName}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#C0CBDA] text-sm font-mono">{t('no_image')}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[#071B34]/0 group-hover:bg-[#071B34]/5 transition-colors duration-300" />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <h2 className="font-sora font-bold text-lg text-[#071B34] mb-1 group-hover:text-[#0A6DB8] transition-colors">
                        {subName}
                      </h2>
                      <p className="text-sm text-[#8D99A8]">
                        {t('products_count', { n: sub.products.length })}
                      </p>
                    </div>
                    <span className="w-10 h-10 rounded-full bg-[#F7F9FC] border border-[#D9E1EA] flex items-center justify-center group-hover:bg-[#071B34] group-hover:border-[#071B34] transition-all duration-200 shrink-0">
                      <ArrowRight size={16} className="text-[#475569] group-hover:text-white transition-colors" />
                    </span>
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
