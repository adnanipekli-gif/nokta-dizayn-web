import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/cards/ProductCard';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SOLUTIONS } from '@/lib/data/solutions';
import { PRODUCT_CATEGORIES } from '@/lib/data/products';
import { PROJECTS } from '@/lib/data/projects';
import { DynIcon } from '@/lib/icons';

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.shortDescription,
    alternates: { canonical: `https://noktadizayn.com.tr/cozumler/${slug}` },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) notFound();

  const relatedProducts = PRODUCT_CATEGORIES.filter((p) =>
    solution.relatedProducts.includes(p.slug)
  );

  const relatedProjects = PROJECTS.filter((p) =>
    p.usedProducts.some((up) => solution.relatedProducts.includes(up))
  ).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <Breadcrumb
            items={[
              { label: 'Çözümler', href: '/cozumler' },
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
        <div className="hero-bottom-glow" aria-hidden="true" />
        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      {/* Main content */}
      <div className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <FadeInOnScroll>
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#475569] leading-relaxed text-base">{solution.longDescription}</p>
                </div>
              </FadeInOnScroll>

              {/* Placeholder image */}
              <FadeInOnScroll delay={60}>
                <Placeholder
                  category="solution"
                  aspectRatio="16:9"
                  icon={solution.icon}
                  label={solution.name.toUpperCase()}
                  className="rounded-2xl"
                />
              </FadeInOnScroll>

              {/* Benefits */}
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

              {/* Related products */}
              {relatedProducts.length > 0 && (
                <FadeInOnScroll delay={100}>
                  <div>
                    <h2 className="text-xl font-semibold text-[#071B34] mb-6">
                      Bu Çözümde Kullanılan Ürünler
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {relatedProducts.map((product, i) => (
                        <ProductCard key={product.slug} product={product} />
                      ))}
                    </div>
                  </div>
                </FadeInOnScroll>
              )}
            </div>

            {/* Sticky sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                {/* CTA card */}
                <div className="rounded-2xl border border-[#D9E1EA] overflow-hidden bg-white">
                  <div className="px-5 py-4 bg-[#071B34]">
                    <p className="eyebrow text-[#11B5FF]">// TEKLİF AL</p>
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

                {/* Key info */}
                <div className="rounded-2xl border border-[#D9E1EA] bg-[#F7F9FC] p-5">
                  <p className="text-xs font-semibold text-[#8D99A8] uppercase tracking-widest mb-4">
                    İlgili Sektörler
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Süpermarket', 'Hipermarket', 'Perakende', 'Endüstriyel', 'İhracat'].slice(0, 3).map((s) => (
                      <span key={s} className="text-xs px-3 py-1 rounded-full bg-white border border-[#D9E1EA] text-[#475569]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-[#F7F9FC]">
          <div className="section-container">
            <SectionHeading
              eyebrow="// REFERANS PROJELER"
              title="İlgili Projelerimiz"
              subtitle="Bu çözümü hayata geçirdiğimiz referans projelerden örnekler."
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((project, i) => (
                <FadeInOnScroll key={project.slug} delay={i * 80}>
                  <CaseStudyCard project={project} />
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#071B34]">
        <div className="section-container text-center">
          <h2 className="text-white mb-4">{solution.name} için teklif alın</h2>
          <p className="text-[#E9EEF3]/65 max-w-lg mx-auto mb-8">
            Projenizin detaylarını paylaşın, size özel bir mühendislik çözümü hazırlayalım.
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
