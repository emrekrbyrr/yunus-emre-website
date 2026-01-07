import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#FAF7F0] via-[#FEFEFE] to-[#F5EFE7]">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#A0826D]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B7355]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-6xl lg:text-7xl font-bold text-[#3E3028] mb-6 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-2xl lg:text-3xl text-[#8B7355] font-medium mb-4">
              {personalInfo.title}
            </p>
            <p className="text-lg lg:text-xl text-[#6B5D52] max-w-3xl mx-auto mb-12 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-[#8B7355] text-white rounded-lg font-medium hover:bg-[#6B5D52] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Projelerimi İncele
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-transparent border-2 border-[#8B7355] text-[#8B7355] rounded-lg font-medium hover:bg-[#8B7355] hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                İletişime Geç
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8DFD4] text-[#3E3028] hover:bg-[#8B7355] hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8DFD4] text-[#3E3028] hover:bg-[#8B7355] hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8DFD4] text-[#3E3028] hover:bg-[#8B7355] hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-[#8B7355]" />
      </button>
    </section>
  );
};

export default Hero;