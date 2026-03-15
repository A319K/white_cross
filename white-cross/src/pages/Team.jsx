import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TeamCard from '../components/TeamCard';
import { teamGroups } from '../data/team';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

function FadeSection({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Team() {
  return (
    <PageWrapper>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #16163F 0%, #1E1E5A 50%, #0D0D28 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 60% 40%, rgba(14,165,233,0.15) 0%, transparent 55%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(14,165,233,0.2)', color: '#BAE6FD', fontFamily: 'Outfit, sans-serif' }}
          >
            Our People
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold mb-5"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Meet the Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg opacity-75 max-w-2xl mx-auto"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Dedicated individuals united by a mission to create lasting change.
          </motion.p>
        </div>
      </section>

      {/* ── TEAM GROUPS ──────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {teamGroups.map((group, groupIndex) => (
            <div key={group.label} className="mb-16 last:mb-0">
              <FadeSection className="mb-8">
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(14,165,233,0.1)',
                      color: '#0EA5E9',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  >
                    {group.label}
                  </span>
                  <div className="flex-1 h-px" style={{ background: 'rgba(14,165,233,0.12)' }} />
                </div>
              </FadeSection>

              <div
                className={`grid gap-5 ${
                  group.members.length === 1
                    ? 'grid-cols-1 max-w-xs'
                    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
                }`}
              >
                {group.members.map((member, i) => (
                  <TeamCard
                    key={member.name}
                    member={member}
                    index={groupIndex * 10 + i}
                    delay={i * 0.06}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── JOIN BANNER ───────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: '#F0F9FF' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeSection>
            <h3
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
            >
              Want to join the White Cross team?
            </h3>
            <p className="text-gray-500 mb-6 text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
              We're always looking for passionate people to help us educate, prevent, and empower.
            </p>
            <a
              href="/join"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white transition-all hover:scale-105"
              style={{
                background: '#16163F',
                fontFamily: 'Outfit, sans-serif',
                boxShadow: '0 8px 24px rgba(14,165,233,0.3)',
              }}
            >
              Apply to Join →
            </a>
          </FadeSection>
        </div>
      </section>
    </PageWrapper>
  );
}
