'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { ReferansStandCard } from '@/components/cards/ReferansStandCard';
import { Lightbox } from '@/components/ui/Lightbox';
import { Placeholder } from '@/components/ui/Placeholder';
import { KAPSAM_ETIKET, REFERANS_STANDLAR } from '@/lib/data/standCozumleri';
import type { ReferansStand } from '@/lib/data/standCozumleri';

export function ReferansStandlar() {
  const [selectedStand, setSelectedStand] = useState<ReferansStand | null>(null);

  if (!REFERANS_STANDLAR.length) return null;

  const onceCikan = REFERANS_STANDLAR.find((s) => s.oneCikan);
  const digerleri = REFERANS_STANDLAR.filter((s) => !s.oneCikan);

  return (
    <section id="ornek-standlar" className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            eyebrow="ÖRNEK STANDLAR"
            title="Markalar İçin Tasarladığımız ve Ürettiğimiz Standlar"
            subtitle="Her stand, markanın anlatmak istediği hikâyeye göre yeniden kurgulanır. Aşağıdaki projeler; konsept tasarımdan üretime, kurulumdan söküme kadar tüm süreci Nokta Dizayn'ın yürüttüğü çalışmalardan seçilmiştir."
            align="left"
            className="max-w-2xl"
          />
        </FadeInOnScroll>

        <div className="mt-12 space-y-6">
          {/* Featured card */}
          {onceCikan && (
            <FadeInOnScroll>
              <button
                type="button"
                onClick={() => setSelectedStand(onceCikan)}
                aria-label={`${onceCikan.baslik.tr} görsellerini aç`}
                className="group w-full text-left rounded-2xl border border-[#E9EEF3] bg-white overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-[#11B5FF]/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image — 60% */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:w-[60%] lg:min-h-[380px]">
                    {onceCikan.kapakGorsel ? (
                      <Image
                        src={onceCikan.kapakGorsel}
                        alt={onceCikan.baslik.tr}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    ) : (
                      <Placeholder icon="Presentation" aspectRatio="4:3" label={onceCikan.baslik.tr} className="rounded-none h-full" />
                    )}
                  </div>

                  {/* Content — 40% */}
                  <div className="p-8 lg:p-10 lg:w-[40%] flex flex-col justify-center">
                    <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#11B5FF] mb-3">
                      {onceCikan.markaAdi ?? onceCikan.sektorEtiketi.tr}
                    </p>
                    <h2 className="font-sora font-bold text-[#071B34] text-xl lg:text-2xl leading-snug mb-3">
                      {onceCikan.baslik.tr}
                    </h2>
                    <p className="font-mono text-[0.65rem] tracking-wide text-[#8D99A8] mb-4">
                      {[onceCikan.organizasyon?.tr, onceCikan.lokasyon.tr, onceCikan.yil].filter(Boolean).join(' · ')}
                    </p>
                    <p className="text-sm text-[#475569] leading-relaxed mb-5">
                      {onceCikan.aciklama.tr}
                    </p>
                    {onceCikan.kapsam.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {onceCikan.kapsam.map((k) => (
                          <span
                            key={k}
                            className="border border-[#D9E1EA] text-[#475569] text-[0.65rem] font-mono px-2 py-0.5 rounded-full"
                          >
                            {KAPSAM_ETIKET[k].tr}
                          </span>
                        ))}
                      </div>
                    )}
                    <span className="text-[#0A6DB8] hover:text-[#071B34] text-sm font-semibold transition-colors duration-200">
                      Projeyi İncele →
                    </span>
                  </div>
                </div>
              </button>
            </FadeInOnScroll>
          )}

          {/* Other cards */}
          {digerleri.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {digerleri.map((stand, i) => (
                <FadeInOnScroll key={stand.slug} delay={i * 80}>
                  <ReferansStandCard stand={stand} onOpen={setSelectedStand} />
                </FadeInOnScroll>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedStand && (
        <Lightbox
          images={selectedStand.gorseller.map((g) => ({ src: g.src, alt: g.alt.tr }))}
          caption={`${selectedStand.markaAdi ?? selectedStand.sektorEtiketi.tr} — ${selectedStand.baslik.tr}`}
          onClose={() => setSelectedStand(null)}
        />
      )}
    </section>
  );
}
