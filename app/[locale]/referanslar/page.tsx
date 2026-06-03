import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { CountUpStats } from '@/components/ui/CountUpStats';

export const metadata: Metadata = {
  title: 'Referanslar',
  description: "Nokta Dizayn'ın Türkiye ve dünya genelinde hayata geçirdiği mağaza projelerinden seçkiler.",
  alternates: { canonical: 'https://www.noktadizayn.com.tr/referanslar' },
};

const images = Array.from({ length: 45 }, (_, i) => `/references/${i + 1}.png`);

export default async function ReferanslarPage() {
  const t = await getTranslations('referanslar_page');

  return (
    <>
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#11B5FF]/8 blur-3xl rounded-full pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <FadeInOnScroll>
            <h1 className="text-white max-w-2xl">{t('hero_title')}</h1>
            <p className="text-[#E9EEF3]/65 mt-4 max-w-xl text-lg leading-relaxed">{t('hero_subtitle')}</p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100} className="mt-10">
            <CountUpStats stats={[
              { target: 30000, suffix: '+', label: t('stat_nokta'), separator: true },
              { target: 60,    suffix: '+', label: t('stat_ulke') },
              { target: 20,    suffix: '+', label: t('stat_yil') },
            ]} />
          </FadeInOnScroll>
        </div>
      </section>

      <section className="py-16 bg-[#F7F9FC]">
        <div className="section-container">
          <FadeInOnScroll>
            <div className="grid grid-cols-9 gap-2">
              {images.map((src, i) => (
                <div key={src} className="relative aspect-[5/3] rounded-xl overflow-hidden group">
                  <Image src={src} alt={`${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 11vw" />
                  <div className="absolute inset-0 bg-[#071B34]/0 group-hover:bg-[#071B34]/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="py-20 bg-[#071B34]">
        <div className="section-container text-center">
          <FadeInOnScroll>
            <h2 className="text-white mb-4">{t('cta_title')}</h2>
            <p className="text-[#E9EEF3]/65 max-w-lg mx-auto mb-8">{t('cta_subtitle')}</p>
            <a href="/iletisim?form=teklif" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#11B5FF] hover:bg-[#0A9FE0] text-white font-semibold rounded-lg transition-colors text-sm">
              {t('cta_btn')}
            </a>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
