import Image from 'next/image';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function StandHero() {
  return (
    <section className="pt-32 pb-20 bg-[#071B34] relative overflow-hidden min-h-[600px]">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />

      {/* Right radial glow */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[400px] bg-[#11B5FF]/8 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — 6 cols */}
          <div className="lg:col-span-6">
            <p className="eyebrow text-[#11B5FF] mb-6">FUAR VE TANITIM STANDLARI</p>

            <h1 className="text-white text-balance mb-6">
              Fuar ve Tanıtım Standları
            </h1>

            <p className="text-[#E9EEF3]/70 text-lg leading-relaxed mb-8 max-w-lg">
              Bir fuar standı, markanın birkaç gün içinde kurulan ve sökülen en yoğun tanıtım alanıdır. Sınırlı sürede, kusursuz detayla ve tek seferde doğru kurulmak zorundadır. Nokta Dizayn; mağaza projelerinde kullandığı konsept tasarım, mühendislik ve üretim yetkinliğini fuar standlarına, kiosk uygulamalarına ve kalıcı marka tanıtım alanlarına taşır.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="/katalog-pdf/ND-Expo-Design.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md font-inter font-semibold leading-none px-8 py-4 text-base relative overflow-hidden bg-[#0A6DB8] text-white hover:bg-[#0858A0] hover:scale-[1.01] transition-all duration-300 ease-out"
              >
                <FileText size={16} />
                Katalogu Görüntüleyin
              </a>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/iletisim?form=teklif&konu=fuar-stand"
                  className="sm:flex-1 inline-flex items-center justify-center gap-2 rounded-md font-inter font-semibold px-7 py-3.5 text-sm border border-white/35 text-white hover:bg-white hover:text-[#071B34] transition-all duration-300 ease-out"
                >
                  Stand Projeniz İçin Teklif Alın
                </a>
                <a
                  href="#philips-stand"
                  className="sm:flex-1 inline-flex items-center justify-center gap-2 rounded-md font-inter font-semibold px-7 py-3.5 text-sm border border-white/35 text-white hover:bg-white hover:text-[#071B34] transition-all duration-300 ease-out"
                >
                  Örnek Standlarımızı İnceleyin
                </a>
              </div>
            </div>
          </div>

          {/* Right — 6 cols */}
          <div className="lg:col-span-6 order-first lg:order-last">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/stand-sistemleri/phillips-stant-2.png"
                alt="Philips Sonicare büyük alan tanıtım standı — teal aydınlatmalı geniş alan"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
