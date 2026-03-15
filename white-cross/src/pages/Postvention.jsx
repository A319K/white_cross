import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageSquare, Globe, Users, Heart, ArrowRight } from 'lucide-react';

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
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Consistent image placeholder
function ImagePlaceholder({ label = 'Image Coming Soon' }) {
  return (
    <div
      className="w-full h-72 lg:h-full rounded-2xl flex flex-col items-center justify-center gap-3"
      style={{
        background: 'linear-gradient(135deg, #BAE6FD 0%, #DBEAFE 50%, #E0F2FE 100%)',
        minHeight: '280px',
      }}
    >
      <Heart size={32} style={{ color: 'rgba(14,165,233,0.4)' }} />
      <span
        className="text-xs font-medium uppercase tracking-widest"
        style={{ color: 'rgba(14,165,233,0.5)', fontFamily: 'Outfit, sans-serif' }}
      >
        {label}
      </span>
    </div>
  );
}

const resources = [
  {
    name: '988 Suicide & Crisis Lifeline',
    contact: 'Call or text 988',
    detail: 'Available 24/7, free and confidential',
    icon: Phone,
    href: 'tel:988',
    btnLabel: 'Call 988',
    color: '#0EA5E9',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    name: 'SAMHSA National Helpline',
    contact: '1-800-662-4357',
    detail: 'Free, confidential, 24/7 treatment referral',
    icon: Phone,
    href: 'tel:18006624357',
    btnLabel: 'Call Now',
    color: '#0369A1',
    bg: 'rgba(3,105,161,0.08)',
  },
  {
    name: 'Crisis Text Line',
    contact: 'Text HOME to 741741',
    detail: 'Free 24/7 text-based crisis support',
    icon: MessageSquare,
    href: 'sms:741741&body=HOME',
    btnLabel: 'Text Now',
    color: '#0284C7',
    bg: 'rgba(2,132,199,0.08)',
  },
  {
    name: 'GriefShare',
    contact: 'griefshare.org',
    detail: 'Grief support groups in your area',
    icon: Globe,
    href: 'https://www.griefshare.org',
    btnLabel: 'Visit Site',
    color: '#0EA5E9',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    name: 'Shatterproof',
    contact: 'shatterproof.org',
    detail: 'Resources for addiction and loss',
    icon: Heart,
    href: 'https://www.shatterproof.org',
    btnLabel: 'Visit Site',
    color: '#0369A1',
    bg: 'rgba(3,105,161,0.08)',
  },
  {
    name: 'White Cross',
    contact: 'Contact us directly',
    detail: 'Reach out to our team — we\'re here for you',
    icon: Users,
    href: '/join',
    btnLabel: 'Contact Us',
    color: '#0284C7',
    bg: 'rgba(2,132,199,0.08)',
    internal: true,
  },
];

