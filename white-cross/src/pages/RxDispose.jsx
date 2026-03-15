import { motion } from 'framer-motion';
import { Leaf, ArrowDown } from 'lucide-react';
import RxDisposeApp from '../components/RxDisposeApp';

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

export default function RxDispose() {
  const scrollToChecker = () => {
    document.getElementById('checker')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToLocator = () => {
    document.getElementById('locator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageWrapper>
      {/* ── HERO — Green theme ────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0A3D0D 0%, #1B5E20 50%, #2E7D32 100%)' }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle, #4CAF50, transparent)', transform: 'translate(30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle, #81C784, transparent)', transform: 'translate(-30%, 30%)' }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <Leaf size={28} className="text-green-300" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl lg:text-7xl font-extrabold mb-4"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            RxDispose
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-xl mb-8 max-w-xl mx-auto"
            style={{ color: 'rgba(200, 230, 201, 0.9)', fontFamily: 'Outfit, sans-serif' }}
          >
            Safe medication disposal, made simple. Protect your family and community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={scrollToChecker}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              style={{
                background: 'white',
                color: '#1B5E20',
                fontFamily: 'Outfit, sans-serif',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              }}
            >
              Check My Medication
              <ArrowDown size={15} />
            </button>
            <button
              onClick={scrollToLocator}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 border-2 border-white/30 hover:border-white/60"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              Find Disposal Site
              <ArrowDown size={15} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── APP SECTION ───────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: '#E8F5E9' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 p-5 rounded-2xl flex items-start gap-4"
            style={{
              background: 'white',
              border: '1px solid rgba(27, 94, 32, 0.15)',
              boxShadow: '0 2px 16px rgba(27,94,32,0.06)',
            }}
          >
            <span className="text-2xl flex-shrink-0">ℹ️</span>
            <div style={{ fontFamily: 'Outfit, sans-serif' }}>
              <p className="font-semibold text-sm mb-1" style={{ color: '#1B5E20' }}>
                How to use RxDispose
              </p>
              <p className="text-sm text-gray-600">
                Use the <strong>info tabs on the left</strong> to learn about safe disposal methods.
                Use the <strong>tools on the right</strong> to check if your medication is flushable
                or find a nearby disposal site. No sign-up required.
              </p>
            </div>
          </motion.div>

          <RxDisposeApp />
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────────── */}
      <section
        className="py-16 text-center"
        style={{ background: '#1B5E20' }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <p
            className="text-4xl font-bold text-white mb-3"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Protect your community.
          </p>
          <p
            className="text-green-200 mb-6 text-sm"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Proper medication disposal prevents drug misuse, protects the environment,
            and keeps your household safe.
          </p>
          <a
            href="https://www.dea.gov/takebackday"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-sm bg-white transition-all hover:scale-105"
            style={{ color: '#1B5E20', fontFamily: 'Outfit, sans-serif' }}
          >
            Find a DEA Take Back Site →
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
