import { Building2, Users, CheckSquare, Globe } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';

const items = [
  {
    icon: Building2,
    title: '11.000 m² kapalı alan',
    description: 'Mühendislik, üretim, depo ve teknik servis tek çatı altında.',
  },
  {
    icon: Users,
    title: 'Mühendislik ekibi',
    description: 'Mekanik, soğutma ve elektronik mühendisliği bir arada.',
  },
  {
    icon: CheckSquare,
    title: 'Kalite kontrol süreci',
    description: 'Üretim hattının her aşamasında test ve doğrulama.',
  },
  {
    icon: Globe,
    title: 'Global ihracat',
    description: '60+ ülkeye ihracat ve lojistik altyapısı.',
  },
];

export function ProductionPowerBlock() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#F7F9FC]"
      aria-labelledby="production-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left visual */}
          <FadeInOnScroll>
            <Placeholder
              category="production-facility"
              aspectRatio="4:3"
              icon="Factory"
              label="ÜRETİM TESİSİ"
            />
          </FadeInOnScroll>

          {/* Right content */}
          <FadeInOnScroll delay={100}>
            <SectionHeading
              eyebrow="ÜRETİM GÜCÜ"
              title="Türkiye'den Global Pazarlara Mühendislik ve Üretim Altyapısı"
              className="mb-10"
              id="production-heading"
            />

            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <span className="p-2.5 rounded-xl bg-[#E9EEF3] text-[#0A6DB8] group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300 shrink-0">
                    <item.icon size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-semibold text-[#071B34] text-base">{item.title}</p>
                    <p className="text-sm text-[#475569] mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
