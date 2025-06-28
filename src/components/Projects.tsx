import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight, Calendar, Tag, Award, TrendingUp, Users, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
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
      category: 'Automotive',
      duration: '8 months',
      year: '2024',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete redesign of critical engine components resulting in 15% performance improvement and 20% weight reduction through advanced materials engineering.',
      results: [
        { label: 'Performance Increase', value: '15%', icon: TrendingUp },
        { label: 'Weight Reduction', value: '20%', icon: Zap },
        { label: 'Annual Savings', value: '$2M', icon: Award },
        { label: 'Team Size', value: '12', icon: Users }
      ],
      tags: ['CAD Design', 'Performance Analysis', 'Manufacturing', 'Materials'],
      featured: true,
      impact: 'High',
      status: 'Completed'
    },
    {
      title: 'Aerospace Component Manufacturing Optimization',
      client: 'Defense Contractor',
      category: 'Aerospace',
      duration: '12 months',
      year: '2024',
      image: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Optimization of manufacturing processes for critical aerospace components with enhanced precision and reduced cycle times.',
      results: [
        { label: 'Cycle Time Reduction', value: '40%', icon: TrendingUp },
        { label: 'Quality Rate', value: '99.9%', icon: Award },
        { label: 'Cost Savings', value: '$5M', icon: Zap },
        { label: 'Compliance', value: 'AS9100', icon: Users }
      ],
      tags: ['Process Optimization', 'Quality Systems', 'Lean Manufacturing'],
      featured: false,
      impact: 'High',
      status: 'Completed'
    },
    {
      title: 'Medical Device Development',
      client: 'Healthcare Technology Company',
      category: 'Medical',
      duration: '10 months',
      year: '2023',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'End-to-end development of innovative medical device from concept to FDA approval and market launch.',
      results: [
        { label: 'FDA Approval', value: 'Achieved', icon: Award },
        { label: 'Market Success', value: '95%', icon: TrendingUp },
        { label: 'User Satisfaction', value: '95%', icon: Users },
        { label: 'Patents Filed', value: '3', icon: Zap }
      ],
      tags: ['Product Development', 'Regulatory Compliance', 'Innovation'],
      featured: true,
      impact: 'High',
      status: 'Completed'
    },
    {
      title: 'Industrial Automation Solution',
      client: 'Manufacturing Corporation',
      category: 'Industrial',
      duration: '6 months',
      year: '2023',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Design and implementation of automated manufacturing line improving productivity and reducing human error.',
      results: [
        { label: 'Productivity Increase', value: '60%', icon: TrendingUp },
        { label: 'Error Reduction', value: '90%', icon: Award },
        { label: 'ROI Timeline', value: '18mo', icon: Zap },
        { label: 'Safety Record', value: '100%', icon: Users }
      ],
      tags: ['Automation', 'Robotics', 'Process Design'],
      featured: false,
      impact: 'Medium',
      status: 'Completed'
    },
    {
      title: 'Renewable Energy System Design',
      client: 'Clean Energy Startup',
      category: 'Energy',
      duration: '14 months',
      year: '2023',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Innovative wind turbine blade design optimizing energy capture efficiency and durability in harsh environments.',
      results: [
        { label: 'Efficiency Gain', value: '25%', icon: TrendingUp },
        { label: 'Durability Increase', value: '50%', icon: Award },
        { label: 'Patent Status', value: 'Pending', icon: Zap },
        { label: 'Market Impact', value: 'High', icon: Users }
      ],
      tags: ['Sustainable Design', 'CFD Analysis', 'Materials Engineering'],
      featured: false,
      impact: 'High',
      status: 'Completed'
    },
    {
      title: 'Consumer Electronics Redesign',
      client: 'Electronics Manufacturer',
      category: 'Electronics',
      duration: '7 months',
      year: '2022',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete product redesign focusing on user experience, manufacturability, and cost optimization.',
      results: [
        { label: 'Cost Reduction', value: '30%', icon: TrendingUp },
        { label: 'UX Rating', value: '4.8/5', icon: Award },
        { label: 'Assembly Time', value: '-40%', icon: Zap },
        { label: 'Market Position', value: '#1', icon: Users }
      ],
      tags: ['Product Design', 'UX Optimization', 'Cost Engineering'],
      featured: false,
      impact: 'Medium',
      status: 'Completed'
    }
  ];

  const categories = ['All', 'Automotive', 'Aerospace', 'Medical', 'Industrial', 'Energy', 'Electronics'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Automotive': 'bg-blue-100 text-blue-800',
      'Aerospace': 'bg-purple-100 text-purple-800',
      'Medical': 'bg-red-100 text-red-800',
      'Industrial': 'bg-gray-100 text-gray-800',
      'Energy': 'bg-green-100 text-green-800',
      'Electronics': 'bg-indigo-100 text-indigo-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50/30"></div>
        
        {/* Animated geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent animate-pulse-slow"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent animate-pulse-slower"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200/30 to-transparent animate-slide-up"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-200/30 to-transparent animate-slide-down"></div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div 
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-3 sm:px-4 py-2 bg-white/80 border border-gray-200 rounded-full text-gray-700 text-sm font-medium backdrop-blur-sm shadow-sm">
              Our Portfolio
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 sm:mb-8 leading-none tracking-tight">
            FEATURED
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-600 mt-2">
              Projects
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
              Explore our portfolio of <span className="text-gray-900 font-semibold">successful engineering projects</span> that showcase 
              our expertise in delivering <span className="text-gray-900 font-semibold">innovative solutions</span> across 
              <span className="text-gray-900 font-semibold"> diverse industries</span>.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div 
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects - Large Cards */}
        {featuredProjects.length > 0 && (
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-white hover:border-gray-300 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      Featured
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category and Impact */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getImpactColor(project.impact)}`}>
                        {project.impact} Impact
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{project.duration} • {project.year}</span>
                      </div>
                      <span className="text-green-600 text-sm font-medium">{project.status}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3">
                      Client: <span className="font-medium">{project.client}</span>
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.results.slice(0, 4).map((result, idx) => {
                        const IconComponent = result.icon;
                        return (
                          <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
                            <IconComponent className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                            <div className="text-lg font-bold text-gray-900">{result.value}</div>
                            <div className="text-xs text-gray-600">{result.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-gray-400 text-xs font-medium py-1">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg">
                      <span>View Case Study</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {regularProjects.filter(project => 
            activeFilter === 'All' || project.category === activeFilter
          ).map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden hover:bg-white hover:border-gray-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + featuredProjects.length + 1) * 150}ms` }}
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
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getImpactColor(project.impact)}`}>
                    {project.impact}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  <span>{project.duration} • {project.year}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-3">
                  Client: {project.client}
                </p>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key Results */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.results.slice(0, 2).map((result, idx) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={idx} className="bg-gray-50 rounded-lg p-2 text-center">
                        <IconComponent className="h-3 w-3 text-blue-600 mx-auto mb-1" />
                        <div className="text-sm font-bold text-gray-900">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
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
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg text-sm sm:text-base">
                  <span>View Details</span>
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div 
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="relative bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl p-8 sm:p-12 hover:bg-white hover:border-gray-300 hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-xl sm:rounded-2xl"></div>
            
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Join our portfolio of successful projects. Let's discuss how we can bring your engineering vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-300/30 flex items-center justify-center gap-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <button className="bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-md">
                  View All Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;