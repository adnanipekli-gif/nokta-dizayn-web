import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, MapPin } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { STATS } from '@/lib/data/stats';

export const metadata: Metadata = {
  title: 'Kurumsal — Hakkımızda',
  description:
    "2003'ten bu yana entegre mağaza sistemleri alanında mühendislik, üretim ve satış sonrası hizmet ile faaliyet gösteren Nokta Dizayn hakkında.",
  alternates: { canonical: 'https://www.noktadizayn.com.tr/kurumsal' },
};

const STAT_KEYS = [
  { eyebrow: 'eyebrow_kurulus', label: 'label_kurulus' },
  { eyebrow: 'eyebrow_global',  label: 'label_global' },
  { eyebrow: 'eyebrow_referans',label: 'label_referans' },
  { eyebrow: 'eyebrow_tesis',   label: 'label_tesis' },
  { eyebrow: 'eyebrow_hizmet',  label: 'label_hizmet' },
] as const;

export default async function KurumsalPage() {
  const t = await getTranslations('kurumsal_page');
  const ts = await getTranslations('stats');
  const globalRegions = t.raw('global_regions') as string[];

  const values = [
    { title: t('val_01_title'), description: t('val_01_desc') },
    { title: t('val_02_title'), description: t('val_02_desc') },
    { title: t('val_03_title'), description: t('val_03_desc') },
    { title: t('val_04_title'), description: t('val_04_desc') },
  ];

  const capabilities = [
    t('cap_01'), t('cap_02'), t('cap_03'), t('cap_04'), t('cap_05'), t('cap_06'),
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/projeler-muhendislik/11.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/95 via-[#071B34]/75 to-[#071B34]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/70 via-transparent to-[#071B34]/50" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />
        <div className="section-container relative z-10 pb-4">
          <h1 className="text-white">{t('hero_title')}</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">{t('hero_subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeInOnScroll>
              <div>
                <SectionHeading
                  eyebrow={t('about_eyebrow')}
                  title={t('about_title')}
                  subtitle={t('about_subtitle')}
                />
                <p className="text-[#475569] mt-5 leading-relaxed">{t('about_body')}</p>
                <div className="mt-8 space-y-3">
                  {values.map((v) => (
                    <div key={v.title} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-[#071B34] text-sm">{v.title}</span>
                        <span className="text-[#475569] text-sm">: {v.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={100}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/nokta-dizayn-sirket.png" alt="Nokta Dizayn mağaza projesi" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#071B34]">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center text-center px-6 py-8 bg-[#071B34]">
                <p className="eyebrow text-[#11B5FF] mb-3">{ts(STAT_KEYS[i].eyebrow)}</p>
                <p className="font-sora font-bold text-white leading-none mb-2 text-4xl">{stat.value}</p>
                <p className="text-sm text-[#E9EEF3]/65 leading-snug">{ts(STAT_KEYS[i].label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F9FC]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeInOnScroll>
              <SectionHeading
                eyebrow={t('prod_eyebrow')}
                title={t('prod_title')}
                subtitle={t('prod_subtitle')}
              />
              <div className="mt-8 space-y-3">
                {capabilities.map((c) => (
                  <div key={c} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#0A6DB8] shrink-0" />
                    <span className="text-sm text-[#475569]">{c}</span>
                  </div>
                ))}
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/dolap-üretim-4.png" alt={t('prod_title')} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <FadeInOnScroll>
            <SectionHeading
              eyebrow={t('global_eyebrow')}
              title={t('global_title')}
              subtitle={t('global_subtitle')}
            />
          </FadeInOnScroll>
          <div className="mt-10 flex flex-wrap gap-2">
            {globalRegions.map((region) => (
              <span
                key={region}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F9FC] border border-[#D9E1EA] text-sm text-[#475569]"
              >
                <MapPin size={12} className="text-[#11B5FF]" />
                {region}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F9FC] border border-[#D9E1EA] text-sm text-[#475569]">
              <MapPin size={12} className="text-[#11B5FF]" />
              {t('region_more')}
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E9EEF3]">
        <div className="section-container text-center">
          <h2 className="text-[#071B34] mb-4">{t('cta_title')}</h2>
          <p className="text-[#475569] max-w-lg mx-auto mb-8">{t('cta_subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/iletisim?form=teklif">
              {t('cta_primary')}
            </Button>
            <Button variant="secondary" size="lg" href="/iletisim">
              {t('cta_secondary')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
