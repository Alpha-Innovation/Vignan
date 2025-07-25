import React, { useState } from 'react';

const faculty = [
  {
    id: 1,
    name: 'Dr. N. Veeranjaneyulu',
    degree: 'M. Tech, Ph.D.',
    position: 'Director - CDOE',
    image: '/img/veeranjaneyulu.webp',
  },
  {
    id: 2,
    name: 'Prof. K. Kalpana',
    degree: 'MBA. LLB. Ph.D',
    position: 'Additional Director - CDOE',
    image: '/img/kalpana.webp',
  },
  {
    id: 3,
    name: 'Dr. Ch. Hymavathi',
    degree: 'MBA Finance & Ph. D.',
    position: 'Deputy Director - CDOE',
    image: '/img/Hymavathi.3689c7ae.webp',
  },
  {
    id: 4,
    name: 'Mr. M.S.Kishan Varma',
    degree: 'MBA, (Ph. D.)',
    position: 'Assistant Director - CDOE',
    image: '/img/kishan-varma.webp',
  },
  {
    id: 5,
    name: 'Mr. Shaik Nyamathulla',
    degree: 'B.Tech, M. Tech, (Ph.D.)',
    position: 'Deputy controller of Examinations - CDOE',
    image: '/img/nyamathulla.webp',
  },
];

const FacultySection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % faculty.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + faculty.length) % faculty.length);
  };

  return (
    <section className="w-full bg-[#f7f9fb] overflow-x-hidden">
      <div className="w-full mx-auto max-w-7xl py-8">
        <div className="text-center">
          <h2 className="uppercase text-lg md:text-2xl font-bold pt-8">Meet our<span className="text-primary"> Faculty - CDOE</span></h2>
        </div>
        <div className="w-full relative flex justify-center m-auto">
          <div className="next-faculty absolute bottom-0 right-4 md:top-[40%] md:-right-10 cursor-pointer z-10 slick-arrow" onClick={nextSlide}>
            <img src="/img/icon-slider-next.e03370c3.svg" width="32" height="32" alt="slider-next" className="md:w-10 md:h-10 w-8 h-8" />
          </div>
          <div className="prev-faculty absolute bottom-0 left-4 md:top-[40%] md:-left-9 cursor-pointer z-10 slick-arrow" onClick={prevSlide}>
            <img src="/img/icon-slider-prev.f104ac12.svg" width="32" height="32" alt="slider prev" className="md:w-10 md:h-10 w-8 h-8" />
          </div>
          <div className="slick-faculty flex gap-2 md:gap-5 justify-center m-auto items-center">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {faculty.map((member) => (
                  <div key={member.id} className="w-full max-w-xs flex-shrink-0 mx-auto">
                    <div className="relative h-[180px] sm:h-[320px] w-full" style={{ display: 'inline-block' }}>
                      <div className="flex h-full items-center justify-center m-auto">
                        <div className="border border-slate-200 rounded-lg w-full max-w-[350px] h-[120px] sm:h-[180px] flex flex-col justify-end py-3 sm:py-6 bg-white">
                          <p className="font-semibold text-sm sm:text-base">{member.name}</p>
                          <p className="text-xs sm:text-sm">{member.degree}</p>
                          <p className="text-xs sm:text-sm">{member.position}</p>
                          <div className="rounded-full p-2 bg-white absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 shadow-lg">
                            <img
                              className="h-[50px] w-[50px] sm:h-[90px] sm:w-[90px] rounded-full object-cover"
                              src={member.image}
                              alt={member.name}
                              width="90"
                              height="90"
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
        </div>
      </div>
    </section>
  );
};

export default FacultySection; 