'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface PartnerLogosProps {
  logos: number[];
}

export function PartnerLogos({ logos }: PartnerLogosProps) {
  return (
    <section className="py-20 bg-white" aria-label="İş ortakları">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-[#475569] max-w-lg mx-auto text-sm leading-relaxed">
            Aşağıdaki markalar, entegre mağaza sistemleri alanında Nokta Dizayn ile uzun soluklu iş birlikleri yürütmektedir.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 lg:gap-4">
          {logos.map((n, i) => (
            <LogoCard key={n} index={n} delay={i * 30} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoCard({ index, delay }: { index: number; delay: number }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer for staggered reveal
  const observerRef = useRef<IntersectionObserver | null>(null);
  const init = useRef(false);

  function attachRef(el: HTMLDivElement | null) {
    if (!el || init.current) return;
    init.current = true;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observerRef.current.observe(el);
  }

  return (
    <div
      ref={attachRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'relative aspect-[3/2] rounded-xl border bg-white overflow-hidden cursor-default',
        'transition-all duration-500',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
        hovered
          ? 'border-[#11B5FF]/40 shadow-[0_4px_20px_rgba(17,181,255,0.12)] scale-[1.03]'
          : 'border-[#D9E1EA] shadow-sm'
      )}
      style={{ transitionDelay: visible ? '0ms' : `${delay}ms` }}
    >
      {/* Subtle glow on hover */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-[#11B5FF]/5 to-transparent transition-opacity duration-300',
          hovered ? 'opacity-100' : 'opacity-0'
        )}
        aria-hidden="true"
      />

      <Image
        src={`/references/${index}.png`}
        alt={`Referans marka ${index}`}
        fill
        sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 15vw"
        className={cn(
          'object-contain p-3 transition-all duration-300',
          hovered ? 'scale-105 brightness-100' : 'brightness-90 grayscale-[20%]'
        )}
        loading="lazy"
      />
    </div>
  );
}
