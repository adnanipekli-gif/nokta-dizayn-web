import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SectionSlider } from '@/components/ui/SectionSlider';
import type { SliderSlide } from '@/components/ui/SectionSlider';

export const metadata: Metadata = {
  title: 'Mağaza Sistemleri — Sektör Bazlı Çözümler',
  description:
    'Market rafından kasap tezgahına, eczaneden nalbura her sektör için entegre mağaza raf ve reyon sistemleri.',
  alternates: { canonical: 'https://www.noktadizayn.com.tr/magaza-sistemleri' },
};

type Section = {
  number: string;
  title: string;
  description: string;
  slides: SliderSlide[];
};

const sections: Section[] = [
  {
    number: '01',
    title: 'Market Raf Sistemleri',
    description:
      'Süpermarketlerden hipermarketlere, akaryakıt istasyonu marketlerinden kasa önü satış stantlarına kadar her format ve ölçekte perakende market kurulumu için uçtan uca raf ve reyon sistemleri tasarlıyor, üretiyor ve kuruyoruz. Çift taraflı gondol raflar, duvar reyonları, kasa önü stant sistemleri ve özel köşe çözümleriyle mağaza planınızı en verimli şekilde hayata geçiriyoruz. Galvanizli çelik taşıyıcı yapı, ayarlanabilir raf yükseklikleri ve modüler genişleme mantığı sayesinde mağaza büyüdükçe sistem de büyür; mevcut yatırım korunur. Kategori bazlı raf derinliği ve yükleme kapasitesi hesabı (panel başına 150–400 kg) teknik planlama sürecine dahildir.',
    slides: [
      { image: '/magaza-sistemleri/market-raf-sistemleri/1.png', title: 'Hipermarket & Süpermarket', subtitle: 'Geniş ürün yelpazesi için esnek, dayanıklı ve genişleyebilir raf sistemleri.' },
      { image: '/magaza-sistemleri/market-raf-sistemleri/2.png', title: 'Kasa, Banko ve Stantlar', subtitle: 'Müşteri deneyimini güçlendiren kasa önü ve satış noktası çözümleri.' },
      { image: '/magaza-sistemleri/market-raf-sistemleri/3.png', title: 'Akaryakıt İstasyonları', subtitle: 'Sınırlı alanda maksimum verim sağlayan kompakt istasyon market ekipmanları.' },
    ],
  },
  {
    number: '02',
    title: 'Kasap, Balık & Dondurulmuş Gıda',
    description:
      'Kasap tezgahlarından balık reyonlarına, derin donduruculardan hazır gıda vitrinlerine kadar soğuk zinciri hiç kesmeden profesyonel teşhir çözümleri sunuyoruz. Et bölümlerinde +2/+4°C servis sıcaklığı sunan kavisli ya da düz camlı vitrin tezgahlar; balık reyonlarında buzlu teşhir ve tahliye sistemli paslanmaz tezgahlar; dondurulmuş gıda bölümlerinde ise −18°C ve altı çalışma sıcaklığını koruyan remote bağlantılı ya da plug-in derin dondurucu dolaplar temin ediyoruz. Tüm ürünler CE sertifikalı, R290 ve R448A gibi düşük GWP değerli soğutucu akışkanlarla uyumlu şekilde üretilmektedir. Hijyenik şekillendirilmiş köşe profiller ve kolayca sökülebilir raf sistemleri temizlik sürelerini minimize eder.',
    slides: [
      { image: '/magaza-sistemleri/kasap-balik-dondurulmus-gida/1.png', title: 'Kasap Reyonları', subtitle: 'Hijyenik ve estetik et teşhiri için profesyonel tezgah ve vitrin çözümleri.' },
      { image: '/magaza-sistemleri/kasap-balik-dondurulmus-gida/2.png', title: 'Dondurulmuş Gıda Dolapları', subtitle: 'Yüksek kapasiteli soğutma sistemleriyle dondurulmuş ürün teşhirinde güvenli çözüm.' },
      { image: '/magaza-sistemleri/kasap-balik-dondurulmus-gida/3.png' },
    ],
  },
  {
    number: '03',
    title: 'Fast Food',
    description:
      'Yüksek müşteri trafiğine sahip fast food zincirlerinin servis hızını ve standart tutarlılığını destekleyen paslanmaz çelik tezgah sistemleri, sıcak tutma vitrinleri ve soğutmalı sunum dolapları üretiyoruz. Gömülü ısıtma elemanları ve sıcak-soğuk servis bölmeleri aynı tezgah hattında entegre edilebilir. Franchise zincirleri için sabit ölçü ve renk standardlarına uygun seri üretim kapasitemiz, hızlı proje teslim takvimlerini mümkün kılar. Kurumsal kimliğe uygun özel renk ve yüzey kaplama seçenekleriyle mağaza tasarımı standartlarınıza tam uyum sağlanır.',
    slides: [
      { image: '/magaza-sistemleri/fast-food/1.png', title: 'Fast Food Zincirleri', subtitle: 'Yüksek hızlı servis için ergonomik tezgah sistemleri ve fonksiyonel servis ekipmanları.' },
      { image: '/magaza-sistemleri/fast-food/2.png', title: 'Servis Tezgahları & Vitrinler', subtitle: 'Sıcak-soğuk sunum vitrinleri ve paslanmaz çelik tezgah hatları tek projede entegre edilir.' },
      { image: '/magaza-sistemleri/fast-food/3.png' },
    ],
  },
  {
    number: '04',
    title: 'Coffee Shops',
    description:
      'Kafe ve coffee shop işletmeleri için barista tezgah ergonomisi, under-counter soğutucu entegrasyonu ve marka renk uygulamalarını tek projede birleştiriyoruz. Espresso tezgahlarından vitrin dolaplarına, ikram tepsisi raflarından müşteri oturma alanı donanımlarına kadar kapsamlı ekipman çözümleri sunuyoruz. Özelleştirilebilir yüzey kaplamaları ve modüler yapı sayesinde her kafe kimliğine uygun tasarım hayata geçirilir; zincir konsepti için seri üretim desteği de sağlanır.',
    slides: [
      { image: '/magaza-sistemleri/coffe-shops/1.jpg', title: 'Kafe Tezgah Sistemleri', subtitle: 'Barista iş akışını optimize eden ergonomik tezgah ve under-counter ekipman çözümleri.' },
      { image: '/magaza-sistemleri/coffe-shops/2.jpg', title: 'Kafe Zincirleri', subtitle: 'Marka kimliğine uygun özelleştirilebilir yüzey ve renk seçenekleriyle seri üretim desteği.' },
      { image: '/magaza-sistemleri/coffe-shops/3.jpg' },
    ],
  },
  {
    number: '05',
    title: 'Manav Reyon Sistemleri',
    description:
      'Taze sebze ve meyvenin görsel çekiciliğini ön plana taşıyan eğimli raf yapıları, renk kontrast reyon düzenlemeleri ve hava sirkülasyonunu destekleyen açık raf sistemleri tasarlıyoruz. Ürünlerin müşteriye en çekici şekilde sunulması için raf eğim açısı ve derinliği her bölüm için ayrı ayrı planlanır. Doğal ahşap dokular, paslanmaz çelik yüzeyler ve zengin renk paletleriyle taze alan estetiği mağazanıza taşınır. Yerçekimi akışlı raf sistemleri sayesinde ürünler her zaman öne doğru konumlanır; doluluk algısı ve ürün erişim kolaylığı artar.',
    slides: [
      { image: '/magaza-sistemleri/manav-reyonu/1.png', title: 'Manav Reyonları', subtitle: 'Taze meyve ve sebzenin en görünür şekilde sunulması için özel eğimli raf sistemleri.' },
      { image: '/magaza-sistemleri/manav-reyonu/2.png', title: 'Taze Alan Düzenlemesi', subtitle: 'Renk kontrast ve açık raf yapısıyla müşteri ilgisini çeken taze ürün teşhiri.' },
      { image: '/magaza-sistemleri/manav-reyonu/3.png' },
    ],
  },
  {
    number: '06',
    title: 'Fırın Reyon Sistemleri',
    description:
      'Ekmek, pasta, simit ve unlu mamullerin en iyi şekilde sunulmasını sağlayan tel raflı ekmek standları, ısı korumalı pasta vitrinleri ve ahşap görünümlü MDF kaplama seçenekleriyle sıcak alan atmosferi yaratıyoruz. Fırın reyonlarında ürün tipi ve satış hızına göre raf derinliği, raf aralığı ve havalandırma açısı optimize edilir. Buhar ve nem yüküne dayanıklı epoksi kaplama veya paslanmaz çelik seçenekleriyle uzun ömürlü kullanım garantilenir. Pastane, market fırın reyonu ve bağımsız fırın formatları için farklı modüler konfigürasyonlar mevcuttur.',
    slides: [
      { image: '/magaza-sistemleri/firin-reyon-sistemleri/1.png', title: 'Ekmek & Unlu Mamul Rafları', subtitle: 'Ürün tipine göre optimize edilmiş raf derinliği ve havalandırma açısıyla taze sunum.' },
      { image: '/magaza-sistemleri/firin-reyon-sistemleri/2.png', title: 'Pasta & Börek Vitrinleri', subtitle: 'Isı korumalı cam vitrinlerle pastane ürünlerinin görsel ve hijyenik teşhiri.' },
      { image: '/magaza-sistemleri/firin-reyon-sistemleri/3.png' },
    ],
  },
];

