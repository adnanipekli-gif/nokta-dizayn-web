import Image from 'next/image';
import { Thermometer, Cog, Zap, LayoutDashboard, ClipboardList, BadgeCheck } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const disciplineIcons = [Thermometer, Cog, Zap, LayoutDashboard, ClipboardList, BadgeCheck];

export async function MuhendislikAltyapisi() {
  const t = await getTranslations('muhendislik_altyapisi');

  const disciplines = [
    { icon: disciplineIcons[0], title: t('d1_title'), text: t('d1_text') },
    { icon: disciplineIcons[1], title: t('d2_title'), text: t('d2_text') },
    { icon: disciplineIcons[2], title: t('d3_title'), text: t('d3_text') },
    { icon: disciplineIcons[3], title: t('d4_title'), text: t('d4_text') },
    { icon: disciplineIcons[4], title: t('d5_title'), text: t('d5_text') },
    { icon: disciplineIcons[5], title: t('d6_title'), text: t('d6_text') },
  ];

  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-label={t('title')}
    >
      {/* Background image */}
      <Image
        src="/dolap-üretim-5.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#D9E1EA]/80" aria-hidden="true" />

      <div className="section-container relative z-10">
        <FadeInOnScroll className="mb-14">
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            subtitle={t('subtitle')}
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((d, i) => {
            const Icon = d.icon;
            return (
              <FadeInOnScroll key={d.title} delay={i * 60}>
                <div
                  className="group bg-white border border-[#D9E1EA] rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(7,27,52,0.06),0_16px_40px_rgba(10,109,184,0.12)] hover:border-t-[#11B5FF] transition-all duration-300"
                  style={{ borderTopWidth: '1px' }}
                >
                  <span className="w-12 h-12 rounded-xl bg-[#071B34] flex items-center justify-center shrink-0 group-hover:bg-[#0A6DB8] transition-colors duration-300">
                    <Icon size={20} className="text-[#11B5FF]" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="font-sora font-semibold text-[#071B34] mb-2">{d.title}</h4>
                    <p className="text-sm text-[#475569] leading-relaxed">{d.text}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
