import Image from 'next/image';
import { Link } from '@/lib/i18n-navigation';
import { ArrowRight, Zap } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/Button';
import { GradientGlow } from '@/components/ui/GradientGlow';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

export async function HeroSection() {
  const t = await getTranslations('hero');

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#071B34]"
      aria-label={t('aria')}
    >
      <Image
        src="/servis-reyonlari.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#071B34]/70" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/80 via-[#071B34]/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 blueprint-grid opacity-15" aria-hidden="true" />
      <GradientGlow position="top-right" intensity="medium" />
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#11B5FF]/40 to-transparent" aria-hidden="true" />

      <div className="section-container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-9 xl:col-span-8">
            <FadeInOnScroll delay={0}>
              <p className="eyebrow text-[#11B5FF] mb-6">{t('eyebrow')}</p>

              <h1 className="hero-title-xl text-white text-balance mb-6">{t('title')}</h1>

              <p className="text-lg text-[#E9EEF3]/80 leading-relaxed max-w-2xl mb-10">
                {t('subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="primary" size="lg" href="/iletisim?form=teklif">
                  {t('cta_primary')}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/urunler"
                  className="border-white/40 text-white hover:bg-white hover:text-[#071B34]"
                >
                  {t('cta_secondary')}
                </Button>
              </div>

              <div className="mt-5">
                <Link
                  href="/servis-destek"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#E9EEF3]/60 hover:text-[#11B5FF] transition-colors group"
                >
                  {t('ghost_cta')}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              <div
                className="inline-flex items-start gap-3 mt-12 bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4"
                aria-label={t('energy_label')}
              >
                <Zap size={18} className="text-[#11B5FF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-sora font-bold text-2xl text-white leading-none mb-1">−%30</p>
                  <p className="text-xs text-[#E9EEF3]/55 leading-snug">{t('energy_label')}</p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
