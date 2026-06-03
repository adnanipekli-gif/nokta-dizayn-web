import Link from 'next/link';
import { X, Check, ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

export async function TekPaydasFark() {
  const t = await getTranslations('tek_paydas');

  const traditional = [
    t('trad_01'), t('trad_02'), t('trad_03'),
    t('trad_04'), t('trad_05'), t('trad_06'),
  ];

  const noktaDizayn = [
    t('nd_01'), t('nd_02'), t('nd_03'),
    t('nd_04'), t('nd_05'), t('nd_06'),
  ];

  return (
    <section
      className="py-24 bg-[#E9EEF3]"
      aria-label={t('title')}
    >
      <div className="section-container">
        <FadeInOnScroll className="text-center mb-14">
          <p className="eyebrow text-[#8D99A8] mb-4">{t('eyebrow')}</p>
          <h2 className="text-[#071B34] mb-4">{t('title')}</h2>
          <p className="text-[#475569] max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Traditional — passive */}
          <FadeInOnScroll delay={0}>
            <div className="h-full bg-[#F7F9FC] border border-[#D9E1EA] rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="font-sora font-bold text-xl text-[#071B34] mb-1">
                  {t('traditional_title')}
                </h3>
                <span className="text-xs text-[#8D99A8] font-medium">{t('traditional_label')}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {traditional.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X size={15} className="text-[#8D99A8] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#475569] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>

          {/* Nokta Dizayn — active */}
          <FadeInOnScroll delay={80}>
            <div className="h-full bg-[#071B34] border-t-2 border-t-[#11B5FF] rounded-2xl p-8 flex flex-col shadow-[0_4px_32px_rgba(7,27,52,0.18)]">
              <div className="mb-6">
                <h3 className="font-sora font-bold text-xl text-white mb-1">
                  {t('nd_title')}
                </h3>
                <span className="text-xs text-[#11B5FF] font-medium">{t('nd_label')}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {noktaDizayn.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={15} className="text-[#11B5FF] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#E9EEF3]/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <Link
                  href="/iletisim?form=danismanlik"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A6DB8] text-white text-sm font-medium hover:bg-[#0858A0] transition-colors duration-200"
                >
                  {t('nd_cta')}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
