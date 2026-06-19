import type { Metadata } from 'next';
import { Link } from '@/lib/i18n-navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SOLUTIONS } from '@/lib/data/solutions';
import { DynIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Sektör Bazlı Soğutma Çözümleri',
  description:
    'Süpermarketten endüstriyel tesise, kasaptan gurme markete kadar her format için mühendislik tabanlı soğutma ve reyon çözümleri.',
  alternates: { canonical: 'https://noktadizayn.com.tr/cozumler' },
};

export default function CozumlerPage() {
  return (
    <>
      {/* Mini hero */}
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <p className="eyebrow text-[#11B5FF] mb-4">// SEKTÖR ÇÖZÜMLERİ</p>
          <h1 className="text-white max-w-2xl text-balance">
            Sektör Bazlı Soğutma ve Reyon Çözümleri
          </h1>
          <p className="text-[#E9EEF3]/70 mt-5 max-w-xl text-lg">
            Her mağaza ve tesis formatına uygun, mühendislik destekli soğutma çözümleri.
          </p>
        </div>
        <div className="hero-bottom-glow" aria-hidden="true" />
        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      {/* Solutions alternating */}
      <section className="py-16">
        <div className="section-container space-y-24">
          {SOLUTIONS.map((solution, i) => (
            <FadeInOnScroll key={solution.slug}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:grid-flow-col' : ''
                }`}
              >
                {/* Visual */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <Placeholder
                    category={solution.slug}
                    aspectRatio="4:3"
                    icon={solution.icon}
                    label={solution.name}
                  />
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E9EEF3] text-[#0A6DB8] mb-5">
                    <DynIcon name={solution.icon} size={22} strokeWidth={1.5} />
                  </span>

                  <h2 className="text-[#071B34] text-2xl font-semibold mb-4">
                    {solution.name}
                  </h2>

                  <p className="text-[#475569] leading-relaxed mb-6">
                    {solution.longDescription}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {solution.benefits.map((b) => (
                      <li key={b.title} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                        <span>
                          <span className="font-medium text-[#071B34]">{b.title}</span>
                          <span className="text-[#475569] text-sm">: {b.description}</span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Related products */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {solution.relatedProducts.map((slug) => (
                      <Link
                        key={slug}
                        href={`/urunler/${slug}`}
                        className="px-3 py-1 text-xs font-medium bg-[#E9EEF3] text-[#475569] rounded-md hover:bg-[#071B34] hover:text-white transition-colors"
                      >
                        {slug.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </div>

                  <Button variant="primary" size="sm" href={`/cozumler/${solution.slug}`} showArrow>
                    Çözümü İncele
                  </Button>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E9EEF3]">
        <div className="section-container text-center">
          <h2 className="text-[#071B34] mb-4">Hangi Çözüm Sizin İçin Uygun?</h2>
          <p className="text-[#475569] max-w-lg mx-auto mb-8">
            Mühendislik ekibimiz mağazanızın ihtiyacını analiz eder ve size özel çözüm planı hazırlar.
          </p>
          <Button variant="primary" size="lg" href="/iletisim?form=teklif">
            Ücretsiz Analiz Talep Edin
          </Button>
        </div>
      </section>
    </>
  );
}
