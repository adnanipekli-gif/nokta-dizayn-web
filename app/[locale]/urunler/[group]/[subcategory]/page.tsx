import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/lib/i18n-navigation';
import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { PRODUCT_CATALOG } from '@/lib/data/product-catalog';
import { VARIANT_LABEL_KEYS, productDescKey, subcatNameKey } from '@/lib/product-i18n';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { localizedAlternates } from '@/lib/seo';

interface Props {
  params: Promise<{ locale: string; group: string; subcategory: string }>;
}

export function generateStaticParams() {
  return PRODUCT_CATALOG.flatMap((g) =>
    g.subCategories.map((s) => ({ group: g.slug, subcategory: s.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, group: groupSlug, subcategory: subSlug } = await params;
  const group = PRODUCT_CATALOG.find((g) => g.slug === groupSlug);
  const sub = group?.subCategories.find((s) => s.slug === subSlug);
  if (!sub) return {};
  return {
    title: `${sub.name} — ${group!.name} — Nokta Dizayn`,
    description: `${sub.name} ürünleri. ${sub.products.length} model.`,
    alternates: localizedAlternates(locale, `/urunler/${group!.slug}/${sub.slug}`),
  };
}

export default async function SubcategoryPage({ params }: Props) {
  const { group: groupSlug, subcategory: subSlug } = await params;
  const group = PRODUCT_CATALOG.find((g) => g.slug === groupSlug);
  const sub = group?.subCategories.find((s) => s.slug === subSlug);
  if (!group || !sub) notFound();

  const t = await getTranslations('urunler_page');
  const tn = await getTranslations('nav');
  const tc = await getTranslations('product_catalog');

  function getSubName(slug: string): string {
    try { return tc(subcatNameKey(slug)); } catch { return sub!.name; }
  }
  function getLabel(label: string): string {
    if (!label) return label;
    const key = VARIANT_LABEL_KEYS[label];
    if (!key) return label;
    try { return tc(key); } catch { return label; }
  }
  function getDesc(slug: string, fallback: string): string {
    try { return tc(productDescKey(slug)); } catch { return fallback; }
  }

  const subName = getSubName(sub.slug);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-80 h-80 bg-[#11B5FF]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"
          aria-hidden="true"
        />
        <div className="section-container relative z-10">
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: tn('urunler'), href: '/urunler' },
                { label: group.name, href: `/urunler/${group.slug}` },
                { label: subName },
              ]}
            />
          </div>
          <h1 className="text-white mb-3">{subName}</h1>
          <p className="text-xs font-mono text-[#E9EEF3]/45 mt-2">
            {t('products_count', { n: sub.products.length })}
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sub.products.map((product, i) => (
              <Link
                key={product.slug}
                href={`/urunler/${group.slug}/${sub.slug}/${product.slug}`}
                className="group bg-white border border-[#D9E1EA] rounded-2xl overflow-hidden hover:shadow-[0_6px_32px_rgba(7,27,52,0.10)] hover:border-[#0A6DB8]/30 transition-all duration-300 flex flex-col"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-[#F7F9FC] overflow-hidden border-b border-[#E9EEF3]">
                  {product.images[0] && (
                    <Image
                      src={product.images[0]}
                      alt={product.variants[0].code}
                      fill
                      className="object-contain p-5 transition-transform duration-400 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  {product.images.length > 1 && (
                    <span className="absolute top-3 right-3 bg-[#071B34]/70 text-white text-[0.6rem] font-mono px-2 py-0.5 rounded-full">
                      {t('more_images', { n: product.images.length - 1 })}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="space-y-1">
                    {product.variants.map((v) => (
                      <div key={v.code} className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-sora font-bold text-base text-[#071B34] leading-tight group-hover:text-[#0A6DB8] transition-colors">
                          {v.code}
                        </span>
                        {v.label && (
                          <span className="text-xs text-[#8D99A8]">{getLabel(v.label)}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-2 flex-1">
                    {getDesc(product.slug, product.description)}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0A6DB8] group-hover:gap-2.5 transition-all pt-1">
                    {t('view_details')} <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
