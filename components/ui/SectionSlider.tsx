'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type SliderSlide = {
  image?: string;
  title?: string;
  subtitle?: string;
};

interface SectionSliderProps {
  slides: SliderSlide[];
  className?: string;
}

export function SectionSlider({ slides, className }: SectionSliderProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(next, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, paused, next]);

  return (
    <div
      className={cn('relative w-full overflow-hidden rounded-2xl group', className)}
      style={{ aspectRatio: '16/7' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          {slide.image ? (
            <Image
              src={slide.image}
              alt={slide.title || ''}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          ) : (
            <div className="absolute inset-0 bg-[#E9EEF3] flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-[#B0C4D8]">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
                <span className="text-sm font-medium tracking-wide">Görsel Eklenecek</span>
              </div>
            </div>
          )}

          {/* Overlay — only when image + text */}
          {slide.image && (slide.title || slide.subtitle) && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/80 via-[#071B34]/25 to-transparent" />
          )}

          {/* Text */}
          {(slide.title || slide.subtitle) && slide.image && (
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-10">
              {slide.title && (
                <h3 className="font-sora font-bold text-white text-2xl lg:text-3xl xl:text-4xl drop-shadow-lg">
                  {slide.title}
                </h3>
              )}
              {slide.subtitle && (
                <p className="text-white/80 mt-2 text-base lg:text-lg max-w-xl leading-snug">
                  {slide.subtitle}
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Prev / Next arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Önceki"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Sonraki"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 right-6 z-10 flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                'rounded-full transition-all duration-300',
                i === current
                  ? 'bg-white w-6 h-1.5'
                  : 'bg-white/40 hover:bg-white/70 w-1.5 h-1.5'
              )}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
