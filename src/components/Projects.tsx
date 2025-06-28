import React from 'react';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Advanced Manufacturing Solutions",
      description: "Comprehensive ERP implementation for a leading manufacturing company, streamlining operations and increasing efficiency by 40%.",
      image: "/Manufacturing.jpg",
      category: "Manufacturing",
      year: "2024",
      client: "Industrial Corp",
      technologies: ["ERP", "IoT", "Analytics"],
      results: ["40% efficiency increase", "30% cost reduction", "Real-time monitoring"]
    },
    {
      id: 2,
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain management system with real-time tracking and predictive analytics.",
      image: "/supply-chain.jpg",
      category: "Logistics",
      year: "2023",
      client: "Global Logistics Ltd",
      technologies: ["AI/ML", "Blockchain", "Cloud"],
      results: ["25% faster delivery", "15% cost savings", "99.9% accuracy"]
    },
    {
      id: 3,
      title: "Metallurgy Process Control",
      description: "Automated quality control system for metallurgical processes with advanced sensor integration.",
      image: "/Metallurgy.jpg",
      category: "Metallurgy",
      year: "2023",
      client: "Steel Industries Inc",
      technologies: ["Sensors", "Automation", "Quality Control"],
      results: ["50% defect reduction", "20% productivity gain", "Automated reporting"]
    },
    {
      id: 4,
      title: "Power Transmission Systems",
      description: "Smart grid management solution with predictive maintenance and energy optimization capabilities.",
      image: "/PowerTransmission.webp",
      category: "Energy",
      year: "2024",
      client: "Power Grid Solutions",
      technologies: ["Smart Grid", "Predictive Analytics", "IoT"],
      results: ["30% energy savings", "Reduced downtime", "Predictive maintenance"]
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed businesses across industries with innovative solutions 
            and cutting-edge technology implementations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                index % 2 === 0 ? 'lg:translate-y-0' : 'lg:translate-y-8'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Client */}
                <div className="flex items-center mb-4">
                  <Users className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Client: {project.client}</span>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-blue-600" />
                    Key Results:
                  </h4>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-4">Let's discuss how we can help transform your business</p>
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Get Started Today
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;