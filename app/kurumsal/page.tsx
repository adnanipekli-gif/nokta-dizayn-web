import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, MapPin } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { STATS } from '@/lib/data/stats';

export const metadata: Metadata = {
  title: 'Kurumsal — Hakkımızda',
  description:
    "2003'ten bu yana soğutma sektöründe mühendislik, üretim ve satış sonrası hizmet alanında faaliyet gösteren Nokta Dizayn hakkında.",
  alternates: { canonical: 'https://noktadizayn.com.tr/kurumsal' },
};

const values = [
  { title: 'Mühendislik odaklı yaklaşım', description: 'Her proje, teknik hesap ve sistem analiziyle başlar.' },
  { title: 'Proje bazlı üretim', description: 'Müşteriye özel çözümler için yerinde üretim kapasitesi.' },
  { title: 'Satış sonrası sorumluluk', description: 'Garanti, bakım ve servis desteğiyle uzun vadeli ilişki.' },
  { title: 'Global deneyim', description: '60+ ülkeye ihracat ile farklı iklim ve pazar koşullarında kanıtlanmış performans.' },
];

const globalRegions = [
  'Türkiye', 'Almanya', 'Fransa', 'BAE', 'Suudi Arabistan', 'Irak',
  'Azerbaycan', 'Gürcistan', 'Kazakistan', 'Ukrayna', 'İngiltere', 'İtalya',
  'İspanya', 'Polonya', 'Romanya', 'Mısır', 'Libya', 'Tunus',
  'Nijerya', 'Gana', 'Kenya', 'Pakistan', 'Bangladeş', 've 40+ ülke daha',
];

export default function KurumsalPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <p className="eyebrow text-[#11B5FF] mb-4">// HAKKIMIZDA</p>
          <h1 className="text-white">2003&apos;ten Bu Yana Soğutma Mühendisliği</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">
            Nokta Dizayn; ticari soğutma, market ekipmanları ve endüstriyel soğutma alanında
            mühendislik, üretim ve satış sonrası servis gücüyle faaliyet gösteren kurumsal bir
            çözüm ortağıdır.
          </p>
        </div>
        <div className="hero-bottom-glow" aria-hidden="true" />
        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      {/* About */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll>
              <SectionHeading
                eyebrow="// ŞİRKET"
                title="Kimiz?"
              />
              <div className="mt-6 space-y-4 text-[#475569] leading-relaxed">
                <p>
                  Nokta Dizayn, 2003 yılında kurulmuş; ticari soğutma ekipmanları, market
                  perakende sistemleri ve endüstriyel soğutma alanında mühendislik, üretim,
                  kurulum ve satış sonrası servis hizmeti veren kurumsal bir şirkettir.
                </p>
                <p>
                  11.000 m² kapalı üretim ve hizmet altyapısıyla Türkiye&apos;nin güçlü üretim
                  kapasitesini, 60+ ülkeye ulaşan ihracat deneyimiyle global bir bakış açısını
                  bir araya getiriyoruz.
                </p>
                <p>
                  Her projede tasarımdan devreye almaya, satış sonrası servise kadar tam süreç
                  sorumluluğu üstleniyoruz. Müşterilerimize yalnızca ekipman değil; çözüm,
                  güvence ve uzun vadeli ortaklık sunuyoruz.
                </p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <Placeholder category="company" aspectRatio="4:3" icon="Building2" label="NOKTA DİZAYN" />
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#071B34]">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-sora font-bold text-white text-3xl lg:text-4xl">{stat.value}</p>
                <p className="text-sm text-[#E9EEF3]/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="section-container">
          <FadeInOnScroll>
            <SectionHeading
              eyebrow="// DEĞERLERİMİZ"
              title="Çalışma Anlayışımız"
            />
          </FadeInOnScroll>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeInOnScroll key={v.title} delay={i * 60}>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#D9E1EA]">
                  <CheckCircle2 size={20} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#071B34]">{v.title}</p>
                    <p className="text-sm text-[#475569] mt-1">{v.description}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Production power */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInOnScroll>
              <Placeholder category="production" aspectRatio="4:3" icon="Factory" label="ÜRETİM TESİSİ" />
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <SectionHeading
                eyebrow="// ÜRETİM GÜCÜ"
                title="11.000 m² Kapalı Üretim Altyapısı"
              />
              <p className="mt-5 text-[#475569] leading-relaxed">
                Tüm üretim süreçlerini kendi tesisimizde yönetiyoruz. Mühendislik ve Ar-Ge,
                üretim, kalite kontrol, depo ve teknik servis; tek bir çatı altında entegre
                çalışıyor. Bu yapı, teslimat sürelerini kısaltmamıza, kalite kontrolünü
                güçlendirmemize ve müşteriye özel üretim yapabilmemize olanak tanıyor.
              </p>
              <div className="mt-6">
                <Link href="/surdurulebilirlik" className="text-sm text-[#0A6DB8] hover:underline">
                  Sürdürülebilirlik yaklaşımımız →
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Global reach */}
      <section className="py-20 bg-[#E9EEF3]">
        <div className="section-container">
          <FadeInOnScroll>
            <SectionHeading
              eyebrow="// GLOBAL PAZARLAR"
              title="60+ Ülkede Çözüm Ortağı"
              subtitle="Türkiye&apos;den ürettiğimiz çözümleri dünyanın dört bir yanına taşıyoruz."
              align="center"
            />
          </FadeInOnScroll>
          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {globalRegions.map((region) => (
              <span key={region} className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white border border-[#D9E1EA] rounded-full text-[#475569]">
                <MapPin size={12} className="text-[#0A6DB8]" />
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="text-[#071B34] mb-4">Çözüm Ortağınız Olmak İsteriz</h2>
          <p className="text-[#475569] max-w-lg mx-auto mb-8">
            Projeleriniz için mühendislik desteği, ürün danışmanlığı veya servis hizmetleri için
            bizimle iletişime geçin.
          </p>
          <Button variant="primary" size="lg" href="/iletisim">
            İletişime Geçin
          </Button>
        </div>
      </section>
    </>
  );
}
