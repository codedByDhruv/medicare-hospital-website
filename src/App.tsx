import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

// Scroll Restoration Manager
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();

  // Map standard slash paths back to IDs for Header active highlighters if needed
  const getActiveId = () => {
    const path = location.pathname.replace('/', '');
    if (!path) return 'home';
    if (path === 'testimonials') return 'testimonials';
    return path;
  };

  return (
    <>
      <ScrollToTop />
      <Header activePage={getActiveId()} />
      <main style={{ minHeight: 'calc(100vh - 450px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/testimonials" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Wildcard / Fallback path */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
