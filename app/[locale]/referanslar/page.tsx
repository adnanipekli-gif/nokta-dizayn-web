import type { Metadata } from 'next';
import { PartnerLogos } from '@/components/sections/PartnerLogos';

export const metadata: Metadata = {
  title: 'Referanslar',
  description:
    'Türkiye ve dünya genelinde 30.000+ noktada çözümlerimize güvenen markalar. Süpermarketlerden franchise zincirlerine, gurme marketlerden petrol istasyonlarına kadar geniş bir iş birliği ağı.',
  alternates: { canonical: 'https://www.noktadizayn.com.tr/referanslar' },
};

const TOTAL = 45;
const logos = Array.from({ length: TOTAL }, (_, i) => i + 1);

export default function ReferanslarPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-[#11B5FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
          aria-hidden="true"
        />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-white mb-5">
            Güven Duyan Markalar
          </h1>
          <p className="text-[#E9EEF3]/65 max-w-2xl mx-auto text-lg leading-relaxed">
            2003&apos;ten bu yana 60+ ülkede 30.000+ noktada çözümlerimize güvenen markalar. Her biri,
            konspetten teslimata uzanan süreçte yürüttüğümüz uzun soluklu iş birlikleridir.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-10 mt-12">
            {[
              { value: '30.000+', label: 'Nokta' },
              { value: '60+', label: 'Ülke' },
              { value: '20+', label: 'Yıl Deneyim' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-sora font-bold text-3xl text-white">{s.value}</p>
                <p className="text-xs text-[#E9EEF3]/50 mt-1 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner logos grid */}
      <PartnerLogos logos={logos} />

      {/* CTA */}
      <section className="py-20 bg-[#071B34] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#071B34] via-[#0A2540] to-[#071B34]"
          aria-hidden="true"
        />
        <div className="section-container relative z-10 text-center">
          <h2 className="text-white mb-5 max-w-xl mx-auto">
            Siz de Bu Listeye Katılın
          </h2>
          <p className="text-[#E9EEF3]/65 max-w-lg mx-auto mb-8">
            Mağazanız için en doğru çözümü birlikte belirleyelim. Ekibimiz teklif ve teknik danışmanlık için hazır.
          </p>
          <a
            href="/iletisim?form=teklif"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#11B5FF] hover:bg-[#0A9FE0] text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Teklif Alın
          </a>
        </div>
      </section>
    </>
  );
}
