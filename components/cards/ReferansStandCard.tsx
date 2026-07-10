'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Placeholder } from '@/components/ui/Placeholder';
import { KAPSAM_ETIKET } from '@/lib/data/standCozumleri';
import type { ReferansStand } from '@/lib/data/standCozumleri';

type Props = { stand: ReferansStand; onOpen: (stand: ReferansStand) => void };

export function ReferansStandCard({ stand, onOpen }: Props) {
  const { baslik, markaAdi, sektorEtiketi, organizasyon, lokasyon, yil, aciklama, kapsam, kapakGorsel, gorseller } = stand;

  return (
    <button
      type="button"
      onClick={() => onOpen(stand)}
      aria-label={`${baslik.tr} görsellerini aç`}
      className={cn(
        'group w-full text-left',
        'border border-[#E9EEF3] rounded-2xl shadow-sm bg-white',
        'transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-lg hover:border-[#11B5FF]/30'
      )}
    >
      {/* Image area */}
      <div className="relative aspect-video rounded-t-2xl overflow-hidden">
        {kapakGorsel ? (
          <Image
            src={kapakGorsel}
            alt={baslik.tr}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Placeholder icon="Presentation" aspectRatio="16:9" label={baslik.tr} className="rounded-t-2xl rounded-b-none" />
        )}
        {/* Image count badge */}
        <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white font-mono text-[0.6rem] tracking-widest px-2 py-1 rounded-md">
          {gorseller.length} GÖRSEL
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Marka / sector label */}
        <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#11B5FF] mb-2">
          {markaAdi ?? sektorEtiketi.tr}
        </p>

        {/* Title */}
        <h3 className="text-[#071B34] font-sora font-bold text-lg leading-snug mb-2">
          {baslik.tr}
        </h3>

        {/* Meta row */}
        <p className="font-mono text-[0.65rem] tracking-wide text-[#8D99A8] mb-3">
          {[organizasyon?.tr, lokasyon.tr, yil].filter(Boolean).join(' · ')}
        </p>

        {/* Description */}
        <p className="text-sm text-[#475569] line-clamp-3 mb-4 leading-relaxed">
          {aciklama.tr}
        </p>

        {/* Kapsam pills */}
        {kapsam.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {kapsam.map((k) => (
              <span
                key={k}
                className="border border-[#D9E1EA] text-[#475569] text-[0.65rem] font-mono px-2 py-0.5 rounded-full"
              >
                {KAPSAM_ETIKET[k].tr}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <span className="text-[#0A6DB8] hover:text-[#071B34] text-sm font-semibold transition-colors duration-200">
          Projeyi İncele →
        </span>
      </div>
    </button>
  );
}
