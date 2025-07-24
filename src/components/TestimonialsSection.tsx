import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sowmya',
    degree: '(MBA-Online)',
    image: '/img/Sowmya.dee63fa7.webp',
  },
  {
    id: 2,
    name: 'Mohammad Altaf Hussain',
    degree: '(MBA-Online)',
    image: '/img/Mohammed-Altaf-Hussain.c9af2d0f.webp',
  },
  {
    id: 3,
    name: 'Rajendra',
    degree: '(MBA-Online)',
    image: '/img/Rajendra.da20fe4c.webp',
  },
  {
    id: 4,
    name: 'Vijay',
    degree: '(MBA-Online)',
    image: '/img/Vijay.fb123a26.webp',
  },
  {
    id: 5,
    name: 'K M Naidu',
    degree: '(MBA-Online)',
    image: '/img/K-M-Naidu.662172a6.webp',
  },
  {
    id: 6,
    name: 'Swati',
    degree: '(MBA-Online)',
    image: '/img/Swati.5cbf8737.webp',
  },
  {
    id: 7,
    name: 'Massudan',
    degree: '(MBA-Online)',
    image: '/img/Massudan.03f34406.webp',
  },
  {
    id: 8,
    name: 'Ramya',
    degree: '(MBA-Online)',
    image: '/img/Ramya.807c6527.webp',
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full overflow-x-hidden">
      <div className="w-full mx-auto max-w-7xl py-8">
        <div className="text-center">
          <h2 className="text-lg md:text-2xl font-bold uppercase py-4">
            Our <span className="text-primary">Testimonials</span>
          </h2>
        </div>
        <div className="w-full relative flex justify-center m-auto">
          <div className="next-testimonials absolute bottom-0 right-4 md:top-[40%] md:-right-10 cursor-pointer z-10 slick-arrow" onClick={nextSlide}>
            <img src="/img/icon-slider-next.e03370c3.svg" width="32" height="32" alt="slider-next" className="md:w-10 md:h-10 w-8 h-8" />
          </div>
          <div className="prev-testimonials absolute bottom-0 left-4 md:top-[40%] md:-left-9 cursor-pointer z-10 slick-arrow" onClick={prevSlide}>
            <img src="/img/icon-slider-prev.f104ac12.svg" width="32" height="32" alt="slider prev" className="md:w-10 md:h-10 w-8 h-8" />
          </div>
          <div className="slick-testimonials flex gap-2 md:gap-10">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full max-w-xs flex-shrink-0 mx-auto">
                    <div className="hover:bg-[#d02829] rounded-lg p-2 w-full mx-auto text-black hover:text-white cursor-pointer">
                      <div className="flex justify-center">
                        <div className="h-[220px] sm:h-[325px]">
                          <div className="py-2 px-2 text-left">
                            <p className="font-semibold text-[15px] sm:text-[16px]">{testimonial.name}</p>
                            <p className="font-[400]">{testimonial.degree}</p>
                          </div>
                          <div>
                            <img
                              alt={testimonial.name}
                              src={testimonial.image}
                              width="220"
                              height="124"
                              className="rounded-lg object-cover w-full h-[124px] sm:w-[327px] sm:h-[184px]"
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

export default TestimonialsSection; 