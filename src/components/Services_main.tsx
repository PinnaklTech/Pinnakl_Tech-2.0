import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Settings,
  Workflow,
  Wrench,
  FileText,
  Factory,
  Truck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      title: 'Product Development',
      description:
        'Strategic engineering support for faster, smarter product development—from material selection to regulatory compliance.',
      features: [
        'Material & Process Selection',
        'Design Feasibility & Manufacturability Reviews',
        'Prototyping & Supplier Alignment',
        'Testing & Technical Validation',
        'Documentation & Compliance Support'
      ],
      color: 'blue',
      image: '/Product_development.jpg'
    },
    {
      icon: Workflow,
      title: 'Odoo ERP Solutions & Strategic Services',
      description:
        'Integrated Odoo implementation, customization, and automation to streamline operations—from CRM and finance to manufacturing and inventory.',
      features: [
        'ERP Implementation & Configuration',
        'Module Customization & Integration',
        'Data Migration & User Training',
        'AI‑Driven Automation & Reporting'
      ],
      color: 'indigo',
      image: '/ERP.jpg'
    },
    {
      icon: Wrench,
      title: 'Metallurgical & Mechanical Failure Analysis',
      description:
        'Comprehensive root-cause investigation using advanced microscopy, mechanical and chemical testing to prevent future failures and ensure reliability.',
      features: [
        'Visual & Microscopic Examination (optical, SEM + EDS)',
        'Mechanical Testing (hardness, tensile, impact)',
        'Non-Destructive & Destructive Testing',
        'Chemical & Metallographic Analysis',
        'Fracture & Corrosion Mode Analysis',
        'Root‑Cause Identification & Corrective Action'
      ],
      color: 'purple',
      image: '/Metallurgy.jpg'
    },
    {
      icon: FileText,
      title: 'Writing & Reviewing Specifications',
      description:
        'Expert creation and validation of technical specifications to ensure clarity, compliance, and alignment with project requirements and industry standards.',
      features: [
        'Drafting Material & Process Specs',
        'Technical Standard Alignment (ASTM, ISO, etc.)',
        'Peer‑Review & Revision Management',
        'Traceability & Compliance Documentation'
      ],
      color: 'amber',
      image: '/specifications.jpg'
    },
    {
      icon: Factory,
      title: 'Advanced Manufacturing Solutions',
      description:
        'Integrated manufacturing systems leveraging automation, real‑time monitoring, and process optimization to enhance production efficiency and reliability.',
      features: [
        'IoT‑Enabled Real‑Time Monitoring',
        'Predictive Maintenance & Analytics',
        'Legacy System Modernization',
        'Workflow & Automation Solutions',
        'Inventory & Quality Management'
      ],
      color: 'green',
      image: 'Manufacturing.jpg'
    },
    {
      icon: Truck,
      title: 'Supply Chain & Logistics Optimization',
      description:
        'AI‑powered supply chain management including demand forecasting, inventory optimization, route planning, and warehouse automation.',
      features: [
        'Demand Forecasting & Inventory Optimization',
        'Route & Transportation Planning',
        'Warehouse Robotics & AGVs',
        'Real‑Time Visibility & Tracking',
        'AI‑Driven Customer Support'
      ],
      color: 'teal',
      image: '/supply-chain.jpg'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {
      [key: string]: { bg: string; border: string; icon: string; button: string }
    } = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        icon: 'text-indigo-600',
        button: 'bg-indigo-600 hover:bg-indigo-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        icon: 'text-amber-600',
        button: 'bg-amber-600 hover:bg-amber-700'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700'
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        icon: 'text-teal-600',
        button: 'bg-teal-600 hover:bg-teal-700'
      }
    };

    return (
      colorMap[color] || {
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        icon: 'text-gray-600',
        button: 'bg-gray-600 hover:bg-gray-700'
      }
    );
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-widest font-semibold mb-2">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering and manufacturing solutions tailored to drive your business forward with innovation, efficiency, and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colors = getColorClasses(service.color);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`${colors.bg} ${colors.border} relative border-b p-6 overflow-hidden`}>
                  <img
                    src={service.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
                  />
                  <div className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10`}>
                    <IconComponent className={`h-8 w-8 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">{service.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full ${colors.button} text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <div className="relative bg-blue-600 rounded-2xl p-10 md:p-16 overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('/8410.jpg')] bg-cover opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Engineering Challenges?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Let our expert team help you navigate complex engineering problems and deliver innovative solutions.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
