'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const INTERVAL = 3000;

const SLIDES = [
  {
    src: '/stand-sistemleri/imalat-1.png',
    eyebrow: 'ÜRETİM ALTYAPIMIZ',
    title: 'Kendi Atölyemizde Üretiyoruz',
    body: 'Stand elemanlarının tamamı kendi üretim tesisimizde imal edilir. Dışarıya bağımlı olmadan, proje takvimini ve kalite standartlarını doğrudan kontrol ederiz.',
  },
  {
    src: '/stand-sistemleri/imalat-2.png',
    eyebrow: 'METAL VE AHŞAP İŞLEME',
    title: 'Milimetrik Toleransla İmalat',
    body: 'Metal konstrüksiyon, ahşap yüzey, cam ve laminat işlemleri aynı çatı altında yürütülür. Parçalar birbirine geçecek biçimde üretildiğinden sahada sürprizle karşılaşılmaz.',
  },
  {
    src: '/stand-sistemleri/imalat-3.png',
    eyebrow: 'YÜZEYLENDİRME VE KAPLAMA',
    title: 'Yüzey İşleminden Çıkınca Hazır',
    body: 'Boya, folyo, laminasyon ve özel yüzey kaplamaları üretim sürecinin ayrılmaz parçasıdır. Stand, montaj alanına ulaşmadan önce fabrikada tüm yüzeylendirme işlemlerini tamamlamış olur.',
  },
  {
    src: '/stand-sistemleri/imalat-4.png',
    eyebrow: 'AYDINLATMA ENTEGRASYONU',
    title: 'Aydınlatma Üretimde Entegre Edilir',
    body: 'LED profil, spot ve eleman aydınlatmaları stand kasasıyla birlikte üretim aşamasında monte edilir. Sahada elektrik işi minimuma indirilir, fuar kurulum süresi kısalır.',
  },
  {
    src: '/stand-sistemleri/imalat-5.png',
    eyebrow: 'FABRİKA ÖN KURULUMU',
    title: 'Sahaya Gitmeden Önce Test Edilir',
    body: 'Büyük stand projelerinde teslimat öncesi fabrikada ön kurulum yapılır. Parçaların birbirine uyumu, elektrik bağlantıları ve görsel bütünlük fuar alanına gitmeden onaylanır.',
  },
];

export function StandYetenekler() {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setTextVisible(true);
    }, 220);
  }, []);

  const goNext = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(goNext, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, goNext]);

  const slide = SLIDES[current];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        {/* Slider box */}
        <div
          className="relative aspect-[16/9] rounded-2xl overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Images — crossfade */}
          {SLIDES.map((s, i) => (
            <div
              key={s.src}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <Image
                src={s.src}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority={i === 0}
                aria-hidden="true"
              />
            </div>
          ))}

          {/* Gradient overlay — bottom heavy for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
            <div
              className="max-w-lg transition-all duration-300"
              style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(10px)' }}
            >
              {slide.eyebrow && (
                <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#11B5FF] mb-3">
                  {slide.eyebrow}
                </p>
              )}
              <h2 className="text-white font-sora font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">
                {slide.title}
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {slide.body}
              </p>
            </div>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={goPrev}
            aria-label="Önceki"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/55 text-white flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goNext}
            aria-label="Sonraki"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/30 hover:bg-black/55 text-white flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
          >
            <ChevronRight size={18} />
          </button>

          {/* Bottom bar: dots + progress */}
          <div className="absolute bottom-5 right-6 z-10 flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slayt ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-white' : 'w-3 bg-white/35 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Progress bar — bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
            <div
              key={`${current}-${paused}`}
              className="h-full bg-[#11B5FF]"
              style={{ animation: paused ? 'none' : `ndProgress ${INTERVAL}ms linear forwards` }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ndProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}
