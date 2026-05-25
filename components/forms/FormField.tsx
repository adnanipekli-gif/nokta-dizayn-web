import { cn } from '@/lib/utils';

interface FormFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  hint?: string;
}

export function FormField({ label, required, error, children, className, id, hint }: FormFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-[#071B34]">
          {label}
          {required && <span className="text-red-600 ml-0.5" aria-hidden="true">*</span>}
        </label>
      )}
      {children}
      {hint && !error && <p className="text-xs text-[#8D99A8]">{hint}</p>}
      {error && (
        <p className="text-xs text-red-600" role="alert" id={id ? `${id}-error` : undefined}>
          {error}
        </p>
      )}
    </div>
  );
}

export const inputClasses = [
  'w-full px-4 py-3 text-sm rounded-md bg-white',
  'border border-[#D9E1EA]',
  'focus:outline-none focus:border-[#071B34] focus:ring-2 focus:ring-[#11B5FF]/20',
  'placeholder:text-[#8D99A8]',
  'transition-colors duration-200',
].join(' ');

export const errorInputClasses = 'border-red-400 focus:border-red-500 focus:ring-red-200/30';
