import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Wrench,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Target,
  Microscope,
  Search,
  FileText,
  Shield,
  TrendingUp,
  Award,
  Phone,
  Mail,
  Zap,
  AlertTriangle,
  Settings
} from 'lucide-react';

const FailureAnalysisPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const analysisProcess = [
    {
      icon: Search,
      title: "Initial Assessment",
      description: "Comprehensive evaluation of the failed component and failure circumstances.",
      details: ["Visual inspection", "Failure documentation", "History review", "Preliminary analysis"]
    },
    {
      icon: Microscope,
      title: "Detailed Examination",
      description: "Advanced microscopic and analytical techniques to understand failure mechanisms.",
      details: ["SEM/EDS analysis", "Optical microscopy", "Fractography", "Microstructural analysis"]
    },
    {
      icon: Settings,
      title: "Testing & Analysis",
      description: "Comprehensive mechanical and chemical testing to determine root causes.",
      details: ["Mechanical testing", "Chemical analysis", "Hardness testing", "Corrosion evaluation"]
    },
    {
      icon: FileText,
      title: "Reporting & Recommendations",
      description: "Detailed report with findings, root cause analysis, and prevention strategies.",
      details: ["Comprehensive report", "Root cause identification", "Prevention recommendations", "Implementation guidance"]
    }
  ];

  const capabilities = [
    {
      icon: Microscope,
      title: "Advanced Microscopy",
      description: "State-of-the-art SEM/EDS and optical microscopy for detailed material analysis.",
      techniques: ["Scanning Electron Microscopy", "Energy Dispersive Spectroscopy", "Optical Microscopy", "Fractography Analysis"]
    },
    {
      icon: Wrench,
      title: "Mechanical Testing",
      description: "Comprehensive mechanical property evaluation and testing capabilities.",
      techniques: ["Tensile Testing", "Hardness Testing", "Impact Testing", "Fatigue Analysis"]
    },
    {
      icon: Shield,
      title: "Corrosion Analysis",
      description: "Specialized expertise in corrosion mechanisms and prevention strategies.",
      techniques: ["Corrosion Mode Analysis", "Environmental Testing", "Coating Evaluation", "Material Compatibility"]
    },
    {
      icon: Target,
      title: "Pipeline Evaluation",
      description: "Specialized pipeline integrity assessment and failure investigation.",
      techniques: ["Pipeline Inspection", "Integrity Assessment", "Leak Investigation", "Remaining Life Analysis"]
    }
  ];

  const industries = [
    {
      icon: Settings,
      title: "Oil & Gas",
      description: "Pipeline failures, equipment analysis, and corrosion investigations.",
      applications: ["Pipeline integrity", "Equipment failures", "Corrosion analysis", "Safety assessments"]
    },
    {
      icon: Zap,
      title: "Power Generation",
      description: "Turbine components, boiler tubes, and power plant equipment analysis.",
      applications: ["Turbine blade analysis", "Boiler tube failures", "Generator components", "Heat exchanger issues"]
    },
    {
      icon: Users,
      title: "Manufacturing",
      description: "Production equipment, tooling failures, and quality investigations.",
      applications: ["Equipment breakdowns", "Tool failures", "Quality issues", "Process optimization"]
    },
    {
      icon: Shield,
      title: "Aerospace",
      description: "Critical component analysis and safety-critical failure investigations.",
      applications: ["Component failures", "Material defects", "Safety analysis", "Certification support"]
    }
  ];

  const caseStudies = [
    {
      title: "Pipeline Failure Investigation",
      client: "Major Oil & Gas Company",
      challenge: "Unexpected pipeline failure causing environmental concerns and production loss",
      solution: "Comprehensive failure analysis using SEM/EDS and corrosion evaluation",
      results: ["Root cause identified", "Prevention strategy developed", "Regulatory compliance achieved", "Future failures prevented"],
      image: "/Metallurgy.jpg"
    },
    {
      title: "Manufacturing Equipment Analysis",
      client: "Industrial Manufacturer",
      challenge: "Recurring equipment failures causing production downtime and quality issues",
      solution: "Detailed metallurgical analysis and mechanical testing program",
      results: ["Failure mechanism understood", "Material specification improved", "Downtime reduced by 80%", "Quality enhanced"],
      image: "/Manufacturing.jpg"
    }
  ];

  const stats = [
    { value: "500+", label: "Failure Investigations", icon: Target },
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "95%", label: "Root Cause Success", icon: TrendingUp },
    { value: "24/7", label: "Emergency Response", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden mt-16 sm:mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Back to Services Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg text-gray-600 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back to Services</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                </div>
                <span className="text-emerald-600 font-semibold text-sm sm:text-base">Failure Analysis</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Expert Metallurgical &
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Failure Analysis Services
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Comprehensive failure investigations using advanced analytical techniques to identify root causes, 
                prevent future failures, and ensure operational safety.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Request Analysis</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <Link
                  to="/#projects"
                  className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/Metallurgy.jpg"
                  alt="Failure Analysis"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analysis Process */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Analysis Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to failure investigation that ensures accurate root cause identification.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {analysisProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-emerald-100 transition-colors duration-300">
                    {index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Advanced Analytical Capabilities
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment and techniques for comprehensive failure analysis.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {capability.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {capability.description}
                  </p>

                  <ul className="space-y-2">
                    {capability.techniques.map((technique, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"></div>
                        {technique}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Industries We Serve
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across critical industries where failure analysis is essential.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {industry.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <ul className="space-y-2">
                    {industry.applications.map((application, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                        {application}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Investigation Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world failure analysis cases that prevented future incidents and saved costs.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 sm:h-64">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {study.title}
                  </h3>
                  <p className="text-sm sm:text-base text-emerald-600 font-medium mb-3 sm:mb-4">
                    {study.client}
                  </p>
                  
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Need Expert Failure Analysis?
            </h2>
            <p className="text-lg sm:text-xl text-emerald-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Get rapid, accurate failure analysis to prevent future incidents and ensure operational safety.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Emergency Analysis</span>
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Request Quote</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FailureAnalysisPage;