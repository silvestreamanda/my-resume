import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { content, getWhatsAppLink } from '@/content/content';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

const highlightIcons = [Briefcase, Award, GraduationCap];

export function About() {
  const { about, contact, person } = content;
  const whatsappLink = getWhatsAppLink(contact.whatsapp.number, contact.whatsapp.message);

  return (
    <section id="sobre" className="section-padding bg-slate-50">
      <div className="container-narrow">
        <SectionTitle title={about.title} />

        <div className="mt-14 grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Avatar circle */}
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-hero-gradient flex items-center justify-center shadow-2xl shadow-navy-900/30">
                <span className="text-7xl sm:text-9xl font-extrabold text-white/10 select-none">
                  {person.firstName[0]}
                </span>
                <span className="absolute text-5xl sm:text-6xl font-extrabold text-gold-400">
                  {person.firstName[0]}
                  <span className="text-white">{person.name.split(' ')[1]?.[0]}</span>
                </span>
              </div>

              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold-500/30 scale-110" />
              <div className="absolute inset-0 rounded-full border border-gold-500/15 scale-125" />

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">Disponível</span>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  {p}
                </p>
              ))}
            </div>

            {/* Highlight stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {about.highlights.map((item, i) => {
                const Icon = highlightIcons[i % highlightIcons.length];
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                    className="text-center bg-white rounded-2xl p-4 shadow-sm border border-slate-100"
                  >
                    <Icon size={18} className="text-gold-500 mx-auto mb-1.5" />
                    <div className="text-2xl font-extrabold text-navy-900">{item.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-tight">{item.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8">
              <Button href={whatsappLink} variant="primary" size="md" external>
                <WhatsAppIcon size={17} />
                Entre em contato
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
