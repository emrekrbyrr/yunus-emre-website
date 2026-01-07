import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#FEFEFE]">
      {/* Large Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#8B7355]/20 to-[#A0826D]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#A0826D]/15 to-[#8B7355]/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        {/* Accent Lines */}
        <div className="absolute top-1/4 left-10 w-32 h-1 bg-gradient-to-r from-[#8B7355] to-transparent"></div>
        <div className="absolute bottom-1/3 right-10 w-40 h-1 bg-gradient-to-l from-[#A0826D] to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-[#8B7355]/30 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-[#A0826D]/30 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF7F0] border border-[#E8DFD4] rounded-full mb-6">
              <div className="w-2 h-2 bg-[#8B7355] rounded-full animate-pulse"></div>
              <span className="text-sm text-[#6B5D52] font-medium">Full-Stack Developer</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-[#3E3028] mb-4 tracking-tight leading-tight">
              {personalInfo.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-[#8B7355] to-[#A0826D] rounded-full"></div>
              <p className="text-xl lg:text-2xl text-[#8B7355] font-medium">
                Electronics Engineer
              </p>
            </div>

            <p className="text-lg text-[#6B5D52] mb-8 leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-[#8B7355] text-white rounded-lg font-medium hover:bg-[#6B5D52] transform hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg"
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
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#A0826D] font-medium">Beni Takip Edin:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FAF7F0] text-[#3E3028] hover:bg-[#8B7355] hover:text-white transform hover:scale-110 transition-all duration-300 border border-[#E8DFD4]"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FAF7F0] text-[#3E3028] hover:bg-[#8B7355] hover:text-white transform hover:scale-110 transition-all duration-300 border border-[#E8DFD4]"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#FAF7F0] text-[#3E3028] hover:bg-[#8B7355] hover:text-white transform hover:scale-110 transition-all duration-300 border border-[#E8DFD4]"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image with Decorative Elements */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Decorative Frame */}
            <div className="relative">
              {/* Background Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355] to-[#A0826D] rounded-3xl transform rotate-3 scale-105"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt="Yunus Emre Kırbayır"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-2 border-[#FAF7F0] transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#8B7355]">5+</div>
                  <div className="text-xs text-[#6B5D52] font-medium">Yıl Deneyim</div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border-2 border-[#FAF7F0] transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-[#8B7355]">15+</div>
                  <div className="text-xs text-[#6B5D52] font-medium">Proje</div>
                </div>
              </div>

              {/* Decorative Elements Around Image */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-[#8B7355]/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="text-sm text-[#A0826D] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Aşağı Kaydır</span>
        <div className="w-6 h-10 border-2 border-[#8B7355] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#8B7355] rounded-full animate-bounce"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;