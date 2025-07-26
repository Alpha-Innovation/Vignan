import { useState, useEffect } from 'react';
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
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsAndConditionsModal from './components/TermsAndConditionsModal';
import FloatingSocial from './components/FloatingSocial';
import CTAFormModal from './components/CTAFormModal';

function App() {
  const [termsOpen, setTermsOpen] = useState(false);
  const [ctaOpen, setCtaOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  // Handler to pass to CTA buttons
  const openCta = () => setCtaOpen(true);
  const closeCta = () => setCtaOpen(false);

  const openPrivacy = () => setPrivacyOpen(true);
  const closePrivacy = () => setPrivacyOpen(false);

  const openTerms = () => setTermsOpen(true);
  const closeTerms = () => setTermsOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCtaOpen(true);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Header onCtaClick={openCta} />
      <HeroSection onCtaClick={openCta} />
      <ProgramsSection onCtaClick={openCta} />
      <RankingsSection />
      <SkillsSection />
      <FeaturesSection />
      <FacultySection />
      <TestimonialsSection />
      <NewsSection />
      <Footer onCtaClick={openCta} onPrivacyClick={openPrivacy} onTermsClick={openTerms} />
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
      <PrivacyPolicyModal isOpen={privacyOpen} onClose={closePrivacy} />
      <TermsAndConditionsModal isOpen={termsOpen} onClose={closeTerms} />
    </div>
  );
}

export default App; 