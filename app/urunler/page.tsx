import type { Metadata } from 'next';
import { FilterSidebar } from '@/components/ui/FilterSidebar';
import { ProductCard } from '@/components/cards/ProductCard';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { PRODUCT_CATEGORIES } from '@/lib/data/products';

export const metadata: Metadata = {
  title: 'Ürün Gruplarımız — Ticari Soğutma Ekipmanları',
  description:
    'Servis reyonları, dikey reyonlar, cam kapılı dolaplar, havuz dolaplar, merkezi sistemler ve soğuk oda çözümleri.',
  alternates: { canonical: 'https://noktadizayn.com.tr/urunler' },
};

export default function UrunlerPage() {
  return (
    <>
      {/* Mini hero */}
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <p className="eyebrow text-[#11B5FF] mb-4">// ÜRÜN GRUPLARIMIZ</p>
          <h1 className="text-white">Ürün Gruplarımız</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">
            Her kullanım alanına uygun ticari soğutma ekipmanları ve sistemleri.
          </p>
        </div>
        <div className="hero-bottom-glow" aria-hidden="true" />
        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      {/* Content */}
      <div className="py-16">
        <div className="section-container flex gap-10">
          {/* Sidebar (desktop only) */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Products grid */}
          <div className="flex-1">
            <p className="text-sm text-[#8D99A8] mb-6 font-mono">
              {PRODUCT_CATEGORIES.length} ürün grubu listeleniyor
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {PRODUCT_CATEGORIES.map((product, i) => (
                <FadeInOnScroll key={product.slug} delay={i * 50}>
                  <ProductCard product={product} />
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
