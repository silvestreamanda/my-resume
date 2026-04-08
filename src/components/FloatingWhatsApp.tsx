import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { content, getWhatsAppLink } from '@/content/content';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowTooltip(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const whatsappLink = getWhatsAppLink(
    content.contact.whatsapp.number,
    content.contact.whatsapp.message,
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 8 }}
                className="relative bg-white text-navy-950 text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl max-w-[200px] text-center"
              >
                Olá! Posso te ajudar? 👋
                {/* Arrow */}
                <span className="absolute -bottom-2 right-6 w-3 h-3 bg-white rotate-45 shadow-sm" />
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 bg-slate-200 hover:bg-slate-300 rounded-full p-0.5 transition-colors"
                  aria-label="Fechar"
                >
                  <X size={12} className="text-slate-600" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Falar no WhatsApp"
            className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full p-4 shadow-xl shadow-green-500/30 transition-colors"
          >
            <WhatsAppIcon size={26} />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
