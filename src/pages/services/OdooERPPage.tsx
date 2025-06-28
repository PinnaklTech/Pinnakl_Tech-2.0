import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Workflow,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  Database,
  Cog,
  BarChart3,
  Shield,
  TrendingUp,
  Award,
  ChevronRight,
  Home,
  Phone,
  Mail,
  Zap,
  Globe,
  Settings
} from 'lucide-react';

const OdooERPPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const implementationSteps = [
    {
      icon: Target,
      title: "Requirements Analysis",
      description: "Comprehensive analysis of your business processes and requirements.",
      details: ["Business process mapping", "Requirements gathering", "Gap analysis", "Solution design"]
    },
    {
      icon: Settings,
      title: "System Configuration",
      description: "Configure Odoo modules to match your specific business needs.",
      details: ["Module setup", "Workflow configuration", "User permissions", "Data structure design"]
    },
    {
      icon: Database,
      title: "Data Migration",
      description: "Seamless migration of your existing data to the new Odoo system.",
      details: ["Data extraction", "Data cleaning", "Migration testing", "Data validation"]
    },
    {
      icon: Users,
      title: "Training & Go-Live",
      description: "Comprehensive training and support for successful system deployment.",
      details: ["User training", "System testing", "Go-live support", "Post-implementation support"]
    }
  ];

  const modules = [
    {
      icon: BarChart3,
      title: "Sales & CRM",
      description: "Manage leads, opportunities, and customer relationships effectively.",
      features: ["Lead management", "Sales pipeline", "Customer portal", "Quote generation"]
    },
    {
      icon: Cog,
      title: "Manufacturing",
      description: "Complete manufacturing resource planning and production control.",
      features: ["Bill of materials", "Work orders", "Quality control", "Inventory management"]
    },
    {
      icon: Database,
      title: "Inventory Management",
      description: "Real-time inventory tracking and warehouse management.",
      features: ["Stock tracking", "Warehouse operations", "Procurement", "Barcode scanning"]
    },
    {
      icon: Shield,
      title: "Accounting & Finance",
      description: "Comprehensive financial management and reporting.",
      features: ["General ledger", "Invoicing", "Financial reporting", "Multi-currency"]
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Complete HR management from recruitment to payroll.",
      features: ["Employee management", "Payroll", "Time tracking", "Performance evaluation"]
    },
    {
      icon: Globe,
      title: "Project Management",
      description: "Plan, track, and manage projects with integrated time tracking.",
      features: ["Project planning", "Task management", "Time tracking", "Resource allocation"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Streamline operations and eliminate redundant processes.",
      metric: "40% efficiency gain"
    },
    {
      icon: BarChart3,
      title: "Real-time Insights",
      description: "Make data-driven decisions with comprehensive reporting.",
      metric: "100% visibility"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate routine tasks and workflows.",
      metric: "60% time savings"
    },
    {
      icon: Shield,
      title: "Improved Compliance",
      description: "Ensure regulatory compliance with built-in controls.",
      metric: "99% compliance rate"
    }
  ];

  const caseStudies = [
    {
      title: "Manufacturing ERP Transformation",
      client: "Industrial Equipment Manufacturer",
      challenge: "Disconnected systems causing inefficiencies and poor visibility",
      solution: "Complete Odoo ERP implementation with custom manufacturing modules",
      results: ["50% reduction in order processing time", "30% inventory cost savings", "Real-time production visibility", "Integrated quality management"],
      image: "/ERP.jpg"
    },
    {
      title: "Multi-Location Retail Implementation",
      client: "Retail Chain",
      challenge: "Managing inventory and sales across multiple locations",
      solution: "Odoo POS and inventory management with real-time synchronization",
      results: ["Unified inventory management", "Real-time sales reporting", "Improved customer experience", "25% increase in efficiency"],
      image: "/Manufacturing.jpg"
    }
  ];

  const stats = [
    { value: "100+", label: "ERP Implementations", icon: Target },
    { value: "98%", label: "Success Rate", icon: TrendingUp },
    { value: "10+", label: "Years Odoo Experience", icon: Award },
    { value: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 sm:py-6 mt-16 sm:mt-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Services</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Odoo ERP Solutions</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Workflow className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <span className="text-purple-600 font-semibold text-sm sm:text-base">Odoo ERP Solutions</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Streamline Operations with
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Integrated ERP Solutions
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Transform your business with Odoo's comprehensive ERP platform. From CRM to manufacturing, 
                we implement and customize solutions that grow with your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Get ERP Consultation</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <Link
                  to="/#projects"
                  className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Implementations</span>
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
                  src="/ERP.jpg"
                  alt="Odoo ERP Solutions"
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
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

      {/* Modules Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Comprehensive Odoo Modules
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated business applications that work seamlessly together to power your entire organization.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {module.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {module.description}
                  </p>

                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Implementation Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful Odoo implementation with minimal disruption to your business.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-purple-100 transition-colors duration-300">
                    {index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
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
              Why Choose Odoo ERP?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable benefits that transform your business operations and drive growth.
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
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="text-xl sm:text-2xl font-bold text-purple-600">
                    {benefit.metric}
                  </div>
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
              Implementation Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our Odoo ERP implementations across various industries.
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
                  <p className="text-sm sm:text-base text-purple-600 font-medium mb-3 sm:mb-4">
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Let's discuss your ERP needs and create a customized Odoo solution for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Schedule Demo</span>
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Get Implementation Quote</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OdooERPPage;