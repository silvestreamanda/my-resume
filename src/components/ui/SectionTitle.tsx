import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={centered ? 'text-center' : ''}
    >
      <h2
        className={[
          'text-3xl sm:text-4xl font-bold tracking-tight',
          light ? 'text-white' : 'text-navy-950',
        ].join(' ')}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={[
            'mt-3 text-base sm:text-lg max-w-2xl',
            centered ? 'mx-auto' : '',
            light ? 'text-slate-300' : 'text-slate-500',
          ].join(' ')}
        >
          {subtitle}
        </p>
      )}
      <div
        className={['mt-4 h-1 w-12 rounded-full bg-gold-500', centered ? 'mx-auto' : ''].join(' ')}
      />
    </motion.div>
  );
}
