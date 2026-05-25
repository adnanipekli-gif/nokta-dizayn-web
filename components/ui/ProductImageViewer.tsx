'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductImageViewerProps {
  images: string[];
  alt: string;
  className?: string;
}

export function ProductImageViewer({ images, alt, className }: ProductImageViewerProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') setLightboxIdx((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setLightboxIdx((i) => Math.min(images.length - 1, i + 1));
    };
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, images.length]);

  function openLightbox(idx: number) {
    setLightboxIdx(idx);
    setLightboxOpen(true);
  }

  return (
    <>
      <div className={cn('flex flex-col gap-2.5', className)}>
        {/* Primary image */}
        <div
          className="relative group cursor-zoom-in overflow-hidden rounded-xl bg-white border border-[#D9E1EA] hover:border-[#11B5FF]/40 hover:shadow-[0_0_0_3px_rgba(17,181,255,0.08)] transition-all duration-300"
          onClick={() => openLightbox(activeIdx)}
        >
          <div className="aspect-[4/3] relative">
            <Image
              src={images[activeIdx]}
              alt={alt}
              fill
              className="object-contain p-6 transition-transform duration-400 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
          {/* Zoom overlay badge */}
          <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-white/0 group-hover:bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md border border-[#D9E1EA]/0 group-hover:border-[#D9E1EA]">
            <ZoomIn size={16} className="text-[#071B34]" />
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={cn(
                  'relative w-20 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-200 bg-white',
                  i === activeIdx
                    ? 'border-[#11B5FF] shadow-sm shadow-[#11B5FF]/20'
                    : 'border-[#D9E1EA] hover:border-[#B0C4D8]'
                )}
                aria-label={`Görsel ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`${alt} ${i + 1}`}
                  fill
                  className="object-contain p-1.5"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={() => setLightboxOpen(false)}
            aria-label="Kapat"
          >
            <X size={20} />
          </button>

          {/* Prev arrow */}
          {images.length > 1 && lightboxIdx > 0 && (
            <button
              className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => i - 1); }}
              aria-label="Önceki"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Next arrow */}
          {images.length > 1 && lightboxIdx < images.length - 1 && (
            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => i + 1); }}
              aria-label="Sonraki"
            >
              <ChevronRight size={22} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-5xl w-full"
            style={{ maxHeight: '88vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIdx]}
              alt={alt}
              width={1400}
              height={1050}
              className="object-contain w-full h-auto"
              style={{ maxHeight: '88vh' }}
              priority
            />
          </div>

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIdx(i); }}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-200',
                    i === lightboxIdx ? 'bg-[#11B5FF] w-5' : 'bg-white/35 hover:bg-white/60'
                  )}
                  aria-label={`Görsel ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
