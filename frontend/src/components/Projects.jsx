import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedProjects, setExpandedProjects] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const categories = ['all', 'Full-Stack Development', 'Web Development & SEO', 'Hardware Engineering'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#3E3028] mb-4">Projeler</h2>
            <div className="w-24 h-1 bg-[#8B7355] mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-[#6B5D52] max-w-2xl mx-auto">
              Donanım ve yazılım projelerinde gerçekleştirdiğim bazı çalışmalar
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-[#8B7355] text-white shadow-lg'
                    : 'bg-[#FAF7F0] text-[#6B5D52] hover:bg-[#E8DFD4] border border-[#E8DFD4]'
                }`}
              >
                {category === 'all' ? 'Tümü' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8DFD4] group ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#FAF7F0] text-[#8B7355] text-xs font-medium rounded-full border border-[#E8DFD4]">
                      {project.category}
                    </span>
                    <div className="flex items-center text-[#A0826D] text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.year}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#3E3028] mb-3 group-hover:text-[#8B7355] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-[#6B5D52] text-sm leading-relaxed mb-4 ${
                    expandedProjects.includes(project.id) ? '' : 'line-clamp-3'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, expandedProjects.includes(project.id) ? undefined : 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#FAF7F0] text-[#6B5D52] text-xs rounded border border-[#E8DFD4]"
                      >
                        {tech}
                      </span>
                    ))}
                    {!expandedProjects.includes(project.id) && project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-[#A0826D] text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Toggle Button */}
                  <button 
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center text-[#8B7355] font-medium hover:text-[#6B5D52] transition-colors group/btn"
                  >
                    {expandedProjects.includes(project.id) ? 'Daha Az Göster' : 'Tamamını Oku'}
                    {expandedProjects.includes(project.id) ? (
                      <ChevronUp size={16} className="ml-2 group-hover/btn:-translate-y-1 transition-transform" />
                    ) : (
                      <ChevronDown size={16} className="ml-2 group-hover/btn:translate-y-1 transition-transform" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;