import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Target,
  Shield,
  Search,
  Edit,
  Award,
  TrendingUp,
  Phone,
  Mail,
  BookOpen,
  Clipboard,
  Settings
} from 'lucide-react';

const TechnicalSpecsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const specificationProcess = [
    {
      icon: Search,
      title: "Requirements Analysis",
      description: "Comprehensive analysis of technical requirements and industry standards.",
      details: ["Requirement gathering", "Standard research", "Stakeholder consultation", "Gap analysis"]
    },
    {
      icon: Edit,
      title: "Specification Development",
      description: "Creation of detailed technical specifications aligned with best practices.",
      details: ["Technical writing", "Standard alignment", "Performance criteria", "Quality requirements"]
    },
    {
      icon: Users,
      title: "Peer Review Process",
      description: "Rigorous peer review to ensure accuracy and completeness.",
      details: ["Expert review", "Technical validation", "Compliance check", "Revision management"]
    },
    {
      icon: Shield,
      title: "Final Documentation",
      description: "Delivery of comprehensive, compliant technical documentation.",
      details: ["Final documentation", "Version control", "Distribution", "Maintenance support"]
    }
  ];

  const specificationTypes = [
    {
      icon: Settings,
      title: "Material Specifications",
      description: "Detailed material requirements and performance criteria.",
      standards: ["ASTM Standards", "ISO Specifications", "Industry Standards", "Custom Requirements"]
    },
    {
      icon: Clipboard,
      title: "Process Specifications",
      description: "Manufacturing and process requirements for consistent quality.",
      standards: ["Process Parameters", "Quality Control", "Testing Procedures", "Acceptance Criteria"]
    },
    {
      icon: BookOpen,
      title: "Product Specifications",
      description: "Comprehensive product requirements and performance standards.",
      standards: ["Performance Criteria", "Design Requirements", "Safety Standards", "Regulatory Compliance"]
    },
    {
      icon: Shield,
      title: "Quality Specifications",
      description: "Quality assurance and control specifications for manufacturing.",
      standards: ["QA Procedures", "Inspection Criteria", "Test Methods", "Documentation Requirements"]
    }
  ];

  const industries = [
    {
      icon: Settings,
      title: "Aerospace",
      description: "Critical specifications for aerospace components and systems.",
      applications: ["Component specifications", "Material requirements", "Safety standards", "Certification support"]
    },
    {
      icon: Shield,
      title: "Automotive",
      description: "Automotive industry specifications and quality standards.",
      applications: ["Part specifications", "Quality standards", "Testing procedures", "Supplier requirements"]
    },
    {
      icon: Target,
      title: "Medical Devices",
      description: "FDA-compliant specifications for medical device manufacturing.",
      applications: ["Device specifications", "Biocompatibility", "Regulatory compliance", "Quality systems"]
    },
    {
      icon: Users,
      title: "Manufacturing",
      description: "Industrial manufacturing specifications and process requirements.",
      applications: ["Process specs", "Material standards", "Quality control", "Production requirements"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Improved Quality",
      description: "Clear specifications lead to consistent, high-quality outcomes.",
      metric: "40% quality improvement"
    },
    {
      icon: Clock,
      title: "Faster Development",
      description: "Well-defined specs accelerate development and reduce iterations.",
      metric: "30% time savings"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Ensure compliance with industry standards and regulations.",
      metric: "100% compliance rate"
    },
    {
      icon: Target,
      title: "Cost Reduction",
      description: "Prevent costly rework and quality issues through clear specifications.",
      metric: "25% cost savings"
    }
  ];

  const caseStudies = [
    {
      title: "Aerospace Component Specification",
      client: "Aerospace Manufacturer",
      challenge: "Develop comprehensive specifications for critical flight components",
      solution: "Created detailed material and process specifications aligned with aerospace standards",
      results: ["FAA approval achieved", "Zero quality issues", "Reduced development time", "Cost-effective production"],
      image: "/specifications.jpg"
    },
    {
      title: "Medical Device Standards",
      client: "Medical Technology Company",
      challenge: "FDA-compliant specifications for new medical device",
      solution: "Comprehensive specification development with regulatory compliance focus",
      results: ["FDA clearance obtained", "Accelerated approval", "Quality consistency", "Market success"],
      image: "/Product_development.jpg"
    }
  ];

  const stats = [
    { value: "300+", label: "Specifications Written", icon: FileText },
    { value: "99%", label: "Approval Rate", icon: CheckCircle },
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "50+", label: "Industry Standards", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden mt-16 sm:mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg text-gray-600 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-300 group shadow-sm hover:shadow-md"
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
                <div className="p-3 bg-amber-100 rounded-xl">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <span className="text-amber-600 font-semibold text-sm sm:text-base">Technical Specifications</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Precise Technical
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Specifications & Standards
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Expert development and review of technical specifications that ensure quality, 
                
                compliance, and successful project outcomes across all industries.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Get Specification Help</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <Link
                  to="/#projects"
                  className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Examples</span>
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
                  src="/specifications.jpg"
                  alt="Technical Specifications"
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
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

      {/* Specification Types */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Specification Types We Create
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical documentation across all aspects of product development and manufacturing.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {specificationTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {type.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {type.description}
                  </p>

                  <ul className="space-y-2">
                    {type.standards.map((standard, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                        {standard}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Specification Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to creating accurate, compliant technical specifications.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {specificationProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-amber-100 transition-colors duration-300">
                    {index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
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

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Benefits of Professional Specifications
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable improvements in quality, efficiency, and compliance through expert specification development.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="text-xl sm:text-2xl font-bold text-amber-600">
                    {benefit.metric}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
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
              Specialized specification expertise across critical industries with stringent requirements.
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
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
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
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Specification Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our technical specification development projects.
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
                  <p className="text-sm sm:text-base text-amber-600 font-medium mb-3 sm:mb-4">
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-600 via-amber-700 to-orange-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Need Expert Technical Specifications?
            </h2>
            <p className="text-lg sm:text-xl text-amber-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Let us help you create precise, compliant specifications that ensure project success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Discuss Requirements</span>
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Get Quote</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSpecsPage;