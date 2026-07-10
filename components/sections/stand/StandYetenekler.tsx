import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { DynIcon } from '@/lib/icons';
import { STAND_YETENEKLER } from '@/lib/data/standCozumleri';

export function StandYetenekler() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            eyebrow="// HİZMET KAPSAMI"
            title="Konseptten Söküme Tek Ekip"
            subtitle="Stand projelerinde koordinasyon hatası, geri dönüşü olmayan bir zaman kaybıdır. Tasarım, üretim, nakliye, kurulum ve söküm süreçlerinin tamamı tek sorumluluk altında yürütülür."
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {STAND_YETENEKLER.map((yetenek, i) => (
            <FadeInOnScroll key={yetenek.id} delay={i * 60}>
              <div className="rounded-2xl border border-[#E9EEF3] bg-white p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-xl bg-[#E9EEF3] flex items-center justify-center mb-4">
                  <DynIcon name={yetenek.icon} size={20} className="text-[#0A6DB8]" />
                </div>
                <h3 className="font-sora font-semibold text-[#071B34] text-base mb-2">
                  {yetenek.baslik.tr}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {yetenek.aciklama.tr}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
