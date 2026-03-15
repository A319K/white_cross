// ── FORMSPREE SETUP ────────────────────────────────────────────────────────────
// To receive form submissions at akwon2029@gmail.com:
//   1. Go to https://formspree.io and sign up for a free account
//   2. Click "New Form", set the email to akwon2029@gmail.com
//   3. Copy the form ID (looks like "xpzgkoqr") and paste it below
//   4. Formspree will send a formatted email for every submission — free up to 50/month
//
// Replace 'YOUR_FORMSPREE_ID' with your actual form ID:
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgpwyjo';

import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Check, Loader2 } from 'lucide-react';

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

const roleOptions = [
  'Event Organizing',
  'Social Media / Instagram',
  'Web Development',
  'Graphic Design',
  'Writing / Content',
  'General Advocacy',
];

const hearOptions = ['Instagram', 'School', 'Friend', 'Google', 'Other'];

const whyJoinPoints = [
  'Make a real impact in your community',
  'Build leadership and event coordination skills',
  'Collaborate with passionate peers',
  'Gain experience in design, outreach, and advocacy',
];

const inputStyle = {
  border: '1.5px solid rgba(22, 22, 63, 0.15)',
  fontFamily: 'Outfit, sans-serif',
  color: '#16163F',
  background: 'white',
  outline: 'none',
  borderRadius: '12px',
  transition: 'border-color 0.15s',
};

