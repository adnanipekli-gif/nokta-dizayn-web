'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const METRIC_DATA = [
  { value: 11000, suffix: ' m²',  mKey: 'm1' },
  { value: 6,     suffix: '',      mKey: 'm2' },
  { value: 8,     suffix: '',      mKey: 'm3' },
  { value: 360,   suffix: '°',    mKey: 'm4' },
] as const;

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1600;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  const display = target === 11000
    ? count.toLocaleString('tr-TR')
    : count.toString();

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function MuhendislikKapasiteMetrikleri() {
  const t = useTranslations('muhendislik_metrikleri');
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 bg-[#0E2647] relative overflow-hidden"
      aria-label={t('title')}
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />

      <div className="section-container relative z-10">
        <FadeInOnScroll className="text-center mb-14">
          <p className="eyebrow text-[#11B5FF] mb-3">{t('eyebrow')}</p>
          <h2 className="text-white max-w-2xl mx-auto">{t('title')}</h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#11B5FF]/20">
          {METRIC_DATA.map((m, i) => (
            <FadeInOnScroll key={m.mKey} delay={i * 80}>
              <div className="px-8 py-8 lg:py-4 text-center flex flex-col items-center gap-3">
                <p className="font-mono text-[0.6rem] font-bold tracking-widest text-[#11B5FF]/60 uppercase">
                  {t(`${m.mKey}_eyebrow`)}
                </p>
                <p className="font-sora font-bold text-4xl lg:text-5xl text-white tabular-nums">
                  <CountUp target={m.value} suffix={m.suffix} active={active} />
                </p>
                <p className="font-sora font-semibold text-sm text-[#E9EEF3]/80">{t(`${m.mKey}_label`)}</p>
                <p className="text-xs text-[#E9EEF3]/45 leading-relaxed max-w-[180px]">
                  {t(`${m.mKey}_desc`)}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
