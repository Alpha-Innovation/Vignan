import React from 'react';

const stats = [
  { id: 1, value: '45+', label: 'Years of Excellence' },
  { id: 2, value: 'A+', label: 'NAAC Accreditation' },
  { id: 3, value: '72', label: 'NIRF India Rank' },
  { id: 4, value: '10000+', label: 'Online Learners' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="stats-section w-full bg-[#f7f9fb] py-12 fade-in">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md slide-up">
            <span className="text-3xl md:text-5xl font-bold text-[#CA2526] mb-2">{stat.value}</span>
            <span className="text-gray-700 text-lg md:text-xl font-semibold">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection; 