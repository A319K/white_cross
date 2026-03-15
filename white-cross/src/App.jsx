import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CrisisBanner from './components/CrisisBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import RxDispose from './pages/RxDispose';
import Postvention from './pages/Postvention';
import Team from './pages/Team';
import Join from './pages/Join';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rxdispose" element={<RxDispose />} />
        <Route path="/postvention" element={<Postvention />} />
        <Route path="/team" element={<Team />} />
        <Route path="/join" element={<Join />} />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
              <h1
                className="text-6xl font-extrabold mb-4"
                style={{ fontFamily: 'Fraunces, serif', color: '#16163F' }}
              >
                404
              </h1>
              <p className="text-gray-500 mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Page not found.
              </p>
              <a
                href="/"
                className="px-6 py-3 rounded-full font-semibold text-white text-sm"
                style={{ background: '#16163F' }}
              >
                Go Home
              </a>
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <CrisisBanner />
      <Navbar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
