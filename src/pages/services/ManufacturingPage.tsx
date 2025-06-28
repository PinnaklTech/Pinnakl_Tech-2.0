import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Factory,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  Cog,
  BarChart3,
  Zap,
  Shield,
  TrendingUp,
  Award,
  Phone,
  Mail,
  Settings,
  Wrench,
  Activity
} from 'lucide-react';

const ManufacturingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const optimizationProcess = [
    {
      icon: BarChart3,
      title: "Current State Analysis",
      description: "Comprehensive assessment of existing manufacturing processes and capabilities.",
      details: ["Process mapping", "Performance analysis", "Bottleneck identification", "Waste assessment"]
    },
    {
      icon: Target,
      title: "Optimization Strategy",
      description: "Development of targeted improvement strategies based on analysis findings.",
      details: ["Improvement roadmap", "Technology selection", "Resource planning", "Timeline development"]
    },
    {
      icon: Cog,
      title: "Implementation",
      description: "Systematic implementation of optimization solutions with minimal disruption.",
      details: ["Process redesign", "Technology integration", "Training programs", "Change management"]
    },
    {
      icon: Activity,
      title: "Monitoring & Improvement",
      description: "Continuous monitoring and refinement to ensure sustained improvements.",
      details: ["Performance tracking", "Continuous improvement", "Feedback loops", "Optimization cycles"]
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Process Optimization",
      description: "Streamline manufacturing processes for maximum efficiency and quality.",
      capabilities: ["Lean manufacturing", "Value stream mapping", "Workflow optimization", "Cycle time reduction"]
    },
    {
      icon: Shield,
      title: "Quality Control Systems",
      description: "Implement robust quality control systems to ensure consistent product quality.",
      capabilities: ["Quality management", "Statistical process control", "Inspection systems", "Defect prevention"]
    },
    {
      icon: Wrench,
      title: "Custom Tooling & Fixtures",
      description: "Design and develop custom tooling solutions for improved productivity.",
      capabilities: ["Tool design", "Fixture development", "Automation solutions", "Ergonomic improvements"]
    },
    {
      icon: Settings,
      title: "Equipment Optimization",
      description: "Maximize equipment effectiveness through optimization and maintenance strategies.",
      capabilities: ["OEE improvement", "Preventive maintenance", "Equipment upgrades", "Performance monitoring"]
    }
  ];

  const technologies = [
    {
      icon: Activity,
      title: "IoT & Monitoring",
      description: "Real-time monitoring and data collection for informed decision making.",
      applications: ["Sensor networks", "Real-time dashboards", "Predictive analytics", "Remote monitoring"]
    },
    {
      icon: Cog,
      title: "Automation Solutions",
      description: "Intelligent automation to reduce costs and improve consistency.",
      applications: ["Robotic systems", "Automated inspection", "Material handling", "Process control"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced analytics to optimize performance and predict issues.",
      applications: ["Performance analytics", "Predictive maintenance", "Quality analytics", "Cost optimization"]
    },
    {
      icon: Shield,
      title: "Digital Twin Technology",
      description: "Virtual models for process simulation and optimization.",
      applications: ["Process simulation", "Virtual testing", "Optimization modeling", "Scenario planning"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      description: "Significant improvements in manufacturing throughput and efficiency.",
      metric: "35% productivity gain"
    },
    {
      icon: Target,
      title: "Cost Reduction",
      description: "Substantial cost savings through process optimization and waste reduction.",
      metric: "25% cost savings"
    },
    {
      icon: Shield,
      title: "Quality Improvement",
      description: "Enhanced product quality through improved processes and controls.",
      metric: "50% defect reduction"
    },
    {
      icon: Clock,
      title: "Faster Time-to-Market",
      description: "Accelerated production cycles and reduced lead times.",
      metric: "40% time reduction"
    }
  ];

  const caseStudies = [
    {
      title: "Automotive Production Line Optimization",
      client: "Automotive Parts Manufacturer",
      challenge: "Low efficiency and high defect rates in production line",
      solution: "Comprehensive process optimization with lean manufacturing principles",
      results: ["40% efficiency increase", "60% defect reduction", "30% cost savings", "Improved worker safety"],
      image: "/Manufacturing.jpg"
    },
    {
      title: "Electronics Manufacturing Automation",
      client: "Electronics Manufacturer",
      challenge: "Manual processes causing bottlenecks and quality issues",
      solution: "Automated assembly line with quality control integration",
      results: ["50% throughput increase", "90% quality improvement", "Reduced labor costs", "Consistent production"],
      image: "/Product_development.jpg"
    }
  ];

  const stats = [
    { value: "200+", label: "Manufacturing Projects", icon: Factory },
    { value: "35%", label: "Avg. Efficiency Gain", icon: TrendingUp },
    { value: "25%", label: "Avg. Cost Reduction", icon: Target },
    { value: "98%", label: "Client Satisfaction", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden mt-16 sm:mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-pink-50"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-3 bg-red-100 rounded-xl">
                  <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <span className="text-red-600 font-semibold text-sm sm:text-base">Manufacturing Solutions</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Advanced Manufacturing
                <span className="block bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Optimization Solutions
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Transform your manufacturing operations with cutting-edge optimization strategies,
                automation solutions, and quality control systems that drive efficiency and profitability.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Optimize Manufacturing</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <Link
                  to="/#projects"
                  className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Success Stories</span>
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
                  src="/Manufacturing.jpg"
                  alt="Manufacturing Solutions"
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
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
              Manufacturing Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to optimize every aspect of your manufacturing operations.
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
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
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
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
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
              A systematic approach to manufacturing optimization that delivers measurable results.
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
                  <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-red-100 transition-colors duration-300">
                    {index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-red-200 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
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
              Cutting-edge technologies that power modern manufacturing optimization.
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
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
              Proven results that transform manufacturing operations and drive business growth.
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
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div className="text-xl sm:text-2xl font-bold text-red-600">
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
              Manufacturing Success Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our manufacturing optimization projects.
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
                  <p className="text-sm sm:text-base text-red-600 font-medium mb-3 sm:mb-4">
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-600 via-red-700 to-pink-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Optimize Your Manufacturing?
            </h2>
            <p className="text-lg sm:text-xl text-red-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Transform your manufacturing operations with our proven optimization strategies and advanced technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Schedule Assessment</span>
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2">
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

export default ManufacturingPage;