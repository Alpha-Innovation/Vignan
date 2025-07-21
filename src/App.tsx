import React, { useState } from 'react';
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

  // Handler to pass to CTA buttons
  const openCta = () => setCtaOpen(true);
  const closeCta = () => setCtaOpen(false);

  return (
    <div className="App">
      <Header onCtaClick={openCta} />
      <HeroSection />
      <ProgramsSection onCtaClick={openCta} />
      <RankingsSection />
      <SkillsSection />
      <FeaturesSection />
      <FacultySection />
      <TestimonialsSection />
      <NewsSection />
      <Footer />
      <FloatingSocial />
      {ctaOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50" onClick={closeCta}>
          <div className="relative z-10 max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-black" onClick={closeCta} aria-label="Close form">&times;</button>
            <CTAFormModal />
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 