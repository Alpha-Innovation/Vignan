import React from 'react';

const features = [
  {
    id: 1,
    title: '360° Career',
    description: 'Advancement Serveices',
    icon: '/img/career-advancement-icon.webp',
  },
  {
    id: 2,
    title: 'Learning Management System',
    description: 'User friendly interactive web',
    icon: '/img/lms-icon.webp',
  },
  {
    id: 3,
    title: '10+',
    description: 'In-demand electives & Advanced certifications',
    icon: '/img/electives-icon.webp',
  },
  {
    id: 4,
    title: 'Learners Support System',
    description: 'Dedicated team to answer your queries & guide you throughout',
    icon: '/img/support-icon.webp',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <div className="w-full mx-auto max-w-7xl pt-8">
        <div className="py-4">
          <h2 className="uppercase text-lg md:text-2xl font-bold pb-4 text-center">
            RE-DEFINING YOUR <span className="text-primary">RECOGNITIONS</span>
          </h2>
          <p className="text-center text-gray-600">GET THE ADDED ADVANTAGE OF KICKSTARTING YOUR CAREER</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-[60%] lg:p-10 md:p-0 w-full flex flex-col justify-between lg:gap-5 gap-2">
            <div className="flex lg:gap-5 gap-3 px-3">
              {features.slice(0, 2).map((feature) => (
                <div key={feature.id} className="flex flex-col md:flex-row justify-center items-center gap-10 bg-white border-[#e6ecef] rounded-xl w-[300px] py-5 px-4 md:p-[20px] md:w-[550px] min-h-[180px] shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={feature.icon}
                    title={feature.title}
                    alt={feature.title}
                    width="90"
                    height="90"
                    className="w-20 h-16 object-contain"
                  />
                  <p className="text-center md:text-left">
                    <span className="text-primary font-semibold">{feature.title}</span>
                    <br />
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex lg:gap-5 gap-3 px-3 mt-4">
              {features.slice(2, 4).map((feature) => (
                <div key={feature.id} className="flex flex-col md:flex-row justify-center items-center gap-10 bg-white border-[#e6ecef] rounded-xl w-[300px] py-5 px-4 md:p-[20px] md:w-[550px] min-h-[180px] shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={feature.icon}
                    title={feature.title}
                    alt={feature.title}
                    width="90"
                    height="90"
                    className="w-20 h-16 object-contain"
                  />
                  <p className="text-center md:text-left">
                    <span className="text-primary font-semibold">{feature.title}</span>
                    <br />
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-[40%] p-10">
            <img src="/img/Online-Education.f03165ae.webp" alt="Online Education" width="355" height="556" className="-mt-[22%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 