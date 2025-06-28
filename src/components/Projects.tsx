import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight, Calendar, Tag, Award, TrendingUp, Users, Zap, Target, Sparkles } from 'lucide-react';

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
      description: 'Complete redesign of critical engine components resulting in 15% performance improvement and 20% weight reduction through advanced materials engineering and precision manufacturing.',
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
      title: 'Medical Device Development',
      client: 'Healthcare Technology Company',
      category: 'Medical',
      duration: '10 months',
      year: '2023',
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'End-to-end development of innovative medical device from concept to FDA approval and market launch with exceptional user satisfaction.',
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
      {/* Premium Background Design */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/80 to-blue-50/40"></div>
        
        {/* Sophisticated geometric patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent animate-pulse-slow"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200/60 to-transparent animate-pulse-slower"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-200/40 to-transparent animate-slide-up"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-200/40 to-transparent animate-slide-down"></div>
          
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="project-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="1" fill="rgba(59, 130, 246, 0.3)"/>
                  <circle cx="0" cy="0" r="0.5" fill="rgba(147, 51, 234, 0.2)"/>
                  <circle cx="80" cy="80" r="0.5" fill="rgba(147, 51, 234, 0.2)"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#project-grid)"/>
            </svg>
          </div>
        </div>
        
        {/* Enhanced corner accents */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-bl from-blue-100/40 via-purple-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-purple-100/40 via-blue-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header Design */}
        <div 
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="p-2 bg-white/80 border border-gray-200 rounded-lg backdrop-blur-sm shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-600" />
            </div>
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

        {/* Enhanced Category Filter */}
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
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/80 text-gray-700 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Premium Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:bg-white hover:border-gray-300/70 hover:shadow-2xl hover:shadow-black/10 transition-all duration-700 transform hover:scale-[1.02] ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Premium Featured Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                      <Award className="h-4 w-4" />
                      <span>Featured</span>
                    </div>
                  </div>

                  {/* Enhanced Image Section */}
                  <div className="relative h-56 sm:h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Enhanced Badges */}
                    <div className="absolute top-6 right-6 flex flex-col gap-3">
                      <span className={`px-3 py-2 rounded-full text-sm font-medium backdrop-blur-md ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <span className={`px-3 py-2 rounded-full text-sm font-medium border backdrop-blur-md ${getImpactColor(project.impact)}`}>
                        {project.impact} Impact
                      </span>
                    </div>

                    {/* Status indicator */}
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-2 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-700 text-sm font-medium">{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Premium Content Section */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{project.duration} • {project.year}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      Client: <span className="font-semibold text-gray-800">{project.client}</span>
                    </p>

                    <p className="text-gray-700 mb-8 leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Enhanced Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {project.results.slice(0, 4).map((result, idx) => {
                        const IconComponent = result.icon;
                        return (
                          <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-200/50 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group/result">
                            <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover/result:scale-110 transition-transform duration-300">
                              <IconComponent className="h-5 w-5 text-blue-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-1">{result.value}</div>
                            <div className="text-xs text-gray-600 font-medium">{result.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Enhanced Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 border border-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-gray-400 text-sm font-medium py-2">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Premium CTA Button */}
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 group-hover:shadow-lg group-hover:shadow-blue-500/30 hover:scale-[1.02]">
                      <span>View Case Study</span>
                      <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Regular Projects Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {regularProjects.filter(project => 
            activeFilter === 'All' || project.category === activeFilter
          ).map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 transform hover:scale-105 overflow-hidden hover:bg-white hover:border-gray-300/70 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + featuredProjects.length + 1) * 150}ms` }}
            >
              {/* Enhanced Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border backdrop-blur-md ${getImpactColor(project.impact)}`}>
                    {project.impact}
                  </span>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-3">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span>{project.duration} • {project.year}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-4">
                  Client: <span className="font-medium text-gray-800">{project.client}</span>
                </p>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Compact Results */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {project.results.slice(0, 2).map((result, idx) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={idx} className="bg-gray-50 border border-gray-200/50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors duration-200">
                        <IconComponent className="h-4 w-4 text-blue-600 mx-auto mb-2" />
                        <div className="text-sm font-bold text-gray-900 mb-1">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Compact Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
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

                {/* Enhanced CTA Button */}
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg hover:scale-[1.02] text-sm sm:text-base">
                  <span>View Details</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div 
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="relative overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <span className="text-white/90 font-semibold text-lg tracking-wide">Ready to get started?</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Transform Your Engineering
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Vision Into Reality
                </span>
              </h3>

              <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Join over <strong className="text-yellow-300">250+ forward-thinking companies</strong> that trust us to solve their toughest engineering challenges. 
                Let's create something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/30 flex items-center justify-center gap-3"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
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