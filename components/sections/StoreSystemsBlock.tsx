import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { DynIcon } from '@/lib/icons';

const CATEGORIES = [
  { number: '01', descKey: 'desc_01', titleKey: 'market_raf',   icon: 'ShoppingCart', image: '/magaza-sistemleri/market-raf-sistemleri/1.png' },
  { number: '02', descKey: 'desc_02', titleKey: 'kasap_balik',  icon: 'Beef',         image: '/magaza-sistemleri/kasap-balik-dondurulmus-gida/1.png' },
  { number: '03', descKey: 'desc_03', titleKey: null,            icon: 'Pizza',        image: '/magaza-sistemleri/fast-food/1.png',         staticTitle: 'Fast Food' },
  { number: '04', descKey: 'desc_04', titleKey: null,            icon: 'Coffee',       image: '/magaza-sistemleri/coffe-shops/1.jpg',       staticTitle: 'Coffee Shops' },
  { number: '05', descKey: 'desc_05', titleKey: 'manav_reyonu', icon: 'Apple',        image: '/magaza-sistemleri/manav-reyonu/1.png' },
  { number: '06', descKey: 'desc_06', titleKey: 'firin_reyon',  icon: 'Croissant',    image: '/magaza-sistemleri/firin-reyon-sistemleri/1.png' },
] as const;

export async function StoreSystemsBlock() {
  const t = await getTranslations('store');
  const tf = await getTranslations('footer');
  const tc = await getTranslations('common');

  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="store-systems-heading">
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
            id="store-systems-heading"
          />
        </FadeInOnScroll>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => {
            const title = cat.titleKey ? tf(cat.titleKey) : cat.staticTitle;
            const description = t(cat.descKey);
            return (
              <FadeInOnScroll key={cat.number} delay={i * 50} className="h-full">
                <Link
                  href={`/magaza-sistemleri#bolum-${cat.number}`}
                  className="group h-full flex flex-col bg-white rounded-2xl border border-[#D9E1EA] hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(7,27,52,0.06),0_16px_40px_rgba(10,109,184,0.10)] hover:border-t-[#11B5FF] transition-all duration-300 overflow-hidden"
                  style={{ borderTopWidth: '1px' }}
                >
                  <div className="relative w-full aspect-[4/3] bg-[#F0F4F8] overflow-hidden shrink-0">
                    <Image
                      src={cat.image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="mb-3">
                      <span className="w-9 h-9 rounded-lg bg-[#071B34] flex items-center justify-center shrink-0 group-hover:bg-[#0A6DB8] transition-colors duration-300">
                        <DynIcon name={cat.icon} size={16} className="text-[#11B5FF]" strokeWidth={1.5} />
                      </span>
                    </div>
                    <h3 className="font-sora font-semibold text-[#071B34] text-base mb-1.5 group-hover:text-[#0A6DB8] transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed flex-1 mb-4 line-clamp-3">
                      {description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A6DB8] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                      {tc('incele')} <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
