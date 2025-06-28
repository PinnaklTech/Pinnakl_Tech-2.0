import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight, Calendar, Tag } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Automotive Engine Component Redesign',
      client: 'Leading Automotive Manufacturer',
      category: 'Automotive Engineering',
      duration: '8 months',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete redesign of critical engine components resulting in 15% performance improvement and 20% weight reduction.',
      results: ['15% Performance Increase', '20% Weight Reduction', '$2M Annual Savings', 'ISO Certification'],
      tags: ['CAD Design', 'Performance Analysis', 'Manufacturing']
    },
    {
      title: 'Aerospace Component Manufacturing Optimization',
      client: 'Defense Contractor',
      category: 'Aerospace',
      duration: '12 months',
      image: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Optimization of manufacturing processes for critical aerospace components with enhanced precision and reduced cycle times.',
      results: ['40% Cycle Time Reduction', '99.9% Quality Rate', 'AS9100 Compliance', 'Cost Savings: $5M'],
      tags: ['Process Optimization', 'Quality Systems', 'Lean Manufacturing']
    },
    {
      title: 'Medical Device Development',
      client: 'Healthcare Technology Company',
      category: 'Medical Devices',
      duration: '10 months',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'End-to-end development of innovative medical device from concept to FDA approval and market launch.',
      results: ['FDA Approval Achieved', 'Market Launch Success', '95% User Satisfaction', 'Patent Filed'],
      tags: ['Product Development', 'Regulatory Compliance', 'Innovation']
    },
    {
      title: 'Industrial Automation Solution',
      client: 'Manufacturing Corporation',
      category: 'Industrial Automation',
      duration: '6 months',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Design and implementation of automated manufacturing line improving productivity and reducing human error.',
      results: ['60% Productivity Increase', '90% Error Reduction', 'ROI: 18 months', 'Zero Safety Incidents'],
      tags: ['Automation', 'Robotics', 'Process Design']
    },
    {
      title: 'Renewable Energy System Design',
      client: 'Clean Energy Startup',
      category: 'Renewable Energy',
      duration: '14 months',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Innovative wind turbine blade design optimizing energy capture efficiency and durability in harsh environments.',
      results: ['25% Efficiency Gain', '50% Durability Increase', 'Patent Pending', 'Commercial Success'],
      tags: ['Sustainable Design', 'CFD Analysis', 'Materials Engineering']
    },
    {
      title: 'Consumer Electronics Redesign',
      client: 'Electronics Manufacturer',
      category: 'Consumer Electronics',
      duration: '7 months',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete product redesign focusing on user experience, manufacturability, and cost optimization.',
      results: ['30% Cost Reduction', 'Improved UX Rating', 'Faster Assembly', 'Market Leader Position'],
      tags: ['Product Design', 'UX Optimization', 'Cost Engineering']
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our portfolio of successful engineering projects that showcase our expertise 
            in delivering innovative solutions across diverse industries.
          </p>
        </div>

        {/* Projects Grid - Mobile Responsive */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Header */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span>{project.duration}</span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3">
                    Client: {project.client}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="text-gray-400 text-xs font-medium py-1">
                      +{project.tags.length - 2} more
                    </span>
                  )}
                </div>

                {/* Results */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.slice(0, 2).map((result) => (
                      <li key={result} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-xs sm:text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg text-sm sm:text-base">
                  <span>View Case Study</span>
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div 
          className={`mt-12 sm:mt-16 text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105">
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;