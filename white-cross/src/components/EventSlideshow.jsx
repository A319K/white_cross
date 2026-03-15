import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventSlideshow({ images = [], title = '', autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next, total]);

  if (total === 0) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl group" style={{ aspectRatio: '16/10' }}>
      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} — photo ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </AnimatePresence>

      {/* Gradient overlay at bottom for dots */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.45))' }}
      />

      {/* Nav arrows — visible on hover */}
      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{
              background: 'rgba(255,255,255,0.85)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <ChevronLeft size={20} style={{ color: '#16163F' }} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{
              background: 'rgba(255,255,255,0.85)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <ChevronRight size={20} style={{ color: '#16163F' }} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {total > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-200"
              style={{
                width: i === current ? '20px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: i === current ? 'white' : 'rgba(255,255,255,0.5)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>
      )}

      {/* Counter badge */}
      <div
        className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold"
        style={{
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          fontFamily: 'Outfit, sans-serif',
          backdropFilter: 'blur(8px)',
        }}
      >
        {current + 1} / {total}
      </div>
    </div>
  );
}
