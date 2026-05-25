import type { Metadata } from 'next';
import Image from 'next/image';
import { DynIcon } from '@/lib/icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

export const metadata: Metadata = {
  title: 'Sürdürülebilirlik — Enerji Verimliliği',
  description:
    'Nokta Dizayn sürdürülebilirlik yaklaşımı: enerji verimli soğutma sistemleri, uzun ömürlü ekipman ve akıllı sistem optimizasyonu.',
  alternates: { canonical: 'https://www.noktadizayn.com.tr/surdurulebilirlik' },
};

const topics = [
  {
    icon: 'Zap',
    title: 'Düşük enerji tüketimi',
    description: 'Enerji verimli kompresörler, EC fan motorları ve LED aydınlatma sistemleriyle toplam enerji tüketimini minimize eden ekipmanlar tasarlıyoruz.',
  },
  {
    icon: 'Settings2',
    title: 'Doğru kapasite seçimi',
    description: 'Fazla kapasiteli ekipman gereksiz enerji tüketir. Mühendislik hesabıyla belirlenen doğru kapasite hem verimliliği hem de ömrü artırır.',
  },
  {
    icon: 'Snowflake',
    title: 'Soğuk zincir güvenliği',
    description: 'Güvenilir soğutma performansı, gıda güvenliğini ve ürün kalitesini koruyarak fire kayıplarını azaltır.',
  },
  {
    icon: 'Package',
    title: 'İşletme maliyetlerini azaltma',
    description: 'Düşük enerji tüketimi ve uzun bakım aralıklarıyla işletmelerin toplam sahip olma maliyeti optimize edilir.',
  },
  {
    icon: 'Timer',
    title: 'Uzun ömürlü ekipman',
    description: 'Endüstriyel sınıf malzeme ve kapsamlı kalite kontrol süreciyle üretilen ekipmanlar, uzun yıllar güvenilir performans sağlar.',
  },
  {
    icon: 'Network',
    title: 'Sistem optimizasyonu',
    description: 'Akıllı kontrol platformlarıyla enerji yönetimi ve bakım verimliliği bir arada sağlanır.',
  },
  {
    icon: 'Wrench',
    title: 'Bakım ile verimliliği koruma',
    description: 'Periyodik bakım planları, ekipmanın tasarım verimliliğini korur ve beklenmedik arızaları önler.',
  },
  {
    icon: 'RefreshCw',
    title: 'Geleceğe uyumlu sistemler',
    description: 'Yeni nesil düşük GWP soğutucu akışkanlarına uyumlu ekipman tasarımı ve retrofit seçenekleriyle mevcut sisteminizi geleceğe hazırlayın.',
  },
];

export default function SurdurulebilirlikPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/projeler-muhendislik/13.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/95 via-[#071B34]/75 to-[#071B34]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/70 via-transparent to-[#071B34]/50" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />
        <div className="section-container relative z-10 pb-4">
          <h1 className="text-white">Verimli ve Sorumlu Mağaza Sistemleri</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">
            Nokta Dizayn, enerji verimliliğini yalnızca teknik bir gereklilik değil, iş ortaklarına ve çevreye karşı bir sorumluluk olarak benimsiyor.
          </p>
        </div>
      </section>

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

      <section className="py-16 bg-[#F7F9FC]">
        <div className="section-container">
          <FadeInOnScroll>
            <SectionHeading eyebrow="YAKLAŞIMIMIZ" title="Verimlilik Odaklı 8 Alan" />
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

      <section className="py-16 bg-white">
        <div className="section-container">
          <FadeInOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#071B34] to-[#0E2647] p-8 lg:p-12 flex flex-col justify-center">
                <p className="eyebrow text-[#11B5FF] mb-4">VAKA ÇALIŞMASI</p>
                <h2 className="text-white text-xl font-semibold mb-4">
                  Gurme Market Yenileme Projesinde %28 Enerji Tasarrufu
                </h2>
                <p className="text-[#E9EEF3]/70 text-sm leading-relaxed mb-6">
                  İstanbul&apos;da 1.200 m² gurme market, eski soğutma altyapısını yeni nesil
                  enerji verimli ekipmanlarla yeniledi. EC fan motorlu kompresör sistemi ve
                  enerji verimli reyonlar sayesinde ilk yıl elektrik tüketimi %28 azaldı.
                </p>
                <Button variant="primary" size="sm" href="/iletisim?form=danismanlik">
                  Enerji Analizi Talep Et
                </Button>
              </div>
              <div className="relative min-h-[280px]">
                <Image src="/projeler-muhendislik/16.png" alt="Enerji verimli mağaza projesi" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

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
