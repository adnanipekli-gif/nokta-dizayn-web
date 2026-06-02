import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { PRODUCT_CATALOG } from '@/lib/data/product-catalog';
import { ArrowRight } from 'lucide-react';

const remote = PRODUCT_CATALOG.find((g) => g.slug === 'remote')!;
const plugIn = PRODUCT_CATALOG.find((g) => g.slug === 'plug-in')!;

const sutlukCount =
  (remote.subCategories.find((s) => s.slug === 'remote-sutluk')?.products.length ?? 0) +
  (plugIn.subCategories.find((s) => s.slug === 'plug-in-sutluk')?.products.length ?? 0);

const sarkuteriCount =
  (remote.subCategories.find((s) => s.slug === 'remote-sarkuteri')?.products.length ?? 0) +
  (plugIn.subCategories.find((s) => s.slug === 'plug-in-sarkuteri')?.products.length ?? 0);

const derinDondurucu = remote.subCategories.find((s) => s.slug === 'remote-derin-dondurucu')!;
const yatayFreezer = remote.subCategories.find((s) => s.slug === 'remote-yatay-freezer')!;
const promosyon = plugIn.subCategories.find((s) => s.slug === 'plug-in-promosyon')!;

const categories = [
  {
    label: 'Sütlük',
    tagline: 'Remote & Plug-In',
    count: sutlukCount,
    href: '/urunler/sutluk',
  },
  {
    label: 'Şarküteri',
    tagline: 'Remote & Plug-In',
    count: sarkuteriCount,
    href: '/urunler/sarkuteri',
  },
  {
    label: 'Derin Dondurucu',
    tagline: 'Remote',
    count: derinDondurucu.products.length,
    href: `/urunler/remote/${derinDondurucu.slug}`,
  },
  {
    label: 'Yatay Freezer',
    tagline: 'Remote',
    count: yatayFreezer.products.length,
    href: `/urunler/remote/${yatayFreezer.slug}`,
  },
  {
    label: 'Promosyon',
    tagline: 'Plug-In',
    count: promosyon.products.length,
    href: `/urunler/plug-in/${promosyon.slug}`,
  },
];

export function ProductCategoryGrid() {
  return (
    <section className="py-24 lg:py-32 bg-[#E9EEF3]" aria-labelledby="products-heading">
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            title="Ürün Gruplarımız"
            subtitle="Remote ve Plug-In sistemlerde soğutma ekipmanları."
            id="products-heading"
          />
        </FadeInOnScroll>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <FadeInOnScroll key={cat.href} delay={i * 60}>
              <Link
                href={cat.href}
                className="group bg-white border border-[#D9E1EA] rounded-xl p-5 flex flex-col gap-3 hover:shadow-[0_4px_20px_rgba(7,27,52,0.10)] hover:border-[#0A6DB8]/30 transition-all duration-300"
              >
                <div>
                  <span className="text-[0.65rem] font-mono text-[#8D99A8] uppercase tracking-wider">
                    {cat.tagline}
                  </span>
                  <h3 className="font-sora font-semibold text-base text-[#071B34] mt-1 group-hover:text-[#0A6DB8] transition-colors leading-snug">
                    {cat.label}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#8D99A8] mt-auto">
                  {cat.count} ürün
                  <ArrowRight size={11} className="ml-auto text-[#0A6DB8] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
