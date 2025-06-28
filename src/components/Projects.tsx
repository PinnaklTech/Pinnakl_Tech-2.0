import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Calendar, 
  Users, 
  Award, 
  ArrowRight, 
  Zap, 
  Target,
  TrendingUp,
  CheckCircle,
  Star,
  Clock,
  Layers
} from 'lucide-react';

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
      id: 1,
      title: "Advanced Manufacturing Solutions",
      subtitle: "Smart Factory Implementation",
      description: "Comprehensive ERP implementation for a leading manufacturing company, streamlining operations and increasing efficiency by 40%. This project involved complete digital transformation with IoT integration and real-time monitoring systems.",
      image: "/Manufacturing.jpg",
      category: "Manufacturing",
      year: "2024",
      client: "Industrial Corp",
      duration: "8 months",
      budget: "$2.5M",
      technologies: ["ERP", "IoT", "Analytics", "Automation"],
      results: ["40% efficiency increase", "30% cost reduction", "Real-time monitoring", "Predictive maintenance"],
      stats: { value: "40%", label: "Efficiency Gain" },
      rating: 5,
      color: "blue",
      featured: true
    },
    {
      id: 2,
      title: "Supply Chain Optimization",
      subtitle: "End-to-end logistics transformation",
      description: "AI-powered supply chain management system with real-time tracking and predictive analytics for global operations. Revolutionized inventory management and reduced operational costs significantly.",
      image: "/supply-chain.jpg",
      category: "Logistics",
      year: "2023",
      client: "Global Logistics Ltd",
      duration: "12 months",
      budget: "$3.2M",
      technologies: ["AI/ML", "Blockchain", "Cloud", "Analytics"],
      results: ["25% faster delivery", "15% cost savings", "99.9% accuracy", "Global visibility"],
      stats: { value: "25%", label: "Faster Delivery" },
      rating: 5,
      color: "emerald",
      featured: false
    },
    {
      id: 3,
      title: "Metallurgy Process Control",
      subtitle: "Automated quality assurance",
      description: "Advanced sensor-based quality control system for metallurgical processes with machine learning integration. Implemented cutting-edge monitoring and automated defect detection.",
      image: "/Metallurgy.jpg",
      category: "Metallurgy",
      year: "2023",
      client: "Steel Industries Inc",
      duration: "6 months",
      budget: "$1.8M",
      technologies: ["Sensors", "Automation", "ML", "Quality Control"],
      results: ["50% defect reduction", "20% productivity gain", "Automated reporting", "Zero downtime"],
      stats: { value: "50%", label: "Defect Reduction" },
      rating: 5,
      color: "purple",
      featured: true
    },
    {
      id: 4,
      title: "Power Transmission Systems",
      subtitle: "Smart grid modernization",
      description: "Next-generation smart grid management solution with predictive maintenance and energy optimization capabilities. Enhanced grid reliability and energy distribution efficiency.",
      image: "/PowerTransmission.webp",
      category: "Energy",
      year: "2024",
      client: "Power Grid Solutions",
      duration: "10 months",
      budget: "$4.1M",
      technologies: ["Smart Grid", "Predictive Analytics", "IoT", "Energy Management"],
      results: ["30% energy savings", "Reduced downtime", "Predictive maintenance", "Grid stability"],
      stats: { value: "30%", label: "Energy Savings" },
      rating: 5,
      color: "amber",
      featured: false
    },
    {
      id: 5,
      title: "Product Development Platform",
      subtitle: "Innovation acceleration framework",
      description: "Comprehensive product development platform with integrated design tools, testing protocols, and compliance management. Streamlined the entire product lifecycle from concept to market.",
      image: "/Product_development.jpg",
      category: "Product Development",
      year: "2024",
      client: "Innovation Labs",
      duration: "14 months",
      budget: "$2.9M",
      technologies: ["CAD Integration", "Testing Automation", "Compliance", "Collaboration"],
      results: ["60% faster development", "Reduced time-to-market", "Automated testing", "Regulatory compliance"],
      stats: { value: "60%", label: "Faster Development" },
      rating: 5,
      color: "indigo",
      featured: true
    },
    {
      id: 6,
      title: "ERP Integration Suite",
      subtitle: "Enterprise-wide digital transformation",
      description: "Complete Odoo ERP implementation with custom modules, integrations, and advanced analytics for multi-location operations. Unified all business processes under one comprehensive system.",
      image: "/ERP.jpg",
      category: "ERP Solutions",
      year: "2023",
      client: "Enterprise Solutions Inc",
      duration: "16 months",
      budget: "$3.7M",
      technologies: ["Odoo", "Custom Modules", "API Integration", "Business Intelligence"],
      results: ["Unified operations", "Real-time insights", "Process automation", "Scalable architecture"],
      stats: { value: "100%", label: "Process Integration" },
      rating: 5,
      color: "red",
      featured: false
    }
  ];

  const categories = ['All', 'Manufacturing', 'Logistics', 'Metallurgy', 'Energy', 'Product Development', 'ERP Solutions'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: {
        gradient: string;
        bg: string;
        text: string;
        accent: string;
        shadow: string;
      };
    } = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        bg: "bg-blue-50/50",
        text: "text-blue-700",
        accent: "bg-blue-100",
        shadow: "shadow-blue-500/20"
      },
      emerald: {
        gradient: "from-emerald-500 to-emerald-600",
        bg: "bg-emerald-50/50",
        text: "text-emerald-700",
        accent: "bg-emerald-100",
        shadow: "shadow-emerald-500/20"
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        bg: "bg-purple-50/50",
        text: "text-purple-700",
        accent: "bg-purple-100",
        shadow: "shadow-purple-500/20"
      },
      amber: {
        gradient: "from-amber-500 to-amber-600",
        bg: "bg-amber-50/50",
        text: "text-amber-700",
        accent: "bg-amber-100",
        shadow: "shadow-amber-500/20"
      },
      indigo: {
        gradient: "from-indigo-500 to-indigo-600",
        bg: "bg-indigo-50/50",
        text: "text-indigo-700",
        accent: "bg-indigo-100",
        shadow: "shadow-indigo-500/20"
      },
      red: {
        gradient: "from-red-500 to-red-600",
        bg: "bg-red-50/50",
        text: "text-red-700",
        accent: "bg-red-100",
        shadow: "shadow-red-500/20"
      },
    };

    return colorMap[color] || colorMap.blue;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        
        {/* Complex animated patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Diagonal moving lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent animate-pulse-slow transform rotate-12"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent animate-pulse-slower transform -rotate-12"></div>
          </div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-100/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-100/20 rounded-full blur-xl animate-float-horizontal"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-emerald-100/20 rounded-full blur-xl animate-float-vertical"></div>
          
          {/* Enhanced grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="projects-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="1" fill="rgba(59, 130, 246, 0.3)"/>
                  <circle cx="0" cy="0" r="1" fill="rgba(147, 51, 234, 0.2)"/>
                  <circle cx="80" cy="0" r="1" fill="rgba(16, 185, 129, 0.2)"/>
                  <circle cx="0" cy="80" r="1" fill="rgba(245, 158, 11, 0.2)"/>
                  <circle cx="80" cy="80" r="1" fill="rgba(239, 68, 68, 0.2)"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#projects-grid)"/>
            </svg>
          </div>
        </div>
        
        {/* Enhanced corner accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-100/30 via-amber-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-100/20 to-red-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm rounded-full mb-6 shadow-lg"
          >
            <Target className="h-4 w-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-sm">
              Our Success Stories
            </span>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight px-4"
          >
            Transforming Industries with{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Innovative Solutions
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-full opacity-30"></div>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 mb-8"
          >
            Discover how we've helped leading companies achieve remarkable results through 
            cutting-edge engineering solutions and strategic implementations.
          </motion.p>

          {/* Enhanced Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Projects Grid - Clean Cards Without Outlines */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {filteredProjects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const isHovered = hoveredProject === index;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${colors.shadow} ${
                  isHovered ? "scale-[1.02] shadow-2xl" : "hover:scale-[1.01]"
                } h-full flex flex-col shadow-lg`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Project Image - Fixed Height */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Enhanced Overlays */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${colors.gradient} text-white shadow-lg`}>
                      {project.category}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-900">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className={`text-lg font-bold ${colors.text}`}>
                        {project.stats.value}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {project.stats.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content - Flexible Height */}
                <div className="relative p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className={`text-sm font-medium ${colors.text} mb-3`}>
                        {project.subtitle}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 ml-2 flex-shrink-0" />
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Enhanced Project Meta */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600 truncate">{project.client}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{project.duration}</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <Layers className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600 font-medium">{project.budget}</span>
                    </div>
                  </div>

                  {/* Technologies - Compact */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Results - Compact */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                      Key Results:
                    </h4>
                    <div className="space-y-2">
                      {project.results.slice(0, 2).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button - Always at bottom */}
                  <div className="mt-auto">
                    <button className={`w-full bg-gradient-to-r ${colors.gradient} text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-black/10 group-hover:scale-105`}>
                      <span>View Case Study</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="relative z-10"
        >
          <div className="relative rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl bg-white/30 backdrop-blur-lg">
            {/* Enhanced Background layers */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/8410.jpg')] bg-cover opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-100/40 to-indigo-100/60"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-float-horizontal"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-sm">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-blue-700 font-semibold text-lg tracking-wide">
                  Ready to Transform Your Business?
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Let's Create Your Next
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  Success Story
                </span>
              </h3>

              <p className="text-gray-700 text-lg mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                Join the ranks of industry leaders who have transformed their operations with our 
                innovative engineering solutions. Your breakthrough is just a conversation away.
              </p>

              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-300/30 flex items-center justify-center gap-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </button>

                <button className="bg-white/80 backdrop-blur-md text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <Award className="h-5 w-5" />
                  <span>View All Projects</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;