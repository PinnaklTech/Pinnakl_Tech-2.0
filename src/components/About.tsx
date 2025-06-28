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
    <section id="about" ref={sectionRef} className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute inset-0 overflow-hidden opacity-30 sm:opacity-40 lg:opacity-50">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent animate-pulse-slow"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent animate-pulse-slower"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/50 to-transparent animate-slide-up"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-200/50 to-transparent animate-slide-down"></div>
        </div>
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-96 xl:h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-96 xl:h-96 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="inline-block mb-2 sm:mb-3 md:mb-4 lg:mb-6">
            <span className="px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 bg-white/80 border border-gray-200 rounded-full text-gray-700 text-xs sm:text-sm md:text-base font-medium backdrop-blur-sm shadow-sm">
              About Our Company
            </span>
          </div>
          
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-none tracking-tight">
            PINNAKL
            <span className="block text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-gray-600 mt-1 sm:mt-2">
              Technologies
            </span>
          </h1>
          
          <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed font-light">
              We are a <span className="text-gray-900 font-semibold">leading engineering</span> and manufacturing consultancy, 
              dedicated to delivering <span className="text-gray-900 font-semibold">innovative solutions</span> that drive 
              <span className="text-gray-900 font-semibold"> industrial excellence</span> and technological advancement.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
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
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 h-full hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                    <div className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-md sm:rounded-lg md:rounded-xl border-2 ${stat.accent} flex items-center justify-center mb-1 sm:mb-2 md:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 ${stat.accent.split(' ')[1]}`} />
                    </div>
                    
                    <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2 group-hover:scale-105 transition-transform duration-300">
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Content Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight">
                Engineering the{" "}
                <span className="relative">
                  <span className="relative z-10 text-blue-600">Future</span>
                  <span className="absolute inset-0 bg-blue-100 blur-lg rounded-lg"></span>
                </span>{" "}
                of Manufacturing
              </h2>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8 lg:mb-10">
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

              {/* CTA Button */}
              <button className="group relative overflow-hidden bg-gray-900 text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-1 sm:space-x-2 md:space-x-3 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center sm:justify-start text-xs sm:text-sm md:text-base lg:text-lg touch-manipulation">
                <span>Explore Our Portfolio</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-slate-700/20 rounded-lg sm:rounded-xl md:rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
                
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-sm shadow-lg">
                  <div className="aspect-[4/3] relative">
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                        <div className="text-center">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-1 sm:mb-2 md:mb-4"></div>
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

        {/* Capabilities Grid */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div
            className={`text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
              Our Core <span className="text-gray-600">Capabilities</span>
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-3xl mx-auto px-4">
              Comprehensive engineering solutions backed by decades of experience and cutting-edge technology
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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
                  <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 h-full hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gray-100 border border-gray-200 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-3 group-hover:text-gray-800 transition-colors duration-300">
                          {capability.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-xs sm:text-sm md:text-base">
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

        {/* Mission & Vision */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 h-full hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3 md:mr-4 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-blue-600" />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Our Mission</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-gray-800 transition-colors duration-300">
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
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 h-full hover:bg-white hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-emerald-50 border border-emerald-200 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3 md:mr-4 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-emerald-600" />
                </div>
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Our Vision</h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-gray-800 transition-colors duration-300">
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