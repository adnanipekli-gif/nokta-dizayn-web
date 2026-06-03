import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SectionSlider } from '@/components/ui/SectionSlider';

export const metadata: Metadata = {
  title: 'Mağaza Sistemleri',
  description: 'Market rafından kasap tezgahına, eczaneden nalbura her sektör için entegre mağaza raf ve reyon sistemleri.',
  alternates: { canonical: 'https://www.noktadizayn.com.tr/magaza-sistemleri' },
};

export default async function MagazaSistemleriPage() {
  const t = await getTranslations('magaza_page');

  const sections = [
    {
      number: '01',
      title: t('s01_title'),
      description: t('s01_desc'),
      slides: [
        { image: '/magaza-sistemleri/market-raf-sistemleri/1.png', title: t('s01_slide1_title'), subtitle: t('s01_slide1_sub') },
        { image: '/magaza-sistemleri/market-raf-sistemleri/2.png', title: t('s01_slide2_title'), subtitle: t('s01_slide2_sub') },
        { image: '/magaza-sistemleri/market-raf-sistemleri/3.png', title: t('s01_slide3_title'), subtitle: t('s01_slide3_sub') },
      ],
    },
    {
      number: '02',
      title: t('s02_title'),
      description: t('s02_desc'),
      slides: [
        { image: '/magaza-sistemleri/kasap-balik-dondurulmus-gida/1.png', title: t('s02_slide1_title'), subtitle: t('s02_slide1_sub') },
        { image: '/magaza-sistemleri/kasap-balik-dondurulmus-gida/2.png', title: t('s02_slide2_title'), subtitle: t('s02_slide2_sub') },
        { image: '/magaza-sistemleri/kasap-balik-dondurulmus-gida/3.png' },
      ],
    },
    {
      number: '03',
      title: t('s03_title'),
      description: t('s03_desc'),
      slides: [
        { image: '/magaza-sistemleri/fast-food/1.png', title: t('s03_slide1_title'), subtitle: t('s03_slide1_sub') },
        { image: '/magaza-sistemleri/fast-food/2.png', title: t('s03_slide2_title'), subtitle: t('s03_slide2_sub') },
        { image: '/magaza-sistemleri/fast-food/3.png' },
      ],
    },
    {
      number: '04',
      title: t('s04_title'),
      description: t('s04_desc'),
      slides: [
        { image: '/magaza-sistemleri/coffe-shops/1.jpg', title: t('s04_slide1_title'), subtitle: t('s04_slide1_sub') },
        { image: '/magaza-sistemleri/coffe-shops/2.jpg', title: t('s04_slide2_title'), subtitle: t('s04_slide2_sub') },
        { image: '/magaza-sistemleri/coffe-shops/3.jpg' },
      ],
    },
    {
      number: '05',
      title: t('s05_title'),
      description: t('s05_desc'),
      slides: [
        { image: '/magaza-sistemleri/manav-reyonu/1.png', title: t('s05_slide1_title'), subtitle: t('s05_slide1_sub') },
        { image: '/magaza-sistemleri/manav-reyonu/2.png', title: t('s05_slide2_title'), subtitle: t('s05_slide2_sub') },
        { image: '/magaza-sistemleri/manav-reyonu/3.png' },
      ],
    },
    {
      number: '06',
      title: t('s06_title'),
      description: t('s06_desc'),
      slides: [
        { image: '/magaza-sistemleri/firin-reyon-sistemleri/1.png', title: t('s06_slide1_title'), subtitle: t('s06_slide1_sub') },
        { image: '/magaza-sistemleri/firin-reyon-sistemleri/2.png', title: t('s06_slide2_title'), subtitle: t('s06_slide2_sub') },
        { image: '/magaza-sistemleri/firin-reyon-sistemleri/3.png' },
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/projeler-muhendislik/17.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/95 via-[#071B34]/75 to-[#071B34]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/70 via-transparent to-[#071B34]/50" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />
        <div className="section-container relative z-10 pb-4">
          <p className="eyebrow text-[#11B5FF] mb-4">{t('hero_eyebrow')}</p>
          <h1 className="text-white max-w-2xl text-balance">{t('hero_title')}</h1>
          <p className="text-[#E9EEF3]/70 mt-5 max-w-xl text-lg">{t('hero_subtitle')}</p>
        </div>
      </section>

      {/* Sections */}
      <div className="divide-y divide-[#E9EEF3]">
        {sections.map((section, i) => (
          <section key={section.number} id={`bolum-${section.number}`} className={i % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-[#F7F9FC]'}>
            <div className="section-container">
              <FadeInOnScroll>
                <div className="flex items-start gap-5 mb-8">
                  <span className="font-mono text-[0.65rem] font-bold text-[#11B5FF] tracking-[0.2em] mt-1.5 shrink-0">
                    {section.number}
                  </span>
                  <div>
                    <h2 className="text-[#071B34] text-2xl lg:text-3xl font-sora font-bold mb-3">{section.title}</h2>
                    <p className="text-[#475569] leading-relaxed">{section.description}</p>
                  </div>
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll delay={80}>
                <SectionSlider slides={section.slides} />
              </FadeInOnScroll>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 bg-[#E9EEF3]">
        <div className="section-container text-center">
          <h2 className="text-[#071B34] mb-4">{t('cta_title')}</h2>
          <p className="text-[#475569] max-w-lg mx-auto mb-8">{t('cta_subtitle')}</p>
          <Button variant="primary" size="lg" href="/iletisim?form=teklif">{t('cta_btn')}</Button>
        </div>
      </section>
    </>
  );
}
