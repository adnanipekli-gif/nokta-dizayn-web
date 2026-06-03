import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Placeholder } from '@/components/ui/Placeholder';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/Button';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { PROJECTS } from '@/lib/data/projects';
import Link from 'next/link';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `https://www.noktadizayn.com.tr/referanslar/${slug}` },
  };
}

export default async function ReferansDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = await getTranslations('referanslar_detay');

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
    locationCreated: { '@type': 'Place', name: project.location },
    dateCreated: String(project.year),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-0 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10 pb-12">
          <Breadcrumb
            items={[
              { label: t('breadcrumb'), href: '/referanslar' },
              { label: project.sector },
              { label: project.title },
            ]}
          />
          <div className="mt-6">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#11B5FF] mb-3 block">
              {project.sector}{project.isExport ? ` · ${t('export_label')}` : ''}
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
        <div className="section-container pb-0 relative z-10">
          <Placeholder
            category={project.sector}
            aspectRatio="16:9"
            icon="Store"
            label={project.sector.toUpperCase()}
            className="rounded-b-none"
          />
        </div>
      </section>

      <div className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            <div className="lg:col-span-2 space-y-10">
              <FadeInOnScroll>
                <div className="p-6 rounded-2xl bg-[#F7F9FC] border border-[#D9E1EA]">
                  <h2 className="text-lg font-semibold text-[#071B34] mb-3">{t('client_need')}</h2>
                  <p className="text-[#475569] text-sm leading-relaxed">{project.clientNeed}</p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <div className="p-6 rounded-2xl bg-[#F7F9FC] border border-[#D9E1EA]">
                  <h2 className="text-lg font-semibold text-[#071B34] mb-3">{t('solution')}</h2>
                  <p className="text-[#475569] text-sm leading-relaxed">{project.solution}</p>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll>
                <div>
                  <h2 className="text-xl font-semibold text-[#071B34] mb-5">{t('results')}</h2>
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

              <FadeInOnScroll>
                <div>
                  <h2 className="text-xl font-semibold text-[#071B34] mb-5">{t('gallery')}</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Placeholder
                        key={i}
                        category={`${project.slug}-gallery-${i}`}
                        aspectRatio="4:3"
                        icon="Store"
                      />
                    ))}
                  </div>
                </div>
              </FadeInOnScroll>

              {similarProjects.length > 0 && (
                <FadeInOnScroll>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold text-[#071B34]">{t('similar_projects')}</h2>
                      <Link href="/referanslar" className="inline-flex items-center gap-1 text-sm text-[#0A6DB8] hover:text-[#071B34]">
                        {t('all_projects')} <ArrowRight size={14} />
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {similarProjects.map((p) => (
                        <CaseStudyCard
                          key={p.slug}
                          project={p}
                          exportLabel={t('export_label')}
                          viewLabel={t('view_project')}
                        />
                      ))}
                    </div>
                  </div>
                </FadeInOnScroll>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-[#D9E1EA] overflow-hidden bg-[#071B34]">
                <div className="p-6">
                  <h3 className="font-sora font-semibold text-white text-lg mb-3">
                    {t('quote_title')}
                  </h3>
                  <p className="text-[#E9EEF3]/65 text-sm mb-6 leading-relaxed">
                    {t('quote_desc')}
                  </p>
                  <Button variant="primary" size="md" href="/iletisim?form=teklif" fullWidth>
                    {t('quote_btn')}
                  </Button>
                </div>
                <div className="px-6 py-5 border-t border-white/10">
                  <p className="text-xs text-[#E9EEF3]/50 uppercase tracking-wider mb-3">{t('project_details')}</p>
                  <div className="space-y-2">
                    {[
                      { k: t('sector'), v: project.sector },
                      { k: t('location'), v: project.location },
                      { k: t('year'), v: String(project.year) },
                      { k: t('type'), v: project.isExport ? t('export_type') : t('domestic') },
                    ].map(({ k, v }) => (
                      <div key={k} className="flex justify-between text-xs">
                        <span className="text-[#E9EEF3]/50">{k}</span>
                        <span className="text-[#E9EEF3]/80 font-medium">{v}</span>
                      </div>
                    ))}
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
