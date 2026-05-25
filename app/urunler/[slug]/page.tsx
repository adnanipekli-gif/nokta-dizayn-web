import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/cards/ProductCard';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { TechnicalSpecsTable } from '@/components/ui/TechnicalSpecsTable';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PRODUCT_CATEGORIES } from '@/lib/data/products';

export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCT_CATEGORIES.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `https://noktadizayn.com.tr/urunler/${slug}` },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCT_CATEGORIES.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = PRODUCT_CATEGORIES.filter(
    (p) => p.slug !== product.slug
  ).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <Breadcrumb
            items={[
              { label: 'Ürünler', href: '/urunler' },
              { label: product.name },
            ]}
          />
          <div className="mt-6">
            <h1 className="text-white text-balance">{product.name}</h1>
            <p className="text-[#E9EEF3]/70 mt-3 max-w-xl text-lg leading-relaxed">
              {product.shortDescription}
            </p>
          </div>
        </div>
        <div className="hero-bottom-glow" aria-hidden="true" />
        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      {/* Main content */}
      <div className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Left: content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Gallery */}
              <FadeInOnScroll>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <Placeholder
                      category="product"
                      aspectRatio="4:3"
                      icon={product.icon}
                      label={product.name.toUpperCase()}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-3">
                    <Placeholder
                      category="product"
                      aspectRatio="1:1"
                      icon={product.icon}
                      label="DETAY"
                      className="rounded-xl"
                    />
                    <Placeholder
                      category="product"
                      aspectRatio="1:1"
                      icon={product.icon}
                      label="AÇILI"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </FadeInOnScroll>

              {/* Description */}
              <FadeInOnScroll delay={60}>
                <div>
                  <h2 className="text-xl font-semibold text-[#071B34] mb-3">Ürün Hakkında</h2>
                  <p className="text-[#475569] leading-relaxed">{product.longDescription}</p>
                </div>
              </FadeInOnScroll>

              {/* Use cases */}
              {product.useCases && product.useCases.length > 0 && (
                <FadeInOnScroll delay={80}>
                  <div>
                    <h2 className="text-xl font-semibold text-[#071B34] mb-4">Kullanım Alanları</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.useCases.map((u) => (
                        <div key={u} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                          <span className="text-sm text-[#475569]">{u}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeInOnScroll>
              )}

              {/* Technical advantages */}
              {product.technicalAdvantages && product.technicalAdvantages.length > 0 && (
                <FadeInOnScroll delay={100}>
                  <div>
                    <h2 className="text-xl font-semibold text-[#071B34] mb-4">Teknik Üstünlükler</h2>
                    <ul className="space-y-2.5">
                      {product.technicalAdvantages.map((adv) => (
                        <li key={adv} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F7F9FC] border border-[#D9E1EA]">
                          <CheckCircle2 size={15} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                          <span className="text-sm text-[#475569]">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInOnScroll>
              )}

              {/* Technical specs */}
              {product.specs && product.specs.length > 0 && (
                <FadeInOnScroll delay={120}>
                  <div>
                    <h2 className="text-xl font-semibold text-[#071B34] mb-4">Teknik Özellikler</h2>
                    <TechnicalSpecsTable specs={product.specs} />
                  </div>
                </FadeInOnScroll>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                {/* CTA */}
                <div className="rounded-2xl border border-[#D9E1EA] overflow-hidden bg-white">
                  <div className="px-5 py-4 bg-[#071B34]">
                    <p className="eyebrow text-[#11B5FF]">// TEKLİF AL</p>
                  </div>
                  <div className="p-5">
                    <h3 className="font-sora font-semibold text-[#071B34] text-base mb-2">
                      {product.name} için teklif alın
                    </h3>
                    <p className="text-sm text-[#475569] mb-5 leading-relaxed">
                      Kapasite, boyut ve teknik gereksinimlerinize göre fiyat teklifi hazırlayalım.
                    </p>
                    <div className="space-y-2.5">
                      <Button variant="primary" size="md" href="/iletisim?form=teklif" fullWidth>
                        Teklif Talep Et
                      </Button>
                      <Button variant="secondary" size="md" href="/iletisim?form=danismanlik" fullWidth>
                        Teknik Danışmanlık
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Options */}
                {product.options && product.options.length > 0 && (
                  <div className="rounded-2xl border border-[#D9E1EA] bg-[#F7F9FC] p-5">
                    <p className="text-xs font-semibold text-[#8D99A8] uppercase tracking-widest mb-3">
                      Seçenekler
                    </p>
                    <ul className="space-y-2">
                      {product.options.map((opt) => (
                        <li key={opt} className="flex items-center gap-2 text-sm text-[#475569]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#11B5FF] shrink-0" />
                          {opt}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Applicable sectors */}
                {product.applicableSectors && product.applicableSectors.length > 0 && (
                  <div className="rounded-2xl border border-[#D9E1EA] bg-white p-5">
                    <p className="text-xs font-semibold text-[#8D99A8] uppercase tracking-widest mb-3">
                      Kullanım Sektörleri
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.applicableSectors.map((s) => (
                        <span key={s} className="text-xs px-3 py-1 rounded-full bg-[#E9EEF3] text-[#475569]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* PDF placeholder */}
                <div className="rounded-2xl border border-[#D9E1EA] bg-[#F7F9FC] p-5 text-center">
                  <p className="text-sm font-medium text-[#071B34] mb-1">Teknik Katalog</p>
                  <p className="text-xs text-[#8D99A8] mb-4">PDF formatında detaylı teknik doküman</p>
                  <Button variant="secondary" size="sm" href="/iletisim?form=teklif" fullWidth>
                    Katalog Talep Et
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="section-container">
          <SectionHeading
            eyebrow="// DİĞER ÜRÜNLER"
            title="Diğer Ürün Gruplarımız"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p, i) => (
              <FadeInOnScroll key={p.slug} delay={i * 60}>
                <ProductCard product={p} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
