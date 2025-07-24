import React, { useState, useRef, useEffect } from 'react';

const programs = [
  {
    id: 1,
    title: 'Online BCA in Computer Science and Information Technology',
    image: '/img/Online-BCA-in-Computer-Science-and-IT.47d64dcf.webp',
    duration: '3 years',
    category: 'bachelors',
    link: '/online-bca/computer-science-it',
  },
  {
    id: 2,
    title: 'Online BBA in General Management',
    image: '/img/online-bba-in-general-management.f846b928.webp',
    duration: '3 years',
    category: 'bachelors',
    link: '/online-bba/general',
  },
  {
    id: 3,
    title: 'Online MBA in Human Resource Management',
    image: '/img/online-mba-hr.webp',
    duration: '2 years',
    category: 'masters',
    link: '/online-mba/human-resource-management',
  },
  {
    id: 4,
    title: 'Online MBA in Marketing',
    image: '/img/online-mba-marketing.webp',
    duration: '2 years',
    category: 'masters',
    link: '/online-mba/marketing',
  },
  {
    id: 5,
    title: 'Online MBA in Business Analytics',
    image: '/img/online-mba-analytics.webp',
    duration: '2 years',
    category: 'masters',
    link: '/online-mba/business-analytics',
  },
  {
    id: 6,
    title: 'Online MBA in Finance and Human Resource',
    image: '/img/online-mba-finance-hr.webp',
    duration: '2 years',
    category: 'masters',
    link: '/online-mba/finance-and-human-resource',
  },
  {
    id: 7,
    title: 'Online MCA in Computer Science and Information Technology',
    image: '/img/online-mca-cs.webp',
    duration: '2 years',
    category: 'masters',
    link: '/online-mca/computer-science-and-it',
  },
  {
    id: 8,
    title: 'Online MBA in Information Technology',
    image: '/img/online-mba-it.webp',
    duration: '2 years',
    category: 'masters',
    link: '/online-mba/information-technology',
  },
  {
    id: 9,
    title: 'Online MBA in Finance',
    image: '/img/online-mba-finance.webp',
    duration: '2 years',
    category: 'masters',
    link: '/online-mba/finance',
  },
  {
    id: 10,
    title: 'Online MCA in Data Science',
    image: '/img/Online-MCA-in-Data-Science.55acdb6f.webp',
    duration: '2 years',
    category: 'masters',
    link: '/online-mca/data-science',
  },
];

const getTitleParts = (title: string) => {
  // Split at ' in ' to get main and specialization
  const match = title.match(/(.+ in )(.+)/);
  if (match) {
    return [match[1], match[2]];
  }
  return [title, ''];
};

interface ProgramsSectionProps {
  onCtaClick?: () => void;
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onCtaClick }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [openInfo, setOpenInfo] = useState<number | null>(null);
  const infoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openInfo !== null &&
        infoRefs.current[openInfo] &&
        !infoRefs.current[openInfo]?.contains(event.target as Node)
      ) {
        setOpenInfo(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openInfo]);

  const filteredPrograms =
    activeTab === 'all' ? programs : programs.filter((program) => program.category === activeTab);

  return (
    <section className="programs-section w-full bg-[#f7f9fb] py-10 font-[Montserrat],sans-serif">
      <div className="lg:max-w-7xl mx-auto justify-center px-3">
        <div className="flex lg:flex-row flex-col text-center justify-center">
          <h1 className="lg:text-[22px] text-xl flex font-bold uppercase text-center justify-center">
            Online Degree
          </h1>
          <h2 className="text-[#CA2526] lg:text-[22px] text-xl flex font-bold uppercase pl-3 text-center justify-center">
            Programs Offered
          </h2>
        </div>
        <div>
          <div className="alltabs flex flex-row justify-center gap-[10px] lg:gap-[20px] pt-10 pb-10">
            <button
              className={`tabbutton md:min-w-[165px] w-[150px] lg:w-[180px] xl:w-[100px] py-2 md:min-h-[60px] text-black ${
                activeTab === 'all' ? 'active bg-[#CA2526] text-white' : 'bg-white hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button
              className={`tabbutton md:min-w-[165px] w-[150px] lg:w-[180px] xl:w-[100px] py-2 md:min-h-[60px] text-black ${
                activeTab === 'masters' ? 'active bg-[#CA2526] text-white' : 'bg-white hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('masters')}
            >
              MASTERS
            </button>
            <button
              className={`tabbutton md:min-w-[165px] w-[150px] lg:w-[180px] xl:w-[100px] py-2 md:min-h-[60px] text-black ${
                activeTab === 'bachelors' ? 'active bg-[#CA2526] text-white' : 'bg-white hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('bachelors')}
            >
              BACHELORS
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {filteredPrograms.map((program, idx) => {
              const [main, specialization] = getTitleParts(program.title);
              const programIdx = programs.findIndex((p) => p.id === program.id);
              return (
                <div
                  key={program.id}
                  className="max-w-[370px] mx-auto border border-gray-200 rounded-xl bg-white shadow-none hover:shadow-md transition-all duration-300 p-0"
                >
                    <img
                      src={program.image}
                      alt={program.title}
                    className="w-full h-[220px] object-cover rounded-t-xl"
                    />
                  <div className="p-6 flex flex-col">
                    <p className="font-bold text-base text-left mb-2">
                      {main}
                      {specialization && (
                        <span className="text-[#CA2526] font-semibold">{specialization}</span>
                      )}
                    </p>
                    <div className="flex flex-col gap-2 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <img src="/img/live-classes-icon.webp" alt="" className="w-5 h-5" />
                        <span className="text-gray-700">Live Online Classes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src="/img/duration-icon.webp" alt="" className="w-4 h-4" />
                        <span className="text-gray-700">{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1" ref={el => infoRefs.current[programIdx] = el}>
                        <span className="font-semibold text-gray-800">Course Fee:</span>
                        <span className="text-[#CA2526] font-bold text-base">
                          {program.category === 'bachelors' ? 'Rs. 1,08,000' : 'Rs. 90,000'}
                        </span>
                        <div className="relative group">
                          <button
                            type="button"
                            className="ml-1 text-xs text-gray-500 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center focus:outline-none"
                            tabIndex={0}
                            aria-label="Info"
                            onClick={e => {
                              e.stopPropagation();
                              setOpenInfo(openInfo === programIdx ? null : programIdx);
                            }}
                            onMouseEnter={() => {
                              if (window.innerWidth >= 768) setOpenInfo(programIdx);
                            }}
                            onMouseLeave={() => {
                              if (window.innerWidth >= 768) setOpenInfo(null);
                            }}
                          >
                            i
                          </button>
                          {/* Tooltip */}
                          <div
                            className={`absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg text-xs text-gray-700 px-3 py-2 z-20 transition-opacity duration-200 ${openInfo === programIdx ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                          >
                            Excluding Registration and Exam Fee
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="w-full bg-[#CA2526] text-white font-bold rounded-full py-3 text-base mt-2 uppercase hover:bg-white hover:text-[#CA2526] hover:border hover:border-[#CA2526] transition"
                      type="button"
                      onClick={onCtaClick}
                    >
                      Get Started
                    </button>
                  </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection; 