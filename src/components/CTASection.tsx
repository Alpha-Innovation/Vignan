import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="cta-section w-full bg-[#CA2526] py-12 flex flex-col items-center justify-center text-center fade-in">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Online Degree?</h2>
      <p className="text-white mb-6 max-w-xl">Join thousands of learners and take the next step in your career with Vignan Online's UGC-Entitled programs.</p>
      <a href="https://apply.vignanonline.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#CA2526] font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-[#f7f9fb] hover:text-[#CA2526] transition-all duration-300">Apply Now</a>
    </section>
  );
};

export default CTASection; 