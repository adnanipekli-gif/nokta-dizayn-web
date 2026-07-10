'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type LightboxImage = { src: string; alt: string };

type LightboxProps = {
  images: LightboxImage[];
  startIndex?: number;
  caption?: string;
  onClose: () => void;
};

export function Lightbox({ images, startIndex = 0, caption, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<Element | null>(null);
  const touchStartX = useRef<number | null>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const total = images.length;

  const goPrev = useCallback(() => setCurrent((i) => (i - 1 + total) % total), [total]);
  const goNext = useCallback(() => setCurrent((i) => (i + 1) % total), [total]);

  // Focus management
  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    closeRef.current?.focus();
    return () => (previousFocusRef.current as HTMLElement | null)?.focus?.();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, goPrev, goNext]);

  // Body scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Scroll active thumbnail into view
  useEffect(() => {
    const container = thumbRef.current;
    if (!container) return;
    const active = container.children[current] as HTMLElement | undefined;
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [current]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev();
    touchStartX.current = null;
  };

  const image = images[current];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9998] bg-black/75 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Görsel galerisi"
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 pointer-events-none"
      >
        <div
          className="relative w-full max-w-4xl pointer-events-auto flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{ maxHeight: 'calc(100vh - 3rem)', animation: 'lbIn 0.2s ease-out forwards' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#0B1826] shrink-0 border-b border-white/[0.07]">
            <span className="font-mono text-[0.65rem] tracking-[0.18em] text-white/40 uppercase">
              {current + 1} / {total}
            </span>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Kapat"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            >
              <X size={16} />
            </button>
          </div>

          {/* Image area */}
          <div className="relative bg-black flex items-center justify-center group" style={{ minHeight: '40vh', maxHeight: '68vh' }}>
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={1400}
              height={900}
              className="object-contain w-full h-full"
              style={{ maxHeight: '68vh' }}
              priority
            />

            {/* Prev arrow */}
            {total > 1 && (
              <button
                onClick={goPrev}
                aria-label="Önceki görsel"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-200 opacity-60 hover:opacity-100 backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/* Next arrow */}
            {total > 1 && (
              <button
                onClick={goNext}
                aria-label="Sonraki görsel"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all duration-200 opacity-60 hover:opacity-100 backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>

          {/* Bottom bar */}
          <div className="bg-[#0B1826] shrink-0 border-t border-white/[0.07]">
            {/* Caption */}
            {(caption || image.alt) && (
              <p className="px-5 pt-3 pb-1 text-xs text-white/45 truncate">
                {caption ?? image.alt}
              </p>
            )}

            {/* Thumbnail strip */}
            {total > 1 && (
              <div
                ref={thumbRef}
                className="flex gap-2 px-5 py-3 overflow-x-auto scroll-smooth"
                style={{ scrollbarWidth: 'none' }}
              >
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Görsel ${i + 1}`}
                    className={`relative shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${
                      i === current
                        ? 'ring-2 ring-[#11B5FF] opacity-100'
                        : 'opacity-40 hover:opacity-70'
                    }`}
                    style={{ width: 56, height: 40 }}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="56px" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes lbIn {
          from { opacity: 0; transform: scale(0.94) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </>
  );
}
