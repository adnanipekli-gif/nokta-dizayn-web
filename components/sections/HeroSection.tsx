import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GradientGlow } from '@/components/ui/GradientGlow';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#071B34]"
      aria-label="Hero bölümü"
    >
      {/* Background image */}
      <Image
        src="/servis-reyonlari.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />

      {/* Navy base overlay — image visible through it */}
      <div
        className="absolute inset-0 bg-[#071B34]/70"
        aria-hidden="true"
      />

      {/* Left-to-right gradient — darker on left for text readability, fades right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#071B34]/80 via-[#071B34]/40 to-transparent"
        aria-hidden="true"
      />

      {/* Blueprint grid — subtle on top */}
      <div className="absolute inset-0 blueprint-grid opacity-15" aria-hidden="true" />

      {/* Cyan glow top-right */}
      <GradientGlow position="top-right" intensity="medium" />

      {/* Left vertical accent line */}
      <div
        className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#11B5FF]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Content — left side */}
          <div className="lg:col-span-9 xl:col-span-8">
            <FadeInOnScroll delay={0}>
              {/* Eyebrow */}
              <p className="eyebrow text-[#11B5FF] mb-6">
                // ENTEGRE MAĞAZA SİSTEMLERİ — 2003
              </p>

              {/* H1 */}
              <h1 className="hero-title-xl text-white text-balance mb-6">
                Konseptten Uygulamaya Entegre Mağaza Sistemleri
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-[#E9EEF3]/80 leading-relaxed max-w-2xl mb-10">
                Nokta Dizayn; soğutma ekipmanları, raf ve reyon sistemleri, kasa üniteleri ve mağaza
                mobilyalarıyla perakende mağazanızı baştan sona tasarlar ve donatır. 2003&apos;ten
                bu yana 60+ ülkede 30.000+ noktaya hizmet veriyoruz.
              </p>

              {/* CTA group */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  href="/iletisim?form=teklif"
                >
                  Projeniz İçin Teklif Alın
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="/urunler"
                  className="border-white/40 text-white hover:bg-white hover:text-[#071B34]"
                >
                  Ürünleri İnceleyin
                </Button>
              </div>

              {/* Ghost CTA */}
              <div className="mt-5">
                <Link
                  href="/servis-destek"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#E9EEF3]/60 hover:text-[#11B5FF] transition-colors group"
                >
                  Servis Talebi Oluşturun
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </div>

              {/* Floating energy card */}
              <div
                className="inline-flex items-start gap-3 mt-12 bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4"
                aria-label="Enerji verimliliği bilgisi"
              >
                <Zap size={18} className="text-[#11B5FF] shrink-0 mt-0.5" />
                <div>
                  <p className="font-sora font-bold text-2xl text-white leading-none mb-1">−%30</p>
                  <p className="text-xs text-[#E9EEF3]/55 leading-snug">
                    Doğru sistem seçimiyle<br />ortalama enerji tasarrufu
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
