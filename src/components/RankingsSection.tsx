import React, { useState } from 'react';

const rankings = [
  {
    id: 1,
    title: 'Accredited by National Assessment and Accreditation Council (NAAC) with an A+ Grade',
    icon: '/img/naac-icon.webp',
    alt: 'NAAC',
  },
  {
    id: 2,
    title: 'Ranked amongst the top 72th in India under National Institutional Ranking Framework (NIRF), Ministry of Education, Government of India',
    icon: '/img/nirf-icon.webp',
    alt: 'NIRF',
  },
  {
    id: 3,
    title: 'University Grants Commission (UGC) Entitled Online Degree Programs of Vignan Online are equivalent to on-campus mode of learning',
    icon: '/img/ugc-icon.webp',
    alt: 'UGC',
  },
  {
    id: 4,
    title: 
      
      
      "Vignan's Foundation for Science, Technology, and Research is Awarded ISO 9001:2015 certification",
    icon: '/img/iso-icon.webp',
    alt: 'ISO',
  },
  {
    id: 5,
    title: 'India Today 2021 - Best Universities in India Rank: 25',
    icon: '/img/india-today-icon.webp',
    alt: 'India Today',
  },
];

const RankingsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rankings.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + rankings.length) % rankings.length);
  };

  return (
    <section className="rankings-section w-full mx-auto max-w-7xl py-8 overflow-x-hidden">
      <div>
        <h2 className="text-center font-bold pb-6 text-lg md:text-2xl uppercase">
          Rankings & <span className="text-[#ca2526]">Recognitions</span>
        </h2>
      </div>
      <div className="w-full relative justify-center m-auto">
        <div className="next-ranking absolute bottom-0 right-4 md:right-32 md:top-[40%] md:-right-10 cursor-pointer z-10 slick-arrow" onClick={nextSlide}>
          <img src="/img/icon-slider-next.e03370c3.svg" width="32" height="32" alt="slider-next" className="md:w-10 md:h-10 w-8 h-8" />
        </div>
        <div className="prev-ranking absolute bottom-0 left-4 md:left-32 md:top-[40%] md:-left-9 cursor-pointer z-10 slick-arrow" onClick={prevSlide}>
          <img src="/img/icon-slider-prev.f104ac12.svg" width="32" height="32" alt="slider prev" className="md:w-10 md:h-10 w-8 h-8" />
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {rankings.map((ranking) => (
              <div key={ranking.id} className="w-full max-w-xs flex-shrink-0">
                <div className="relative h-[220px] md:h-[320px] w-full flex items-center justify-center">
                  <div className="border border-slate-200 rounded-lg w-full max-w-[400px] h-[180px] md:h-[220px] flex flex-col justify-end items-center py-6 px-4 bg-white shadow-lg mx-auto">
                    <p className="pt-12 text-center text-sm leading-relaxed">
                      {ranking.title}
                    </p>
                    <div className="rounded-full p-2 bg-white absolute lg:top-4 top-0 left-1/2 -translate-x-1/2 shadow-lg">
                      <img
                        className="rounded-full w-16 h-16 md:w-20 md:h-20 object-cover"
                        src={ranking.icon}
                        alt={ranking.alt}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {rankings.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#CA2526]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RankingsSection; 