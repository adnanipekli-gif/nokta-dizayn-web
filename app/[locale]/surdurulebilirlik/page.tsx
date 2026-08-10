import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { DynIcon } from '@/lib/icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { localizedAlternates } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'surdurulebilirlik_page' });
  return {
    title: t('hero_title'),
    description: t('hero_subtitle'),
    alternates: localizedAlternates(locale, '/surdurulebilirlik'),
  };
}

const TOPIC_ICONS = ['Zap','Settings2','Snowflake','Package','Timer','Network','Wrench','RefreshCw'];

export default async function SurdurulebilirlikPage() {
  const t = await getTranslations('surdurulebilirlik_page');

  const topics = [
    { icon: TOPIC_ICONS[0], title: t('t01_title'), description: t('t01_desc') },
    { icon: TOPIC_ICONS[1], title: t('t02_title'), description: t('t02_desc') },
    { icon: TOPIC_ICONS[2], title: t('t03_title'), description: t('t03_desc') },
    { icon: TOPIC_ICONS[3], title: t('t04_title'), description: t('t04_desc') },
    { icon: TOPIC_ICONS[4], title: t('t05_title'), description: t('t05_desc') },
    { icon: TOPIC_ICONS[5], title: t('t06_title'), description: t('t06_desc') },
    { icon: TOPIC_ICONS[6], title: t('t07_title'), description: t('t07_desc') },
    { icon: TOPIC_ICONS[7], title: t('t08_title'), description: t('t08_desc') },
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/projeler-muhendislik/13.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/95 via-[#071B34]/75 to-[#071B34]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/70 via-transparent to-[#071B34]/50" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />
        <div className="section-container relative z-10 pb-4">
          <h1 className="text-white">{t('hero_title')}</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">{t('hero_subtitle')}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container max-w-3xl">
          <FadeInOnScroll>
            <p className="text-[#475569] text-lg leading-relaxed">{t('body_text')}</p>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="py-16 bg-[#F7F9FC]">
        <div className="section-container">
          <FadeInOnScroll>
            <SectionHeading eyebrow={t('topics_eyebrow')} title={t('topics_title')} />
          </FadeInOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topics.map((topic, i) => (
              <FadeInOnScroll key={topic.title} delay={i * 50}>
                <div className="p-6 rounded-2xl bg-white border border-[#D9E1EA] h-full">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E9EEF3] text-[#0A6DB8] mb-4">
                    <DynIcon name={topic.icon} size={18} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-semibold text-[#071B34] text-base mb-2">{topic.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{topic.description}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container">
          <FadeInOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#071B34] to-[#0E2647] p-8 lg:p-12 flex flex-col justify-center">
                <p className="eyebrow text-[#11B5FF] mb-4">{t('case_eyebrow')}</p>
                <h2 className="text-white text-xl font-semibold mb-4">{t('case_title')}</h2>
                <p className="text-[#E9EEF3]/70 text-sm leading-relaxed">{t('case_desc')}</p>
              </div>
              <div className="relative min-h-[280px]">
                <Image src="/projeler-muhendislik/16.png" alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
