import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

export const metadata: Metadata = {
  title: 'Proje & Mühendislik',
  description:
    'İhtiyaç analizinden devreye almaya: uçtan uca proje yönetimi, mühendislik hesabı, üretim, kurulum ve satış sonrası destek.',
  alternates: { canonical: 'https://noktadizayn.com.tr/proje-muhendislik' },
};

const steps = [
  {
    number: '01',
    title: 'İhtiyaç Analizi',
    description:
      'Müşteri ihtiyacı, operasyonel hedefler ve bütçe parametreleri detaylı şekilde analiz edilir. Bu aşamada mağaza formatı, ürün çeşitliliği ve operasyonel koşullar değerlendirilir.',
  },
  {
    number: '02',
    title: 'Keşif Ziyareti',
    description:
      'Mağaza veya tesis yapısı yerinde incelenir. Mekan ölçümleri alınır, elektrik ve tesisat altyapısı değerlendirilir, teknik kısıtlamalar tespit edilir.',
  },
  {
    number: '03',
    title: 'Projelendirme',
    description:
      'Keşif bulgularına dayanarak doğru ürün, kapasite ve sistem mimarisi planlanır. 2D düzen çizimleri hazırlanır, ekipman listesi ve ön maliyet tahmini oluşturulur.',
  },
  {
    number: '04',
    title: 'Mühendislik Planlama',
    description:
      'Soğutma yükü, enerji tüketimi ve elektrik gereksinimleri mühendislik yazılımlarıyla hesaplanır. Sistem simülasyonuyla optimum konfigürasyon belirlenir.',
  },
  {
    number: '05',
    title: 'Üretim',
    description:
      'Onaylanan teknik çizimlere göre kendi 11.000 m² üretim tesisimizde imalat başlar. Her aşamada kalite kontrol testleri uygulanır.',
  },
  {
    number: '06',
    title: 'Kurulum',
    description:
      'Saha kurulum ekibimiz, tüm ekipmanların montajını, boru tesisatı ve elektrik bağlantılarını gerçekleştirir. Paralel iş akışıyla süre optimize edilir.',
  },
  {
    number: '07',
    title: 'Devreye Alma',
    description:
      'Sistem kapsamlı testlerle kontrol edilir, tüm parametreler kalibre edilir ve enerji verimliliği doğrulanır. Müşteri ekibine operasyon eğitimi verilir.',
  },
  {
    number: '08',
    title: 'Satış Sonrası Servis',
    description:
      'Periyodik bakım planı devreye alınır. Yedek parça stoğu güvence altına alınır. 7/24 teknik destek hattı aktif tutulur.',
  },
];

const capabilities = [
  'Soğutma yükü ve enerji hesabı',
  'Merkezi sistem mimarisi tasarımı',
  'CAD çizim ve 3D model',
  'Boru tesisatı ve elektrik projesi',
  'Soğutucu akışkan seçimi ve dönüşümü',
  'Enerji verimliliği simülasyonu',
  'Uzaktan izleme sistemi entegrasyonu',
  'HACCP uyumlu tasarım',
];

export default function ProjeMuhendislikPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <p className="eyebrow text-[#11B5FF] mb-4">// SÜREÇ</p>
          <h1 className="text-white max-w-2xl text-balance">
            Fikirden Devreye Almaya Uçtan Uca Proje Yönetimi
          </h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">
            Her projeyi metodolojik bir süreçle yönetiyor, analiz aşamasından satış sonrası servise
            kadar her adımda yanınızda oluyoruz.
          </p>
        </div>
        <div className="hero-bottom-glow" aria-hidden="true" />
        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      {/* Process steps */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-0">
            {steps.map((step, i) => (
              <FadeInOnScroll key={step.number}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-14 ${
                    i < steps.length - 1 ? 'border-b border-[#D9E1EA]' : ''
                  }`}
                >
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#071B34] font-mono text-sm font-semibold text-[#071B34]">
                        {step.number}
                      </div>
                      <h2 className="text-xl font-semibold text-[#071B34]">{step.title}</h2>
                    </div>
                    <p className="text-[#475569] leading-relaxed">{step.description}</p>
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <Placeholder
                      category={`process-step-${i + 1}`}
                      aspectRatio="4:3"
                      icon="Wrench"
                      label={step.title.toUpperCase()}
                    />
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering capabilities */}
      <section className="py-20 bg-[#E9EEF3]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll>
              <SectionHeading
                eyebrow="// MÜHENDİSLİK KAPASİTESİ"
                title="Mühendislik Ekibimizin Yetkinlikleri"
                subtitle="Mekanik, soğutma ve elektronik mühendisliği disiplinlerini bir araya getiren deneyimli ekibimiz, her ölçekte projeyi hayata geçirir."
              />
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#475569]">{cap}</span>
                  </li>
                ))}
              </ul>
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <Placeholder
                category="engineering-team"
                aspectRatio="4:3"
                icon="Factory"
                label="MÜHENDİSLİK EKİBİ"
              />
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-10" aria-hidden="true" />
        <div className="section-container relative z-10 text-center">
          <h2 className="text-white mb-4">Projenizi Birlikte Planlayalım</h2>
          <p className="text-[#E9EEF3]/65 max-w-lg mx-auto mb-8">
            Ekibimiz ihtiyacınızı analiz eder ve size özel mühendislik çözümü hazırlar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/iletisim?form=danismanlik">
              Proje Danışmanlığı Al
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/iletisim?form=teklif"
              className="border-white/35 text-white hover:bg-white hover:text-[#071B34]"
            >
              Teklif İste
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
