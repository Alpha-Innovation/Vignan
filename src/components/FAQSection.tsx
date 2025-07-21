import React, { useState } from 'react';

const faqs = [
  {
    question: 'Is Vignan Online accredited?',
    answer: 'Yes, Vignan Online is NAAC A+ accredited and UGC-entitled.'
  },
  {
    question: 'Is the online degree acquired equivalent to the on-campus learning mode?',
    answer: 'Yes, all online degrees from Vignan Online are equivalent to on-campus degrees as per UGC guidelines.'
  },
  {
    question: 'How does Vignan Online help learners by providing online education?',
    answer: 'Vignan Online offers flexible, accessible, and high-quality education with career support and interactive learning.'
  },
  {
    question: 'Does the online degree programs follow a semester or annual scheme?',
    answer: 'Most programs follow a semester scheme, but details may vary by course.'
  },
  {
    question: 'Is it possible to change the program option later?',
    answer: 'Program changes are subject to university policies. Please contact support for details.'
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#f7f9fb] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#2d3e50]">
          FAQ<span className="text-primary">s</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-[#2d3e50] focus:outline-none transition-colors duration-200 hover:bg-[#f7f9fb]"
                onClick={() => toggleFAQ(idx)}
              >
                <span>{idx + 1}. {faq.question}</span>
                <span className={`text-primary text-2xl transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  &#9660;
                </span>
              </button>
              <div
                className={`px-6 pb-4 text-[#444] text-base transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                style={{ transitionProperty: 'max-height, opacity' }}
              >
                {openIndex === idx && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="/faq" className="bg-[#CA2526] text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-[#a01f20] transition-all duration-300">View More</a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 