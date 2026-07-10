'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { Lightbox } from '@/components/ui/Lightbox';
import { STAND_GALERI } from '@/lib/data/standCozumleri';

export function StandGaleri() {
  const [gosterilen, setGosterilen] = useState(12);
  const [lightboxItem, setLightboxItem] = useState<number | null>(null);

  return (
    <section id="galeri" className="py-24 md:py-32 bg-[#F7F9FC]">
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            eyebrow="PROJE GALERİSİ"
            title="Çalışmalarımızdan Kareler"
            subtitle="Fuar organizasyonları, kiosk uygulamaları, sergileme üniteleri ve kalıcı marka alanlarından seçilmiş görüntüler."
          />
        </FadeInOnScroll>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-12">
          {STAND_GALERI.slice(0, gosterilen).map((item, i) => (
            <div key={item.id} className="break-inside-avoid mb-4">
              <button
                onClick={() => setLightboxItem(i)}
                className="relative w-full overflow-hidden rounded-xl group block"
                aria-label={`Görseli büyüt: ${item.alt.tr}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt.tr}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#071B34]/0 group-hover:bg-[#071B34]/20 transition-colors duration-300 motion-reduce:transition-none" />
              </button>
            </div>
          ))}
        </div>

        {/* Load more */}
        {gosterilen < STAND_GALERI.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setGosterilen((g) => g + 12)}
              className="px-8 py-3 rounded-full border border-[#D9E1EA] text-[#475569] text-sm font-medium hover:border-[#0A6DB8] hover:text-[#0A6DB8] transition-colors duration-200 motion-reduce:transition-none"
            >
              Daha Fazla Göster ({STAND_GALERI.length - gosterilen} görsel)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxItem !== null && (
        <Lightbox
          images={STAND_GALERI.map((item) => ({ src: item.src, alt: item.alt.tr }))}
          startIndex={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      )}
    </section>
  );
}
