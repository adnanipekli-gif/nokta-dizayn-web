import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { AnahtarTeslimHero } from '@/components/sections/AnahtarTeslimHero';
import { TekPaydasFark } from '@/components/sections/TekPaydasFark';
import { MuhendislikAltyapisi } from '@/components/sections/MuhendislikAltyapisi';
import { MuhendislikKapasiteMetrikleri } from '@/components/sections/MuhendislikKapasiteMetrikleri';
import { localizedAlternates } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'proje_page' });
  return {
    title: t('hero_title'),
    description: t('hero_subtitle'),
    alternates: localizedAlternates(locale, '/proje-muhendislik'),
  };
}

const galleryImages = [
  { src: '/projeler-muhendislik/10.png', cls: 'col-span-2 row-span-1' },
  { src: '/projeler-muhendislik/11.png', cls: 'col-span-1 row-span-1' },
  { src: '/projeler-muhendislik/12.png', cls: 'col-span-1 row-span-1' },
  { src: '/projeler-muhendislik/13.png', cls: 'col-span-1 row-span-1' },
  { src: '/projeler-muhendislik/14.png', cls: 'col-span-1 row-span-1' },
  { src: '/projeler-muhendislik/16.png', cls: 'col-span-1 row-span-1' },
  { src: '/projeler-muhendislik/17.png', cls: 'col-span-2 row-span-1' },
];

export default async function ProjeMuhendislikPage() {
  const t = await getTranslations('proje_page');

  const steps = [
    { number: '01', title: t('step_01_title'), description: t('step_01_desc') },
    { number: '02', title: t('step_02_title'), description: t('step_02_desc') },
    { number: '03', title: t('step_03_title'), description: t('step_03_desc') },
    { number: '04', title: t('step_04_title'), description: t('step_04_desc') },
    { number: '05', title: t('step_05_title'), description: t('step_05_desc') },
    { number: '06', title: t('step_06_title'), description: t('step_06_desc') },
    { number: '07', title: t('step_07_title'), description: t('step_07_desc') },
    { number: '08', title: t('step_08_title'), description: t('step_08_desc') },
  ];

  return (
    <>
      <section className="pt-32 pb-20 bg-[#071B34] relative overflow-hidden min-h-[520px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/projeler-muhendislik/1.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/95 via-[#071B34]/75 to-[#071B34]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/80 via-transparent to-[#071B34]/50" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.06]" aria-hidden="true" />
        <div className="section-container relative z-10 pb-4">
          <FadeInOnScroll>
            <p className="eyebrow text-[#11B5FF] mb-4">{t('hero_eyebrow')}</p>
            <h1 className="text-white max-w-2xl">{t('hero_title')}</h1>
            <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">{t('hero_subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button variant="primary" size="md" href="/iletisim?form=teklif">{t('btn_start')}</Button>
              <Button variant="secondary" size="md" href="/iletisim?form=danismanlik" className="border-white/35 text-white hover:bg-white hover:text-[#071B34]">
                {t('btn_consult')}
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <AnahtarTeslimHero />
      <TekPaydasFark />

      <section className="py-24 bg-white">
        <div className="section-container">
          <FadeInOnScroll>
            <SectionHeading eyebrow={t('steps_eyebrow')} title={t('steps_title')} subtitle={t('steps_subtitle')} />
          </FadeInOnScroll>
          <div className="mt-14 relative">
            <div className="hidden lg:block absolute top-6 left-[3.25rem] right-[3.25rem] h-px border-t border-dashed border-[#D9E1EA]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <FadeInOnScroll key={step.number} delay={i * 60}>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl border-2 border-[#D9E1EA] bg-white flex items-center justify-center mb-4 relative z-10">
                      <span className="font-mono text-xs font-bold text-[#0A6DB8]">{step.number}</span>
                    </div>
                    <h3 className="font-sora font-semibold text-[#071B34] text-base mb-2">{step.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{step.description}</p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.04]" aria-hidden="true" />
        <div className="section-container relative z-10">
          <FadeInOnScroll className="mb-12 text-center">
            <p className="eyebrow text-[#11B5FF] mb-3">{t('gallery_eyebrow')}</p>
            <h2 className="text-white">{t('gallery_title')}</h2>
            <p className="text-[#E9EEF3]/60 mt-3 max-w-lg mx-auto leading-relaxed">{t('gallery_subtitle')}</p>
          </FadeInOnScroll>
          <div className="grid grid-cols-3 auto-rows-[220px] gap-3">
            {galleryImages.map((img, i) => (
              <FadeInOnScroll key={img.src} delay={i * 50} className={img.cls}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                  <Image src={img.src} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <MuhendislikAltyapisi />
      <MuhendislikKapasiteMetrikleri />

      <section className="py-20 bg-[#071B34] relative overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <FadeInOnScroll>
            <h2 className="text-white mb-4">{t('cta_title')}</h2>
            <p className="text-[#E9EEF3]/65 max-w-lg mx-auto mb-8">{t('cta_subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/iletisim?form=teklif">{t('cta_primary')}</Button>
              <Button variant="secondary" size="lg" href="/iletisim?form=danismanlik" className="border-white/35 text-white hover:bg-white hover:text-[#071B34]">
                {t('cta_secondary')}
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
