import { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CrisisBanner() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
          style={{ zIndex: 9999 }}
        >
          <div
            className="flex items-center justify-center gap-3 px-4 py-2 text-white text-xs relative"
            style={{ background: '#0A0A2E', borderBottom: '1px solid rgba(186, 230, 253, 0.12)' }}
          >
            <Phone
              size={12}
              className="flex-shrink-0"
              style={{ color: '#38BDF8' }}
            />
            <span style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '0.01em', color: 'rgba(255,255,255,0.75)' }}>
              Need immediate help?{' '}
              <a
                href="tel:988"
                className="font-bold transition-opacity hover:opacity-80"
                style={{ color: '#D97706', textDecoration: 'none' }}
              >
                Call or text 988
              </a>
              {' '}— Free, confidential crisis support, 24/7
            </span>
            <button
              onClick={() => setDismissed(true)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded transition-colors"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              aria-label="Dismiss banner"
            >
              <X size={12} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
