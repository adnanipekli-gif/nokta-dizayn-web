import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { Placeholder } from '@/components/ui/Placeholder';
import { STAND_UYGULAMA_ALANLARI } from '@/lib/data/standCozumleri';

export function StandUygulamaAlanlari() {
  const sureli = STAND_UYGULAMA_ALANLARI.filter((a) => a.grup === 'sureli');
  const kalici = STAND_UYGULAMA_ALANLARI.filter((a) => a.grup === 'kalici');

  return (
    <section className="py-24 md:py-32 bg-[#F7F9FC]">
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            eyebrow="UYGULAMA ALANLARI"
            title="Süreli ve Kalıcı Tanıtım Alanları"
            subtitle="Fuar süresince ayakta kalan bir stand ile yıllarca kullanılacak bir showroom, aynı tasarım ve üretim disiplininden çıkar. Farklı olan yalnızca ömür beklentisi ve montaj kurgusudur."
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Süreli group header */}
          <div className="col-span-full mb-2">
            <p className="eyebrow text-[#8D99A8] mb-2">SÜRELİ TANITIM ALANLARI</p>
            <div className="h-px bg-[#E9EEF3]" />
          </div>

          {sureli.map((alan, i) => (
            <FadeInOnScroll key={alan.id} delay={i * 60}>
              <div className="rounded-2xl border border-[#E9EEF3] bg-white overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full">
                <div className="relative aspect-video overflow-hidden">
                  {alan.gorsel ? (
                    <Image
                      src={alan.gorsel}
                      alt={alan.baslik.tr}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <Placeholder icon="Presentation" aspectRatio="16:9" label={alan.fallbackLabel} className="rounded-none" />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#071B34] mb-1.5">{alan.baslik.tr}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{alan.aciklama.tr}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}

          {/* Kalıcı group header */}
          <div className="col-span-full mt-8 mb-2">
            <p className="eyebrow text-[#8D99A8] mb-2">KALICI TANITIM ALANLARI</p>
            <div className="h-px bg-[#E9EEF3]" />
          </div>

          {kalici.map((alan, i) => (
            <FadeInOnScroll key={alan.id} delay={i * 60}>
              <div className="rounded-2xl border border-[#E9EEF3] bg-white overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 h-full">
                <div className="relative aspect-video overflow-hidden">
                  {alan.gorsel ? (
                    <Image
                      src={alan.gorsel}
                      alt={alan.baslik.tr}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <Placeholder icon="Presentation" aspectRatio="16:9" label={alan.fallbackLabel} className="rounded-none" />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#071B34] mb-1.5">{alan.baslik.tr}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{alan.aciklama.tr}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
