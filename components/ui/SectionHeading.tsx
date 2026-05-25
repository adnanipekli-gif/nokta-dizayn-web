import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p className={cn('eyebrow mb-4', dark ? 'text-[#11B5FF]' : 'text-[#11B5FF]')}>
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={cn(dark ? 'text-white' : 'text-[#071B34]', 'text-balance')}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed',
            dark ? 'text-[#E9EEF3]/75' : 'text-[#475569]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
