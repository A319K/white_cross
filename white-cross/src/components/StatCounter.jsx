import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * StatCounter — animates a number from 0 to `value` when scrolled into view.
 * Supports:
 *  - prefix: e.g. "$"
 *  - suffix: e.g. "+" or "%"
 *  - value: numeric target (pass as number, e.g. 106699)
 *  - display: optional override string for non-numeric displays like "1 in 6"
 */
export default function StatCounter({ value, prefix = '', suffix = '', display, label, sublabel }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || display) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value, display]);

  const formatted = display
    ? display
    : value >= 1000
    ? count.toLocaleString()
    : count;

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4">
      <span
        className="text-4xl lg:text-5xl font-bold mb-2 tabular-nums"
        style={{ fontFamily: 'Fraunces, serif', color: '#BAE6FD' }}
      >
        {prefix}
        {display && !isInView ? '0' : formatted}
        {suffix}
      </span>
      <span
        className="text-sm font-semibold uppercase tracking-wider mb-1"
        style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(255,255,255,0.9)' }}
      >
        {label}
      </span>
      {sublabel && (
        <span
          className="text-xs mt-0.5"
          style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(255,255,255,0.45)' }}
        >
          {sublabel}
        </span>
      )}
    </div>
  );
}
