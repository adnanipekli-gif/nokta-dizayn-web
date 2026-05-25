import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import { FadeInOnScroll } from '@/components/motion/FadeInOnScroll';
import { PROJECTS } from '@/lib/data/projects';

export function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="projects-heading">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <FadeInOnScroll>
            <SectionHeading
              eyebrow="REFERANSLAR"
              title="Sahada Hayata Geçirdiğimiz Projeler"
              id="projects-heading"
            />
          </FadeInOnScroll>

          <FadeInOnScroll delay={100}>
            <Link
              href="/referanslar"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0A6DB8] hover:text-[#071B34] transition-colors group whitespace-nowrap"
            >
              Tüm Referansları İncele
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeInOnScroll>
        </div>

        {/* Asymmetric grid: 1 large + 3 smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <FadeInOnScroll key={project.slug} delay={i * 70}>
              <CaseStudyCard project={project} large={i === 0} />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
