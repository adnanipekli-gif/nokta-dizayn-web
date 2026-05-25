import Link from 'next/link';
import { X, Check, ArrowRight } from 'lucide-react';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const traditional = [
  'Birden fazla sözleşme ve muhatap',
  'Koordinasyon yükü müşterede',
  'Takvim kaymaları için sorumluluk belirsizliği',
  'Farklı disiplinler arasında teknik uyumsuzluk riski',
  'Bakım için ayrı servis anlaşmaları gerekliliği',
  'İletişim kopuklukları ve bilgi kaybı',
];

const noktaDizayn = [
  'Tek sözleşme, tek sorumluluk',
  'Koordinasyon yükü Nokta Dizayn\'da',
  'Net takvim taahhüdü, tek ekip sahipliği',
  'Tüm disiplinler tek mühendislik diliyle entegre',
  'Satış sonrası servis aynı çatıdan, aynı ekipten',
  'Proje başından sonuna kesintisiz teknik hafıza',
];

export function TekPaydasFark() {
  return (
    <section
      className="py-24 bg-[#E9EEF3]"
      aria-label="Tek paydaş modeli karşılaştırması"
    >
      <div className="section-container">
        <FadeInOnScroll className="text-center mb-14">
          <p className="eyebrow text-[#8D99A8] mb-4">NEDEN TEK PROJE ORTAĞI?</p>
          <h2 className="text-[#071B34] mb-4">Çoklu Tedarikçi mi, Tek Paydaş mı?</h2>
          <p className="text-[#475569] max-w-xl mx-auto leading-relaxed">
            Mağaza projesinin her aşamasında kimin sorumlu olduğu, teslim takvimini ve toplam
            maliyeti doğrudan belirler.
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Geleneksel — pasif */}
          <FadeInOnScroll delay={0}>
            <div className="h-full bg-[#F7F9FC] border border-[#D9E1EA] rounded-2xl p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="font-sora font-bold text-xl text-[#071B34] mb-1">
                  Çoklu Tedarikçi Modeli
                </h3>
                <span className="text-xs text-[#8D99A8] font-medium">Geleneksel Yaklaşım</span>
              </div>
              <ul className="space-y-3 flex-1">
                {traditional.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X size={15} className="text-[#8D99A8] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#475569] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>

          {/* Nokta Dizayn — aktif */}
          <FadeInOnScroll delay={80}>
            <div className="h-full bg-[#071B34] border-t-2 border-t-[#11B5FF] rounded-2xl p-8 flex flex-col shadow-[0_4px_32px_rgba(7,27,52,0.18)]">
              <div className="mb-6">
                <h3 className="font-sora font-bold text-xl text-white mb-1">
                  Anahtar Teslim Model
                </h3>
                <span className="text-xs text-[#11B5FF] font-medium">Nokta Dizayn Yaklaşımı</span>
              </div>
              <ul className="space-y-3 flex-1">
                {noktaDizayn.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={15} className="text-[#11B5FF] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#E9EEF3]/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <Link
                  href="/iletisim?form=danismanlik"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A6DB8] text-white text-sm font-medium hover:bg-[#0858A0] transition-colors duration-200"
                >
                  Projenizi Birlikte Değerlendirelim
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
