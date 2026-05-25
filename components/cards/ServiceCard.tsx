import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DynIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import type { ServiceItem } from '@/lib/types';

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group flex flex-col p-6 lg:p-8 bg-white rounded-2xl border border-[#D9E1EA]',
        'transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(7,27,52,0.06),0_16px_40px_rgba(10,109,184,0.12)]',
        'relative',
        className
      )}
      style={{ boxShadow: '0 1px 2px rgba(7,27,52,0.04), 0 8px 24px rgba(7,27,52,0.06)' }}
    >
      {/* Cyan top line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-[#11B5FF] opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        aria-hidden="true"
      />

      <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E9EEF3] text-[#0A6DB8] mb-5 group-hover:bg-[#071B34] group-hover:text-white transition-colors duration-300">
        <DynIcon name={service.icon} size={22} strokeWidth={1.5} />
      </span>

      <h3 className="font-sora font-semibold text-[#071B34] text-lg mb-2 group-hover:text-[#0A6DB8] transition-colors">
        {service.name}
      </h3>

      <p className="text-sm text-[#475569] leading-relaxed flex-1 mb-5">
        {service.shortDescription}
      </p>

      <Link
        href={`/servis-destek#${service.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#071B34] group-hover:text-[#11B5FF] transition-colors"
      >
        Detaylar
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  );
}
