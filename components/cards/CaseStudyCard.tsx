import { Link } from '@/lib/i18n-navigation';
import { ArrowRight, MapPin } from 'lucide-react';
import { Placeholder } from '@/components/ui/Placeholder';
import { cn } from '@/lib/utils';
import type { ReferenceProject } from '@/lib/types';

interface CaseStudyCardProps {
  project: ReferenceProject;
  large?: boolean;
  className?: string;
  exportLabel?: string;
  viewLabel?: string;
}

export function CaseStudyCard({ project, large = false, className, exportLabel = 'İHRACAT', viewLabel = 'Projeyi İncele' }: CaseStudyCardProps) {
  return (
    <Link
      href={`/referanslar/${project.slug}`}
      className={cn(
        'group relative flex flex-col bg-white rounded-2xl border border-[#D9E1EA] overflow-hidden',
        'transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(7,27,52,0.06),0_16px_40px_rgba(10,109,184,0.12)]',
        className
      )}
      style={{ boxShadow: '0 1px 2px rgba(7,27,52,0.04), 0 8px 24px rgba(7,27,52,0.06)' }}
    >
      {/* Cyan top border on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-[#11B5FF] opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"
        aria-hidden="true"
      />

      <Placeholder
        category={project.sector.toLowerCase()}
        aspectRatio={large ? '4:3' : '16:9'}
        icon="Factory"
        label={project.sector.toUpperCase()}
        className="rounded-none"
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Sector badge */}
        <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#11B5FF] mb-3">
          {project.sector}
          {project.isExport && ` · ${exportLabel}`}
        </span>

        <h3 className={cn(
          'font-sora font-semibold text-[#071B34] leading-snug mb-2 group-hover:text-[#0A6DB8] transition-colors',
          large ? 'text-xl' : 'text-base'
        )}>
          {project.title}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-[#8D99A8] mb-4">
          <MapPin size={12} />
          {project.location} · {project.year}
        </div>

        {/* Used products */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.usedProducts.slice(0, 3).map((slug) => (
            <span key={slug} className="px-2 py-0.5 text-xs bg-[#E9EEF3] text-[#475569] rounded-md">
              {slug.replace(/-/g, ' ')}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#071B34] group-hover:text-[#11B5FF] transition-colors mt-auto">
          {viewLabel}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </div>
    </Link>
  );
}
