import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdmissionProcess from "@/components/AdmissionProcess";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <AdmissionProcess />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
