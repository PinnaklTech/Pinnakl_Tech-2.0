import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Settings,
  Workflow,
  Wrench,
  FileText,
  Factory,
  Truck,
  ArrowRight,
  Zap,
  Target,
  Shield,
} from "lucide-react";

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  const services = [
    {
      icon: Settings,
      title: "Product Development",
      subtitle: "End-to-end engineering solutions",
      description:
        "Comprehensive product development with material design and process qualification, delivering reliable support and measurable results.",
      features: [
        "Engineering Partnership",
        "Material Optimization",
        "Design Feasibility",
        "Rapid Prototyping",
        "End-to-End Support",
      ],
      stats: { value: "250+", label: "Projects Delivered" },
      color: "blue",
      path: "/services/product-development",
    },
    {
      icon: Workflow,
      title: "Odoo ERP Solutions",
      subtitle: "Strategic ERP implementation",
      description:
        "Customize and implement Odoo ERP to streamline operations across manufacturing and service industries with complete integration.",
      features: [
        "ERP Implementation",
        "Module Customization",
        "System Integration",
        "Process Automation",
        "Training & Support",
      ],
      stats: { value: "98%", label: "Success Rate" },
      color: "purple",
      path: "/services/odoo-erp",
    },
    {
      icon: Wrench,
      title: "Failure Analysis",
      subtitle: "Advanced metallurgical investigation",
      description:
        "Specialized failure investigations using SEM/EDS, mechanical testing, and detailed analysis across multiple industries.",
      features: [
        "SEM/EDS Analysis",
        "Mechanical Testing",
        "Pipeline Evaluation",
        "Root Cause Analysis",
        "Detailed Reporting",
      ],
      stats: { value: "15+", label: "Years Experience" },
      color: "emerald",
      path: "/services/failure-analysis",
    },
    {
      icon: FileText,
      title: "Technical Specifications",
      subtitle: "Standards & compliance documentation",
      description:
        "Develop and review technical specifications with automation to streamline the review process across multiple sectors.",
      features: [
        "Spec Development",
        "Standard Alignment",
        "Peer Review",
        "Compliance Check",
        "Document Control",
      ],
      stats: { value: "50+", label: "Expert Engineers" },
      color: "amber",
      path: "/services/technical-specifications",
    },
    {
      icon: Factory,
      title: "Manufacturing Solutions",
      subtitle: "Advanced production optimization",
      description:
        "Solve manufacturing challenges with value stream mapping, testing, and custom tools ensuring efficiency and quality.",
      features: [
        "Process Optimization",
        "Quality Control",
        "Custom Tooling",
        "Efficiency Analysis",
        "Cost Reduction",
      ],
      stats: { value: "40%", label: "Avg. Cost Savings" },
      color: "red",
      path: "/services/manufacturing",
    },
    {
      icon: Truck,
      title: "Supply Chain Optimization",
      subtitle: "End-to-end logistics solutions",
      description:
        "Execute comprehensive supplier evaluation, audits, and process setup for ongoing supplier assessment and optimization.",
      features: [
        "Supplier Evaluation",
        "Performance Metrics",
        "Process Design",
        "Vendor Development",
        "Supply Chain Consulting",
      ],
      stats: { value: "30%", label: "Efficiency Gain" },
      color: "indigo",
      path: "/services/supply-chain",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: {
        gradient: string;
        bg: string;
        border: string;
        text: string;
        accent: string;
        hover: string;
      };
    } = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        bg: "bg-blue-50/50",
        border: "border-blue-200/30",
        text: "text-blue-700",
        accent: "bg-blue-100",
        hover: "hover:border-blue-300/50",
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        bg: "bg-purple-50/50",
        border: "border-purple-200/30",
        text: "text-purple-700",
        accent: "bg-purple-100",
        hover: "hover:border-purple-300/50",
      },
      emerald: {
        gradient: "from-emerald-500 to-emerald-600",
        bg: "bg-emerald-50/50",
        border: "border-emerald-200/30",
        text: "text-emerald-700",
        accent: "bg-emerald-100",
        hover: "hover:border-emerald-300/50",
      },
      amber: {
        gradient: "from-amber-500 to-amber-600",
        bg: "bg-amber-50/50",
        border: "border-amber-200/30",
        text: "text-amber-700",
        accent: "bg-amber-100",
        hover: "hover:border-amber-300/50",
      },
      red: {
        gradient: "from-red-500 to-red-600",
        bg: "bg-red-50/50",
        border: "border-red-200/30",
        text: "text-red-700",
        accent: "bg-red-100",
        hover: "hover:border-red-300/50",
      },
      indigo: {
        gradient: "from-indigo-500 to-indigo-600",
        bg: "bg-indigo-50/50",
        border: "border-indigo-200/30",
        text: "text-indigo-700",
        accent: "bg-indigo-100",
        hover: "hover:border-indigo-300/50",
      },
    };

    return colorMap[color] || colorMap.blue;
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute inset-0 overflow-hidden opacity-20 sm:opacity-30 lg:opacity-40">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent animate-pulse-slow"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent animate-pulse-slower"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/50 to-transparent animate-slide-up"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-200/50 to-transparent animate-slide-down"></div>
        </div>
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-96 xl:h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-96 xl:h-96 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-blue-100/80 backdrop-blur-sm rounded-full mb-2 sm:mb-3 md:mb-4 lg:mb-6"
          >
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
            <span className="text-blue-700 font-medium text-xs sm:text-sm">
              Our Core Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight px-2 sm:px-4"
          >
            Comprehensive engineering solutions backed by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              decades of experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4"
          >
            From product development to supply chain optimization, we deliver
            innovative solutions that drive efficiency, excellence, and
            technological advancement.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-3 sm:gap-4 md:gap-6 lg:gap-8 sm:grid-cols-2 xl:grid-cols-3 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colors = getColorClasses(service.color);
            const isActive = activeCard === index;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-white/70 backdrop-blur-sm border ${
                  colors.border
                } ${
                  colors.hover
                } rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/5 ${
                  isActive
                    ? "scale-105 shadow-2xl shadow-black/10"
                    : "hover:scale-[1.02]"
                }`}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 rounded-lg sm:rounded-xl md:rounded-2xl transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative">
                  <div className="flex items-start justify-between mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    <div className={`p-1.5 sm:p-2 md:p-3 ${colors.accent} rounded-md sm:rounded-lg md:rounded-xl`}>
                      <IconComponent className={`h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ${colors.text}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold ${colors.text}`}>
                        {service.stats.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 font-medium">
                        {service.stats.label}
                      </div>
                    </div>
                  </div>

                  <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {service.title}
                    </h3>
                    <p className={`text-xs sm:text-sm font-medium ${colors.text} mb-1 sm:mb-2 md:mb-3`}>
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features as tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    to={service.path}
                    className={`w-full bg-gradient-to-r ${colors.gradient} text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 rounded-md sm:rounded-lg md:rounded-xl font-medium flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-black/10 group-hover:scale-105 text-xs sm:text-sm md:text-base touch-manipulation`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative z-10"
        >
          <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 overflow-hidden shadow-2xl border border-white/20 bg-white/30 backdrop-blur-lg">
            {/* Background layers */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/8410.jpg')] bg-cover opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-100/40 to-indigo-100/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4 lg:mb-6 justify-center sm:justify-start">
                <div className="p-1.5 sm:p-2 md:p-3 bg-blue-100 rounded-md sm:rounded-lg md:rounded-xl shadow-sm">
                  <Target className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-blue-600" />
                </div>
                <span className="text-blue-700 font-semibold text-xs sm:text-sm md:text-base lg:text-lg tracking-wide">
                  Ready to get started?
                </span>
              </div>

              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-gray-900 leading-tight text-center sm:text-left">
                Transform Your Engineering
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Challenges Into Success
                </span>
              </h3>

              <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-4xl leading-relaxed text-center sm:text-left">
                Join over{" "}
                <strong className="text-blue-600">
                  250+ forward-thinking companies
                </strong>{" "}
                that trust us to solve their toughest engineering problems.
                Let's create impactful solutions together.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-start">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-md sm:rounded-lg md:rounded-xl text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-300/30 flex items-center justify-center gap-1.5 sm:gap-2 touch-manipulation"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                </button>

                <button className="bg-white/80 backdrop-blur-md border border-gray-200 text-gray-800 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-md sm:rounded-lg md:rounded-xl text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:bg-white hover:border-gray-300 transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center gap-1.5 sm:gap-2 touch-manipulation">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <span>View Case Studies</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;