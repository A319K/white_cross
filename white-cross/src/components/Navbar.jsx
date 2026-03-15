import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import WhiteCrossLogo from './WhiteCrossLogo';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'RxDispose', to: '/rxdispose' },
  { label: 'Postvention', to: '/postvention' },
  { label: 'Team', to: '/team' },
  { label: 'Join Us', to: '/join' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: '#FAFAF9',
        borderBottom: scrolled ? 'none' : '1px solid rgba(22, 22, 63, 0.07)',
        boxShadow: scrolled ? '0 1px 20px rgba(22, 22, 63, 0.08)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', lineHeight: 0 }}>
            <WhiteCrossLogo size="nav" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-sm transition-colors duration-150"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: isActive(link.to) ? 600 : 400,
                  color: isActive(link.to) ? '#16163F' : '#78716C',
                  textDecoration: 'none',
                }}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                    style={{ background: '#0EA5E9' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:988"
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: '#16163F',
                fontFamily: 'Outfit, sans-serif',
                boxShadow: '0 2px 12px rgba(22, 22, 63, 0.25)',
              }}
            >
              <Phone size={13} />
              Get Help Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#16163F' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden lg:hidden"
            style={{ borderTop: '1px solid rgba(22, 22, 63, 0.07)', background: '#FAFAF9' }}
          >
            <div className="px-4 py-5 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-3 rounded-xl text-sm transition-colors"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: isActive(link.to) ? 600 : 400,
                    color: isActive(link.to) ? '#16163F' : '#78716C',
                    background: isActive(link.to) ? 'rgba(14, 165, 233, 0.07)' : 'transparent',
                    borderLeft: isActive(link.to) ? '2px solid #0EA5E9' : '2px solid transparent',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:988"
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: '#16163F',
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                <Phone size={14} />
                Get Help Now — Call 988
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
