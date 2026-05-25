import type { Metadata } from 'next';
import Image from 'next/image';
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

const galleryImages = [
  { src: '/projeler-muhendislik/10.png', cls: 'col-span-2 row-span-1' },
  { src: '/projeler-muhendislik/11.png', cls: 'col-span-1 row-span-1' },
  { src: '/projeler-muhendislik/12.png', cls: 'col-span-1 row-span-1' },
  { src: '/projeler-muhendislik/13.png', cls: 'col-span-1 row-span-1' },
  { src: '/projeler-muhendislik/14.png', cls: 'col-span-1 row-span-1' },
  { src: '/projeler-muhendislik/16.png', cls: 'col-span-1 row-span-1' },
  { src: '/projeler-muhendislik/17.png', cls: 'col-span-2 row-span-1' },
];

export default function ProjeMuhendislikPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-[#071B34] relative overflow-hidden min-h-[520px] flex items-end">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/projeler-muhendislik/1.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/95 via-[#071B34]/75 to-[#071B34]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/80 via-transparent to-[#071B34]/50" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.06]" aria-hidden="true" />

        <div className="section-container relative z-10 pb-4">
          <FadeInOnScroll>
            <p className="eyebrow text-[#11B5FF] mb-4">PROJE & MÜHENDİSLİK</p>
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
          </FadeInOnScroll>
        </div>
      </section>

      <AnahtarTeslimHero />
      <TekPaydasFark />

      {/* ── 8-Adım Proje Süreci ───────────────────────────── */}
      <section className="py-24 bg-white">
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

      {/* ── Sahadan Kareler ───────────────────────────────── */}
      <section className="py-24 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.04]" aria-hidden="true" />
        <div className="section-container relative z-10">
          <FadeInOnScroll className="mb-12 text-center">
            <p className="eyebrow text-[#11B5FF] mb-3">TAMAMLANAN PROJELERDEN</p>
            <h2 className="text-white">Sahadan Kareler</h2>
            <p className="text-[#E9EEF3]/60 mt-3 max-w-lg mx-auto leading-relaxed">
              Farklı sektör ve ölçeklerde hayata geçirdiğimiz mağaza projelerinden görüntüler.
            </p>
          </FadeInOnScroll>

          <div className="grid grid-cols-3 auto-rows-[220px] gap-3">
            {galleryImages.map((img, i) => (
              <FadeInOnScroll key={img.src} delay={i * 50} className={img.cls}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={`Proje görseli ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <MuhendislikAltyapisi />
      <MuhendislikKapasiteMetrikleri />

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#071B34] relative overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <FadeInOnScroll>
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
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
