'use client';

import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/data/stats';

function CountUp({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString('tr-TR')}</span>;
}

export function StatsBar() {
  return (
    <section
      className="bg-[#071B34] pt-14 pb-32 relative overflow-hidden"
      aria-label="Güven istatistikleri"
    >
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center px-6 py-8 bg-[#071B34] relative"
            >
              {/* Divider (desktop only, not last) */}
              {i < STATS.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-6 bottom-6 w-px bg-[#11B5FF]/25"
                  aria-hidden="true"
                />
              )}

              <p className="eyebrow text-[#11B5FF] mb-3">{stat.eyebrow}</p>

              <p className="font-sora font-bold text-white leading-none mb-2" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}>
                {stat.numericValue === 2003 ? '2003' :
                 stat.suffix === '°' ? (
                   <><CountUp target={stat.numericValue} />°</>
                 ) : stat.suffix === ' m²' ? (
                   <><CountUp target={stat.numericValue} /> m²</>
                 ) : stat.suffix === '+' ? (
                   <><CountUp target={stat.numericValue} />+</>
                 ) : (
                   <CountUp target={stat.numericValue} />
                 )}
              </p>

              <p className="text-sm text-[#E9EEF3]/65 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-fade-to-white" aria-hidden="true" />
    </section>
  );
}
