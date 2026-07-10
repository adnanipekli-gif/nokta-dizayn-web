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
  const touchEndX = useRef<number | null>(null);

  const total = images.length;

  const goPrev = useCallback(() => {
    setCurrent((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setCurrent((i) => (i + 1) % total);
  }, [total]);

  // Focus trap — focus close button on mount, restore on unmount
  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    closeRef.current?.focus();

    return () => {
      (previousFocusRef.current as HTMLElement | null)?.focus?.();
    };
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

  // Prevent body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const image = images[current];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Görsel galerisi"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#071B34]/92 backdrop-blur-sm"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Kapat"
        className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 motion-reduce:transition-none"
      >
        <X size={20} />
      </button>

      {/* Previous button */}
      {total > 1 && (
        <button
          onClick={goPrev}
          aria-label="Önceki görsel"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 motion-reduce:transition-none"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Next button */}
      {total > 1 && (
        <button
          onClick={goNext}
          aria-label="Sonraki görsel"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 motion-reduce:transition-none"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative w-full px-16 flex items-center justify-center"
        style={{ maxHeight: 'calc(100vh - 120px)' }}
      >
        <div className="relative w-full h-full flex items-center justify-center" style={{ maxHeight: 'calc(100vh - 120px)' }}>
          <Image
            src={image.src}
            alt={image.alt}
            width={1400}
            height={900}
            className="object-contain max-h-[calc(100vh-120px)] w-auto max-w-full"
            priority
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between">
        <p className="text-sm text-white/70 truncate max-w-[70%]">
          {caption ?? image.alt}
        </p>
        <span className="font-mono text-xs text-white/50 shrink-0 ml-4">
          {current + 1} / {total}
        </span>
      </div>
    </div>
  );
}
