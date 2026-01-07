import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    setFormStatus('Gönderiliyor...');
    setTimeout(() => {
      setFormStatus('Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus(''), 5000);
    }, 1500);
  };

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

          {/* Contact Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#3E3028] mb-6">
                  İletişim Bilgileri
                </h3>
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-[#FEFEFE] transition-all duration-300 border border-[#E8DFD4] hover:shadow-md group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B7355] to-[#A0826D] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-[#A0826D] font-medium">Email</div>
                      <div className="text-[#3E3028] font-semibold">{contactInfo.email}</div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-[#FEFEFE] transition-all duration-300 border border-[#E8DFD4] hover:shadow-md group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B7355] to-[#A0826D] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-[#A0826D] font-medium">Telefon</div>
                      <div className="text-[#3E3028] font-semibold">{contactInfo.phone}</div>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#E8DFD4]">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B7355] to-[#A0826D] rounded-lg flex items-center justify-center text-white">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-[#A0826D] font-medium">Konum</div>
                      <div className="text-[#3E3028] font-semibold">Kocaeli, Türkiye</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-lg font-semibold text-[#3E3028] mb-4">Sosyal Medya</h4>
                <div className="flex gap-4">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#3E3028] hover:bg-[#8B7355] hover:text-white transform hover:scale-110 transition-all duration-300 border border-[#E8DFD4] shadow-md"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#3E3028] hover:bg-[#8B7355] hover:text-white transform hover:scale-110 transition-all duration-300 border border-[#E8DFD4] shadow-md"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#E8DFD4]">
              <h3 className="text-2xl font-bold text-[#3E3028] mb-6">
                Mesaj Gönder
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#6B5D52] mb-2">
                    Adınız
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E8DFD4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all bg-[#FAF7F0]"
                    placeholder="Adınızı girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#6B5D52] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E8DFD4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all bg-[#FAF7F0]"
                    placeholder="Email adresinizi girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#6B5D52] mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E8DFD4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all bg-[#FAF7F0]"
                    placeholder="Mesaj konusu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#6B5D52] mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-[#E8DFD4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent transition-all resize-none bg-[#FAF7F0]"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#8B7355] text-white rounded-lg font-medium hover:bg-[#6B5D52] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Gönder
                </button>

                {formStatus && (
                  <div className="p-4 bg-[#FAF7F0] border border-[#8B7355] text-[#3E3028] rounded-lg text-center">
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;