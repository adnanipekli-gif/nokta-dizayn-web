import Link from 'next/link';
import { ArrowRight, Zap, Timer, Settings2 } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GradientGlow } from '@/components/ui/GradientGlow';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const metrics = [
  {
    icon: Zap,
    title: 'Düşük tüketim',
    description: 'Enerji verimli kompresör ve LED aydınlatma',
  },
  {
    icon: Timer,
    title: 'Uzun ömür',
    description: 'Endüstriyel sınıf malzeme ve kalite kontrol',
  },
  {
    icon: Settings2,
    title: 'Akıllı kontrol',
    description: 'Merkezi izleme ve enerji optimizasyonu',
  },
];

export function SustainabilityBlock() {
  return (
    <section
      className="relative pt-36 pb-36 overflow-hidden bg-gradient-to-br from-[#071B34] via-[#0E2647] to-[#071B34]"
      aria-labelledby="sustainability-heading"
    >
      <div className="section-fade-from-white" aria-hidden="true" />
      <GradientGlow position="top-right" intensity="soft" />
      <div
        className="absolute inset-0 blueprint-grid opacity-20"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-5">
            <FadeInOnScroll>
              <SectionHeading
                eyebrow="ENERJİ VERİMLİLİĞİ"
                title="Enerji Verimliliğiyle Güçlenen Soğutma Performansı"
                subtitle="Nokta Dizayn, işletmelerin enerji tüketimini, operasyon maliyetlerini ve servis risklerini azaltmaya yönelik verimli soğutma çözümleri geliştirir."
                dark
                id="sustainability-heading"
              />

              <p className="text-[#E9EEF3]/70 text-sm leading-relaxed mt-4 mb-8">
                Doğru kapasite seçimi, merkezi sistem optimizasyonu ve uzun ömürlü ekipman
                yaklaşımıyla soğuk zincir güvenliğini ekonomik biçimde sağlıyoruz.
              </p>

              {/* 3 metrics */}
              <div className="space-y-4 mb-8">
                {metrics.map((m) => (
                  <div key={m.title} className="flex items-start gap-4">
                    <span className="p-2 rounded-lg bg-white/8 border border-white/15 text-[#11B5FF] shrink-0">
                      <m.icon size={16} />
                    </span>
                    <div>
                      <p className="font-semibold text-white text-sm">{m.title}</p>
                      <p className="text-xs text-[#E9EEF3]/60">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/surdurulebilirlik"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#11B5FF] hover:text-white transition-colors group"
              >
                Sürdürülebilirlik Yaklaşımımız
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInOnScroll>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-7">
            <FadeInOnScroll delay={100}>
              <Placeholder
                category="sustainability"
                aspectRatio="16:9"
                icon="Zap"
                label="ENERJİ VERİMLİLİĞİ"
              />
            </FadeInOnScroll>
          </div>
        </div>
      </div>
      <div className="section-fade-to-white" aria-hidden="true" />
    </section>
  );
}
