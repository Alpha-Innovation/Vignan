import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    desktopImage: '/img/online-degree.5230aed9.webp',
    mobileImage: '/img/online-degree-mob.7253fa2a.webp',
    alt: 'Online Degree',
    link: null,
  },
  {
    id: 2,
    desktopImage: '/img/Batch-starts-Desktop.194c110d.webp',
    mobileImage: '/img/Batch-starts-Mobile-CTA (1).c09fd389.webp',
    alt: 'Batch Starts',
    link: 'https://apply.vignanonline.com/',
  },
];

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mx-auto">
      <div className="banner object-cover bg-center bg-no-repeat relative">
        <div className="hero-slider relative">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="w-full">
                    {/* Desktop Image */}
                    <div className="hidden md:block">
                          <img
                            src={slide.desktopImage}
                            width="1920"
                            height="768"
                            alt={slide.alt}
                            title={slide.alt}
                        className="w-full h-auto cursor-pointer"
                        onClick={onCtaClick}
                      />
                    </div>
                    {/* Mobile Image */}
                    <div className="md:hidden mt-[80px]">
                      {slide.link ? (
                        <a href={slide.link} target="_blank" rel="noopener noreferrer">
                          <img
                            src={slide.mobileImage}
                            width="490"
                            height="512"
                            alt={slide.alt}
                            title={slide.alt}
                            className="w-full h-auto"
                          />
                        </a>
                      ) : (
                        <img
                          src={slide.mobileImage}
                          width="490"
                          height="512"
                          alt={slide.alt}
                          title={slide.alt}
                          className="w-full h-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Arrows */}
          <div className="next-banner absolute md:z-10 top-[40%] right-5 cursor-pointer desktop slick-arrow" onClick={nextSlide}>
            <img
              src="/img/icon-slider-next.e03370c3.svg"
              width="40"
              height="40"
              alt="Next"
              className="hover:scale-110 transition-transform duration-200"
            />
          </div>
          <div className="prev-banner absolute md:z-10 top-[40%] left-5 cursor-pointer desktop slick-arrow" onClick={prevSlide}>
            <img
              src="/img/icon-slider-prev.f104ac12.svg"
              width="40"
              height="40"
              alt="Previous"
              className="hover:scale-110 transition-transform duration-200"
            />
          </div>
          {/* Dots Indicator */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 