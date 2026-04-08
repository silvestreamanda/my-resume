import { motion } from 'framer-motion';
import { Linkedin, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { content, getWhatsAppLink } from '@/content/content';

export function CTA() {
  const { cta, contact } = content;
  const whatsappLink = getWhatsAppLink(contact.whatsapp.number, contact.whatsapp.message);

  return (
    <section className="section-padding bg-hero-gradient relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-navy-700/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <span className="inline-block text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Vamos conversar?
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight whitespace-pre-line">
            {cta.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {cta.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-gold-500/25 transition-all duration-200"
            >
              <WhatsAppIcon size={20} />
              {cta.whatsappLabel}
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/10"
            >
              <Linkedin size={20} />
              {cta.linkedinLabel}
            </motion.a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Resposta rápida
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Atendimento personalizado
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Sigilo garantido
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
