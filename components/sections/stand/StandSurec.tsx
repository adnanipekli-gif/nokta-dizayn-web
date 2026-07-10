import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { STAND_SUREC } from '@/lib/data/standCozumleri';

export function StandSurec() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            eyebrow="// PROJE SÜRECİ"
            title="Fuar Takvimi Beklemez"
            subtitle="Stand projelerinde teslim tarihi sabittir. Süreç, bu gerçeğe göre geriye doğru planlanır."
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-14 relative">
          {/* Horizontal dashed line (desktop only) */}
          <div
            className="hidden lg:block absolute top-6 left-[3rem] right-[3rem] h-px border-t border-dashed border-[#D9E1EA]"
            aria-hidden="true"
          />

          {STAND_SUREC.map((adim, i) => (
            <FadeInOnScroll key={adim.no} delay={i * 60}>
              <div className="flex flex-col">
                {/* Number circle */}
                <div className="w-12 h-12 rounded-xl border-2 border-[#D9E1EA] bg-white flex items-center justify-center mb-4 relative z-10">
                  <span className="font-mono text-xs font-bold text-[#0A6DB8]">{adim.no}</span>
                </div>
                <h3 className="font-sora font-semibold text-[#071B34] text-sm mb-2">
                  {adim.baslik.tr}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {adim.aciklama.tr}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