export default function Join() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    school: '', grade: '', roles: [], why: '', heard: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [errors, setErrors] = useState({});

  const update = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }));
  };

  const toggleRole = (role) => {
    setForm((f) => ({
      ...f,
      roles: f.roles.includes(role) ? f.roles.filter((r) => r !== role) : [...f.roles, role],
    }));
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'Required';
    if (!form.lastName.trim()) errs.lastName = 'Required';
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'Valid email required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const body = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone || '—',
        school: form.school || '—',
        grade: form.grade || '—',
        roles: form.roles.length ? form.roles.join(', ') : '—',
        why: form.why || '—',
        heard: form.heard || '—',
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Submission failed. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        className="py-24 lg:py-36 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0EA5E9 0%, #0369A1 50%, #16163F 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(186,230,253,0.15) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-5xl lg:text-6xl font-extrabold mb-5"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Join the White Cross Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg opacity-80 max-w-xl mx-auto"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Help us educate, prevent, and empower. Join a team making real change.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Why join */}
            <FadeSection className="lg:col-span-2">
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}
              >
                Why Join?
              </span>
              <h2
                className="text-3xl font-bold mt-2 mb-8"
                style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
              >
                Be part of something meaningful.
              </h2>
              <ul className="space-y-5 mb-10">
                {whyJoinPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(14,165,233,0.1)' }}
                    >
                      <Check size={13} style={{ color: '#0EA5E9' }} />
                    </span>
                    <span className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Decorative quote */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: '#F0F9FF', border: '1px solid rgba(14,165,233,0.12)' }}
              >
                <p
                  className="text-sm italic leading-relaxed"
                  style={{ color: '#1E3A5F', fontFamily: 'Outfit, sans-serif' }}
                >
                  "White Cross is more than a club — it's a movement. Every member brings something
                  unique, and together we're making our communities safer."
                </p>
                <p className="text-xs mt-3 font-semibold" style={{ color: '#0EA5E9', fontFamily: 'Outfit, sans-serif' }}>
                  — Ryan Kwon, Founder
                </p>
              </div>
            </FadeSection>

            {/* Right — Form or Success */}
            <FadeSection delay={0.15} className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center text-center p-12 rounded-3xl h-full"
                    style={{
                      background: 'white',
                      border: '1px solid rgba(14,165,233,0.12)',
                      boxShadow: '0 8px 40px rgba(22,22,63,0.08)',
                      minHeight: '400px',
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    >
                      <CheckCircle size={64} style={{ color: '#0EA5E9' }} className="mx-auto mb-6" />
                    </motion.div>
                    <h3
                      className="text-3xl font-bold mb-3"
                      style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
                    >
                      Application Received!
                    </h3>
                    <p
                      className="text-gray-500 text-sm leading-relaxed max-w-sm"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      Thank you for applying, {form.firstName}! We'll review your application and
                      reach out to you within a few days. We're excited to meet you!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="p-8 rounded-3xl space-y-5"
                    style={{
                      background: 'white',
                      border: '1px solid rgba(14,165,233,0.1)',
                      boxShadow: '0 8px 40px rgba(22,22,63,0.07)',
                    }}
                  >
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
                    >
                      Apply to Join
                    </h3>

                    {/* Name row */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'First Name *', field: 'firstName', placeholder: 'Ryan' },
                        { label: 'Last Name *', field: 'lastName', placeholder: 'Kwon' },
                      ].map(({ label, field, placeholder }) => (
                        <div key={field}>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: '#16163F', fontFamily: 'Outfit, sans-serif' }}>
                            {label}
                          </label>
                          <input
                            type="text"
                            value={form[field]}
                            onChange={(e) => update(field, e.target.value)}
                            placeholder={placeholder}
                            className="w-full px-4 py-2.5 text-sm"
                            style={{
                              ...inputStyle,
                              borderColor: errors[field] ? '#ef4444' : 'rgba(22,22,63,0.15)',
                            }}
                            onFocus={(e) => { e.target.style.borderColor = '#0EA5E9'; }}
                            onBlur={(e) => { e.target.style.borderColor = errors[field] ? '#ef4444' : 'rgba(22,22,63,0.15)'; }}
                          />
                          {errors[field] && (
                            <p className="text-xs text-red-500 mt-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                              {errors[field]}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#16163F', fontFamily: 'Outfit, sans-serif' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 text-sm"
                        style={{ ...inputStyle, borderColor: errors.email ? '#ef4444' : 'rgba(22,22,63,0.15)' }}
                        onFocus={(e) => { e.target.style.borderColor = '#0EA5E9'; }}
                        onBlur={(e) => { e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(22,22,63,0.15)'; }}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{errors.email}</p>
                      )}
                    </div>

                    {/* Phone + School */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Phone Number', field: 'phone', placeholder: '(201) 555-0123', type: 'tel' },
                        { label: 'School / Organization', field: 'school', placeholder: 'Bergen Catholic HS', type: 'text' },
                      ].map(({ label, field, placeholder, type }) => (
                        <div key={field}>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: '#16163F', fontFamily: 'Outfit, sans-serif' }}>
                            {label}
                          </label>
                          <input
                            type={type}
                            value={form[field]}
                            onChange={(e) => update(field, e.target.value)}
                            placeholder={placeholder}
                            className="w-full px-4 py-2.5 text-sm"
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = '#0EA5E9'; }}
                            onBlur={(e) => { e.target.style.borderColor = 'rgba(22,22,63,0.15)'; }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Grade */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#16163F', fontFamily: 'Outfit, sans-serif' }}>
                        Grade / Year
                      </label>
                      <input
                        type="text"
                        value={form.grade}
                        onChange={(e) => update('grade', e.target.value)}
                        placeholder="e.g. 11th Grade, Freshman, Junior"
                        className="w-full px-4 py-2.5 text-sm"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = '#0EA5E9'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(22,22,63,0.15)'; }}
                      />
                    </div>

                    {/* Roles */}
                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: '#16163F', fontFamily: 'Outfit, sans-serif' }}>
                        Roles of Interest
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {roleOptions.map((role) => (
                          <button
                            key={role}
                            type="button"
                            onClick={() => toggleRole(role)}
                            className="px-3.5 py-2 rounded-full text-xs font-semibold transition-all"
                            style={{
                              background: form.roles.includes(role) ? '#0EA5E9' : '#F0F9FF',
                              color: form.roles.includes(role) ? 'white' : '#0EA5E9',
                              border: `1.5px solid ${form.roles.includes(role) ? '#0EA5E9' : 'rgba(14,165,233,0.25)'}`,
                              fontFamily: 'Outfit, sans-serif',
                              cursor: 'pointer',
                            }}
                          >
                            {role}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Why */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#16163F', fontFamily: 'Outfit, sans-serif' }}>
                        Why do you want to join?
                      </label>
                      <textarea
                        value={form.why}
                        onChange={(e) => update('why', e.target.value)}
                        placeholder="Tell us about yourself and why you want to be part of White Cross…"
                        rows={3}
                        className="w-full px-4 py-3 text-sm resize-none"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = '#0EA5E9'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(22,22,63,0.15)'; }}
                      />
                    </div>

                    {/* How heard */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: '#16163F', fontFamily: 'Outfit, sans-serif' }}>
                        How did you hear about us?
                      </label>
                      <select
                        value={form.heard}
                        onChange={(e) => update('heard', e.target.value)}
                        className="w-full px-4 py-2.5 text-sm"
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = '#0EA5E9'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(22,22,63,0.15)'; }}
                      >
                        <option value="">Select one…</option>
                        {hearOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    {/* Submit error */}
                    {submitError && (
                      <p className="text-sm text-red-600 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {submitError}
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 active:scale-[0.98] mt-2 flex items-center justify-center gap-2 disabled:opacity-70"
                      style={{
                        background: 'linear-gradient(135deg, #16163F, #0A0A2E)',
                        fontFamily: 'Fraunces, serif',
                        boxShadow: '0 8px 24px rgba(22,22,63,0.3)',
                        cursor: submitting ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {submitting ? (
                        <><Loader2 size={16} className="animate-spin" /> Submitting…</>
                      ) : (
                        'Apply to Join →'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </FadeSection>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
