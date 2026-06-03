import { getTranslations } from 'next-intl/server';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SERVICES } from '@/lib/data/services';

export async function ServiceSupportBlock() {
  const t = await getTranslations('service');
  const ts = await getTranslations('services');

  // Translate the first 4 services
  const serviceKeys: Record<string, { name: string; desc: string }> = {
    'teknik-servis':    { name: ts('teknik_servis_name'), desc: ts('teknik_servis_desc') },
    'bakim-anlasmalari':{ name: ts('bakim_name'),         desc: ts('bakim_desc') },
    'yedek-parca':      { name: ts('yedek_parca_name'),   desc: ts('yedek_parca_desc') },
    'garanti-surecleri':{ name: ts('garanti_name'),       desc: ts('garanti_desc') },
  };

  const featuredServices = SERVICES.slice(0, 4).map((s) => ({
    ...s,
    name: serviceKeys[s.slug]?.name ?? s.name,
    shortDescription: serviceKeys[s.slug]?.desc ?? s.shortDescription,
  }));

  return (
    <section className="py-24 lg:py-32 bg-[#E9EEF3]" aria-labelledby="service-heading">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <FadeInOnScroll>
            <SectionHeading eyebrow={t('eyebrow')} title={t('title')} id="service-heading" />
          </FadeInOnScroll>
          <FadeInOnScroll delay={80}>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button variant="primary" size="sm" href="/iletisim?form=servis">{t('cta_service')}</Button>
              <Button variant="secondary" size="sm" href="/servis-destek">{t('cta_support')}</Button>
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
