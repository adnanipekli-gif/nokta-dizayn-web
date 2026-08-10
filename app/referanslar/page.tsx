import type { Metadata } from 'next';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { PROJECTS } from '@/lib/data/projects';

export const metadata: Metadata = {
  title: 'Referans Projeler',
  description:
    "Süpermarketten endüstriyel tesise, kasaptan gurme markete kadar Türkiye ve 60+ ülkede hayata geçirdiğimiz referans projeler.",
  alternates: { canonical: 'https://noktadizayn.com.tr/referanslar' },
};

export default function ReferanslarPage() {
  const domestic = PROJECTS.filter((p) => !p.isExport);
  const exports = PROJECTS.filter((p) => p.isExport);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#071B34] relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
        <div className="section-container relative z-10">
          <p className="eyebrow text-[#11B5FF] mb-4">// REFERANSLAR</p>
          <h1 className="text-white">Referans Projeler</h1>
          <p className="text-[#E9EEF3]/70 mt-4 max-w-xl text-lg">
            Türkiye&apos;den 60+ ülkeye uzanan sahada hayata geçirdiğimiz projeler.
          </p>
        </div>
        <div className="hero-bottom-glow" aria-hidden="true" />
        <div className="hero-bottom-fade" aria-hidden="true" />
      </section>

      <div className="py-16">
        <div className="section-container">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-14 p-6 rounded-2xl bg-[#F7F9FC] border border-[#D9E1EA]">
            {[
              { label: 'Toplam Proje', value: `${PROJECTS.length}+` },
              { label: 'İhracat', value: `${exports.length}` },
              { label: 'Ülke', value: '60+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-sora font-bold text-2xl text-[#071B34]">{stat.value}</p>
                <p className="text-xs text-[#8D99A8] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* All projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <FadeInOnScroll key={project.slug} delay={i * 60}>
                <CaseStudyCard project={project} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
