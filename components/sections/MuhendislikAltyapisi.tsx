import Image from 'next/image';
import { Thermometer, Cog, Zap, LayoutDashboard, ClipboardList, BadgeCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const disciplines = [
  {
    icon: Thermometer,
    title: 'Soğutma Mühendisliği',
    text: 'Soğutma yükü hesabı, ürün bazlı sıcaklık yönetimi ve enerji performansı analizi şirket bünyesindeki soğutma mühendisleri tarafından yürütülür. Her proje, gerçek kullanım koşullarına göre modellenir; standart katsayılara değil, sahaya özgü verilere dayanır.',
  },
  {
    icon: Cog,
    title: 'Mekanik ve Yapısal Mühendislik',
    text: 'Ekipman montajı, yapısal taşıyıcı çözümler ve mağaza içi teknik altyapı, mekanik mühendislik disipliniyle projelendirilir. Taşıma kapasitesi, titreşim ve yük dağılımı başlangıçta hesaplanır.',
  },
  {
    icon: Zap,
    title: 'Elektrik ve Enerji Mühendisliği',
    text: 'Panel, kablo güzergahı, yük hesabı ve enerji izleme sistemi aynı proje kapsamında elektrik mühendisliği altyapısıyla tasarlanır. Enerji verimliliği raporlaması proje teslim dokümanlarına dahildir.',
  },
  {
    icon: LayoutDashboard,
    title: 'Mağaza Mimarisi ve İç Mekan Planlama',
    text: 'Müşteri akışı, reyon yerleşimi, görsel sunum ve mağaza kimliği; soğutmalı teşhir sistemleri ve mağaza ekipmanlarıyla birlikte tek çizim setinde birleştirilir. Tasarım ve mühendislik aynı anda ilerlediği için revizyonlar minimum maliyetle çözülür.',
  },
  {
    icon: ClipboardList,
    title: 'Proje Yönetimi',
    text: 'Her proje, atanmış bir proje yöneticisi tarafından başlangıçtan teslimata yönetilir. Müşteri için tek temas noktası, sahada tek koordinatör. Proje durumu, takvim ve açık kalemlerin şeffaf raporlanması standart sürecin parçasıdır.',
  },
  {
    icon: BadgeCheck,
    title: 'Kalite Kontrol ve Devreye Alma',
    text: 'Üretim hattından sahaya her aşamada kalite kontrol protokolleri uygulanır. Saha kurulumunun ardından sistematik devreye alma testi yapılır; müşteriye teslim belgesi ve operasyon eğitimi sağlanır.',
  },
];

export function MuhendislikAltyapisi() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-label="Mühendislik altyapısı ve disiplinler"
    >
      {/* Background image */}
      <Image
        src="/dolap-üretim-5.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#D9E1EA]/80" aria-hidden="true" />

      <div className="section-container relative z-10">
        <FadeInOnScroll className="mb-14">
          <SectionHeading
            eyebrow="MÜHENDİSLİK ALTYAPISI"
            title="Tek Çatı Altında Çok Disiplinli Mühendislik"
            subtitle="Nokta Dizayn'ın proje yönetimi, dış kaynaklara değil; şirket bünyesindeki mühendislik ekiplerine dayanır. Bu yapı, projenin her aşamasında teknik kararların aynı masa etrafında, gerçek zamanlı alınmasını sağlar."
          />
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((d, i) => {
            const Icon = d.icon;
            return (
              <FadeInOnScroll key={d.title} delay={i * 60}>
                <div className="group bg-white border border-[#D9E1EA] rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(7,27,52,0.06),0_16px_40px_rgba(10,109,184,0.12)] hover:border-t-[#11B5FF] transition-all duration-300"
                  style={{ borderTopWidth: '1px' }}
                >
                  <span className="w-12 h-12 rounded-xl bg-[#071B34] flex items-center justify-center shrink-0 group-hover:bg-[#0A6DB8] transition-colors duration-300">
                    <Icon size={20} className="text-[#11B5FF]" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="font-sora font-semibold text-[#071B34] mb-2">{d.title}</h4>
                    <p className="text-sm text-[#475569] leading-relaxed">{d.text}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            );
          })}
        </div>


      </div>
    </section>
  );
}
