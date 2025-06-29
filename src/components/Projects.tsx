import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Clock,
  Layers,
  ChevronLeft,
  ChevronRight,
  FileText,
  Filter,
  Grid3X3,
  ChevronDown
} from 'lucide-react';
import { getFeaturedProjects } from '../data/projects';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset currentSlide when filter changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeFilter]);

  const projects = getFeaturedProjects();

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Carousel navigation for desktop
  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(newDirection);
    setCurrentSlide((prevSlide) => {
      if (newDirection === 1) {
        return prevSlide === filteredProjects.length - 1 ? 0 : prevSlide + 1;
      } else {
        return prevSlide === 0 ? filteredProjects.length - 1 : prevSlide - 1;
      }
    });

    setTimeout(() => setIsAnimating(false), 400);
  };

  // Auto-advance carousel for desktop only
  useEffect(() => {
    if (!isMobile && filteredProjects.length > 1 && !isAnimating) {
      const timer = setInterval(() => {
        paginate(1);
      }, 8000);

      return () => clearInterval(timer);
    }
  }, [filteredProjects.length, currentSlide, isAnimating, isMobile]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    })
  };

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: {
        gradient: string;
        bg: string;
        text: string;
        accent: string;
        shadow: string;
        border: string;
      };
    } = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        bg: "bg-blue-50/50",
        text: "text-blue-700",
        accent: "bg-blue-100",
        shadow: "shadow-blue-500/20",
        border: "border-blue-200"
      },
      emerald: {
        gradient: "from-emerald-500 to-emerald-600",
        bg: "bg-emerald-50/50",
        text: "text-emerald-700",
        accent: "bg-emerald-100",
        shadow: "shadow-emerald-500/20",
        border: "border-emerald-200"
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        bg: "bg-purple-50/50",
        text: "text-purple-700",
        accent: "bg-purple-100",
        shadow: "shadow-purple-500/20",
        border: "border-purple-200"
      },
      amber: {
        gradient: "from-amber-500 to-amber-600",
        bg: "bg-amber-50/50",
        text: "text-amber-700",
        accent: "bg-amber-100",
        shadow: "shadow-amber-500/20",
        border: "border-amber-200"
      },
      indigo: {
        gradient: "from-indigo-500 to-indigo-600",
        bg: "bg-indigo-50/50",
        text: "text-indigo-700",
        accent: "bg-indigo-100",
        shadow: "shadow-indigo-500/20",
        border: "border-indigo-200"
      },
      red: {
        gradient: "from-red-500 to-red-600",
        bg: "bg-red-50/50",
        text: "text-red-700",
        accent: "bg-red-100",
        shadow: "shadow-red-500/20",
        border: "border-red-200"
      },
    };

    return colorMap[color] || colorMap.blue;
  };

  if (filteredProjects.length === 0) {
    return (
      <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">No Projects Found</h2>
          <p className="text-gray-600">No projects match the selected filter.</p>
        </div>
      </section>
    );
  }

  // Mobile Project Card Component
  const MobileProjectCard = ({ project, index }: { project: any; index: number }) => {
    const colors = getColorClasses(project.color);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg overflow-hidden border border-gray-200/50 hover:shadow-xl hover:border-gray-300/50 transition-all duration-300 group"
      >
        {/* Image */}
        <div className="relative h-32 xs:h-36 sm:h-40 md:h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
            <span className={`inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${colors.gradient} text-white shadow-lg backdrop-blur-sm`}>
              {project.category}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <span className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-900 shadow-sm">
              <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 md:p-5">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className={`text-xs sm:text-sm font-medium ${colors.text} mb-2 sm:mb-3`}>
            {project.subtitle}
          </p>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Meta Info Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-md sm:rounded-lg flex items-center justify-center">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Client</div>
                <div className="text-xs font-medium text-gray-900 truncate">{project.client}</div>
              </div>
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-md sm:rounded-lg flex items-center justify-center">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Duration</div>
                <div className="text-xs font-medium text-gray-900">{project.duration}</div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-3 sm:mb-4">
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium bg-gray-200 text-gray-600 border border-gray-300">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Key Results */}
          <div className="mb-4 sm:mb-5">
            <h4 className="text-xs font-semibold text-gray-900 mb-1 sm:mb-2 flex items-center">
              <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 text-green-600" />
              Key Results:
            </h4>
            <div className="space-y-0.5 sm:space-y-1">
              {project.results.slice(0, 2).map((result: string, resultIndex: number) => (
                <div key={resultIndex} className="flex items-center text-xs text-gray-600">
                  <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                  <span className="line-clamp-1">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Button */}
          <Link
            to={`/projects/${project.id}`}
            className={`w-full bg-gradient-to-r ${colors.gradient} text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] text-xs sm:text-sm group-hover:shadow-xl touch-manipulation`}
          >
            <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>View Case Study</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute inset-0 overflow-hidden opacity-20 sm:opacity-30">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/50 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-200/50 to-transparent"></div>
        </div>
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-96 xl:h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-96 xl:h-96 bg-gradient-to-tl from-emerald-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm rounded-full mb-4 sm:mb-6 shadow-lg"
          >
            <Target className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-xs sm:text-sm">
              Featured Projects
            </span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4"
          >
            Transforming Industries with{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Innovative Solutions
              </span>
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-full opacity-30"></div>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 mb-6 sm:mb-8"
          >
            Discover how we've helped leading companies achieve remarkable results through 
            cutting-edge engineering solutions and strategic implementations.
          </motion.p>

          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            {/* Mobile Filter - Custom Dropdown */}
            <div className="lg:hidden">
              <div className="relative max-w-xs mx-auto">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-left font-medium text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md sm:rounded-lg flex items-center justify-center">
                      <Grid3X3 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-900 text-sm sm:text-base">{activeFilter}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isFilterOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg sm:rounded-xl shadow-2xl z-50 overflow-hidden"
                    >
                      {categories.map((category, index) => (
                        <button
                          key={category}
                          onClick={() => {
                            setActiveFilter(category);
                            setIsFilterOpen(false);
                          }}
                          className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left font-medium transition-all duration-200 flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
                            activeFilter === category
                              ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-l-4 border-blue-500'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                            activeFilter === category ? 'bg-blue-500' : 'bg-gray-300'
                          }`}></div>
                          <span>{category}</span>
                          {activeFilter === category && (
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 ml-auto" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Filter Tabs */}
            <div className="hidden lg:flex flex-wrap justify-center gap-2 lg:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Display */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          {/* Mobile: Card Grid */}
          <div className="lg:hidden">
            <div className="grid gap-3 sm:gap-4 md:gap-6 sm:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <MobileProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Desktop: Carousel */}
          <div className="hidden lg:block">
            <div className="relative h-[600px] xl:h-[700px] 2xl:h-[800px]">
              <div className="relative w-full h-full overflow-hidden rounded-2xl xl:rounded-3xl">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "tween", duration: 0.3, ease: "easeInOut" },
                      opacity: { duration: 0.3, ease: "easeInOut" }
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {(() => {
                      const currentProject = filteredProjects[currentSlide];
                      const colors = getColorClasses(currentProject.color);
                      
                      return (
                        <div className={`relative w-full h-full bg-white/90 backdrop-blur-sm rounded-2xl xl:rounded-3xl overflow-hidden shadow-2xl ${colors.shadow}`}>
                          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-5`}></div>

                          <div className="grid lg:grid-cols-2 h-full">
                            {/* Project Image */}
                            <div className="relative h-full overflow-hidden">
                              <img
                                src={currentProject.image}
                                alt={currentProject.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                              
                              {/* Overlays */}
                              <div className="absolute top-4 lg:top-6 right-4 lg:right-6 flex flex-col gap-2 lg:gap-3">
                                <span className={`inline-flex items-center px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-sm font-medium bg-gradient-to-r ${colors.gradient} text-white shadow-lg`}>
                                  {currentProject.category}
                                </span>
                                <span className="inline-flex items-center px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-sm font-medium bg-white/90 backdrop-blur-sm text-gray-900">
                                  <Calendar className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
                                  {currentProject.year}
                                </span>
                              </div>
                            </div>

                            {/* Project Content */}
                            <div className="relative p-6 lg:p-8 xl:p-12 flex flex-col">
                              {/* Header with case study button */}
                              <div className="flex items-start justify-between mb-4 lg:mb-6">
                                <div className="flex-1">
                                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 lg:mb-3 leading-tight">
                                    {currentProject.title}
                                  </h3>
                                  <p className={`text-base lg:text-lg font-medium ${colors.text} mb-3 lg:mb-4`}>
                                    {currentProject.subtitle}
                                  </p>
                                </div>
                                
                                <div className="ml-3 lg:ml-4">
                                  <Link
                                    to={`/projects/${currentProject.id}`}
                                    className={`bg-gradient-to-r ${colors.gradient} text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl font-semibold flex items-center gap-1.5 lg:gap-2 shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm lg:text-base`}
                                  >
                                    <FileText className="h-4 w-4 lg:h-5 lg:w-5" />
                                    <span>View Case Study</span>
                                    <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4" />
                                  </Link>
                                </div>
                              </div>

                              <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-base lg:text-lg">
                                {currentProject.description}
                              </p>

                              {/* Project Meta */}
                              <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 mr-2 lg:mr-3" />
                                  <div>
                                    <div className="text-sm text-gray-500">Client</div>
                                    <div className="font-medium text-gray-900 text-sm lg:text-base">{currentProject.client}</div>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 mr-2 lg:mr-3" />
                                  <div>
                                    <div className="text-sm text-gray-500">Duration</div>
                                    <div className="font-medium text-gray-900 text-sm lg:text-base">{currentProject.duration}</div>
                                  </div>
                                </div>
                                <div className="flex items-center col-span-2">
                                  <Layers className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 mr-2 lg:mr-3" />
                                  <div>
                                    <div className="text-sm text-gray-500">Investment</div>
                                    <div className="font-medium text-gray-900 text-sm lg:text-base">{currentProject.budget}</div>
                                  </div>
                                </div>
                              </div>

                              {/* Technologies */}
                              <div className="mb-4 lg:mb-6">
                                <h4 className="text-sm font-semibold text-gray-900 mb-2 lg:mb-3">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                                  {currentProject.technologies.map((tech: string, techIndex: number) => (
                                    <span
                                      key={techIndex}
                                      className="inline-flex items-center px-2 lg:px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Key Results */}
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold text-gray-900 mb-3 lg:mb-4 flex items-center">
                                  <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 mr-2 text-green-600" />
                                  Key Results:
                                </h4>
                                <div className="grid grid-cols-2 gap-1.5 lg:gap-2">
                                  {currentProject.results.map((result: string, resultIndex: number) => (
                                    <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                                      <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-1.5 lg:mr-2 flex-shrink-0" />
                                      <span>{result}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={() => paginate(-1)}
                    disabled={isAnimating}
                    className="absolute left-4 lg:left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-800 hover:text-blue-600 p-3 lg:p-4 rounded-full shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>

                  <button
                    onClick={() => paginate(1)}
                    disabled={isAnimating}
                    className="absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-800 hover:text-blue-600 p-3 lg:p-4 rounded-full shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Carousel Indicators */}
            {filteredProjects.length > 1 && (
              <div className="flex justify-center mt-6 lg:mt-8 gap-2 lg:gap-3">
                {filteredProjects.map((_, index) => {
                  const colors = getColorClasses(filteredProjects[currentSlide].color);
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isAnimating) {
                          setDirection(index > currentSlide ? 1 : -1);
                          setCurrentSlide(index);
                          setIsAnimating(true);
                          setTimeout(() => setIsAnimating(false), 400);
                        }
                      }}
                      disabled={isAnimating}
                      className={`transition-all duration-300 rounded-full disabled:opacity-50 ${
                        index === currentSlide
                          ? `w-8 lg:w-12 h-2.5 lg:h-3 bg-gradient-to-r ${colors.gradient} shadow-lg`
                          : 'w-2.5 lg:w-3 h-2.5 lg:h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="relative z-10"
        >
          <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 overflow-hidden shadow-2xl bg-white/30 backdrop-blur-lg">
            {/* Background layers */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/8410.jpg')] bg-cover opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-100/40 to-indigo-100/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg sm:rounded-xl shadow-sm">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-600" />
                </div>
                <span className="text-blue-700 font-semibold text-sm sm:text-base md:text-lg tracking-wide">
                  Ready to Transform Your Business?
                </span>
              </div>

              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
                Let's Create Your Next
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  Success Story
                </span>
              </h3>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                Join the ranks of industry leaders who have transformed their operations with our 
                innovative engineering solutions. Your breakthrough is just a conversation away.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-300/30 flex items-center justify-center gap-2 touch-manipulation"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                <Link
                  to="/projects"
                  className="bg-white/80 backdrop-blur-md text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:bg-white transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center gap-2 touch-manipulation"
                >
                  <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>View All Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;