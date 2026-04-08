import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { content } from '@/content/content';
import { SectionTitle } from '@/components/ui/SectionTitle';

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-xs font-semibold text-gold-600">{level}%</span>
      </div>
      <div ref={ref} className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          animate={{ width: isInView ? `${level}%` : '0%' }}
          transition={{ delay, duration: 0.9, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-navy-700 to-gold-500"
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { skills } = content;

  return (
    <section id="habilidades" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionTitle title={skills.title} subtitle={skills.subtitle} />

        <div className="mt-14 grid md:grid-cols-2 gap-12">
          {/* Technical skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-lg font-bold text-navy-950 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-gold-500 rounded-full inline-block" />
              Habilidades Técnicas
            </h3>
            <div className="space-y-5">
              {skills.technical.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>

          {/* Soft skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-lg font-bold text-navy-950 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-navy-700 rounded-full inline-block" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full hover:border-gold-400 hover:text-navy-900 hover:bg-gold-50 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Certifications placeholder */}
            <div className="mt-10 p-5 bg-navy-950 rounded-2xl">
              <p className="text-gold-400 font-semibold text-sm mb-1">Certificações</p>
              <ul className="space-y-1.5 mt-3">
                {[
                  'CRC/SP – Conselho Regional de Contabilidade',
                  'Excel Avançado – Microsoft Office',
                  'Power BI – Análise de Dados',
                ].map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
