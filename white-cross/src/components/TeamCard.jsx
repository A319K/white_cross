import { motion } from 'framer-motion';
import { getInitials } from '../data/team';

// Avatar gradient pairs — cycles through for visual variety
const gradients = [
  'linear-gradient(135deg, #0EA5E9, #16163F)',
  'linear-gradient(135deg, #0369A1, #0EA5E9)',
  'linear-gradient(135deg, #16163F, #0284C7)',
  'linear-gradient(135deg, #38BDF8, #0369A1)',
  'linear-gradient(135deg, #075985, #0EA5E9)',
];

export default function TeamCard({ member, index = 0, delay = 0 }) {
  const { name, role, secondary } = member;
  const initials = getInitials(name);
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col items-center text-center p-6 rounded-2xl group cursor-default"
      style={{
        background: 'white',
        boxShadow: '0 2px 16px rgba(22, 22, 63, 0.07)',
        border: '1px solid rgba(22, 22, 63, 0.05)',
        transition: 'box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(14, 165, 233, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 16px rgba(22, 22, 63, 0.07)';
      }}
    >
      {/* Circular avatar */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4 flex-shrink-0"
        style={{ background: gradient, fontFamily: 'Fraunces, serif' }}
      >
        {initials}
      </div>

      {/* Name */}
      <h4
        className="font-semibold text-sm mb-1.5 leading-tight"
        style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
      >
        {name}
      </h4>

      {/* Primary role badge */}
      <span
        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-1.5"
        style={{
          background: 'rgba(14, 165, 233, 0.1)',
          color: '#0EA5E9',
          fontFamily: 'Outfit, sans-serif',
        }}
      >
        {role}
      </span>

      {/* Secondary role */}
      {secondary && (
        <span
          className="text-xs"
          style={{ color: '#9ca3af', fontFamily: 'Outfit, sans-serif' }}
        >
          {secondary}
        </span>
      )}
    </motion.div>
  );
}
