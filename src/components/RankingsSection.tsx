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
    <section className="rankings-section w-full mx-auto max-w-7xl py-8">
      <div>
        <h2 className="text-center font-bold pb-6 text-lg md:text-2xl uppercase">
          Rankings & <span className="text-[#ca2526]">Recognitions</span>
        </h2>
      </div>
      <div className="w-full relative justify-center m-auto">
        <div className="next-ranking absolute bottom-0 right-32 md:top-[40%] md:-right-10 cursor-pointer z-10 slick-arrow" onClick={nextSlide}>
          <img src="/img/icon-slider-next.e03370c3.svg" width="40" height="40" alt="slider-next" />
        </div>
        <div className="prev-ranking absolute bottom-0 left-32 md:top-[40%] md:-left-9 cursor-pointer z-10 slick-arrow" onClick={prevSlide}>
          <img src="/img/icon-slider-prev.f104ac12.svg" width="40" height="40" alt="slider prev" />
        </div>
        <div className="slick-ranking flex justify-center m-auto items-center gap-10">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 480}px)` }}
            >
              {rankings.map((ranking) => (
                <div key={ranking.id} className="w-[480px] flex-shrink-0">
                  <div className="relative h-[320px]">
                    <div className="flex h-full items-center justify-center m-auto">
                      <div className="border border-slate-200 rounded-lg w-[305px] md:w-[400px] lg:h-[180px] h-[220px] flex flex-col justify-end items-center py-6 px-4 bg-white shadow-lg">
                        <p className="pt-12 text-center text-sm leading-relaxed">
                          {ranking.title}
                        </p>
                        <div className="rounded-full p-2 bg-white absolute lg:top-4 top-0 left-[35%] shadow-lg">
                          <img
                            className="rounded-full w-20 h-20 object-cover"
                            src={ranking.icon}
                            alt={ranking.alt}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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