import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProgramsSection from './components/ProgramsSection';
import RankingsSection from './components/RankingsSection';
import SkillsSection from './components/SkillsSection';
import FeaturesSection from './components/FeaturesSection';
import FacultySection from './components/FacultySection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

import FloatingSocial from './components/FloatingSocial';
import CTAFormModal from './components/CTAFormModal';

function App() {
  const [ctaOpen, setCtaOpen] = useState(false);
  const openCta = () => setCtaOpen(true);
  const closeCta = () => setCtaOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCtaOpen(true);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header onCtaClick={openCta} />
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/" element={
            <>
              <HeroSection onCtaClick={openCta} />
              <ProgramsSection onCtaClick={openCta} />
              <RankingsSection />
              <SkillsSection />
              <FeaturesSection />
              <FacultySection />
              <TestimonialsSection />
              <NewsSection />
            </>
          } />
        </Routes>
        <Footer onCtaClick={openCta} />
        <FloatingSocial onCtaClick={openCta} />
        {ctaOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50" onClick={closeCta}>
            <div className="relative z-10 max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-black" onClick={closeCta} aria-label="Close form">&times;</button>
              <CTAFormModal />
            </div>
          </div>
        )}
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App; 