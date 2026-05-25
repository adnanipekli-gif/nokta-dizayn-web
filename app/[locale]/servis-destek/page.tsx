import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SERVICES } from '@/lib/data/services';
import { DynIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Servis & Destek',
  description:
    'Teknik servis, bakım anlaşmaları, yedek parça, garanti süreçleri ve retrofit çözümleri. Satış sonrası tam destek.',
  alternates: { canonical: 'https://www.noktadizayn.com.tr/servis-destek' },
};

export default function ServisDestekPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/projeler-muhendislik/15.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/95 via-[#071B34]/75 to-[#071B34]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/70 via-transparent to-[#071B34]/50" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />
        <div className="section-container relative z-10 pb-4">
          <h1 className="text-white">Satış Sonrası Teknik Servis ve Bakım Desteği</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">
            Kurulum sonrasında da yanınızdayız — teknik servis, bakım, yedek parça ve retrofit çözümleriyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button variant="primary" size="md" href="/iletisim?form=servis">
              Servis Talebi Oluştur
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="tel:+902121234567"
              className="border-white/35 text-white hover:bg-white hover:text-[#071B34]"
            >
              Teknik Destek Hattı
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <FadeInOnScroll>
            <SectionHeading
              eyebrow="HİZMETLERİMİZ"
              title="Servis ve Destek Hizmetlerimiz"
              subtitle="Mağaza ekipmanlarınızın en yüksek verimde çalışması için kapsamlı destek hizmetleri."
            />
          </FadeInOnScroll>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((service, i) => (
              <FadeInOnScroll key={service.slug} delay={i * 60}>
                <ServiceCard service={service} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F7F9FC]">
        <div className="section-container space-y-16">
          {SERVICES.slice(0, 3).map((service, i) => (
            <FadeInOnScroll key={service.slug}>
              <div
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                  i % 2 === 1 ? 'lg:grid-flow-col' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="p-2.5 rounded-xl bg-[#E9EEF3] text-[#0A6DB8]">
                      <DynIcon name={service.icon} size={20} strokeWidth={1.5} />
                    </span>
                    <h2 className="text-xl font-semibold text-[#071B34]">{service.name}</h2>
                  </div>
                  <p className="text-[#475569] leading-relaxed mb-6">{service.longDescription}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                        <span className="text-sm text-[#475569]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`p-6 lg:p-8 rounded-2xl bg-white border border-[#D9E1EA] ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="text-sm text-[#475569] mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <Button variant="primary" size="sm" href="/iletisim?form=servis">
                    Servis Talebi Oluştur
                  </Button>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#071B34]">
        <div className="section-container text-center">
          <h2 className="text-white mb-4">Servis Talebi Oluşturun</h2>
          <p className="text-[#E9EEF3]/65 max-w-lg mx-auto mb-8">
            Formu doldurun, teknik ekibimiz en kısa sürede sizinle iletişime geçsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/iletisim?form=servis">
              Servis Formu
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/iletisim?form=danismanlik"
              className="border-white/35 text-white hover:bg-white hover:text-[#071B34]"
            >
              Bakım Planı İçin İletişim
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
