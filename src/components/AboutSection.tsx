import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section w-full bg-white py-12 flex flex-col items-center justify-center text-center fade-in">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#CA2526]">About Vignan Online</h2>
      <p className="max-w-2xl text-gray-700 mb-6">Vignan Online is a NAAC A+ accredited university with 45 years of academic excellence, offering UGC-entitled online degree programs designed to empower learners for the future. Our mission is to provide accessible, high-quality education to students across India and beyond.</p>
      <img src="/img/campus-image.jpg" alt="Vignan Campus" className="rounded-lg shadow-lg w-full max-w-xl" />
    </section>
  );
};

export default AboutSection; 