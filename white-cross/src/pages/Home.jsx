import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BookOpen, ShieldCheck, Users, ArrowRight, Phone } from 'lucide-react';
import StatCounter from '../components/StatCounter';
import { events } from '../data/events';

// Page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

// Fade-up section
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

// Decorative cross made from two intersecting divs
function HeroCross() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Radial glow behind the cross */}
      <div
        className="absolute"
        style={{
          width: '340px',
          height: '340px',
          background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      {/* Slowly rotating cross container */}
      <div
        className="relative animate-spin-slow"
        style={{ width: '240px', height: '240px' }}
      >
        {/* Vertical arm */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '52px',
            height: '200px',
            background: 'rgba(14, 165, 233, 0.22)',
            borderRadius: '12px',
            border: '1px solid rgba(56, 189, 248, 0.35)',
          }}
        />
        {/* Horizontal arm */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '52px',
            background: 'rgba(14, 165, 233, 0.22)',
            borderRadius: '12px',
            border: '1px solid rgba(56, 189, 248, 0.35)',
          }}
        />
      </div>
      {/* Static inner cross highlight (does not rotate, gives depth) */}
      <div className="absolute" style={{ width: '240px', height: '240px' }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '24px',
            height: '96px',
            background: 'rgba(56, 189, 248, 0.55)',
            borderRadius: '6px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '96px',
            height: '24px',
            background: 'rgba(56, 189, 248, 0.55)',
            borderRadius: '6px',
          }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  return (
    <PageWrapper>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="grain relative min-h-screen flex items-center overflow-hidden"
        style={{ background: '#0A0A2E' }}
      >
        {/* Subtle deep radial gradient layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(14,165,233,0.07) 0%, transparent 70%)',
            zIndex: 2,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0" style={{ zIndex: 3 }}>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">

            {/* Left content */}
            <div className="lg:col-span-3">
              {/* Tag badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-lg mb-8"
                  style={{
                    background: 'rgba(22, 22, 63, 0.8)',
                    color: '#0EA5E9',
                    fontFamily: 'Outfit, sans-serif',
                    border: '1px solid rgba(14, 165, 233, 0.2)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: '#0EA5E9' }}
                  />
                  Drug Abuse Prevention
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-7xl lg:text-8xl leading-[0.95] mb-7 text-white"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 800 }}
              >
                Where{' '}
                <span style={{ color: '#38BDF8' }}>Hope</span>{' '}
                <br />
                Meets{' '}
                <br />
                Action.
              </motion.h1>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg leading-relaxed mb-10 max-w-xl"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                White Cross is a student-led nonprofit dedicated to drug abuse prevention, education,
                and recovery support across New Jersey. We believe a future free from addiction is possible.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="tel:988"
                  className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                  style={{
                    background: '#D97706',
                    fontFamily: 'Outfit, sans-serif',
                    boxShadow: '0 8px 28px rgba(217, 119, 6, 0.35)',
                  }}
                >
                  <Phone size={16} />
                  Get Help Now
                </a>
                <Link
                  to="/about"
                  className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold transition-all hover:bg-white/10"
                  style={{
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.3)',
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  Learn About Us
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Right — decorative cross */}
            <motion.div
              className="lg:col-span-2 h-64 lg:h-[480px]"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroCross />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <section
        className="py-14"
        style={{ background: '#16163F', borderTop: '1px solid rgba(14, 165, 233, 0.1)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x"
            style={{ borderColor: 'rgba(186, 230, 253, 0.1)' }}
          >
            <StatCounter
              display="1 in 6"
              label="Teenagers Misuse Prescription Drugs"
              sublabel="NIDA, 2023"
            />
            <StatCounter
              value={60}
              suffix="%+"
              label="Don't Receive Treatment They Need"
              sublabel="SAMHSA National Survey"
            />
            <StatCounter
              value={106699}
              label="Overdose Deaths in 2021"
              sublabel="CDC, National Center for Health Statistics"
            />
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: '#FAFAF9' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-14">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
            >
              Our Mission
            </span>
            <h2
              className="text-4xl lg:text-5xl mt-3"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, color: '#16163F' }}
            >
              What We Do
            </h2>
          </FadeSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Educate',
                desc: 'We deliver assemblies, classes, and campaigns that bring real drug abuse awareness directly to schools and communities.',
                delay: 0,
              },
              {
                icon: ShieldCheck,
                title: 'Prevent',
                desc: 'Through early intervention, tools like RxDispose, and community partnerships, we stop problems before they start.',
                delay: 0.1,
              },
              {
                icon: Users,
                title: 'Empower',
                desc: 'We equip individuals with knowledge, resources, and peer support so they can make informed decisions and help others.',
                delay: 0.2,
              },
            ].map(({ icon: Icon, title, desc, delay }) => (
              <FadeSection key={title} delay={delay}>
                <div
                  className="p-8 rounded-xl h-full group hover:-translate-y-1 transition-all duration-200"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(22, 22, 63, 0.07)',
                    boxShadow: '0 2px 20px rgba(22, 22, 63, 0.05)',
                    borderLeft: '3px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderLeft = '3px solid #0EA5E9';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(22, 22, 63, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderLeft = '3px solid transparent';
                    e.currentTarget.style.boxShadow = '0 2px 20px rgba(22, 22, 63, 0.05)';
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(217, 119, 6, 0.1)' }}
                  >
                    <Icon size={22} style={{ color: '#D97706' }} />
                  </div>
                  <h3
                    className="text-xl mb-3"
                    style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, color: '#16163F' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="leading-relaxed text-sm"
                    style={{ fontFamily: 'Outfit, sans-serif', color: '#78716C' }}
                  >
                    {desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRISIS CALLOUT ────────────────────────────────────────────────────── */}
      <section
        className="py-20 text-white text-center"
        style={{ background: '#0A0A2E' }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <FadeSection>
            <span
              className="text-4xl mb-6 block"
              style={{ filter: 'hue-rotate(180deg) saturate(1.5)' }}
            >
              🤍
            </span>
            <h2
              className="text-4xl lg:text-5xl mb-5"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 800, lineHeight: 1.1 }}
            >
              In crisis? You are not alone.
            </h2>
            <p
              className="text-lg mb-10"
              style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(255,255,255,0.6)' }}
            >
              Call or text{' '}
              <strong style={{ color: '#38BDF8' }}>988</strong> to reach a trained counselor
              immediately, 24/7. Free and confidential.
            </p>
            <a
              href="tel:988"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:opacity-90 active:scale-95"
              style={{
                background: '#D97706',
                fontFamily: 'Outfit, sans-serif',
                boxShadow: '0 8px 32px rgba(217, 119, 6, 0.35)',
                color: 'white',
              }}
            >
              <Phone size={20} />
              Call or Text 988
            </a>
          </FadeSection>
        </div>
      </section>

      {/* ── EVENTS PREVIEW ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: '#FAFAF9' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="flex items-end justify-between mb-10">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
              >
                Community
              </span>
              <h2
                className="text-4xl lg:text-5xl mt-2"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, color: '#16163F' }}
              >
                Our Events
              </h2>
            </div>
            <Link
              to="/events"
              className="hidden sm:flex items-center gap-2 font-semibold text-sm transition-colors hover:opacity-70"
              style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
            >
              View All Events <ArrowRight size={14} />
            </Link>
          </FadeSection>

          <FadeSection delay={0.1}>
            <div
              className="grid lg:grid-cols-2 gap-8 items-center rounded-2xl overflow-hidden"
              style={{
                background: 'white',
                boxShadow: '0 4px 24px rgba(22, 22, 63, 0.08)',
                border: '1px solid rgba(22, 22, 63, 0.06)',
              }}
            >
              <img
                src={events[0].image}
                alt={events[0].title}
                className="w-full h-72 lg:h-80 object-cover"
              />
              <div className="p-8">
                <span
                  className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
                  style={{
                    background: 'rgba(14, 165, 233, 0.1)',
                    color: '#0EA5E9',
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  Featured Event
                </span>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
                >
                  {events[0].title}
                </h3>
                <p
                  className="text-gray-500 leading-relaxed text-sm mb-6"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {events[0].description}
                </p>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 active:scale-95"
                  style={{
                    background: '#16163F',
                    fontFamily: 'Outfit, sans-serif',
                    boxShadow: '0 4px 16px rgba(22, 22, 63, 0.2)',
                  }}
                >
                  View All Events
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeSection>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 font-semibold text-sm"
              style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
            >
              View All Events <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24" style={{ background: '#16163F' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeSection>
            <h2
              className="text-4xl lg:text-5xl text-white mb-4"
              style={{ fontFamily: 'Fraunces, serif', fontWeight: 800 }}
            >
              Join Our Mission
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: 'rgba(186, 230, 253, 0.7)', fontFamily: 'Outfit, sans-serif' }}
            >
              Stay updated on events, resources, and ways to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              {joined ? (
                <div
                  className="flex-1 px-6 py-3.5 rounded-xl text-center font-semibold"
                  style={{
                    background: 'rgba(14, 165, 233, 0.15)',
                    color: '#BAE6FD',
                    fontFamily: 'Outfit, sans-serif',
                    border: '1px solid rgba(186, 230, 253, 0.15)',
                  }}
                >
                  You're on the list!
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 rounded-xl text-sm outline-none"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(186, 230, 253, 0.15)',
                      color: 'white',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  />
                  <button
                    onClick={() => email && setJoined(true)}
                    className="px-7 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                    style={{
                      background: '#D97706',
                      fontFamily: 'Outfit, sans-serif',
                      boxShadow: '0 4px 20px rgba(217, 119, 6, 0.3)',
                    }}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
            <p
              className="mt-4 text-xs"
              style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Outfit, sans-serif' }}
            >
              Or{' '}
              <Link
                to="/join"
                className="underline hover:text-sky-300 transition-colors"
                style={{ color: 'rgba(186, 230, 253, 0.5)' }}
              >
                apply to join the team →
              </Link>
            </p>
          </FadeSection>
        </div>
      </section>
    </PageWrapper>
  );
}
