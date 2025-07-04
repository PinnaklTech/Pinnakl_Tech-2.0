import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (000) 000-0000',
      subDetails: 'Mon-Fri 8 - 6 '
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@pinnakl.tech',
      subDetails: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Details',
      subDetails: 'Sub Details'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday',
      subDetails: '8:00  - 6:00  '
    }
  ];

  const services = [
    'Product development',
    'Odoo ERP Solutions & Strategic Services',
    'Metallurgical and mechanical failure analysis',
    'Writing and reviewing specifications',
    'Solving complex manufacturing problems',
    'Optimizing supply chain'
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to start your next engineering project? Contact our expert team for a consultation 
            and discover how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Contact Information */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
              Let's Start a Conversation
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Whether you need engineering consulting, product development, or manufacturing optimization, 
              our team is here to help. Reach out to discuss your project requirements and get expert guidance.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={info.title}
                    className={`bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                      <div className="bg-blue-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">
                          {info.details}
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm">
                          {info.subDetails}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 sm:mt-8 md:mt-12 p-3 sm:p-4 md:p-6 bg-blue-50 rounded-lg sm:rounded-xl">
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Why Choose Pinnakl Technologies?
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  'Certified',
                  '+ Successful Projects',
                  'Expert Engineering Team',
                  '24/7 Project Support',
                  'Competitive Pricing'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <div className="bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Request a Quote
              </h3>

              {isSubmitted ? (
                <div className="text-center py-6 sm:py-8 md:py-12">
                  <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 text-green-600 mx-auto mb-3 sm:mb-4" />
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    Thank you for your inquiry!
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    We'll get back to you within 24 hours with a detailed response.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Company and Phone Row */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none text-xs sm:text-sm md:text-base"
                      placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2.5 sm:py-3 md:py-4 rounded-md sm:rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-1.5 sm:space-x-2 hover:scale-105 hover:shadow-lg text-xs sm:text-sm md:text-base touch-manipulation"
                  >
                    <span>Send Message</span>
                    <Send className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  </button>

                  <p className="text-xs sm:text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;