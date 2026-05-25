import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SOLUTIONS } from '@/lib/data/solutions';
import { DynIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Mağaza Sistemleri — Sektör Bazlı Çözümler',
  description:
    'Süpermarketten franchise zincirine, kasaptan gurme markete kadar her format için entegre mağaza sistemleri.',
  alternates: { canonical: 'https://www.noktadizayn.com.tr/magaza-sistemleri' },
};

const solutionImages = [
  '/projeler-muhendislik/10.png',
  '/projeler-muhendislik/11.png',
  '/projeler-muhendislik/12.png',
  '/projeler-muhendislik/13.png',
  '/projeler-muhendislik/14.png',
];

export default function MagazaSistemleriPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0">
          <Image src="/projeler-muhendislik/17.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071B34]/95 via-[#071B34]/75 to-[#071B34]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B34]/70 via-transparent to-[#071B34]/50" />
        </div>
        <div className="absolute inset-0 blueprint-grid opacity-[0.05]" aria-hidden="true" />
        <div className="section-container relative z-10 pb-4">
          <h1 className="text-white max-w-2xl text-balance">
            Sektör Bazlı Entegre Mağaza Çözümleri
          </h1>
          <p className="text-[#E9EEF3]/70 mt-5 max-w-xl text-lg">
            Her mağaza formatına uygun, soğutmadan raf sistemine, kasadan mobilyaya kadar uçtan uca çözümler.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container space-y-24">
          {SOLUTIONS.map((solution, i) => (
            <FadeInOnScroll key={solution.slug}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:grid-flow-col' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={solutionImages[i % solutionImages.length]}
                      alt={solution.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

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

                  <ul className="space-y-3 mb-8">
                    {solution.benefits.map((b) => (
                      <li key={b.title} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                        <span>
                          <span className="font-medium text-[#071B34]">{b.title}</span>
                          <span className="text-[#475569] text-sm"> — {b.description}</span>
                        </span>
                      </li>
                    ))}
                  </ul>

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

                  <Button variant="primary" size="sm" href={`/magaza-sistemleri/${solution.slug}`} showArrow>
                    Çözümü İncele
                  </Button>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

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
