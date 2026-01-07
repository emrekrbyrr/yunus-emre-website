import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Cloud, Cpu, Sparkles } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getIcon = (category) => {
    switch (category) {
      case 'Frontend Development':
        return <Code size={28} />;
      case 'Backend Development':
        return <Server size={28} />;
      case 'DevOps & Cloud':
        return <Cloud size={28} />;
      case 'Hardware & EMC':
        return <Cpu size={28} />;
      default:
        return <Sparkles size={28} />;
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gradient-to-br from-[#FAF7F0] to-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#3E3028] mb-4">Yetenekler & Uzmanlık Alanları</h2>
            <div className="w-24 h-1 bg-[#8B7355] mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-[#6B5D52] max-w-2xl mx-auto">
              Mühendislik kökenli bakış açımla, donanım ve yazılım dünyasının farklı dinamiklerine hakim bir şekilde çalışıyorum.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-[#E8DFD4] ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B7355] to-[#A0826D] rounded-lg flex items-center justify-center text-white mb-6 shadow-md">
                  {getIcon(skill.category)}
                </div>

                {/* Category */}
                <h3 className="text-xl font-bold text-[#3E3028] mb-4">
                  {skill.category}
                </h3>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#FAF7F0] text-[#6B5D52] text-sm rounded-full border border-[#E8DFD4] hover:bg-[#8B7355] hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;