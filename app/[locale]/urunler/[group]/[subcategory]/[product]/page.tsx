import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/lib/i18n-navigation';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { PRODUCT_CATALOG } from '@/lib/data/product-catalog';
import { VARIANT_LABEL_KEYS, productDescKey, subcatNameKey } from '@/lib/product-i18n';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ProductImageViewer } from '@/components/ui/ProductImageViewer';
import { Button } from '@/components/ui/Button';
import { absoluteUrl, localizedAlternates } from '@/lib/seo';
import { productJsonLd } from '@/lib/seo/jsonld';

interface Props {
  params: Promise<{ locale: string; group: string; subcategory: string; product: string }>;
}

export function generateStaticParams() {
  return PRODUCT_CATALOG.flatMap((g) =>
    g.subCategories.flatMap((s) =>
      s.products.map((p) => ({
        group: g.slug,
        subcategory: s.slug,
        product: p.slug,
      }))
    )
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, group: groupSlug, subcategory: subSlug, product: productSlug } = await params;
  const group = PRODUCT_CATALOG.find((g) => g.slug === groupSlug);
  const sub = group?.subCategories.find((s) => s.slug === subSlug);
  const product = sub?.products.find((p) => p.slug === productSlug);
  if (!product) return {};
  const name = product.variants.map((v) => v.code).join(' / ');
  return {
    title: `${name} — ${sub!.name} — Nokta Dizayn`,
    description: product.description,
    alternates: localizedAlternates(
      locale,
      `/urunler/${group!.slug}/${sub!.slug}/${product.slug}`
    ),
  };
}

export default async function ProductPage({ params }: Props) {
  const { locale, group: groupSlug, subcategory: subSlug, product: productSlug } = await params;
  const group = PRODUCT_CATALOG.find((g) => g.slug === groupSlug);
  const sub = group?.subCategories.find((s) => s.slug === subSlug);
  const product = sub?.products.find((p) => p.slug === productSlug);
  if (!group || !sub || !product) notFound();

  const t = await getTranslations('product_page');
  const tn = await getTranslations('nav');
  const tc = await getTranslations('product_catalog');

  const relatedProducts = sub.products.filter((p) => p.slug !== product.slug);
  const primaryName = product.variants.map((v) => v.code).join(' / ');

  const subName = (() => {
    try { return tc(subcatNameKey(sub.slug)); } catch { return sub.name; }
  })();

  const productDescription = (() => {
    try { return tc(productDescKey(product.slug)); } catch { return product.description; }
  })();

  function getLabel(label: string): string {
    if (!label) return label;
    const key = VARIANT_LABEL_KEYS[label];
    if (!key) return label;
    try { return tc(key); } catch { return label; }
  }

  const productUrl = absoluteUrl(locale, `/urunler/${group.slug}/${sub.slug}/${product.slug}`);
  const jsonLd = productJsonLd({
    name: primaryName,
    description: productDescription,
    images: product.images,
    url: productUrl,
  });
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb bar */}
      <div className="pt-24 pb-4 bg-white border-b border-[#E9EEF3]">
        <div className="section-container">
          <Breadcrumb
            items={[
              { label: tn('urunler'), href: '/urunler' },
              { label: group.name, href: `/urunler/${group.slug}` },
              { label: subName, href: `/urunler/${group.slug}/${sub.slug}` },
              { label: primaryName },
            ]}
          />
        </div>
      </div>

      {/* Main content */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Images — left column */}
            <div className="lg:col-span-7">
              <ProductImageViewer
                images={product.images}
                alt={primaryName}
              />
            </div>

            {/* Info — right column, sticky */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col gap-6">
              {/* Group badge */}
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A6DB8] bg-[#EAF4FD] px-3 py-1.5 rounded-full w-fit">
                {group.name} · {subName}
              </span>

              {/* Variant names */}
              <div className="space-y-2">
                {product.variants.map((v) => (
                  <div key={v.code}>
                    <h1 className="font-sora font-bold text-3xl text-[#071B34] leading-tight">
                      {v.code}
                    </h1>
                    {v.label && (
                      <p className="text-base text-[#475569] mt-0.5">{getLabel(v.label)}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-[#E9EEF3]" />

              {/* Description */}
              <p className="text-[#475569] leading-relaxed">{productDescription}</p>

              {/* Divider */}
              <div className="h-px bg-[#E9EEF3]" />

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <Button variant="primary" size="lg" href="/iletisim?form=teklif" className="w-full justify-center">
                  {t('get_quote')}
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+902163136767"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-[#D9E1EA] text-sm font-medium text-[#475569] hover:bg-[#F7F9FC] hover:border-[#B0C4D8] transition-colors"
                  >
                    <Phone size={14} className="text-[#0A6DB8]" />
                    {t('call')}
                  </a>
                  <a
                    href="mailto:bilgi@noktadizayn.com.tr"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-[#D9E1EA] text-sm font-medium text-[#475569] hover:bg-[#F7F9FC] hover:border-[#B0C4D8] transition-colors"
                  >
                    <Mail size={14} className="text-[#0A6DB8]" />
                    {t('email')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 border-t border-[#E9EEF3] bg-[#F7F9FC]">
          <div className="section-container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-sora font-bold text-xl text-[#071B34]">
                {t('other_products', { name: subName })}
              </h2>
              <Link
                href={`/urunler/${group.slug}/${sub.slug}`}
                className="flex items-center gap-1.5 text-sm font-semibold text-[#0A6DB8] hover:text-[#071B34] transition-colors"
              >
                {t('view_all')} <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {relatedProducts.map((rel) => {
                const relDesc = (() => {
                  try { return tc(productDescKey(rel.slug)); } catch { return rel.description; }
                })();
                return (
                  <Link
                    key={rel.slug}
                    href={`/urunler/${group.slug}/${sub.slug}/${rel.slug}`}
                    className="group bg-white border border-[#D9E1EA] rounded-xl overflow-hidden hover:shadow-[0_4px_20px_rgba(7,27,52,0.08)] hover:border-[#0A6DB8]/30 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] bg-[#F0F4F8] overflow-hidden">
                      {rel.images[0] && (
                        <Image
                          src={rel.images[0]}
                          alt={rel.variants[0].code}
                          fill
                          className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 100vw, 25vw"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      {rel.variants.map((v) => (
                        <div key={v.code} className="flex items-baseline gap-1.5 flex-wrap">
                          <span className="font-sora font-bold text-sm text-[#071B34] group-hover:text-[#0A6DB8] transition-colors">
                            {v.code}
                          </span>
                          {v.label && (
                            <span className="text-[0.65rem] text-[#8D99A8]">{getLabel(v.label)}</span>
                          )}
                        </div>
                      ))}
                      <p className="text-xs text-[#475569] mt-1.5 line-clamp-2 leading-relaxed">{relDesc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
