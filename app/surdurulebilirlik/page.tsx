import type { Metadata } from 'next';
import { DynIcon } from '@/lib/icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

export const metadata: Metadata = {
  title: 'Sürdürülebilirlik — Enerji Verimliliği',
  description:
    'Nokta Dizayn sürdürülebilirlik yaklaşımı: enerji verimli soğutma sistemleri, uzun ömürlü ekipman ve akıllı merkezi kontrol.',
  alternates: { canonical: 'https://noktadizayn.com.tr/surdurulebilirlik' },
};

const topics = [
  {
    icon: 'Zap',
    title: 'Düşük enerji tüketimi',
    description:
      'Enerji verimli kompresörler, EC fan motorları ve LED aydınlatma sistemleriyle toplam enerji tüketimini minimize eden ekipmanlar tasarlıyoruz.',
  },
  {
    icon: 'Settings2',
    title: 'Doğru kapasite seçimi',
    description:
      'Fazla kapasiteli ekipman gereksiz enerji tüketir. Mühendislik hesabıyla belirlenen doğru kapasite hem verimliliği hem de ömrü artırır.',
  },
  {
    icon: 'Snowflake',
    title: 'Soğuk zincir güvenliği',
    description:
      'Güvenilir soğutma performansı, gıda güvenliğini ve ürün kalitesini koruyarak fire kayıplarını azaltır.',
  },
  {
    icon: 'Package',
    title: 'İşletme maliyetlerini azaltma',
    description:
      'Düşük enerji tüketimi ve uzun bakım aralıklarıyla işletmelerin toplam sahip olma maliyeti optimize edilir.',
  },
  {
    icon: 'Timer',
    title: 'Uzun ömürlü ekipman',
    description:
      'Endüstriyel sınıf malzeme ve kapsamlı kalite kontrol süreciyle üretilen ekipmanlar, uzun yıllar güvenilir performans sağlar.',
  },
  {
    icon: 'Network',
    title: 'Merkezi sistem optimizasyonu',
    description:
      'Çok kompresörlü merkezi sistemler ve akıllı kontrol platformlarıyla enerji yönetimi ve bakım verimliliği bir arada sağlanır.',
  },
  {
    icon: 'Wrench',
    title: 'Bakım ile verimliliği koruma',
    description:
      'Periyodik bakım planları, ekipmanın tasarım verimliliğini korur ve beklenmedik arızaları önler.',
  },
  {
    icon: 'RefreshCw',
    title: 'Geleceğe uyumlu sistemler',
    description:
      'Yeni nesil düşük GWP soğutucu akışkanlarına uyumlu ekipman tasarımı ve retrofit seçenekleriyle mevcut sisteminizi geleceğe hazırlayın.',
  },
];

export default function SurdurulebilirlikPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <p className="eyebrow text-[#11B5FF] mb-4">// SÜRDÜRÜLEBİLİRLİK</p>
          <h1 className="text-white">Verimli ve Sorumlu Soğutma</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">
            Nokta Dizayn, enerji verimliliğini yalnızca teknik bir gereklilik değil, iş ortaklarına
            ve çevreye karşı bir sorumluluk olarak benimsiyor.
          </p>
        </div>
        <div className="hero-bottom-glow" aria-hidden="true" />
        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      {/* Manifesto */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-3xl">
          <FadeInOnScroll>
            <p className="text-[#475569] text-lg leading-relaxed">
              Ticari soğutma sistemleri, bir perakende mağazasının toplam enerji tüketiminin
              %40-60&apos;ından sorumludur. Bu tüketimi azaltmak; hem işletme maliyetini düşürür,
              hem de karbon ayak izini minimize eder. Nokta Dizayn olarak her projeyi bu bilinçle
              ele alıyor; doğru ekipman seçimi, mühendislik optimizasyonu ve uzun vadeli servis
              anlayışıyla gerçek tasarruf sağlıyoruz.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* 8 topics */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="section-container">
          <FadeInOnScroll>
            <SectionHeading
              eyebrow="// YAKLAŞIMIMIZ"
              title="Verimlilik Odaklı 8 Alan"
            />
          </FadeInOnScroll>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topics.map((topic, i) => (
              <FadeInOnScroll key={topic.title} delay={i * 50}>
                <div className="p-6 rounded-2xl bg-white border border-[#D9E1EA] h-full">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E9EEF3] text-[#0A6DB8] mb-4">
                    <DynIcon name={topic.icon} size={18} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-semibold text-[#071B34] text-base mb-2">{topic.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{topic.description}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Case study highlight */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <FadeInOnScroll>
            <div className="rounded-2xl bg-gradient-to-br from-[#071B34] to-[#0E2647] p-8 lg:p-12 max-w-3xl">
              <p className="eyebrow text-[#11B5FF] mb-4">// ÖRNEK UYGULAMA</p>
              <h2 className="text-white text-xl font-semibold mb-4">
                Süpermarket Soğutma Yenilemesinde %28 Enerji Tasarrufu
              </h2>
              <p className="text-[#E9EEF3]/70 text-sm leading-relaxed mb-6">
                İstanbul&apos;da 1.200 m² alan üzerinde hizmet veren bir gurme market, eski soğutma
                altyapısını Nokta Dizayn&apos;ın merkezi sistem çözümüyle yeniledi. EC fan motorlu
                kompresör rafı, ısı geri kazanım modülü ve enerji verimli reyonlar sayesinde
                ilk yıl elektrik tüketimi %28 azaldı.
              </p>
              <Button variant="primary" size="sm" href="/referanslar/gurme-market-dikey-reyon">
                Projeyi İncele
              </Button>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E9EEF3]">
        <div className="section-container text-center">
          <h2 className="text-[#071B34] mb-4">Enerji Verimliliği Analizi İsteyin</h2>
          <p className="text-[#475569] max-w-lg mx-auto mb-8">
            Mevcut sisteminizin enerji performansını ölçüyoruz, tasarruf potansiyelini raporluyoruz.
          </p>
          <Button variant="primary" size="lg" href="/iletisim?form=danismanlik">
            Enerji Verimliliği Kontrolü Talep Et
          </Button>
        </div>
      </section>
    </>
  );
}
