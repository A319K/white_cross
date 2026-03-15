import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import EventSlideshow from '../components/EventSlideshow';
import EventCalendar from '../components/EventCalendar';
import { events } from '../data/events';
import { format, parseISO } from 'date-fns';

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

function formatEventDate(date, endDate) {
  try {
    const start = format(parseISO(date), 'MMM d, yyyy');
    if (endDate) {
      const end = format(parseISO(endDate), 'MMM d, yyyy');
      return `${start} – ${end}`;
    }
    return start;
  } catch {
    return date;
  }
}

export default function Events() {
  return (
    <PageWrapper>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #16163F 0%, #1E1E5A 60%, #0D0D28 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 60%, rgba(14,165,233,0.15) 0%, transparent 55%)',
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
            Community
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold mb-5"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg opacity-75 max-w-2xl mx-auto"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Bringing awareness to communities across New Jersey — one event at a time.
          </motion.p>
        </div>
      </section>

      {/* ── EVENT SECTIONS WITH SLIDESHOWS ───────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {events.map((event, idx) => (
            <FadeSection key={event.id} delay={idx * 0.1}>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Slideshow */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <EventSlideshow
                    images={event.images || (event.image ? [event.image] : [])}
                    title={event.title}
                  />
                </div>

                {/* Details */}
                <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span
                    className="inline-flex items-center self-start text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
                    style={{
                      background: event.category === 'past' ? 'rgba(107, 114, 128, 0.1)' : 'rgba(14, 165, 233, 0.1)',
                      color: event.category === 'past' ? '#6b7280' : '#0EA5E9',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  >
                    {event.category === 'past' ? 'Past Event' : 'Upcoming'}
                  </span>

                  <h2
                    className="text-3xl lg:text-4xl font-bold mb-4"
                    style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
                  >
                    {event.title}
                  </h2>

                  <p
                    className="text-gray-600 leading-relaxed mb-6"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {event.description}
                  </p>

                  <div className="space-y-2">
                    <div
                      className="flex items-center gap-2.5 text-sm"
                      style={{ color: '#6b7280', fontFamily: 'Outfit, sans-serif' }}
                    >
                      <Calendar size={15} style={{ color: '#0EA5E9' }} />
                      {formatEventDate(event.date, event.endDate)}
                    </div>
                    <div
                      className="flex items-center gap-2.5 text-sm"
                      style={{ color: '#6b7280', fontFamily: 'Outfit, sans-serif' }}
                    >
                      <MapPin size={15} style={{ color: '#0EA5E9' }} />
                      {event.location}
                    </div>
                  </div>

                  {event.images && event.images.length > 1 && (
                    <p
                      className="mt-4 text-xs"
                      style={{ color: '#9ca3af', fontFamily: 'Outfit, sans-serif' }}
                    >
                      {event.images.length} photos — hover to navigate
                    </p>
                  )}
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── CALENDAR ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: '#F0F9FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection className="text-center mb-10">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
            >
              Schedule
            </span>
            <h2
              className="text-4xl font-bold mt-2"
              style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
            >
              Events Calendar
            </h2>
            <p
              className="text-gray-500 text-sm mt-2"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Highlighted dates have events — click to see details.
            </p>
          </FadeSection>
          <FadeSection delay={0.1}>
            <EventCalendar />
          </FadeSection>
        </div>
      </section>
    </PageWrapper>
  );
}
