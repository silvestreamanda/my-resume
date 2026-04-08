import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href: string;
  external?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold shadow-lg shadow-gold-500/25 hover:shadow-gold-400/30',
  secondary: 'bg-navy-700 hover:bg-navy-600 text-white font-semibold shadow-lg shadow-navy-900/30',
  outline:
    'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-950 font-semibold',
  ghost: 'text-slate-300 hover:text-white hover:bg-white/10 font-medium',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  fullWidth = false,
  className = '',
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={[
        'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer no-underline',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </motion.a>
  );
}
