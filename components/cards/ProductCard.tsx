import { LocaleLink as Link } from '@/components/ui/LocaleLink';
import { DynIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';
import type { ProductCategory } from '@/lib/types';

interface ProductCardProps {
  product: ProductCategory;
  compact?: boolean;
  className?: string;
}

export function ProductCard({ product, compact = false, className }: ProductCardProps) {
  return (
    <Link
      href={`/urunler/${product.slug}`}
      className={cn(
        'group flex flex-col items-center justify-center text-center p-6',
        'bg-white rounded-2xl border border-[#D9E1EA]',
        'transition-all duration-300',
        'hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(7,27,52,0.06),0_16px_40px_rgba(10,109,184,0.12)]',
        'relative overflow-hidden',
        compact ? 'aspect-square' : 'py-8',
        className
      )}
      style={{ boxShadow: '0 1px 2px rgba(7,27,52,0.04), 0 8px 24px rgba(7,27,52,0.06)' }}
    >
      {/* Cyan bottom line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#11B5FF] opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        aria-hidden="true"
      />

      <span className="text-[#071B34] group-hover:text-[#0A6DB8] transition-colors duration-200 mb-3">
        <DynIcon name={product.icon} size={28} strokeWidth={1.5} />
      </span>
      <span className="text-sm font-semibold text-[#071B34] group-hover:text-[#0A6DB8] transition-colors leading-snug">
        {product.name}
      </span>
      {!compact && (
        <p className="text-xs text-[#8D99A8] mt-2 leading-snug line-clamp-2">
          {product.shortDescription}
        </p>
      )}
    </Link>
  );
}
