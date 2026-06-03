import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SERVICES } from '@/lib/data/services';
import { DynIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Servis & Destek',
  description: 'Teknik servis, bakım anlaşmaları, yedek parça, garanti süreçleri ve retrofit çözümleri. Satış sonrası tam destek.',
  alternates: { canonical: 'https://www.noktadizayn.com.tr/servis-destek' },
};

export default async function ServisDestekPage() {
  const t = await getTranslations('servis_page');
  const ts = await getTranslations('services');

  const serviceMap: Record<string, {
    name: string;
    shortDescription: string;
    longDescription: string;
    features: string[];
  }> = {
    'teknik-servis': {
      name: ts('teknik_servis_name'),
      shortDescription: ts('teknik_servis_desc'),
      longDescription: ts('teknik_servis_long'),
      features: ts.raw('teknik_servis_features') as string[],
    },
    'bakim-anlasmalari': {
      name: ts('bakim_name'),
      shortDescription: ts('bakim_desc'),
      longDescription: ts('bakim_long'),
      features: ts.raw('bakim_features') as string[],
    },
    'yedek-parca': {
      name: ts('yedek_parca_name'),
      shortDescription: ts('yedek_parca_desc'),
      longDescription: ts('yedek_parca_long'),
      features: ts.raw('yedek_parca_features') as string[],
    },
    'garanti-surecleri': {
      name: ts('garanti_name'),
      shortDescription: ts('garanti_desc'),
      longDescription: ts('garanti_long'),
      features: ts.raw('garanti_features') as string[],
    },
    'servis-talebi': {
      name: ts('talep_name'),
      shortDescription: ts('talep_desc'),
      longDescription: ts('talep_long'),
      features: ts.raw('talep_features') as string[],
    },
    'enerji-verimliligi-kontrolu': {
      name: ts('enerji_name'),
      shortDescription: ts('enerji_desc'),
      longDescription: ts('enerji_long'),
      features: ts.raw('enerji_features') as string[],
    },
    'retrofit-yenileme': {
      name: ts('retrofit_name'),
      shortDescription: ts('retrofit_desc'),
      longDescription: ts('retrofit_long'),
      features: ts.raw('retrofit_features') as string[],
    },
  };

  const translatedServices = SERVICES.map((s) => ({
    ...s,
    ...(serviceMap[s.slug] ?? {}),
  }));

  return (
    <>
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/projeler-muhendislik/15.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/95 via-[#071B34]/75 to-[#071B34]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/70 via-transparent to-[#071B34]/50" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />
        <div className="section-container relative z-10 pb-4">
          <h1 className="text-white">{t('hero_title')}</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">{t('hero_subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button variant="primary" size="md" href="/iletisim?form=servis">{t('btn_servis')}</Button>
            <Button variant="secondary" size="md" href="tel:+902163136767" className="border-white/35 text-white hover:bg-white hover:text-[#071B34]">
              {t('btn_destek')}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <FadeInOnScroll>
            <SectionHeading eyebrow={t('section_eyebrow')} title={t('section_title')} subtitle={t('section_subtitle')} />
          </FadeInOnScroll>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
            {translatedServices.map((service, i) => (
              <FadeInOnScroll key={service.slug} delay={i * 60} className="h-full">
                <ServiceCard service={service} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.04]" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 h-[520px] lg:h-[600px]">
            <FadeInOnScroll className="col-span-2 lg:col-span-2 h-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image src="/dolap-üretim.png" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 66vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/50 via-transparent to-transparent" />
              </div>
            </FadeInOnScroll>
            <div className="col-span-2 lg:col-span-1 grid grid-rows-2 gap-3 h-full">
              <FadeInOnScroll delay={80} className="h-full">
                <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                  <Image src="/dolap-üretim-2.png" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/40 via-transparent to-transparent" />
                </div>
              </FadeInOnScroll>
              <FadeInOnScroll delay={140} className="h-full">
                <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                  <Image src="/dolap-üretim-3.png" alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/40 via-transparent to-transparent" />
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F7F9FC]">
        <div className="section-container space-y-16">
          {translatedServices.slice(0, 3).map((service, i) => (
            <FadeInOnScroll key={service.slug}>
              <div id={service.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? 'lg:grid-flow-col' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="p-2.5 rounded-xl bg-[#E9EEF3] text-[#0A6DB8]">
                      <DynIcon name={service.icon} size={20} strokeWidth={1.5} />
                    </span>
                    <h2 className="text-xl font-semibold text-[#071B34]">{service.name}</h2>
                  </div>
                  <p className="text-[#475569] leading-relaxed mb-6">{service.longDescription}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                        <span className="text-sm text-[#475569]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`p-6 lg:p-8 rounded-2xl bg-white border border-[#D9E1EA] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="text-sm text-[#475569] mb-6 leading-relaxed">{service.shortDescription}</p>
                  <Button variant="primary" size="sm" href="/iletisim?form=servis">{t('btn_servis')}</Button>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#071B34]">
        <div className="section-container text-center">
          <h2 className="text-white mb-4">{t('hero_title')}</h2>
          <p className="text-[#E9EEF3]/65 max-w-lg mx-auto mb-8">{t('hero_subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/iletisim?form=servis">{t('btn_servis')}</Button>
            <Button variant="secondary" size="lg" href="/iletisim?form=danismanlik" className="border-white/35 text-white hover:bg-white hover:text-[#071B34]">
              {t('btn_destek')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
