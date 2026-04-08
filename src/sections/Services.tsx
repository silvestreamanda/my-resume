import { motion } from 'framer-motion';
import {
  BarChart2,
  Target,
  FileText,
  TrendingUp,
  Shield,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';
import { content } from '@/content/content';
import { SectionTitle } from '@/components/ui/SectionTitle';

// Map icon names from content.ts to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  BarChart2,
  Target,
  FileText,
  TrendingUp,
  Shield,
  BookOpen,
};

export function Services() {
  const { services } = content;

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container-wide">
        <SectionTitle title={services.title} subtitle={services.subtitle} />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((service, i) => {
            const Icon = iconMap[service.icon] ?? BarChart2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative bg-slate-50 hover:bg-navy-950 rounded-2xl p-6 border border-slate-100 hover:border-navy-900 transition-all duration-300 cursor-default shadow-sm hover:shadow-xl hover:shadow-navy-900/20"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-navy-900/10 group-hover:bg-gold-500/15 flex items-center justify-center transition-colors duration-300 mb-4">
                  <Icon
                    size={22}
                    className="text-navy-700 group-hover:text-gold-400 transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <h3 className="font-bold text-navy-950 group-hover:text-white text-base transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
