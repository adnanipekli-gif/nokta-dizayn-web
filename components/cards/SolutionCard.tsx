import { Link } from '@/lib/i18n-navigation';
import { ArrowRight } from 'lucide-react';
import { DynIcon } from '@/lib/icons';
import { Placeholder } from '@/components/ui/Placeholder';
import { cn } from '@/lib/utils';
import type { Solution } from '@/lib/types';

interface SolutionCardProps {
  solution: Solution;
  className?: string;
}

export function SolutionCard({ solution, className }: SolutionCardProps) {
  return (
    <Link
      href={`/magaza-sistemleri/${solution.slug}`}
      className={cn(
        'group flex flex-col bg-white rounded-2xl border border-[#D9E1EA] overflow-hidden',
        'transition-all duration-[300ms] cubic-bezier(0.16,1,0.3,1)',
        'hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(7,27,52,0.06),0_16px_40px_rgba(10,109,184,0.12)]',
        'relative',
        className
      )}
      style={{ boxShadow: '0 1px 2px rgba(7,27,52,0.04), 0 8px 24px rgba(7,27,52,0.06)' }}
    >
      {/* Cyan top border on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-[#11B5FF] opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Image placeholder */}
      <Placeholder
        category={solution.slug}
        aspectRatio="16:9"
        icon={solution.icon}
        label={solution.name}
        className="rounded-none"
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon badge */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#071B34] text-white mb-4">
          <DynIcon name={solution.icon} size={18} strokeWidth={1.5} />
        </span>

        <h3 className="font-sora font-semibold text-[#071B34] text-lg leading-snug mb-2 group-hover:text-[#0A6DB8] transition-colors">
          {solution.name}
        </h3>

        <p className="text-sm text-[#475569] leading-relaxed flex-1 mb-4">
          {solution.shortDescription}
        </p>

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#071B34] group-hover:text-[#11B5FF] transition-colors">
          Çözümü İncele
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </div>
    </Link>
  );
}
