import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { content } from '@/content/content';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Experience() {
  const { experience } = content;

  return (
    <section id="trajetoria" className="section-padding bg-slate-50">
      <div className="container-narrow">
        <SectionTitle title={experience.title} subtitle={experience.subtitle} />

        <div className="mt-14 relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 sm:-translate-x-px" />

          <div className="space-y-10">
            {experience.items.map((item, i) => {
              const isWork = item.type === 'work';
              const Icon = isWork ? Briefcase : GraduationCap;
              const isRight = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRight ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className={[
                    'relative flex gap-6 sm:gap-0 items-start',
                    'sm:w-[calc(50%+16px)]',
                    isRight ? 'sm:pr-10 sm:ml-0' : 'sm:pl-10 sm:ml-[calc(50%-16px)]',
                  ].join(' ')}
                >
                  {/* Icon node on the line */}
                  <div
                    className={[
                      'relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-md',
                      isWork ? 'bg-navy-900 text-gold-400' : 'bg-gold-500 text-navy-950',
                      'sm:absolute sm:top-0',
                      isRight ? 'sm:-right-6' : 'sm:-left-6',
                    ].join(' ')}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Card */}
                  <div
                    className={[
                      'flex-1 bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm',
                    ].join(' ')}
                  >
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <h3 className="font-bold text-navy-950 text-base">{item.title}</h3>
                        <p className="text-gold-600 font-semibold text-sm mt-0.5">
                          {item.organization}
                        </p>
                      </div>
                      <span className="text-xs font-medium bg-navy-50 text-navy-700 px-3 py-1 rounded-full border border-navy-100 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
