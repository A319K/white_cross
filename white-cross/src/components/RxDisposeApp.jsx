import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Pill, Clock, MapPin, Info, CalendarDays, User,
  Search, CheckCircle, XCircle, Loader2, Navigation,
  ChevronRight, ExternalLink, AlertTriangle, AlertCircle
} from 'lucide-react';
import RxDisposeModal from './RxDisposeModal';
import { allMedications, checkFlushable } from '../data/medications';

// ── Tab definitions ──────────────────────────────────────────────────────────
const tabs = [
  { id: 'purpose', label: 'Purpose', icon: Info },
  { id: 'when', label: 'When to Dispose', icon: Clock },
  { id: 'where', label: 'Where and How', icon: MapPin },
  { id: 'about', label: 'About the App', icon: Pill },
  { id: 'takeback', label: 'Takeback Day', icon: CalendarDays },
  { id: 'creator', label: 'About the Creator', icon: User },
];

// ── Modal content components ──────────────────────────────────────────────────
function ModalContent({ id }) {
  switch (id) {
    case 'purpose':
      return (
        <div className="space-y-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
          <p className="text-gray-600 leading-relaxed">
            RxDispose is a user-friendly tool designed to promote safe and environmentally
            responsible medication disposal. It has two core functions:
          </p>
          <div className="space-y-3">
            {[
              { n: '1', t: 'Flushability Checker', d: 'Help users determine whether their medications can be safely flushed down the toilet or sink based on FDA guidelines.' },
              { n: '2', t: 'Disposal Site Locator', d: 'Locate the nearest drop-off disposal sites using your current location or zip code.' },
            ].map((item) => (
              <div key={item.n} className="flex gap-3 p-4 rounded-xl" style={{ background: '#E8F5E9' }}>
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-white" style={{ background: '#1B5E20' }}>
                  {item.n}
                </span>
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: '#1B5E20' }}>{item.t}</p>
                  <p className="text-sm text-gray-600">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Proper medication disposal prevents drugs from being misused, polluting water supplies,
            and harming children, pets, or the environment.
          </p>
        </div>
      );

    case 'when':
      return (
        <div className="space-y-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
          <p className="text-gray-600 text-sm leading-relaxed">
            Knowing when to dispose of medications is just as important as knowing how.
          </p>
          {[
            { icon: '⏰', t: 'Expired Medications', d: 'Medications past their expiration date may be ineffective or even harmful. Dispose of them promptly — never take expired medicine.' },
            { icon: '💊', t: 'Unused Medications', d: 'Leftover medications from a completed prescription should not be kept. They pose a risk of misuse, accidental ingestion, or theft.' },
            { icon: '⚠️', t: 'Damaged or Contaminated', d: 'Medications that have changed in appearance, smell, or texture should be discarded immediately, even before their expiration date.' },
            { icon: '📋', t: 'No Longer Prescribed', d: 'If your doctor changes your medication or treatment plan, safely dispose of the old one rather than saving it for later.' },
          ].map((item) => (
            <div key={item.t} className="flex gap-3 p-4 rounded-xl border" style={{ borderColor: 'rgba(27, 94, 32, 0.15)', background: 'white' }}>
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: '#1B5E20' }}>{item.t}</p>
                <p className="text-sm text-gray-600">{item.d}</p>
              </div>
            </div>
          ))}
          <div className="p-4 rounded-xl" style={{ background: '#1B5E20' }}>
            <div className="flex gap-2 items-start">
              <AlertTriangle size={16} className="text-yellow-300 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-white">
                Never save old prescriptions or share medications with others. Even well-meaning sharing can be dangerous.
              </p>
            </div>
          </div>
        </div>
      );

    case 'where':
      return (
        <div className="space-y-5" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {[
            {
              n: '1', emoji: '🏪', t: 'Take-Back Programs (Best Option)',
              d: 'The DEA sponsors National Prescription Drug Take Back Day twice yearly. Many pharmacies — including CVS, Walgreens, and Rite Aid — offer on-site drop-off boxes and mail-back programs year-round. This is always the safest, most responsible option.'
            },
            {
              n: '2', emoji: '🚿', t: 'Flushing Medications',
              d: 'Some medications are safe to flush when no take-back program is available. These are listed on the FDA Flush List. Use the checker tool on this page to verify your specific medication before flushing.'
            },
            {
              n: '3', emoji: '🗑️', t: 'Household Trash Disposal',
              d: 'Most other medications can go in the trash. Mix them (do NOT crush tablets) with an undesirable substance like dirt or coffee grounds. Place in a sealed bag. Remove or scratch out personal info on the label before discarding the bottle.'
            },
          ].map((item) => (
            <div key={item.n} className="flex gap-3">
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: '#1B5E20' }}>
                  <span className="text-gray-400 mr-1">{item.n}.</span> {item.t}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case 'about':
      return (
        <div className="space-y-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
          <p className="text-gray-600 leading-relaxed text-sm">
            RxDispose was built as part of the White Cross mission to prevent drug misuse through
            education and accessible tools. Every feature is designed to make safe disposal as
            easy as a quick web search — for everyone, not just healthcare professionals.
          </p>
          <div className="space-y-2">
            {[
              'FDA-backed flushability data',
              'Location-based disposal finder',
              'Free and accessible to all',
              'Built for communities',
              'No sign-up required',
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-2.5 text-sm" style={{ color: '#16163F' }}>
                <CheckCircle size={16} style={{ color: '#1B5E20' }} className="flex-shrink-0" />
                {feat}
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl text-sm" style={{ background: '#E8F5E9', color: '#2E7D32' }}>
            Part of the White Cross mission: <strong>Educate, Prevent, and Empower.</strong>
          </div>
        </div>
      );

    case 'takeback':
      return (
        <div className="space-y-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
          <p className="text-gray-600 text-sm leading-relaxed">
            The DEA sponsors National Prescription Drug Take Back Day twice a year — typically in
            April and October — at thousands of collection sites nationwide. It's free, anonymous,
            and the safest way to dispose of unused or expired medications.
          </p>
          <div className="p-4 rounded-xl space-y-3" style={{ background: '#1B5E20' }}>
            <p className="text-white text-xs font-semibold uppercase tracking-wider">By the numbers</p>
            {[
              { label: 'Law Enforcement Sites', value: '4,497' },
              { label: 'Medications Collected (Last Event)', value: '663,725 lbs (332 tons)' },
              { label: 'Total Collected All Time', value: '17.3 million lbs (8,650 tons)' },
              { label: 'Overdose Deaths Per Year', value: '~107,000 (every 5 min)' },
            ].map((stat) => (
              <div key={stat.label} className="flex justify-between items-start gap-4">
                <span className="text-green-200 text-sm">{stat.label}</span>
                <span className="text-white text-sm font-bold text-right">{stat.value}</span>
              </div>
            ))}
          </div>
          <a
            href="https://www.dea.gov/takebackday"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
            style={{ color: '#1B5E20' }}
          >
            Find the nearest Take Back Day site
            <ExternalLink size={13} />
          </a>
        </div>
      );

    case 'creator':
      return (
        <div className="space-y-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #1B5E20, #2E7D32)', fontFamily: 'Fraunces, serif' }}
            >
              RK
            </div>
            <div>
              <p className="font-bold" style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}>
                Ryan Kwon
              </p>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(27, 94, 32, 0.1)', color: '#1B5E20' }}
              >
                Founder & President, White Cross
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            RxDispose was created by Ryan Kwon, founder and president of White Cross. Ryan built
            this tool to give everyone — not just healthcare professionals — easy access to safe
            medication disposal information.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            His goal: reduce prescription drug misuse by making proper disposal as easy as a quick
            web search. White Cross believes that informed communities are safer communities.
          </p>
        </div>
      );

    default:
      return null;
  }
}

// ── Haversine distance formula (returns miles) ────────────────────────────────
function distanceMiles(lat1, lon1, lat2, lon2) {
  const R = 3958.8;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.asin(Math.sqrt(a));
}

// ── Convert zip code → lat/lng via free zippopotam.us API ────────────────────
async function getCoordinatesFromZip(zip) {
  const res = await fetch(`https://api.zippopotam.us/us/${zip.trim()}`);
  if (!res.ok) throw new Error('Invalid zip code. Please try again.');
  const data = await res.json();
  return {
    lat: parseFloat(data.places[0].latitude),
    lon: parseFloat(data.places[0].longitude),
  };
}

// ── Query OpenStreetMap Overpass API for nearby pharmacies & police stations ──
// FUTURE: Replace or supplement with the official DEA Disposal Locator API
// when access is obtained: https://apps2.deadiversion.usdoj.gov/pubdispsearch
// Current implementation uses OpenStreetMap (Overpass API) — free, no key needed.
async function findNearbyDisposalSites(lat, lon) {
  const radiusMeters = 8000; // ~5 mile radius
  const query = `
[out:json][timeout:25];
(
  node["amenity"="pharmacy"](around:${radiusMeters},${lat},${lon});
  node["amenity"="police"](around:${radiusMeters},${lat},${lon});
);
out 12;`.trim();

  const res = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    body: query,
  });

  if (!res.ok) throw new Error('Could not reach location service. Please try again.');

  const data = await res.json();

  const results = data.elements
    .filter((el) => el.tags && el.tags.name)
    .map((el) => {
      const tags = el.tags;
      const dist = distanceMiles(lat, lon, el.lat, el.lon);

      // Build address from OSM tags when available
      const street =
        tags['addr:housenumber'] && tags['addr:street']
          ? `${tags['addr:housenumber']} ${tags['addr:street']}`
          : tags['addr:street'] || null;
      const city = tags['addr:city'] || null;
      const state = tags['addr:state'] || null;
      const address = [street, city, state].filter(Boolean).join(', ') || null;

      const mapsQuery = encodeURIComponent(
        [tags.name, street, city, state].filter(Boolean).join(', ')
      );

      return {
        name: tags.name,
        type: tags.amenity, // 'pharmacy' or 'police'
        distance: dist,
        address,
        lat: el.lat,
        lon: el.lon,
        mapsQuery,
      };
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5);

  return results;
}

export default function RxDisposeApp() {
  const [activeModal, setActiveModal] = useState(null);

  // Flushability checker state
  const [medInput, setMedInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [flushResult, setFlushResult] = useState(null);

  // Disposal locator state
  const [zipInput, setZipInput] = useState('');
  const [locLoading, setLocLoading] = useState(false);
  const [locations, setLocations] = useState(null);
  const [locError, setLocError] = useState(null);
  const [userCoords, setUserCoords] = useState(null);

  const checkerRef = useRef(null);
  const locatorRef = useRef(null);

  // ── Flushability checker handlers ────────────────────────────────────────────
  const handleMedInput = (val) => {
    setMedInput(val);
    setFlushResult(null);
    if (val.length >= 2) {
      setSuggestions(
        allMedications.filter((m) => m.toLowerCase().startsWith(val.toLowerCase())).slice(0, 6)
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleCheck = () => {
    if (!medInput.trim()) return;
    const result = checkFlushable(medInput);
    setFlushResult(result);
    setSuggestions([]);
  };

  // ── Disposal locator handlers ─────────────────────────────────────────────────
  const runSearch = async (lat, lon) => {
    setLocLoading(true);
    setLocations(null);
    setLocError(null);
    setUserCoords({ lat, lon });

    try {
      const results = await findNearbyDisposalSites(lat, lon);
      if (results.length === 0) {
        setLocError('No pharmacies or disposal sites found within 5 miles. Try the DEA Take Back Day locator for more options.');
      } else {
        setLocations(results);
      }
    } catch (err) {
      setLocError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLocLoading(false);
    }
  };

  const handleFindLocations = async () => {
    if (!zipInput.trim() || locLoading) return;
    try {
      const { lat, lon } = await getCoordinatesFromZip(zipInput);
      await runSearch(lat, lon);
    } catch (err) {
      setLocError(err.message || 'Invalid zip code.');
      setLocLoading(false);
    }
  };

  const handleGeoLocate = () => {
    if (!navigator.geolocation) {
      setLocError('Geolocation is not supported by your browser. Please enter a zip code.');
      return;
    }
    setLocLoading(true);
    setLocations(null);
    setLocError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setZipInput('Using your location');
        runSearch(pos.coords.latitude, pos.coords.longitude);
      },
      () => {
        setLocLoading(false);
        setLocError('Unable to get your location. Please enter a zip code instead.');
      }
    );
  };

  const typeLabel = (type) =>
    type === 'police' ? 'Police Dept.' : 'Pharmacy';

  const typeBadgeStyle = (type) =>
    type === 'police'
      ? { background: '#EEF2FF', color: '#3730A3' }
      : { background: '#E8F5E9', color: '#1B5E20' };

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
      {/* ── LEFT PANEL — Info Tabs ──────────────────────────────────────────── */}
      <div className="lg:w-64 flex-shrink-0">
        <div
          className="rounded-2xl p-4 space-y-2"
          style={{ background: 'rgba(27, 94, 32, 0.06)', border: '1px solid rgba(27, 94, 32, 0.12)' }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest px-2 mb-3"
            style={{ color: '#1B5E20', fontFamily: 'Outfit, sans-serif' }}
          >
            Learn More
          </p>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveModal(tab.id)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium text-sm transition-all group"
              style={{
                background: '#1B5E20',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Outfit, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2E7D32';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(27, 94, 32, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1B5E20';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <tab.icon size={15} className="flex-shrink-0 opacity-80" />
              <span className="flex-1">{tab.label}</span>
              <ChevronRight size={13} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL — Tools ──────────────────────────────────────────────── */}
      <div className="flex-1 space-y-6">
        {/* Tool 1 — Flushability Checker */}
        <div
          ref={checkerRef}
          id="checker"
          className="rounded-2xl p-6"
          style={{ background: 'white', border: '1px solid rgba(27, 94, 32, 0.12)', boxShadow: '0 2px 16px rgba(27, 94, 32, 0.06)' }}
        >
          <h3
            className="text-lg font-bold mb-1"
            style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
          >
            Can I flush this medication?
          </h3>
          <p className="text-sm text-gray-500 mb-5" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Check if your medication is on the FDA Flush List.
          </p>

          <div className="relative mb-4">
            <input
              type="text"
              value={medInput}
              onChange={(e) => handleMedInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
              placeholder="Type a medication name…"
              className="w-full px-4 py-3 pr-12 rounded-xl border text-sm outline-none transition-colors"
              style={{
                borderColor: 'rgba(27, 94, 32, 0.2)',
                fontFamily: 'Outfit, sans-serif',
                color: '#16163F',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#1B5E20'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(27, 94, 32, 0.2)'; }}
            />
            <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />

            {/* Autocomplete */}
            <AnimatePresence>
              {suggestions.length > 0 && (
                <motion.ul
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute z-10 w-full mt-1 rounded-xl overflow-hidden"
                  style={{ background: 'white', border: '1px solid rgba(27, 94, 32, 0.15)', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
                >
                  {suggestions.map((s) => (
                    <li key={s}>
                      <button
                        className="w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-green-50"
                        style={{ fontFamily: 'Outfit, sans-serif', color: '#16163F', background: 'none', border: 'none', cursor: 'pointer' }}
                        onClick={() => { setMedInput(s); setSuggestions([]); }}
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={handleCheck}
            className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: '#1B5E20', fontFamily: 'Outfit, sans-serif' }}
          >
            Check Medication
          </button>

          {/* Result */}
          <AnimatePresence>
            {flushResult && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-4 rounded-xl flex gap-3 items-start"
                style={{
                  background: flushResult === 'flush' ? '#E8F5E9' : flushResult === 'no-flush' ? '#FEF2F2' : '#F9FAFB',
                  border: `1px solid ${flushResult === 'flush' ? 'rgba(27,94,32,0.2)' : flushResult === 'no-flush' ? 'rgba(239,68,68,0.2)' : '#e5e7eb'}`,
                }}
              >
                {flushResult === 'flush' ? (
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1B5E20' }} />
                ) : flushResult === 'no-flush' ? (
                  <XCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                ) : (
                  <AlertTriangle size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#f59e0b' }} />
                )}
                <div style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: flushResult === 'flush' ? '#1B5E20' : flushResult === 'no-flush' ? '#dc2626' : '#92400e' }}>
                    {flushResult === 'flush' ? `${medInput} IS on the FDA Flush List` :
                     flushResult === 'no-flush' ? `${medInput} is NOT on the FDA Flush List` :
                     `"${medInput}" not found in our database`}
                  </p>
                  <p className="text-xs text-gray-500">
                    {flushResult === 'flush'
                      ? 'This medication may be safely flushed when no take-back program is available.'
                      : flushResult === 'no-flush'
                      ? 'Use a take-back program or dispose in household trash using proper precautions.'
                      : 'Try checking with your pharmacist or the FDA website for accurate disposal guidance.'}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tool 2 — Disposal Locator */}
        <div
          ref={locatorRef}
          id="locator"
          className="rounded-2xl p-6"
          style={{ background: 'white', border: '1px solid rgba(27, 94, 32, 0.12)', boxShadow: '0 2px 16px rgba(27, 94, 32, 0.06)' }}
        >
          <h3
            className="text-lg font-bold mb-1"
            style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
          >
            Find the nearest disposal site
          </h3>
          <p className="text-sm text-gray-500 mb-5" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Search for real pharmacies and police drop-off sites near you.
          </p>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={zipInput}
              onChange={(e) => {
                setZipInput(e.target.value);
                setLocError(null);
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleFindLocations()}
              placeholder="Enter zip code…"
              className="flex-1 px-4 py-3 rounded-xl border text-sm outline-none transition-colors"
              style={{ borderColor: locError ? 'rgba(239,68,68,0.4)' : 'rgba(27, 94, 32, 0.2)', fontFamily: 'Outfit, sans-serif', color: '#16163F' }}
              onFocus={(e) => { e.target.style.borderColor = '#1B5E20'; }}
              onBlur={(e) => { e.target.style.borderColor = locError ? 'rgba(239,68,68,0.4)' : 'rgba(27, 94, 32, 0.2)'; }}
            />
            <button
              onClick={handleGeoLocate}
              disabled={locLoading}
              className="px-4 py-3 rounded-xl border font-medium text-sm flex items-center gap-2 transition-all hover:bg-green-50 disabled:opacity-50"
              style={{ borderColor: 'rgba(27, 94, 32, 0.2)', color: '#1B5E20', background: 'white', fontFamily: 'Outfit, sans-serif', cursor: locLoading ? 'not-allowed' : 'pointer' }}
              title="Use my location"
            >
              <Navigation size={15} />
              <span className="hidden sm:inline">Use My Location</span>
            </button>
          </div>

          <button
            onClick={handleFindLocations}
            disabled={locLoading || !zipInput.trim()}
            className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60"
            style={{ background: '#1B5E20', fontFamily: 'Outfit, sans-serif', cursor: locLoading || !zipInput.trim() ? 'not-allowed' : 'pointer' }}
          >
            {locLoading ? <><Loader2 size={16} className="animate-spin" /> Searching nearby sites…</> : 'Find Locations'}
          </button>

          {/* Error state */}
          <AnimatePresence>
            {locError && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-4 rounded-xl flex gap-3 items-start"
                style={{ background: '#FEF2F2', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#ef4444' }} />
                <div style={{ fontFamily: 'Outfit, sans-serif' }}>
                  <p className="text-sm text-red-700">{locError}</p>
                  <a
                    href="https://apps2.deadiversion.usdoj.gov/pubdispsearch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold mt-1 inline-flex items-center gap-1 hover:underline"
                    style={{ color: '#1B5E20' }}
                  >
                    Search on the DEA site instead <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Location results */}
          <AnimatePresence>
            {locations && locations.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 space-y-3"
              >
                <p className="text-xs text-gray-400 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Showing {locations.length} nearby pharmacies & drop-off sites · Powered by OpenStreetMap
                </p>
                {locations.map((loc, i) => (
                  <motion.div
                    key={`${loc.name}-${i}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 p-4 rounded-xl border"
                    style={{ borderColor: 'rgba(27, 94, 32, 0.12)', background: '#FAFFFE' }}
                  >
                    <span
                      className="p-2 rounded-lg flex-shrink-0"
                      style={{ background: 'rgba(27, 94, 32, 0.1)' }}
                    >
                      <MapPin size={14} style={{ color: '#1B5E20' }} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-sm" style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}>
                          {loc.name}
                        </p>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={typeBadgeStyle(loc.type)}
                        >
                          {typeLabel(loc.type)}
                        </span>
                      </div>
                      {loc.address ? (
                        <p className="text-xs text-gray-500 truncate mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          {loc.address}
                        </p>
                      ) : (
                        <p className="text-xs text-gray-400 italic mt-0.5" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          Address not in map data
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-full"
                        style={{ background: '#E8F5E9', color: '#1B5E20', fontFamily: 'Outfit, sans-serif' }}
                      >
                        {loc.distance.toFixed(1)} mi
                      </span>
                      <a
                        href={`https://maps.google.com/?q=${loc.mapsQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
                        style={{ background: '#1B5E20', color: 'white', fontFamily: 'Outfit, sans-serif' }}
                      >
                        Directions
                      </a>
                    </div>
                  </motion.div>
                ))}

                {/* DEA fallback link */}
                <p className="text-xs text-gray-400 pt-1 text-center" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  For the official DEA-registered list, visit{' '}
                  <a
                    href="https://apps2.deadiversion.usdoj.gov/pubdispsearch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                    style={{ color: '#1B5E20' }}
                  >
                    DEA Disposal Locator ↗
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Modals ── */}
      {tabs.map((tab) => (
        <RxDisposeModal
          key={tab.id}
          isOpen={activeModal === tab.id}
          onClose={() => setActiveModal(null)}
          title={tab.label === 'When to Dispose' ? 'When Should You Dispose?' :
                 tab.label === 'Where and How' ? 'Where and How to Dispose' :
                 tab.label === 'Takeback Day' ? 'National Prescription Drug Take Back Day' :
                 tab.label === 'About the App' ? 'About RxDispose' :
                 tab.label === 'About the Creator' ? 'About the Creator' :
                 'What is RxDispose?'}
          icon={tab.icon}
        >
          <ModalContent id={tab.id} />
        </RxDisposeModal>
      ))}
    </div>
  );
}
