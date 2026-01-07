import React, { useEffect, useRef, useState } from 'react';
import { aboutText, stats, personalInfo } from '../data/mock';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#3E3028] mb-4">Hakkımda</h2>
            <div className="w-24 h-1 bg-[#8B7355] mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Workspace Image */}
            <div className="space-y-8">
              {/* Workspace/Tech Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355] to-[#A0826D] rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
                <img
                  src="https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3Njc4MDU3MDN8MA&ixlib=rb-4.1.0&q=85"
                  alt="Professional Workspace"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white"
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`p-6 bg-gradient-to-br from-[#FAF7F0] to-[#F5EFE7] rounded-xl text-center transform hover:scale-105 transition-all duration-300 border border-[#E8DFD4] shadow-lg hover:shadow-xl ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl font-bold text-[#8B7355] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#6B5D52] font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-[#6B5D52] leading-relaxed">
                {aboutText.intro}
              </p>
              <p className="text-lg text-[#6B5D52] leading-relaxed">
                {aboutText.current}
              </p>
              <p className="text-lg text-[#6B5D52] leading-relaxed">
                {aboutText.passion}
              </p>

              {/* Education */}
              <div className="mt-8 p-6 bg-[#FAF7F0] rounded-lg border border-[#E8DFD4]">
                <h3 className="text-xl font-semibold text-[#3E3028] mb-2">
                  Eğitim
                </h3>
                <p className="text-[#6B5D52]">
                  <strong>Kocaeli Üniversitesi</strong>
                </p>
                <p className="text-[#A0826D]">
                  Elektronik ve Haberleşme Mühendisliği
                </p>
                <p className="text-sm text-[#A0826D] mt-2">
                  Uzmanlık: Elektromanyetik Uyumluluk (EMC)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;