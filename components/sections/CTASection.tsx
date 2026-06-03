import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/Button';
import { GradientGlow } from '@/components/ui/GradientGlow';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

export async function CTASection() {
  const t = await getTranslations('cta');

  return (
    <section
      className="relative pt-40 pb-28 lg:pt-44 lg:pb-36 overflow-hidden bg-[#071B34]"
      aria-label={t('aria')}
    >
      <div className="section-fade-from-white" aria-hidden="true" />
      <GradientGlow position="top-right" intensity="medium" />
      <GradientGlow position="bottom-right" intensity="soft" />
      <div className="absolute inset-0 blueprint-grid opacity-10" aria-hidden="true" />

      <div className="section-container relative z-10 text-center">
        <FadeInOnScroll>
          <h2 className="text-white max-w-3xl mx-auto text-balance mb-8">{t('title')}</h2>
          <p className="text-[#E9EEF3]/65 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/iletisim?form=teklif">
              {t('primary')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="tel:+902163136767"
              className="border-white/35 text-white hover:bg-white hover:text-[#071B34]"
            >
              {t('secondary')}
            </Button>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