export default function MagazaSistemleriPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/projeler-muhendislik/17.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/95 via-[#071B34]/75 to-[#071B34]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/70 via-transparent to-[#071B34]/50" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />
        <div className="section-container relative z-10 pb-4">
          <p className="eyebrow text-[#11B5FF] mb-4">MAĞAZA SİSTEMLERİ</p>
          <h1 className="text-white max-w-2xl text-balance">
            Her Sektöre Özel Entegre Mağaza Çözümleri
          </h1>
          <p className="text-[#E9EEF3]/70 mt-5 max-w-xl text-lg">
            Marketten eczaneye, nalburdan kafeye — ihtiyaca özel raf, reyon ve ekipman sistemleri.
          </p>
        </div>
      </section>

      {/* ── Sections ─────────────────────────────────────── */}
      <div className="divide-y divide-[#E9EEF3]">
        {sections.map((section, i) => (
          <section key={section.number} id={`bolum-${section.number}`} className={i % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-[#F7F9FC]'}>
            <div className="section-container">
              <FadeInOnScroll>
                <div className="flex items-start gap-5 mb-8">
                  <span className="font-mono text-[0.65rem] font-bold text-[#11B5FF] tracking-[0.2em] mt-1.5 shrink-0">
                    {section.number}
                  </span>
                  <div>
                    <h2 className="text-[#071B34] text-2xl lg:text-3xl font-sora font-bold mb-3">
                      {section.title}
                    </h2>
                    <p className="text-[#475569] leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={80}>
                <SectionSlider slides={section.slides} />
              </FadeInOnScroll>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#E9EEF3]">
        <div className="section-container text-center">
          <h2 className="text-[#071B34] mb-4">Hangi Çözüm Sizin İçin Uygun?</h2>
          <p className="text-[#475569] max-w-lg mx-auto mb-8">
            Mühendislik ekibimiz mağazanızın ihtiyacını analiz eder ve size özel çözüm planı hazırlar.
          </p>
          <Button variant="primary" size="lg" href="/iletisim?form=teklif">
            Ücretsiz Analiz Talep Edin
          </Button>
        </div>
      </section>
    </>
  );
}
