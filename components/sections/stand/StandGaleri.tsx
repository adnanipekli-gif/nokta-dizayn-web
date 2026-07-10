'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { Lightbox } from '@/components/ui/Lightbox';
import { STAND_GALERI } from '@/lib/data/standCozumleri';
import { cn } from '@/lib/utils';
import type { StandKategori } from '@/lib/data/standCozumleri';

const FILTRELER = [
  { id: 'tumu',         label: 'Tümü' },
  { id: 'fuar-standi',  label: 'Fuar Standı' },
  { id: 'kiosk',        label: 'Kiosk' },
  { id: 'sergileme',    label: 'Sergileme' },
  { id: 'shop-in-shop', label: 'Shop-in-Shop' },
  { id: 'showroom',     label: 'Showroom' },
  { id: 'ic-mekan',     label: 'İç Mekân' },
] as const;

type FiltreId = (typeof FILTRELER)[number]['id'];

export function StandGaleri() {
  const [aktif, setAktif] = useState<FiltreId>('tumu');
  const [gosterilen, setGosterilen] = useState(9);
  const [lightboxItem, setLightboxItem] = useState<number | null>(null);

  const filtreliGorseller =
    aktif === 'tumu'
      ? STAND_GALERI
      : STAND_GALERI.filter((item) => item.kategori === (aktif as StandKategori));

  return (
    <section id="galeri" className="py-24 md:py-32 bg-[#F7F9FC]">
      <div className="section-container">
        <FadeInOnScroll>
          <SectionHeading
            eyebrow="// UYGULAMA GALERİSİ"
            title="Sahadan Kesitler"
            subtitle="Fuar organizasyonları, kiosk uygulamaları, sergileme üniteleri ve kalıcı marka alanlarından seçilmiş çalışmalar."
          />
        </FadeInOnScroll>

        {/* Filter bar */}
        <div className="flex gap-2 flex-wrap mt-8 mb-10" role="tablist">
          {FILTRELER.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={aktif === f.id}
              onClick={() => { setAktif(f.id); setGosterilen(9); }}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 motion-reduce:transition-none',
                aktif === f.id
                  ? 'bg-[#071B34] text-white'
                  : 'border border-[#D9E1EA] text-[#475569] hover:border-[#11B5FF]'
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {filtreliGorseller.slice(0, gosterilen).map((item, i) => (
            <div key={item.id} className="break-inside-avoid mb-4">
              <button
                onClick={() => setLightboxItem(i)}
                className="relative w-full overflow-hidden rounded-xl group block"
                aria-label={`${item.etiket.tr} görselini büyüt`}
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
                <span className="absolute bottom-2 left-2 font-mono text-[0.6rem] tracking-widest text-white bg-black/50 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none">
                  {item.etiket.tr.toUpperCase()}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Load more */}
        {gosterilen < filtreliGorseller.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setGosterilen((g) => g + 9)}
              className="px-8 py-3 rounded-full border border-[#D9E1EA] text-[#475569] text-sm font-medium hover:border-[#0A6DB8] hover:text-[#0A6DB8] transition-colors duration-200 motion-reduce:transition-none"
            >
              Daha Fazla Göster ({filtreliGorseller.length - gosterilen} görsel)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxItem !== null && (
        <Lightbox
          images={filtreliGorseller.map((item) => ({ src: item.src, alt: item.alt.tr }))}
          startIndex={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      )}
    </section>
  );
}
