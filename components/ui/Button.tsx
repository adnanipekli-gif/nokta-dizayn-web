'use client';

import { Link } from '@/lib/i18n-navigation';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'relative overflow-hidden bg-[#0A6DB8] text-white font-semibold',
    'hover:bg-[#0858A0] hover:scale-[1.01]',
    'before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
    'hover:before:translate-x-[200%] before:transition-transform before:duration-500',
    'transition-all duration-300 ease-out',
  ].join(' '),
  secondary: [
    'border border-[#071B34] text-[#071B34] font-semibold',
    'hover:bg-[#071B34] hover:text-white',
    'transition-all duration-300 ease-out',
  ].join(' '),
  ghost: [
    'text-[#071B34] font-medium inline-flex items-center gap-2',
    'hover:text-[#11B5FF] group',
    'transition-colors duration-200',
  ].join(' '),
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  showArrow,
  type = 'button',
  disabled,
  fullWidth,
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-inter leading-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#11B5FF] focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && 'w-full',
    className
  );

  const arrowEl = (showArrow || variant === 'ghost') && (
    <ArrowRight
      size={16}
      className={cn(
        'shrink-0 transition-transform duration-200',
        variant === 'ghost' && 'group-hover:translate-x-1'
      )}
    />
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
        {arrowEl}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
      {arrowEl}
    </button>
  );
}
