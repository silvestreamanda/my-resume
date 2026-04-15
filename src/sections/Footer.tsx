import { Linkedin, Mail, Heart } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { content, getWhatsAppLink } from '@/content/content';

export function Footer() {
  const { footer, contact, person } = content;
  const whatsappLink = getWhatsAppLink(contact.whatsapp.number, contact.whatsapp.message);

  const socialLinks = [
    {
      label: 'WhatsApp',
      href: whatsappLink,
      icon: WhatsAppIcon,
      external: true,
    },
    {
      label: 'LinkedIn',
      href: contact.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: 'E-mail',
      href: `mailto:${contact.email}`,
      icon: Mail,
      external: false,
    },
  ];

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Habilidades', href: '#habilidades' },
  ];

  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <p className="text-white font-bold text-lg">
              <span className="text-gold-400">A</span>manda <span className="text-gold-400">S</span>
              ilvestre
            </p>
            <p className="text-slate-400 text-sm mt-1">{person.role}</p>
            <p className="text-slate-500 text-sm mt-3 italic">"{footer.tagline}"</p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-4 uppercase tracking-wider">
              Navegação
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-slate-300 font-semibold text-sm mb-4 uppercase tracking-wider">
              Contato
            </p>
            <ul className="space-y-3">
              {socialLinks.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2.5 text-slate-400 hover:text-gold-400 text-sm transition-colors group"
                  >
                    <Icon
                      size={15}
                      className="text-slate-500 group-hover:text-gold-500 transition-colors"
                    />
                    {label === 'E-mail' ? contact.email : label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>{footer.copyright} · Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart size={12} className="text-gold-500 mx-0.5" /> por{' '}
            <span className="text-slate-400">
              <a
                href="https://romulosiq.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rômulo Siqueira
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
