import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SERVICES } from '@/lib/data/services';

export function ServiceSupportBlock() {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <section
      className="py-24 lg:py-32 bg-[#E9EEF3]"
      aria-labelledby="service-heading"
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <FadeInOnScroll>
            <SectionHeading
              eyebrow="SERVİS & DESTEK"
              title="Satış Sonrası Teknik Servis ve Bakım Desteği"
              id="service-heading"
            />
          </FadeInOnScroll>

          <FadeInOnScroll delay={80}>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button variant="primary" size="sm" href="/iletisim?form=servis">
                Servis Talebi Oluştur
              </Button>
              <Button variant="secondary" size="sm" href="/servis-destek">
                Teknik Destek Al
              </Button>
            </div>
          </FadeInOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredServices.map((service, i) => (
            <FadeInOnScroll key={service.slug} delay={i * 60}>
              <ServiceCard service={service} />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
