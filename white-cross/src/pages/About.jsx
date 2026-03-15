import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Megaphone, Lightbulb, BookMarked, ArrowRight } from 'lucide-react';
import StatCounter from '../components/StatCounter';

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
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
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
            backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(14,165,233,0.12) 0%, transparent 60%)',
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
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold mb-5"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            About White Cross
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg opacity-75 max-w-2xl mx-auto"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Working toward a drug-free future, one community at a time.
          </motion.p>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeSection>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
              >
                Who We Are
              </span>
              <h2
                className="text-4xl font-bold mt-2 mb-6"
                style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
              >
                A Student-Led Movement
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                <p>
                  White Cross is a student-led organization dedicated to raising awareness about drug
                  abuse across New Jersey and beyond. What started as a local initiative has grown
                  into a mission-driven nonprofit with a passionate team of young advocates.
                </p>
                <p>
                  Drug abuse is a serious epidemic — <strong style={{ color: '#16163F' }}>23 million adults in the US</strong> struggle
                  with problematic drug use. Prescription drug misuse alone affects 1 in 6 teenagers.
                  Our goal is to prevent bigger problems before they occur — through education,
                  outreach, and real community connections.
                </p>
                <p>
                  We believe change happens when informed communities come together. That's why
                  everything we do is rooted in education, empathy, and empowerment.
                </p>
              </div>
            </FadeSection>

            {/* Quote card */}
            <FadeSection delay={0.15}>
              <div
                className="rounded-2xl p-8 lg:p-10 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #F0F9FF, #DBEAFE)',
                  border: '1px solid rgba(14,165,233,0.15)',
                }}
              >
                {/* Decorative cross */}
                <div className="absolute top-6 right-6 opacity-8">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="20" y="4" width="8" height="40" rx="4" fill="rgba(14,165,233,0.15)" />
                    <rect x="4" y="20" width="40" height="8" rx="4" fill="rgba(14,165,233,0.15)" />
                  </svg>
                </div>
                <span
                  className="text-6xl font-serif leading-none block mb-4 opacity-30"
                  style={{ color: '#0EA5E9', fontFamily: 'Georgia, serif' }}
                >
                  "
                </span>
                <blockquote
                  className="text-2xl lg:text-3xl font-bold leading-tight mb-6"
                  style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
                >
                  A future free from addiction is possible.
                </blockquote>
                <p
                  className="text-sm font-medium"
                  style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
                >
                  — White Cross Mission
                </p>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: '#F0F9FF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
            >
              How We Work
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold mt-2"
              style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
            >
              Our Approach
            </h2>
          </FadeSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Megaphone,
                title: 'Community Outreach',
                desc: 'We hold events and school assemblies to bring awareness directly to students and local communities — where it matters most.',
                delay: 0,
              },
              {
                icon: Lightbulb,
                title: 'Awareness Campaigns',
                desc: 'We design and run impactful campaigns to educate the public on the devastating effects of drug abuse and available paths to recovery.',
                delay: 0.1,
              },
              {
                icon: BookMarked,
                title: 'Education & Resources',
                desc: 'We provide real tools like RxDispose and Postvention support to empower people with accurate, actionable information.',
                delay: 0.2,
              },
            ].map(({ icon: Icon, title, desc, delay }) => (
              <FadeSection key={title} delay={delay}>
                <div
                  className="p-7 rounded-2xl h-full"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(14,165,233,0.1)',
                    boxShadow: '0 4px 24px rgba(22,22,63,0.06)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(14,165,233,0.1)' }}
                  >
                    <Icon size={20} style={{ color: '#0EA5E9' }} />
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: '#16163F' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-12">
            <h2
              className="text-3xl lg:text-4xl font-bold text-white"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Why This Work Matters
            </h2>
          </FadeSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <StatCounter
              value={23000000}
              label="US Adults With Problematic Drug Use"
              sublabel="SAMHSA 2023"
            />
            <StatCounter
              display="1 in 6"
              label="Teenagers Misuse Prescription Drugs"
              sublabel="NIDA"
            />
            <StatCounter
              value={90}
              suffix="%"
              label="People With Addiction Don't Seek Help"
              sublabel="SAMHSA"
            />
          </div>
        </div>
      </section>

      {/* ── TEAM CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div
              className="rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 justify-between"
              style={{
                background: 'linear-gradient(135deg, #F0F9FF 0%, #DBEAFE 100%)',
                border: '1px solid rgba(14,165,233,0.15)',
              }}
            >
              <div>
                <h3
                  className="text-3xl font-bold mb-3"
                  style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
                >
                  Meet the People Behind White Cross
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Our team is made up of dedicated students, designers, writers, and advocates — all
                  united by a shared mission to create lasting change in their communities.
                </p>
              </div>
              <Link
                to="/team"
                className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105 active:scale-95"
                style={{
                  background: '#16163F',
                  fontFamily: 'Fraunces, serif',
                  boxShadow: '0 8px 24px rgba(14,165,233,0.3)',
                }}
              >
                Meet the Team
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </PageWrapper>
  );
}
