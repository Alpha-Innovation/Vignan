import UGCNotice from "@/components/UGCNotice";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import AccreditationSection from "@/components/AccreditationSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdmissionProcess from "@/components/AdmissionProcess";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UGCNotice />
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AboutSection />
      <AccreditationSection />
      <ProgramsSection />
      <TestimonialsSection />
      <AdmissionProcess />
      <CTASection />
      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Index;
