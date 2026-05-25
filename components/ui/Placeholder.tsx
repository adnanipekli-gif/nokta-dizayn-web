import { DynIcon } from '@/lib/icons';
import { cn } from '@/lib/utils';

type AspectRatio = '16:9' | '4:3' | '4:5' | '5:6' | '1:1' | '3:2';

const ASPECT_CLASSES: Record<AspectRatio, string> = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '4:5': 'aspect-[4/5]',
  '5:6': 'aspect-[5/6]',
  '1:1': 'aspect-square',
  '3:2': 'aspect-[3/2]',
};

interface PlaceholderProps {
  category?: string;
  aspectRatio?: AspectRatio;
  icon?: string;
  label?: string;
  className?: string;
}

export function Placeholder({
  category = 'general',
  aspectRatio = '16:9',
  icon = 'Snowflake',
  label,
  className,
}: PlaceholderProps) {
  const displayLabel = label || category.toUpperCase().replace(/-/g, ' ');

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl',
        ASPECT_CLASSES[aspectRatio],
        className
      )}
      role="img"
      aria-label={`Görsel alanı: ${displayLabel}`}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071B34] via-[#0E2647] to-[#1A3A6B]" />

      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 blueprint-grid opacity-30"
        aria-hidden="true"
      />

      {/* Subtle cyan gradient corner */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#11B5FF] opacity-[0.06] blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <DynIcon name={icon} size={32} className="text-[#11B5FF] opacity-80" strokeWidth={1.5} />
        </div>
        <div className="text-center px-4">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#8D99A8] opacity-80">
            GÖRSEL ALANI
          </p>
          <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[#E9EEF3] opacity-50 mt-1">
            {displayLabel}
          </p>
        </div>
      </div>

      {/* Corner accent */}
      <div
        className="absolute top-0 left-0 w-16 h-0.5 bg-gradient-to-r from-[#11B5FF]/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-[#11B5FF]/40 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
