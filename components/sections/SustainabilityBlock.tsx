import { Link } from '@/lib/i18n-navigation';
import Image from 'next/image';
import { ArrowRight, Zap, Timer, Settings2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GradientGlow } from '@/components/ui/GradientGlow';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

export async function SustainabilityBlock() {
  const t = await getTranslations('sustainability');

  const metrics = [
    { icon: Zap,      title: t('metric_1_title'), description: t('metric_1_desc') },
    { icon: Timer,    title: t('metric_2_title'), description: t('metric_2_desc') },
    { icon: Settings2,title: t('metric_3_title'), description: t('metric_3_desc') },
  ];

  return (
    <section
      className="relative pt-36 pb-36 overflow-hidden bg-gradient-to-br from-[#071B34] via-[#0E2647] to-[#071B34]"
      aria-labelledby="sustainability-heading"
    >
      <div className="section-fade-from-white" aria-hidden="true" />
      <GradientGlow position="top-right" intensity="soft" />
      <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-4">
            <FadeInOnScroll>
              <SectionHeading
                eyebrow={t('eyebrow')}
                title={t('title')}
                subtitle={t('subtitle')}
                dark
                id="sustainability-heading"
              />
              <p className="text-[#E9EEF3]/70 text-sm leading-relaxed mt-4 mb-8">{t('body')}</p>
              <div className="space-y-4 mb-8">
                {metrics.map((m) => (
                  <div key={m.title} className="flex items-start gap-4">
                    <span className="p-2 rounded-lg bg-white/8 border border-white/15 text-[#11B5FF] shrink-0">
                      <m.icon size={16} />
                    </span>
                    <div>
                      <p className="font-semibold text-white text-sm">{m.title}</p>
                      <p className="text-xs text-[#E9EEF3]/60">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/surdurulebilirlik" className="inline-flex items-center gap-2 text-sm font-medium text-[#11B5FF] hover:text-white transition-colors group">
                {t('link')}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInOnScroll>
          </div>

          <div className="lg:col-span-8">
            <FadeInOnScroll delay={100}>
              <Image
                src="/gatria-fg-dgd-render.png"
                alt="GATRIA FG-DGD"
                width={960}
                height={720}
                className="w-full h-auto rounded-3xl"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </FadeInOnScroll>
          </div>
        </div>
      </div>
      <div className="section-fade-to-white" aria-hidden="true" />
    </section>
  );
}
