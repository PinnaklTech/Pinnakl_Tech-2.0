import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Truck,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart3,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Award,
  Phone,
  Mail,
  Package,
  MapPin,
  Activity
} from 'lucide-react';

const SupplyChainPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const optimizationProcess = [
    {
      icon: BarChart3,
      title: "Supply Chain Assessment",
      description: "Comprehensive analysis of current supply chain performance and capabilities.",
      details: ["Network mapping", "Performance analysis", "Cost assessment", "Risk evaluation"]
    },
    {
      icon: Target,
      title: "Strategy Development",
      description: "Development of optimization strategies tailored to your specific needs.",
      details: ["Optimization roadmap", "Technology selection", "Vendor evaluation", "Implementation planning"]
    },
    {
      icon: Zap,
      title: "Implementation & Integration",
      description: "Systematic implementation of optimization solutions with seamless integration.",
      details: ["System integration", "Process redesign", "Vendor onboarding", "Change management"]
    },
    {
      icon: Activity,
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and refinement for sustained performance improvements.",
      details: ["Performance tracking", "KPI monitoring", "Continuous improvement", "Optimization cycles"]
    }
  ];

  const solutions = [
    {
      icon: Package,
      title: "Inventory Optimization",
      description: "Optimize inventory levels to reduce costs while maintaining service levels.",
      capabilities: ["Demand forecasting", "Safety stock optimization", "ABC analysis", "Inventory turnover improvement"]
    },
    {
      icon: MapPin,
      title: "Logistics & Transportation",
      description: "Streamline logistics operations for cost-effective and timely deliveries.",
      capabilities: ["Route optimization", "Carrier selection", "Freight consolidation", "Last-mile delivery"]
    },
    {
      icon: Users,
      title: "Supplier Management",
      description: "Comprehensive supplier evaluation, development, and relationship management.",
      capabilities: ["Supplier assessment", "Performance monitoring", "Risk management", "Relationship development"]
    },
    {
      icon: Globe,
      title: "Network Design",
      description: "Optimize supply chain network design for maximum efficiency and resilience.",
      capabilities: ["Network modeling", "Facility location", "Capacity planning", "Distribution strategy"]
    }
  ];

  const technologies = [
    {
      icon: BarChart3,
      title: "AI & Machine Learning",
      description: "Advanced analytics for demand forecasting and optimization.",
      applications: ["Demand forecasting", "Predictive analytics", "Anomaly detection", "Optimization algorithms"]
    },
    {
      icon: Globe,
      title: "IoT & Tracking",
      description: "Real-time visibility and tracking throughout the supply chain.",
      applications: ["Asset tracking", "Condition monitoring", "Real-time visibility", "Sensor networks"]
    },
    {
      icon: Shield,
      title: "Blockchain Technology",
      description: "Enhanced transparency and traceability in supply chain operations.",
      applications: ["Supply chain transparency", "Product traceability", "Smart contracts", "Compliance tracking"]
    },
    {
      icon: Zap,
      title: "Automation Solutions",
      description: "Automated systems for improved efficiency and accuracy.",
      applications: ["Warehouse automation", "Order processing", "Inventory management", "Robotic systems"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Significant cost savings through optimized operations and reduced waste.",
      metric: "25% cost savings"
    },
    {
      icon: Clock,
      title: "Faster Delivery",
      description: "Improved delivery times through optimized logistics and processes.",
      metric: "40% faster delivery"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Enhanced supply chain resilience and risk management capabilities.",
      metric: "60% risk reduction"
    },
    {
      icon: Target,
      title: "Service Improvement",
      description: "Better customer service through improved reliability and responsiveness.",
      metric: "95% service level"
    }
  ];

  const caseStudies = [
    {
      title: "Global Supply Chain Transformation",
      client: "International Manufacturing Company",
      challenge: "Complex global supply chain with high costs and poor visibility",
      solution: "End-to-end supply chain optimization with AI-powered analytics",
      results: ["30% cost reduction", "50% inventory optimization", "Real-time visibility", "Improved supplier relationships"],
      image: "/supply-chain.jpg"
    },
    {
      title: "E-commerce Logistics Optimization",
      client: "Online Retail Company",
      challenge: "Inefficient last-mile delivery and high logistics costs",
      solution: "Comprehensive logistics optimization with route planning and automation",
      results: ["40% delivery time reduction", "25% cost savings", "Improved customer satisfaction", "Scalable operations"],
      image: "/Manufacturing.jpg"
    }
  ];

  const stats = [
    { value: "150+", label: "Supply Chain Projects", icon: Truck },
    { value: "30%", label: "Avg. Cost Reduction", icon: TrendingUp },
    { value: "40%", label: "Delivery Improvement", icon: Clock },
    { value: "99%", label: "Client Satisfaction", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden mt-16 sm:mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50"></div>
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg text-gray-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300 group shadow-sm hover:shadow-md"
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
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                </div>
                <span className="text-indigo-600 font-semibold text-sm sm:text-base">Supply Chain Optimization</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Intelligent Supply Chain
                <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Optimization Solutions
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Transform your supply chain with AI-powered optimization, real-time visibility,
                and strategic improvements that reduce costs and enhance performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Optimize Supply Chain</span>
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
                  src="/supply-chain.jpg"
                  alt="Supply Chain Optimization"
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
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

      {/* Solutions Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Supply Chain Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to optimize every aspect of your supply chain operations.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-2">
                    {solution.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0"></div>
                        {capability}
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
              Our Optimization Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to supply chain optimization that delivers measurable results.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {optimizationProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-indigo-100 transition-colors duration-300">
                    {index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-indigo-200 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
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

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Advanced Technologies
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies that power modern supply chain optimization.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {tech.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {tech.description}
                  </p>

                  <ul className="space-y-2">
                    {tech.applications.map((application, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Zap className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
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

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Measurable Benefits
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results that transform supply chain operations and drive business growth.
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
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="text-xl sm:text-2xl font-bold text-indigo-600">
                    {benefit.metric}
                  </div>
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
              Supply Chain Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our supply chain optimization projects.
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
                  <p className="text-sm sm:text-base text-indigo-600 font-medium mb-3 sm:mb-4">
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Transform your supply chain operations with our proven optimization strategies and advanced technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Schedule Assessment</span>
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Get Optimization Quote</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupplyChainPage;