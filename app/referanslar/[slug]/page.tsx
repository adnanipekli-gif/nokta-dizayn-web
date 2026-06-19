import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/cards/ProductCard';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { PROJECTS } from '@/lib/data/projects';
import { PRODUCT_CATEGORIES } from '@/lib/data/products';
import Link from 'next/link';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `https://noktadizayn.com.tr/referanslar/${slug}` },
  };
}

export default async function ReferansDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const usedProductObjects = PRODUCT_CATEGORIES.filter((p) =>
    project.usedProducts.includes(p.slug)
  );

  const similarProjects = PROJECTS.filter(
    (p) =>
      p.slug !== project.slug &&
      (p.sector === project.sector ||
        p.usedProducts.some((up) => project.usedProducts.includes(up)))
  ).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.shortDescription,
    locationCreated: {
      '@type': 'Place',
      name: project.location,
    },
    dateCreated: String(project.year),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-0 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10 pb-12">
          <Breadcrumb
            items={[
              { label: 'Referanslar', href: '/referanslar' },
              { label: project.sector },
              { label: project.title },
            ]}
          />
          <div className="mt-6">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#11B5FF] mb-3 block">
              {project.sector}{project.isExport ? ' · İHRACAT' : ''}
            </span>
            <h1 className="text-white max-w-2xl text-balance">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="flex items-center gap-1.5 text-sm text-[#E9EEF3]/60">
                <MapPin size={14} /> {project.location}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-[#E9EEF3]/60">
                <Calendar size={14} /> {project.year}
              </span>
            </div>
          </div>
        </div>
        {/* Hero image */}
        <div className="section-container pb-0 relative z-10">
          <Placeholder
            category={project.sector}
            aspectRatio="16:9"
            icon="Factory"
            label={project.sector.toUpperCase()}
            className="rounded-b-none"
          />
        </div>
      </section>

      <div className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Client need */}
              <FadeInOnScroll>
                <div className="p-6 rounded-2xl bg-[#F7F9FC] border border-[#D9E1EA]">
                  <h2 className="text-lg font-semibold text-[#071B34] mb-3">Müşteri İhtiyacı</h2>
                  <p className="text-[#475569] text-sm leading-relaxed">{project.clientNeed}</p>
                </div>
              </FadeInOnScroll>

              {/* Solution */}
              <FadeInOnScroll>
                <div className="p-6 rounded-2xl bg-[#F7F9FC] border border-[#D9E1EA]">
                  <h2 className="text-lg font-semibold text-[#071B34] mb-3">Sunulan Çözüm</h2>
                  <p className="text-[#475569] text-sm leading-relaxed">{project.solution}</p>
                </div>
              </FadeInOnScroll>

              {/* Results */}
              <FadeInOnScroll>
                <div>
                  <h2 className="text-xl font-semibold text-[#071B34] mb-5">Sonuçlar</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.results.map((r) => (
                      <div key={r.label} className="p-4 rounded-2xl border border-[#D9E1EA] bg-white text-center">
                        <p className="font-sora font-bold text-xl text-[#0A6DB8] mb-1">{r.value}</p>
                        <p className="text-xs text-[#8D99A8]">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>

              {/* Used products */}
              {usedProductObjects.length > 0 && (
                <FadeInOnScroll>
                  <div>
                    <h2 className="text-xl font-semibold text-[#071B34] mb-5">Kullanılan Ürünler</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {usedProductObjects.map((p) => (
                        <ProductCard key={p.slug} product={p} />
                      ))}
                    </div>
                  </div>
                </FadeInOnScroll>
              )}

              {/* Gallery */}
              <FadeInOnScroll>
                <div>
                  <h2 className="text-xl font-semibold text-[#071B34] mb-5">Galeri</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Placeholder
                        key={i}
                        category={`${project.slug}-gallery-${i}`}
                        aspectRatio="4:3"
                        icon="Factory"
                      />
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>

              {/* Similar projects */}
              {similarProjects.length > 0 && (
                <FadeInOnScroll>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold text-[#071B34]">Benzer Projeler</h2>
                      <Link href="/referanslar" className="inline-flex items-center gap-1 text-sm text-[#0A6DB8] hover:text-[#071B34]">
                        Tümü <ArrowRight size={14} />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {similarProjects.map((p) => (
                        <CaseStudyCard key={p.slug} project={p} />
                      ))}
                    </div>
                  </div>
                </FadeInOnScroll>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-[#D9E1EA] overflow-hidden bg-[#071B34]">
                <div className="p-6">
                  <p className="eyebrow text-[#11B5FF] mb-3">// BENZER PROJE?</p>
                  <h3 className="font-sora font-semibold text-white text-lg mb-3">
                    Projeniz için teklif alın
                  </h3>
                  <p className="text-[#E9EEF3]/65 text-sm mb-6 leading-relaxed">
                    Benzer bir proje planlarken ekibimizden ücretsiz ön analiz ve teklif alabilirsiniz.
                  </p>
                  <Button variant="primary" size="md" href="/iletisim?form=teklif" fullWidth>
                    Teklif Talep Et
                  </Button>
                </div>
                <div className="px-6 py-5 border-t border-white/10">
                  <p className="text-xs text-[#E9EEF3]/50 uppercase tracking-wider mb-3">Proje Detayları</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#E9EEF3]/50">Sektör</span>
                      <span className="text-[#E9EEF3]/80 font-medium">{project.sector}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#E9EEF3]/50">Lokasyon</span>
                      <span className="text-[#E9EEF3]/80 font-medium">{project.location}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#E9EEF3]/50">Yıl</span>
                      <span className="text-[#E9EEF3]/80 font-medium">{project.year}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#E9EEF3]/50">Tür</span>
                      <span className="text-[#E9EEF3]/80 font-medium">{project.isExport ? 'İhracat' : 'Yurt İçi'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
