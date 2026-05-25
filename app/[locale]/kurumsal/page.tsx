import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { STATS } from '@/lib/data/stats';

export const metadata: Metadata = {
  title: 'Kurumsal — Hakkımızda',
  description:
    "2003'ten bu yana entegre mağaza sistemleri alanında mühendislik, üretim ve satış sonrası hizmet ile faaliyet gösteren Nokta Dizayn hakkında.",
  alternates: { canonical: 'https://www.noktadizayn.com.tr/kurumsal' },
};

const values = [
  { title: 'Mühendislik odaklı yaklaşım', description: 'Her proje, teknik hesap ve sistem analiziyle başlar.' },
  { title: 'Bütünleşik çözüm', description: 'Soğutmadan rafa, kasadan mobilyaya tek elden mağaza kurulumu.' },
  { title: 'Satış sonrası sorumluluk', description: 'Garanti, bakım ve servis desteğiyle uzun vadeli ilişki.' },
  { title: 'Global deneyim', description: '60+ ülkeye ihracat ile farklı iklim ve pazar koşullarında kanıtlanmış performans.' },
];

const capabilities = [
  '11.000 m² üretim kapasitesi',
  '250+ deneyimli çalışan',
  'Türkiye geneli saha kurulum ekipleri',
  'Uluslararası proje yönetimi',
  'ISO 9001:2015 kalite yönetim sistemi',
  'Zertifikalı soğutma mühendisleri',
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
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/projeler-muhendislik/11.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/95 via-[#071B34]/75 to-[#071B34]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/70 via-transparent to-[#071B34]/50" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />
        <div className="section-container relative z-10 pb-4">
          <h1 className="text-white">2003&apos;ten Bu Yana Entegre Mağaza Sistemleri</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">
            Nokta Dizayn; soğutma ekipmanları, raf ve reyon sistemleri, kasa üniteleri ve mağaza
            mobilyalarıyla perakende mağazanızı baştan sona tasarlar ve donatır.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeInOnScroll>
              <div>
                <SectionHeading
                  eyebrow="ŞİRKET HAKKINDA"
                  title="Store Makers — 2003'ten Bu Yana"
                  subtitle="Nokta Dizayn, 2003 yılında İstanbul'da kurulmuş, bugün Türkiye'nin önde gelen entegre mağaza sistemleri şirketidir."
                />
                <p className="text-[#475569] mt-5 leading-relaxed">
                  20 yılı aşkın deneyimimizle süpermarketlerden mini marketlere, kasap bölümlerinden gurme
                  markelere, petrol istasyonu marketlerinden franchise zincirlerine kadar her formatta mağaza
                  kuruyor ve donatıyoruz. 11.000 m² üretim tesisimiz, 250+ çalışanımız ve ülke genelindeki
                  servis ağımızla Türkiye&apos;nin en güçlü mağaza çözümleri şirketiyiz.
                </p>
                <div className="mt-8 space-y-3">
                  {values.map((v) => (
                    <div key={v.title} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-[#071B34] text-sm">{v.title}</span>
                        <span className="text-[#475569] text-sm"> — {v.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={100}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/projeler-muhendislik/17.png" alt="Nokta Dizayn mağaza projesi" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#071B34]">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center px-6 py-8 bg-[#071B34]">
                <p className="eyebrow text-[#11B5FF] mb-3">{stat.eyebrow}</p>
                <p className="font-sora font-bold text-white leading-none mb-2 text-4xl">{stat.value}</p>
                <p className="text-sm text-[#E9EEF3]/65 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F9FC]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeInOnScroll>
              <SectionHeading
                eyebrow="ÜRETİM GÜCÜ"
                title="11.000 m² Üretim Tesisi"
                subtitle="Kendi tesisimizde üretim yapıyoruz — bu da kalite, hız ve fiyat kontrolünü beraberinde getirir."
              />
              <div className="mt-8 space-y-3">
                {capabilities.map((c) => (
                  <div key={c} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#0A6DB8] shrink-0" />
                    <span className="text-sm text-[#475569]">{c}</span>
                  </div>
                ))}
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/nokta-dizayn-sirket.png" alt="11.000 m² üretim tesisi" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <FadeInOnScroll>
            <SectionHeading
              eyebrow="KÜRESEL ERİŞİM"
              title="60+ Ülkede Aktif"
              subtitle="Türkiye'den başlayarak global pazarlara uzanan ihracat ağımız."
            />
          </FadeInOnScroll>
          <div className="mt-10 flex flex-wrap gap-2">
            {globalRegions.map((region) => (
              <span
                key={region}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F9FC] border border-[#D9E1EA] text-sm text-[#475569]"
              >
                <MapPin size={12} className="text-[#11B5FF]" />
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E9EEF3]">
        <div className="section-container text-center">
          <h2 className="text-[#071B34] mb-4">Bir Sonraki Projeniz İçin Buradayız</h2>
          <p className="text-[#475569] max-w-lg mx-auto mb-8">
            Mağaza projeniz için teklif alın veya ekibimizle tanışın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/iletisim?form=teklif">
              Teklif Al
            </Button>
            <Button variant="secondary" size="lg" href="/iletisim">
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
