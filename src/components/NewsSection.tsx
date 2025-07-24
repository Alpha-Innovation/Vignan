import React, { useState } from 'react';

const news = [
  {
    id: 1,
    title: '8 skills institutions must cultivate among learners for lifelong success',
    image: '/img/Learners-Skills-for-Greater-Success.57491d8f.webp',
    link: 'https://www.hindustantimes.com/education/features/8-skills-institutions-must-cultivate-among-learners-for-lifelong-success-101720706844381.html',
    source: 'Hindustan Times | July 11, 2024',
  },
  {
    id: 2,
    title: 'Vignan Online to Host Vignan University’s Annual Ignite Fest',
    image: '/img/Vignan-Online-IGNITE-Event.806c594b.webp',
    link: 'https://www.apnnews.com/vignan-online-to-host-vignan-universitys-annual-ignite-fest/',
    source: 'APN News | June 8, 2024',
  },
  {
    id: 3,
    title: 'The effectiveness of microlearning in online education can manifest...',
    image: '/img/Vignan-Online-Microlearning.9f08c6be.webp',
    link: 'https://www.indiatoday.in/education-today/featurephilia/story/the-effectiveness-of-microlearning-in-online-education-2539764-2024-05-16',
    source: 'India Today | May 16, 2024',
  },
  {
    id: 4,
    title: 'Unveiling the Influence of an MBA in Information Technology...',
    image: '/img/Unveiling-the-Influence-of-an-MBA.webp',
    link: 'https://businessnewsthisweek.com/education/unveiling-the-influence-of-an-mba-in-information-technology-on-leadership-proficiency/',
    source: 'Business News | Feb 27, 2024',
  },
  {
    id: 5,
    title: 'Reasons to Choose Business Analyst as Career Path for 2024',
    image: '/img/Reasons-to-Choose-Business.webp',
    link: 'https://www.apnnews.com/reasons-to-choose-business-analyst-as-career-path-for-2024/',
    source: 'APN News | Jan 31, 2024',
  },
  {
    id: 6,
    title: 'Elevate Your Business Operations with Google Cloud ...',
    image: '/img/Business-News-PR.07e323a0.webp',
    link: 'https://businessnewsthisweek.com/business/elevate-your-business-operations-with-google-cloud-join-vignan-onlines-informative-webinar/',
    source: 'Business News | Business News',
  },
  {
    id: 7,
    title: 'Vignan Online expands its MCA and BCA Programs offering to meet the...',
    image: '/img/pr-8.e4a99022.webp',
    link: 'https://www.apnnews.com/vignan-online-expands-its-mca-and-bca-programs-…rt_tk=cYYsre7lfxZ9EgZ3h8vu7SnLP1kmqPHAlxbiodwyfyc-1695890638-0-gaNycGzNDTs',
    source: 'APN News | Sep 27, 2023',
  },
  {
    id: 8,
    title: 'What skills can an online Master’s in finance teach you',
    image: '/img/hindustan-times.3e5b4795.webp',
    link: 'https://www.hindustantimes.com/education/news/what-skills-can-an-online-master-s-in-finance-teach-you-101689779563746.html',
    source: 'Hindustan Times | July 19, 2023',
  },
  {
    id: 9,
    title: 'Vignan Online to host a webinar on Accounting and Finance',
    image: '/img/india-education-diary.webp',
    link: 'https://indiaeducationdiary.in/vignan-online-to-host-a-webinar-on-accou…udying-in-a-classroom-to-working-in-the-corporate-sector/#google_vignette',
    source: 'India Education Diary | July 18, 2023',
  },
  {
    id: 10,
    title: 'Vignan Online Witnesses Exponential Growth in Online Program Enrollments',
    image: '/img/Go-earth-pr.03d0c329.webp',
    link: 'https://goearth.in/2023/06/13/vignan-online-witnesses-exponential-growth-in-online-program-enrollments/',
    source: 'Go Earth | June 13, 2023',
  },
  {
    id: 11,
    title: 'Vignan Online Witnesses Exponential Growth in Online Program Enrollments',
    image: '/img/apn-news.89f3c3f3.webp',
    link: 'https://www.apnnews.com/vignan-online-witnesses-exponential-growth-in-online-program-enrollments/',
    source: 'APN News | June 13, 2023',
  },
  {
    id: 12,
    title: 'Does data analytics require coding? Online Masters Degree Programs',
    image: '/img/pr-5.6431c2b2.webp',
    link: 'https://timesofindia.indiatimes.com/blogs/voices/does-data-analytics-require-coding/',
    source: 'The Times of India | May 9, 2023',
  },
  {
    id: 13,
    title: 'Does data analytics require coding? Online Masters Degree Programs',
    image: '/img/the-times-of-india-data-analytics.dc71bf92.webp',
    link: 'https://timesofindia.indiatimes.com/blogs/voices/does-data-analytics-require-coding/',
    source: 'The Times of India | May 9, 2023',
  },
];

const NewsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <section className="bg-[#f7f9fb]">
      <div className="w-full mx-auto max-w-7xl pt-8 pb-12">
        <div>
          <h2 className="text-center text-lg md:text-2xl font-bold uppercase">
            News &<span className="text-primary"> Media</span>
          </h2>
        </div>
        <div className="w-full pt-10 relative justify-center items-center m-auto">
          <div className="next-media absolute -bottom-8 right-4 md:top-[50%] md:-right-10 cursor-pointer slick-arrow" onClick={nextSlide}>
            <img src="/img/icon-slider-next.e03370c3.svg" width="40" height="40" alt="slider-next" />
          </div>
          <div className="prev-media absolute -bottom-8 left-4 md:top-[50%] md:-left-9 cursor-pointer slick-arrow" onClick={prevSlide}>
            <img src="/img/icon-slider-prev.f104ac12.svg" width="40" height="40" alt="slider prev" />
          </div>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {news.map((item) => (
                <div key={item.id} className="w-full max-w-xs flex-shrink-0">
                  <div className="md:p-2 p-1 w-full" style={{ display: 'inline-block' }}>
                    <div className="rounded-t-md justify-center m-auto">
                      <img
                        src={item.image}
                        alt={item.title}
                        width="370"
                        height="225"
                        className="w-full object-cover rounded-t-md"
                      />
                    </div>
                    <div className="bg-[#CA2526] text-white p-5 rounded-b-md">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <p className="text-[15px]">{item.title}</p>
                        <p className="font-semibold">{item.source}</p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 