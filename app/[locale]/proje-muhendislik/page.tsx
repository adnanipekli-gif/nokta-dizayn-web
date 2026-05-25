import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { AnahtarTeslimHero } from '@/components/sections/AnahtarTeslimHero';
import { TekPaydasFark } from '@/components/sections/TekPaydasFark';
import { MuhendislikAltyapisi } from '@/components/sections/MuhendislikAltyapisi';
import { MuhendislikKapasiteMetrikleri } from '@/components/sections/MuhendislikKapasiteMetrikleri';

export const metadata: Metadata = {
  title: 'Proje & Mühendislik',
  description:
    'İhtiyaç analizinden devreye almaya: uçtan uca entegre mağaza projesi yönetimi, mühendislik hesabı, üretim, kurulum ve satış sonrası destek.',
  alternates: { canonical: 'https://www.noktadizayn.com.tr/proje-muhendislik' },
};

const steps = [
  {
    number: '01',
    title: 'İhtiyaç Analizi',
    description:
      'Müşteri ihtiyacı, operasyonel hedefler ve bütçe parametreleri detaylı şekilde analiz edilir. Mağaza formatı, ürün çeşitliliği ve operasyonel koşullar değerlendirilir.',
  },
  {
    number: '02',
    title: 'Keşif Ziyareti',
    description:
      'Mağaza veya tesis yapısı yerinde incelenir. Mekan ölçümleri alınır, altyapı değerlendirilir, teknik kısıtlamalar tespit edilir.',
  },
  {
    number: '03',
    title: 'Konsept & Projelendirme',
    description:
      'Keşif bulgularına dayanarak doğru ürün, kapasite ve sistem mimarisi planlanır. 2D/3D düzen çizimleri hazırlanır, ekipman listesi ve ön maliyet tahmini oluşturulur.',
  },
  {
    number: '04',
    title: 'Mühendislik Planlama',
    description:
      'Soğutma yükü, enerji tüketimi ve sistem gereksinimleri mühendislik yazılımlarıyla hesaplanır. Optimum konfigürasyon belirlenir.',
  },
  {
    number: '05',
    title: 'Üretim',
    description:
      'Onaylanan teknik çizimlere göre kendi 11.000 m² üretim tesisimizde imalat başlar. Her aşamada kalite kontrol testleri uygulanır.',
  },
  {
    number: '06',
    title: 'Lojistik',
    description:
      'Üretilen tüm ekipmanlar, zamanında ve güvenli ulaşım için özel ambalajlanır, depolanır ve sevk planlanır.',
  },
  {
    number: '07',
    title: 'Saha Kurulumu',
    description:
      'Deneyimli kurulum ekibimiz, tüm ekipmanların montajını, boru tesisatı ve elektrik bağlantılarını gerçekleştirir.',
  },
  {
    number: '08',
    title: 'Devreye Alma & Eğitim',
    description:
      'Sistem testleri yapılır, performans doğrulanır. Müşteri personeli ekipman kullanımı ve bakım konusunda eğitilir.',
  },
];

export default function ProjeMuhendislikPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <h1 className="text-white max-w-2xl">Konseptten Uygulamaya Tam Süreç Yönetimi</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">
            İhtiyaç analizinden devreye almaya, 8 adımda eksiksiz mağaza projesi teslimi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button variant="primary" size="md" href="/iletisim?form=teklif">
              Projenizi Başlatın
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="/iletisim?form=danismanlik"
              className="border-white/35 text-white hover:bg-white hover:text-[#071B34]"
            >
              Mühendislik Danışmanlığı
            </Button>
          </div>
        </div>
      </section>

      <AnahtarTeslimHero />
      <TekPaydasFark />

      <section className="py-20">
        <div className="section-container">
          <FadeInOnScroll>
            <SectionHeading
              eyebrow="PROJE SÜRECİ"
              title="8 Adımda Eksiksiz Mağaza Projesi"
              subtitle="Her proje, aynı titiz süreçten geçer — tasarımdan teslime, planlamadan eğitime."
            />
          </FadeInOnScroll>

          <div className="mt-14 relative">
            <div className="hidden lg:block absolute top-6 left-[3.25rem] right-[3.25rem] h-px border-t border-dashed border-[#D9E1EA]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <FadeInOnScroll key={step.number} delay={i * 60}>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl border-2 border-[#D9E1EA] bg-white flex items-center justify-center mb-4 relative z-10">
                      <span className="font-mono text-xs font-bold text-[#0A6DB8]">{step.number}</span>
                    </div>
                    <h3 className="font-sora font-semibold text-[#071B34] text-base mb-2">{step.title}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">{step.description}</p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MuhendislikAltyapisi />
      <MuhendislikKapasiteMetrikleri />

      <section className="py-16 bg-[#071B34]">
        <div className="section-container text-center">
          <h2 className="text-white mb-4">Projenizi Başlatalım</h2>
          <p className="text-[#E9EEF3]/65 max-w-lg mx-auto mb-8">
            Mağaza projenizin boyutu ne olursa olsun, mühendislik ekibimiz sizin için en uygun çözümü planlar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/iletisim?form=teklif">
              Teklif Al
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/iletisim?form=danismanlik"
              className="border-white/35 text-white hover:bg-white hover:text-[#071B34]"
            >
              Danışmanlık Talep Et
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
