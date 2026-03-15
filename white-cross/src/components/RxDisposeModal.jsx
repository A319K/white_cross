import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function RxDisposeModal({ isOpen, onClose, title, icon: Icon, children }) {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(13, 13, 40, 0.7)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
          >
            {/* Modal card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: '85vh' }}
            >
              {/* Header */}
              <div
                className="flex items-center gap-3 px-6 py-5 border-b"
                style={{ borderColor: 'rgba(27, 94, 32, 0.1)' }}
              >
                {Icon && (
                  <span
                    className="p-2 rounded-xl"
                    style={{ background: 'rgba(27, 94, 32, 0.1)' }}
                  >
                    <Icon size={20} style={{ color: '#1B5E20' }} />
                  </span>
                )}
                <h2
                  className="text-lg font-bold flex-1"
                  style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
                >
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full transition-colors hover:bg-gray-100"
                  aria-label="Close modal"
                >
                  <X size={18} style={{ color: '#6b7280' }} />
                </button>
              </div>

              {/* Body — scrollable */}
              <div className="px-6 py-5 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 80px)' }}>
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
