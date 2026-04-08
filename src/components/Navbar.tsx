import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { content, getWhatsAppLink } from '@/content/content';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Habilidades', href: '#habilidades' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = getWhatsAppLink(
    content.contact.whatsapp.number,
    content.contact.whatsapp.message,
  );

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent',
      ].join(' ')}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="text-white font-bold text-lg tracking-tight hover:text-gold-400 transition-colors"
        >
          <span className="text-gold-500">A</span>manda <span className="text-gold-500">S</span>
          ilvestre
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-gold-400 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <WhatsAppIcon size={16} />
          Falar agora
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Menu"
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-navy-950/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-slate-200 hover:text-gold-400 hover:bg-white/5 font-medium py-3 px-3 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold py-3 px-3 rounded-lg transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
