import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight, Calendar, Tag, Award, TrendingUp, Users, Zap, Target, Sparkles, Star, CheckCircle2, Play } from 'lucide-react';

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
      status: 'Completed',
      rating: 4.9
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
      status: 'Completed',
      rating: 4.8
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
      status: 'Completed',
      rating: 4.9
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
      status: 'Completed',
      rating: 4.7
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
      status: 'Completed',
      rating: 4.8
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
      status: 'Completed',
      rating: 4.6
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
      case 'High': return 'bg-emerald-500/10 text-emerald-700 border-emerald-200';
      case 'Medium': return 'bg-amber-500/10 text-amber-700 border-amber-200';
      default: return 'bg-blue-500/10 text-blue-700 border-blue-200';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Automotive': 'bg-blue-500/10 text-blue-700 border-blue-200',
      'Aerospace': 'bg-purple-500/10 text-purple-700 border-purple-200',
      'Medical': 'bg-red-500/10 text-red-700 border-red-200',
      'Industrial': 'bg-gray-500/10 text-gray-700 border-gray-200',
      'Energy': 'bg-green-500/10 text-green-700 border-green-200',
      'Electronics': 'bg-indigo-500/10 text-indigo-700 border-indigo-200',
    };
    return colors[category] || 'bg-gray-500/10 text-gray-700 border-gray-200';
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/3 to-purple-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div 
          className={`text-center mb-16 lg:mb-24 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/10 border border-blue-200 rounded-xl">
              <Sparkles className="h-5 w-5 text-blue-600" />
            </div>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium shadow-sm">
              Our Portfolio
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Featured
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped industry leaders achieve breakthrough results through 
            <span className="text-gray-900 font-semibold"> innovative engineering solutions</span> and 
            <span className="text-gray-900 font-semibold"> cutting-edge technology</span>.
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects - Hero Style */}
        {featuredProjects.length > 0 && (
          <div className="mb-20 lg:mb-32">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Featured</span>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Floating Badges */}
                    <div className="absolute top-6 right-6 flex flex-col gap-3">
                      <span className={`px-3 py-2 rounded-full text-sm font-semibold border backdrop-blur-md ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <span className={`px-3 py-2 rounded-full text-sm font-semibold border backdrop-blur-md ${getImpactColor(project.impact)}`}>
                        {project.impact} Impact
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < Math.floor(project.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-gray-700 text-sm font-semibold">{project.rating}</span>
                      </div>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{project.duration} • {project.year}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>{project.status}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 font-medium">
                      Client: <span className="text-gray-800">{project.client}</span>
                    </p>

                    <p className="text-gray-700 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {project.results.slice(0, 4).map((result, idx) => {
                        const IconComponent = result.icon;
                        return (
                          <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center hover:bg-gray-100 transition-colors duration-300 group/result">
                            <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover/result:scale-110 transition-transform duration-300">
                              <IconComponent className="h-5 w-5 text-blue-600" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-1">{result.value}</div>
                            <div className="text-xs text-gray-600 font-medium">{result.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-50 border border-blue-200 text-blue-700 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 group-hover:shadow-lg group-hover:shadow-blue-500/25 hover:scale-[1.02]">
                      <span>View Case Study</span>
                      <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects - Modern Card Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {regularProjects.filter(project => 
            activeFilter === 'All' || project.category === activeFilter
          ).map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100 hover:border-gray-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + featuredProjects.length + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${getImpactColor(project.impact)}`}>
                    {project.impact}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-gray-700 text-sm font-semibold">{project.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.duration} • {project.year}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>{project.status}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 font-medium">
                  Client: <span className="text-gray-800">{project.client}</span>
                </p>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Compact Results */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.results.slice(0, 2).map((result, idx) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center hover:bg-gray-100 transition-colors duration-200">
                        <IconComponent className="h-4 w-4 text-blue-600 mx-auto mb-2" />
                        <div className="text-sm font-bold text-gray-900 mb-1">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
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
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg hover:scale-[1.02]">
                  <span>View Details</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div 
          className={`relative transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="relative overflow-hidden rounded-3xl">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Animated Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl animate-bounce"></div>
            </div>
            
            {/* Content */}
            <div className="relative p-12 lg:p-20 text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <span className="text-white/90 font-bold text-xl tracking-wide">Ready to Transform?</span>
              </div>

              <h3 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Let's Build Something
                <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                  Extraordinary Together
                </span>
              </h3>

              <p className="text-white/90 text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
                Join <strong className="text-yellow-300">250+ industry leaders</strong> who trust us to solve their most complex engineering challenges. 
                Your next breakthrough starts here.
              </p>
              
              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/30 flex items-center justify-center gap-3"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                <button className="group bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-3">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Our Story</span>
                </button>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/20">
                {[
                  { value: "250+", label: "Projects Delivered", icon: Award },
                  { value: "98%", label: "Success Rate", icon: TrendingUp },
                  { value: "15+", label: "Years Experience", icon: Target },
                  { value: "50+", label: "Expert Engineers", icon: Users }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.value}</div>
                      <div className="text-white/70 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;