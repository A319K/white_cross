import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, Heart } from 'lucide-react';
import WhiteCrossLogo from './WhiteCrossLogo';

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: '#0A0A2E', borderTop: '1px solid rgba(186, 230, 253, 0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

          {/* Column 1 — Logo & tagline */}
          <div className="space-y-5">
            <WhiteCrossLogo size="full" />
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(186, 230, 253, 0.6)', fontFamily: 'Outfit, sans-serif' }}
            >
              Educate, Prevent, and Empower.
              <br />
              A Future Free From Addiction.
            </p>
            <div
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg"
              style={{
                background: 'rgba(14, 165, 233, 0.1)',
                color: '#BAE6FD',
                fontFamily: 'Outfit, sans-serif',
                border: '1px solid rgba(186, 230, 253, 0.12)',
              }}
            >
              <Heart size={11} />
              Made with purpose
            </div>
            <p
              className="text-xs"
              style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Outfit, sans-serif' }}
            >
              © 2025 White Cross. All rights reserved.
            </p>
          </div>

          {/* Column 2 — Quick links */}
          <div className="space-y-5">
            <h4
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#BAE6FD', fontFamily: 'Outfit, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Events', to: '/events' },
                { label: 'RxDispose', to: '/rxdispose' },
                { label: 'Postvention Support', to: '/postvention' },
                { label: 'Our Team', to: '/team' },
                { label: 'Join Us', to: '/join' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Outfit, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="space-y-5">
            <h4
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#BAE6FD', fontFamily: 'Outfit, sans-serif' }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="tel:988"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white group"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Outfit, sans-serif' }}
              >
                <span
                  className="p-2 rounded-lg transition-colors group-hover:bg-sky-900/40"
                  style={{ background: 'rgba(14, 165, 233, 0.1)' }}
                >
                  <Phone size={14} style={{ color: '#0EA5E9' }} />
                </span>
                Crisis Line: Call or Text 988
              </a>
              <a
                href="mailto:whitecrossorg@gmail.com"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white group"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Outfit, sans-serif' }}
              >
                <span
                  className="p-2 rounded-lg transition-colors group-hover:bg-sky-900/40"
                  style={{ background: 'rgba(14, 165, 233, 0.1)' }}
                >
                  <Mail size={14} style={{ color: '#0EA5E9' }} />
                </span>
                whitecrossorg@gmail.com
              </a>
              <a
                href="https://instagram.com/whitecrossagainstdrugs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white group"
                style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Outfit, sans-serif' }}
              >
                <span
                  className="p-2 rounded-lg transition-colors group-hover:bg-sky-900/40"
                  style={{ background: 'rgba(14, 165, 233, 0.1)' }}
                >
                  <Instagram size={14} style={{ color: '#0EA5E9' }} />
                </span>
                @whitecrossagainstdrugs
              </a>
            </div>

            {/* Crisis callout */}
            <div
              className="mt-2 p-5 rounded-xl"
              style={{
                background: 'rgba(217, 119, 6, 0.08)',
                border: '1px solid rgba(217, 119, 6, 0.2)',
              }}
            >
              <p
                className="text-xs font-medium mb-2"
                style={{ color: '#BAE6FD', fontFamily: 'Outfit, sans-serif' }}
              >
                In crisis? You're not alone.
              </p>
              <a
                href="tel:988"
                className="text-sm font-bold transition-opacity hover:opacity-80"
                style={{ color: '#D97706', fontFamily: 'Outfit, sans-serif' }}
              >
                Call or text 988 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
