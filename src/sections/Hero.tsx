import { motion } from 'framer-motion';
import { Linkedin, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { content, getWhatsAppLink } from '@/content/content';
import { Button } from '@/components/ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
};

export function Hero() {
  const { person, contact } = content;
  const whatsappLink = getWhatsAppLink(contact.whatsapp.number, contact.whatsapp.message);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-navy-700/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-navy-800/30 blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Available badge */}
        {person.available && (
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm"
          >
            <CheckCircle2 size={13} />
            {person.availableText}
          </motion.div>
        )}

        {/* Name */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight"
        >
          {person.name.split(' ')[0]}{' '}
          <span className="text-gold-400">{person.name.split(' ').slice(1).join(' ')}</span>
        </motion.h1>

        {/* Role + credential */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-4 text-lg sm:text-xl font-semibold text-slate-300 tracking-wide"
        >
          {person.role}
          <span className="text-gold-500/70 mx-2">·</span>
          <span className="text-slate-400 font-normal">{person.credential}</span>
        </motion.p>

        {/* Location */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-3 inline-flex items-center gap-1.5 text-slate-400 text-sm"
        >
          <MapPin size={14} />
          {person.location}
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
        >
          {person.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href={whatsappLink} variant="primary" size="lg" external>
            <WhatsAppIcon size={20} />
            Falar no WhatsApp
          </Button>
          <Button href={contact.linkedin} variant="outline" size="lg" external>
            <Linkedin size={20} />
            Ver LinkedIn
          </Button>
        </motion.div>

        {/* Divider stats */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto border-t border-white/10 pt-10"
        >
          {content.about.highlights.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-extrabold text-gold-400">{item.value}</div>
              <div className="mt-1 text-xs text-slate-400 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-gold-400 transition-colors flex flex-col items-center gap-1"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs tracking-widest uppercase">Saiba mais</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
