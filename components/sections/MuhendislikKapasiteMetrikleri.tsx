'use client';

import { useEffect, useRef, useState } from 'react';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const metrics = [
  {
    value: 11000,
    suffix: ' m²',
    label: 'Üretim Tesisi',
    eyebrow: 'KAPASİTE',
    description: 'Kendi üretim altyapımızla proje teslim süreleri kontrol altında.',
  },
  {
    value: 6,
    suffix: '',
    label: 'Mühendislik Disiplini',
    eyebrow: 'ENTEGRASYON',
    description: 'Soğutma, mekanik, elektrik, mimari, proje yönetimi ve kalite tek çatıda.',
  },
  {
    value: 8,
    suffix: '',
    label: 'Adım Proje Süreci',
    eyebrow: 'SÜREÇ',
    description: 'Analizden devreye almaya her aşama tanımlı, ölçülebilir ve teslim garantili.',
  },
  {
    value: 360,
    suffix: '°',
    label: 'Proje Sahipliği',
    eyebrow: 'SORUMLULUK',
    description: 'Konseptten satış sonrası servise — kesintisiz tam döngü proje ortaklığı.',
  },
];

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
      aria-label="Mühendislik kapasite metrikleri"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />

      <div className="section-container relative z-10">
        <FadeInOnScroll className="text-center mb-14">
          <p className="eyebrow text-[#11B5FF] mb-3">RAKAMLARLA NOKTA DİZAYN</p>
          <h2 className="text-white max-w-2xl mx-auto">
            Kapasitemiz, Taahhüdümüzün Altyapısıdır
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#11B5FF]/20">
          {metrics.map((m, i) => (
            <FadeInOnScroll key={m.label} delay={i * 80}>
              <div className="px-8 py-8 lg:py-4 text-center flex flex-col items-center gap-3">
                <p className="font-mono text-[0.6rem] font-bold tracking-widest text-[#11B5FF]/60 uppercase">
                  {m.eyebrow}
                </p>
                <p className="font-sora font-bold text-4xl lg:text-5xl text-white tabular-nums">
                  <CountUp target={m.value} suffix={m.suffix} active={active} />
                </p>
                <p className="font-sora font-semibold text-sm text-[#E9EEF3]/80">{m.label}</p>
                <p className="text-xs text-[#E9EEF3]/45 leading-relaxed max-w-[180px]">
                  {m.description}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