export default function Postvention() {
  return (
    <PageWrapper>
      {/* ── HERO — Sky tint theme ──────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #DBEAFE 0%, #E0F2FE 50%, #BAE6FD 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(14,165,233,0.1) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(14,165,233,0.12)', color: '#0284C7', fontFamily: 'Outfit, sans-serif' }}
          >
            Support & Healing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold mb-5"
            style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
          >
            Postvention
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: '#1E3A5F', fontFamily: 'Outfit, sans-serif' }}
          >
            Support and healing for those who have lost someone to drug misuse or overdose.
            You are not alone in your grief.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="tel:988"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-bold text-white text-lg transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: '#16163F',
                fontFamily: 'Fraunces, serif',
                boxShadow: '0 8px 28px rgba(14,165,233,0.3)',
              }}
            >
              <Phone size={20} />
              Call or Text 988
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS POSTVENTION ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeSection>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
              >
                Definition
              </span>
              <h2
                className="text-4xl font-bold mt-2 mb-6"
                style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
              >
                What is Postvention?
              </h2>
              <p
                className="text-gray-600 leading-relaxed text-base"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Postvention is the care and support provided to individuals and communities after a
                suicide or drug-related death. It helps survivors cope with grief, find healing, and
                prevents further tragedies through counseling, resources, and community.
              </p>
              <p
                className="text-gray-500 leading-relaxed text-sm mt-4"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Postvention recognizes that loss ripples outward — affecting families, friends, schools,
                and entire communities. Getting the right support can save lives and interrupt cycles
                of grief that might otherwise lead to further tragedy.
              </p>
            </FadeSection>
            <FadeSection delay={0.15}>
              <ImagePlaceholder label="Healing Together" />
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── IF YOU'VE LOST SOMEONE ───────────────────────────────────────────── */}
      <section
        className="py-20 text-center"
        style={{ background: '#E0F2FE' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <Heart size={36} className="mx-auto mb-6 opacity-40" style={{ color: '#0EA5E9' }} />
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
            >
              If You've Lost Someone
            </h2>
            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: '#1E3A5F', fontFamily: 'Outfit, sans-serif' }}
            >
              Losing someone to drug misuse or overdose shatters your world in ways words can't
              fully express. The grief, anger, and confusion can feel unbearable. At White Cross,
              we believe in creating a space where you can confront your feelings and begin to heal.
              Step by step. You are seen, you are heard, and you are not alone.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ── RESOURCE CARDS ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-12">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
            >
              Resources
            </span>
            <h2
              className="text-4xl font-bold mt-2"
              style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
            >
              Where to Turn
            </h2>
            <p
              className="text-gray-500 text-sm mt-2 max-w-xl mx-auto"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              These organizations provide compassionate support for grief, crisis, and recovery.
              All are free or low-cost.
            </p>
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  background: 'white',
                  border: '1px solid rgba(14,165,233,0.1)',
                  boxShadow: '0 4px 20px rgba(22,22,63,0.06)',
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span
                    className="p-2.5 rounded-xl flex-shrink-0"
                    style={{ background: r.bg }}
                  >
                    <r.icon size={18} style={{ color: r.color }} />
                  </span>
                  <div>
                    <h3
                      className="font-bold text-sm leading-tight"
                      style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
                    >
                      {r.name}
                    </h3>
                    <p
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: r.color, fontFamily: 'Outfit, sans-serif' }}
                    >
                      {r.contact}
                    </p>
                  </div>
                </div>
                <p
                  className="text-xs text-gray-500 flex-1 mb-4"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {r.detail}
                </p>
                {r.internal ? (
                  <Link
                    to={r.href}
                    className="text-center py-2 px-4 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
                    style={{ background: r.bg, color: r.color, fontFamily: 'Outfit, sans-serif' }}
                  >
                    {r.btnLabel}
                  </Link>
                ) : (
                  <a
                    href={r.href}
                    target={r.href.startsWith('http') ? '_blank' : undefined}
                    rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-center py-2 px-4 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
                    style={{ background: r.bg, color: r.color, fontFamily: 'Outfit, sans-serif' }}
                  >
                    {r.btnLabel}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REACH OUT CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 text-center" style={{ background: '#16163F' }}>
        <div className="max-w-2xl mx-auto px-4">
          <FadeSection>
            <h2
              className="text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              We're here for you.
            </h2>
            <p
              className="mb-8"
              style={{ color: 'rgba(186,230,253,0.75)', fontFamily: 'Outfit, sans-serif' }}
            >
              Reach out to White Cross. Whether you need resources, want to talk, or are looking
              for ways to help others — our team is here.
            </p>
            <Link
              to="/join"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-bold text-white transition-all hover:scale-105"
              style={{
                background: '#16163F',
                border: '2px solid rgba(14,165,233,0.4)',
                fontFamily: 'Fraunces, serif',
                boxShadow: '0 8px 24px rgba(14,165,233,0.3)',
              }}
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </FadeSection>
        </div>
      </section>
    </PageWrapper>
  );
}
