import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#3E3028] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#3E3028] mb-4">{personalInfo.name}</h3>
            <p className="text-[#E8DFD4] mb-4">
              Full-Stack Developer & Elektronik ve Haberleşme Mühendisi
            </p>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#6B5D52] hover:bg-[#8B7355] transition-all duration-300 transform hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#6B5D52] hover:bg-[#8B7355] transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#6B5D52] hover:bg-[#8B7355] transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[#E8DFD4] hover:text-[#8B7355] transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#E8DFD4] hover:text-[#8B7355] transition-colors"
                >
                  Hakkımda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-[#E8DFD4] hover:text-[#8B7355] transition-colors"
                >
                  Yetenekler
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-[#E8DFD4] hover:text-[#8B7355] transition-colors"
                >
                  Projeler
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#E8DFD4] hover:text-[#8B7355] transition-colors"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-[#E8DFD4]">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-[#8B7355] transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-[#8B7355] transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="pt-2">
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#6B5D52] pt-8 text-center">
          <p className="text-[#E8DFD4] flex items-center justify-center gap-2">
            © {currentYear} {personalInfo.name}. Tüm hakları saklıdır.
            <span className="flex items-center gap-1">
              Made with <Heart size={16} className="text-[#8B7355] fill-current" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;