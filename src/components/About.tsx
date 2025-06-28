import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Zap, Target, ArrowRight, Cpu, Shield, Globe, TrendingUp } from "lucide-react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
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

  const stats = [
    { number: "250+", label: "Projects Delivered", icon: Target, accent: "border-emerald-500 text-emerald-600" },
    { number: "15+", label: "Years of Excellence", icon: Award, accent: "border-amber-500 text-amber-600" },
    { number: "50+", label: "Expert Engineers", icon: Users, accent: "border-blue-500 text-blue-600" },
    { number: "98%", label: "Success Rate", icon: Zap, accent: "border-red-500 text-red-600" },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO 9001:2015 certified processes ensuring the highest standards in every project delivery."
    },
    {
      icon: Cpu,
      title: "Advanced Technology",
      description: "Cutting-edge CAD/CAM systems and rapid prototyping facilities for innovative solutions."
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Serving diverse industries worldwide with localized knowledge and international standards."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of transforming complex challenges into efficient, sustainable solutions."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        
        {/* Animated geometric lines */}
        <div className="absolute inset-0 overflow-hidden opacity-40 sm:opacity-50 lg:opacity-60">
          {/* Horizontal moving lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent animate-pulse-slow"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent animate-pulse-slower"></div>
          
          {/* Vertical moving lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/50 to-transparent animate-slide-up"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-200/50 to-transparent animate-slide-down"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M60 0H0v60h60V0zM30 30m-1 0a1 1 0 1 1 2 0 1 1 0 1 1-2 0" fill="rgba(59, 130, 246, 0.1)"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"/>
            </svg>
          </div>
        </div>
        
        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Fully Responsive */}
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="inline-block mb-3 sm:mb-4 md:mb-6">
            <span className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-white/80 border border-gray-200 rounded-full text-gray-700 text-xs sm:text-sm md:text-base font-medium backdrop-blur-sm shadow-sm">
              About Our Company
            </span>
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-none tracking-tight">
            PINNAKL
            <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-gray-600 mt-1 sm:mt-2">
              Technologies
            </span>
          </h1>
          
          <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed font-light">
              We are a <span className="text-gray-900 font-semibold">leading engineering</span> and manufacturing consultancy, 
              dedicated to delivering <span className="text-gray-900 font-semibold">innovative solutions</span> that drive 
              <span className="text-gray-900 font-semibold"> industrial excellence</span> and technological advancement.
            </p>
          </div>
        </div>

        {/* Stats Section - Mobile Optimized Grid */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`group relative transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 h-full hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl border-2 ${stat.accent} flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ${stat.accent.split(' ')[1]}`} />
                    </div>
                    
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300">
                      {stat.number}
                    </div>
                    
                    <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid - Responsive Layout */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {/* Content Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
                Engineering the{" "}
                <span className="relative">
                  <span className="relative z-10 text-blue-600">Future</span>
                  <span className="absolute inset-0 bg-blue-100 blur-lg rounded-lg"></span>
                </span>{" "}
                of Manufacturing
              </h2>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 md:mb-10">
                <p>
                  <strong className="text-gray-900">Pinnakl</strong> is an engineering and technology services company 
                  based in <span className="text-gray-900 font-medium">Memphis, Tennessee</span>. We specialize in 
                  <span className="text-gray-900 font-medium"> metallurgical services</span>, 
                  <span className="text-gray-900 font-medium"> failure analysis</span>, and solving complex 
                  manufacturing engineering challenges.
                </p>
                
                <p>
                  We serve industries including <span className="text-gray-900 font-medium">heavy manufacturing</span>, 
                  <span className="text-gray-900 font-medium"> oil and gas</span>, 
                  <span className="text-gray-900 font-medium"> energy</span>, 
                  <span className="text-gray-900 font-medium"> transportation</span>, and 
                  <span className="text-gray-900 font-medium"> medical devices</span>, delivering innovative solutions 
                  that drive efficiency and reliability.
                </p>
                
                <p>
                  Our team is committed to delivering <span className="text-gray-900 font-medium">tailored services</span> designed 
                  to meet the specific needs of our manufacturing clients, supporting success and growth across various sectors.
                </p>
              </div>

              {/* CTA Button - Responsive */}
              <button className="group relative overflow-hidden bg-gray-900 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-base md:text-lg touch-manipulation">
                <span>Explore Our Portfolio</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-slate-700/20 rounded-xl sm:rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
                
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm shadow-lg">
                  <div className="aspect-[4/3] relative">
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                        <div className="text-center">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-2 sm:mb-4"></div>
                          <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Loading Excellence...</p>
                        </div>
                      </div>
                    )}
                    
                    <img
                      src="/pinnakltech.gif"
                      alt="Pinnakl Technologies Engineering Excellence"
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setImageLoaded(true)}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid - Mobile Responsive */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div
            className={`text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Core <span className="text-gray-600">Capabilities</span>
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
              Comprehensive engineering solutions backed by decades of experience and cutting-edge technology
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div
                  key={capability.title}
                  className={`group transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-full hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-800 transition-colors duration-300">
                          {capability.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision - Mobile Responsive */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-full hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Our Mission</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg group-hover:text-gray-800 transition-colors duration-300">
                Pinnakl helps customers find and use the <span className="text-gray-900 font-medium">right technologies</span> to 
                improve their work and <span className="text-gray-900 font-medium">grow their business</span>.
              </p>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 h-full hover:bg-white hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-emerald-600" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Our Vision</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg group-hover:text-gray-800 transition-colors duration-300">
                To be the <span className="text-gray-900 font-medium">trusted partner</span> for our customers, making 
                advanced technologies <span className="text-gray-900 font-medium">simple, affordable, and effective</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;