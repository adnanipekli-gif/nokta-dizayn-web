'use client';

import { useEffect, useRef, useState } from 'react';

type Stat = {
  target: number;
  suffix: string;
  label: string;
  separator?: boolean; // binlik ayraç (30.000)
};

function CountUp({ target, suffix, separator, active }: Stat & { active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
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

  const display = separator
    ? count.toLocaleString('tr-TR')
    : count.toString();

  return <>{display}{suffix}</>;
}

export function CountUpStats({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-center gap-10">
      {stats.map((s, i) => (
        <div key={s.label} className={`pl-5 ${i > 0 ? 'border-l border-white/15' : 'border-l-2 border-[#11B5FF]'}`}>
          <p className="font-sora font-bold text-3xl text-white tabular-nums">
            <CountUp {...s} active={active} />
          </p>
          <p className="text-xs text-[#E9EEF3]/50 mt-1 tracking-widest uppercase">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
