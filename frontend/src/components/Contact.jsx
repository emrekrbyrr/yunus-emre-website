import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-br from-[#FAF7F0] to-[#F5EFE7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#3E3028] mb-4">{contactInfo.title}</h2>
            <div className="w-24 h-1 bg-[#8B7355] mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-[#6B5D52] max-w-2xl mx-auto">
              {contactInfo.subtitle}
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Email Card */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl hover:bg-[#FEFEFE] transition-all duration-300 border border-[#E8DFD4] hover:shadow-2xl group transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B7355] to-[#A0826D] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                <Mail size={28} />
              </div>
              <div className="text-center">
                <div className="text-sm text-[#A0826D] font-medium mb-2">Email</div>
                <div className="text-[#3E3028] font-semibold break-all">{contactInfo.email}</div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl hover:bg-[#FEFEFE] transition-all duration-300 border border-[#E8DFD4] hover:shadow-2xl group transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B7355] to-[#A0826D] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                <Phone size={28} />
              </div>
              <div className="text-center">
                <div className="text-sm text-[#A0826D] font-medium mb-2">Telefon</div>
                <div className="text-[#3E3028] font-semibold">{contactInfo.phone}</div>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-[#E8DFD4] shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B7355] to-[#A0826D] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <MapPin size={28} />
              </div>
              <div className="text-center">
                <div className="text-sm text-[#A0826D] font-medium mb-2">Konum</div>
                <div className="text-[#3E3028] font-semibold">Kocaeli, Türkiye</div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-16 text-center">
            <h4 className="text-xl font-semibold text-[#3E3028] mb-6">Sosyal Medya</h4>
            <div className="flex justify-center gap-6">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#3E3028] hover:bg-[#8B7355] hover:text-white transform hover:scale-110 transition-all duration-300 border border-[#E8DFD4] shadow-lg hover:shadow-xl"
              >
                <Github size={24} />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#3E3028] hover:bg-[#8B7355] hover:text-white transform hover:scale-110 transition-all duration-300 border border-[#E8DFD4] shadow-lg hover:shadow-xl"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;