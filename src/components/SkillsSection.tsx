import React, { useState } from 'react';

const skills = [
  {
    id: 1,
    title: 'Problem-Solving and Critical Thinking Skills',
    icon: '/img/problem-solving-icon.webp',
    description: 'Develop analytical thinking and problem-solving abilities to tackle complex challenges in the workplace.',
  },
  {
    id: 2,
    title: 'Leadership and Management Skills',
    icon: '/img/leadership-icon.webp',
    description: 'Learn to lead teams, manage projects, and make strategic decisions that drive organizational success.',
  },
  {
    id: 3,
    title: 'Emotional Intelligence and Personal Skills',
    icon: '/img/emotional-intelligence-icon.webp',
    description: 'Build self-awareness, empathy, and interpersonal skills for better workplace relationships.',
  },
  {
    id: 4,
    title: 'Communication and Interpersonal Skills',
    icon: '/img/communication-icon.webp',
    description: 'Master verbal and written communication skills for effective collaboration and presentation.',
  },
  {
    id: 5,
    title: 'Creativity and Innovation Skills',
    icon: '/img/creativity-icon.webp',
    description: 'Foster creative thinking and innovation to develop unique solutions and competitive advantages.',
  },
  {
    id: 6,
    title: 'Technical and Computer Skills',
    icon: '/img/technical-icon.webp',
    description: 'Acquire modern technical skills and computer literacy essential for today\'s digital workplace.',
  },
  {
    id: 7,
    title: 'Industry-Specific Skills',
    icon: '/img/industry-icon.webp',
    description: 'Gain specialized knowledge and skills relevant to your chosen industry and career path.',
  },
  {
    id: 8,
    title: 'Time and Project Management Skills',
    icon: '/img/time-management-icon.webp',
    description: 'Learn to manage time effectively, prioritize tasks, and deliver projects on schedule.',
  },
];

const SkillsSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const toggleSkill = (id: number) => {
    setActiveSkill(activeSkill === id ? null : id);
  };

  return (
    <section className="skills-section w-full bg-[#f7f9fb]">
      <div className="max-w-7xl m-auto py-8">
        <div className="text-center">
          <h2 className="font-bold text-lg pb-4">
            SKILLS THAT ENHANCE <span className="text-primary">YOUR LEARNING CURVE</span>
          </h2>
          <p className="text-gray-600">
            BECOME MORE THAN JUST A DEGREE HOLDER WITH SKILLS THAT MAKE YOU STAND OUT FROM THE CROWD
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-center pt-10 gap-10 items-center">
          <div className="p-2">
            <img
              className="object-contain"
              src="/img/banner-element-girl.af80a4cc.webp"
              width="275"
              height="301"
              alt="Skills illustration"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-7">
            <div className="lg:px-5 flex flex-col wrap items-center gap-5 w-full">
              {skills.slice(0, 4).map((skill) => (
                <div key={skill.id} className="w-full relative">
                  <button
                    className="accordion-header flex justify-between items-center gap-4 w-full shadow-md px-4 py-2 min-h-[60px] bg-[#ffffff] text-black hover:bg-gray-50 transition-all duration-300"
                    onClick={() => toggleSkill(skill.id)}
                  >
                    <div className="pl-1 text-sm flex justify-start items-center gap-2">
                      <img
                        src={skill.icon}
                        title={skill.title}
                        alt={skill.title}
                        width="26"
                        height="26"
                      />
                      <div className="pl-1 text-[14px] text-left">{skill.title}</div>
                    </div>
                    <div className={`transition-transform duration-300 ${activeSkill === skill.id ? 'rotate-180' : ''}`}>
                      <svg className="svg-inline--fa fa-angle-down fa-lg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path fill="currentColor" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                    </div>
                  </button>
                  {activeSkill === skill.id && (
                    <div className="skill-content active bg-white p-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:px-4 flex flex-col wrap items-center gap-5 w-full">
              {skills.slice(4, 8).map((skill) => (
                <div key={skill.id} className="w-full relative">
                  <button
                    className="accordion-header flex justify-between items-center gap-4 w-full shadow-md px-4 py-2 min-h-[60px] bg-[#ffffff] text-black hover:bg-gray-50 transition-all duration-300"
                    onClick={() => toggleSkill(skill.id)}
                  >
                    <div className="pl-1 text-sm flex justify-start items-center gap-2">
                      <img
                        src={skill.icon}
                        title={skill.title}
                        alt={skill.title}
                        width="26"
                        height="26"
                      />
                      <div className="pl-1 text-[14px]">{skill.title}</div>
                    </div>
                    <div className={`transition-transform duration-300 ${activeSkill === skill.id ? 'rotate-180' : ''}`}>
                      <svg className="svg-inline--fa fa-angle-down fa-lg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"><path fill="currentColor" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                    </div>
                  </button>
                  {activeSkill === skill.id && (
                    <div className="skill-content active bg-white p-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 