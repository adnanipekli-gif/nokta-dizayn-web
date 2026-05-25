import { cn } from '@/lib/utils';

type GlowPosition = 'top-right' | 'top-left' | 'center' | 'bottom-right';

interface GradientGlowProps {
  position?: GlowPosition;
  intensity?: 'soft' | 'medium' | 'strong';
  className?: string;
}

const positionClasses: Record<GlowPosition, string> = {
  'top-right': '-top-16 -right-16',
  'top-left': '-top-16 -left-16',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'bottom-right': '-bottom-16 -right-16',
};

const intensityClasses: Record<string, string> = {
  soft: 'opacity-[0.08]',
  medium: 'opacity-[0.15]',
  strong: 'opacity-[0.25]',
};

export function GradientGlow({
  position = 'top-right',
  intensity = 'soft',
  className,
}: GradientGlowProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute w-[600px] h-[600px] rounded-full',
        'bg-[#11B5FF] blur-[120px]',
        positionClasses[position],
        intensityClasses[intensity],
        className
      )}
      aria-hidden="true"
    />
  );
}
