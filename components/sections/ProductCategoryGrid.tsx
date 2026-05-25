import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { PRODUCT_CATALOG } from '@/lib/data/product-catalog';
import { ArrowRight } from 'lucide-react';

export function ProductCategoryGrid() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#E9EEF3]"
      aria-labelledby="products-heading"
    >
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            title="Ürün Gruplarımız"
            subtitle="Remote ve Plug-In sistemlerde soğutma ekipmanları."
            id="products-heading"
          />
        </FadeInOnScroll>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCT_CATALOG.flatMap((group) =>
            group.subCategories.map((sub, i) => (
              <FadeInOnScroll key={sub.slug} delay={i * 50}>
                <Link
                  href={`/urunler/${group.slug}/${sub.slug}`}
                  className="group bg-white border border-[#D9E1EA] rounded-xl p-5 flex flex-col gap-3 hover:shadow-[0_4px_20px_rgba(7,27,52,0.10)] hover:border-[#0A6DB8]/30 transition-all duration-300"
                >
                  <div>
                    <span className="text-[0.65rem] font-mono text-[#8D99A8] uppercase tracking-wider">
                      {group.name}
                    </span>
                    <h3 className="font-sora font-semibold text-sm text-[#071B34] mt-1 group-hover:text-[#0A6DB8] transition-colors leading-snug">
                      {sub.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#8D99A8] mt-auto">
                    {sub.products.length} ürün
                    <ArrowRight size={11} className="ml-auto text-[#0A6DB8] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </FadeInOnScroll>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
