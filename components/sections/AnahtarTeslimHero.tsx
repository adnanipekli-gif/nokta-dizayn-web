import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const blocks = [
  {
    number: '01',
    title: 'Tek Sorumluluk',
    text: 'Konsept, tasarım, mühendislik, üretim, lojistik, kurulum ve devreye alma; tümü aynı proje sözleşmesi kapsamındadır. Tedarikçiler arası koordinasyon karmaşası yoktur.',
  },
  {
    number: '02',
    title: 'Öngörülebilir Takvim',
    text: 'Proje takvimi başlangıçta belirlenir ve aynı mühendislik ekibi tarafından uçtan uca yönetilir. Farklı firmaların bağımsız iş programlarından doğan gecikmeler ortadan kalkar.',
  },
  {
    number: '03',
    title: 'Net Maliyet',
    text: 'Anahtar teslim model, bütçe belirsizliğini minimize eder. Ek tedarikçi, koordinasyon maliyeti veya sürpriz kalemler olmadan, net proje maliyetiyle çalışırsınız.',
  },
];

export function AnahtarTeslimHero() {
  return (
    <section
      className="py-24 bg-[#04101F] relative overflow-hidden"
      aria-label="Anahtar teslim proje yaklaşımı"
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.04]" aria-hidden="true" />
      {/* Cyan glow top right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#11B5FF]/12 blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — 5 cols: text + numbered blocks */}
          <div className="lg:col-span-5">
            <FadeInOnScroll>
              <p className="eyebrow text-[#11B5FF] mb-5">ANAHTAR TESLİM PROJE</p>
              <h2 className="text-white mb-6 text-balance">
                Tek Sözleşme, Tek Sorumluluk, Tam Teslimat.
              </h2>
              <p className="text-[#E9EEF3]/80 text-lg leading-relaxed mb-4">
                Geleneksel mağaza projelerinde müşteri; tasarımcı, ekipman tedarikçisi, montaj firması
                ve bakım sağlayıcısı arasında koordinasyon yükü üstlenir.
              </p>
              <p className="text-[#E9EEF3]/80 leading-relaxed mb-8">
                Nokta Dizayn bu yükü sıfırlar. Konsept kararından son devreye almaya kadar tek
                sözleşme, tek iletişim noktası, tek sorumluluk.{' '}
                <strong className="text-white font-semibold">Siz yalnızca anahtarı alırsınız.</strong>
              </p>
              <Link
                href="/iletisim?form=danismanlik"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/30 text-white text-sm font-medium hover:border-[#11B5FF] hover:text-[#11B5FF] transition-colors duration-200"
              >
                Proje Danışmanlığı Talep Edin
                <ArrowRight size={15} />
              </Link>
            </FadeInOnScroll>
          </div>

          {/* Right — 7 cols: image + numbered blocks */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Project photo */}
            <FadeInOnScroll delay={60}>
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                  src="/projeler-muhendislik/2.png"
                  alt="Tamamlanan mağaza projesi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04101F]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-xs font-mono text-white/60 tracking-widest uppercase">
                    Tamamlanan Projeden
                  </span>
                  <span className="text-xs font-mono text-[#11B5FF] tracking-widest uppercase">
                    Nokta Dizayn
                  </span>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Numbered blocks */}
            <div className="flex flex-col divide-y divide-[#11B5FF]/20 border border-[#11B5FF]/15 rounded-2xl overflow-hidden">
              {blocks.map((block, i) => (
                <FadeInOnScroll key={block.number} delay={80 + i * 60}>
                  <div className="px-6 py-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[0.65rem] font-bold text-[#11B5FF] tracking-widest">
                        {block.number}
                      </span>
                      <span className="h-px flex-1 bg-[#11B5FF]/20" />
                    </div>
                    <h3 className="font-sora font-semibold text-white text-base mb-1.5">
                      {block.title}
                    </h3>
                    <p className="text-sm text-[#E9EEF3]/65 leading-relaxed">{block.text}</p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
