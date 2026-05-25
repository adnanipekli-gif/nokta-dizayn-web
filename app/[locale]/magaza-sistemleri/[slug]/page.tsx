import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SOLUTIONS } from '@/lib/data/solutions';
import { DynIcon } from '@/lib/icons';

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.shortDescription,
    alternates: { canonical: `https://www.noktadizayn.com.tr/magaza-sistemleri/${slug}` },
  };
}

export default async function MagazaSistemiDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <>
      <section className="pt-32 pb-12 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <Breadcrumb
            items={[
              { label: 'Mağaza Sistemleri', href: '/magaza-sistemleri' },
              { label: solution.name },
            ]}
          />
          <div className="mt-6 flex items-start gap-4">
            <span className="p-3 rounded-xl bg-white/10 text-[#11B5FF] shrink-0 mt-1">
              <DynIcon name={solution.icon} size={24} strokeWidth={1.5} />
            </span>
            <div>
              <h1 className="text-white text-balance">{solution.name}</h1>
              <p className="text-[#E9EEF3]/70 mt-3 max-w-xl text-lg leading-relaxed">
                {solution.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-12">
              <FadeInOnScroll>
                <p className="text-[#475569] leading-relaxed text-base">{solution.longDescription}</p>
              </FadeInOnScroll>

              <FadeInOnScroll delay={60}>
                <Placeholder
                  category="solution"
                  aspectRatio="16:9"
                  icon={solution.icon}
                  label={solution.name.toUpperCase()}
                  className="rounded-2xl"
                />
              </FadeInOnScroll>

              <FadeInOnScroll delay={80}>
                <div>
                  <h2 className="text-xl font-semibold text-[#071B34] mb-5">
                    Bu Çözümün Avantajları
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {solution.benefits.map((benefit) => (
                      <div
                        key={benefit.title}
                        className="flex items-start gap-3 p-4 rounded-xl bg-[#F7F9FC] border border-[#D9E1EA]"
                      >
                        <CheckCircle2 size={16} className="text-[#0A6DB8] mt-0.5 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-[#071B34]">{benefit.title}</p>
                          <p className="text-xs text-[#8D99A8] mt-0.5 leading-snug">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>

            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-2xl border border-[#D9E1EA] overflow-hidden bg-white">
                  <div className="px-5 py-4 bg-[#071B34]">
                  </div>
                  <div className="p-5">
                    <h3 className="font-sora font-semibold text-[#071B34] text-base mb-2">
                      Bu çözüm hakkında teklif alın
                    </h3>
                    <p className="text-sm text-[#475569] mb-5 leading-relaxed">
                      Mühendislik ekibimiz ihtiyacınızı analiz eder, size özel fiyat ve teknik plan hazırlar.
                    </p>
                    <div className="space-y-2.5">
                      <Button variant="primary" size="md" href="/iletisim?form=teklif" fullWidth>
                        Teklif Talep Et
                      </Button>
                      <Button variant="secondary" size="md" href="/iletisim?form=danismanlik" fullWidth>
                        Proje Danışmanlığı
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>


      <section className="py-16 bg-[#071B34]">
        <div className="section-container text-center">
          <h2 className="text-white mb-4">{solution.name} için teklif alın</h2>
          <p className="text-[#E9EEF3]/65 max-w-lg mx-auto mb-8">
            Projenizin detaylarını paylaşın, size özel bir mağaza çözümü hazırlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/iletisim?form=teklif">
              Teklif Al
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/iletisim?form=genel"
              className="border-white/35 text-white hover:bg-white hover:text-[#071B34]"
            >
              Bize Ulaşın
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
