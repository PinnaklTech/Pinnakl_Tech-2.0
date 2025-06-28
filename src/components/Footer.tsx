import React, { useState } from 'react';
import { Settings, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, Send, CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const footerLinks = {
    services: [
    'Product development',
    'Odoo ERP Solutions & Strategic Services',
    'Metallurgical and mechanical failure analysis',
    'Writing and reviewing specifications',
    'Solving complex manufacturing problems',
    'Optimizing supply chain'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'News & Events',
      'Case Studies',
      'Partnerships'
    ],
    resources: [
      'Blog',
      'White Papers',
      'Technical Guides',
      'Industry Reports',
      'Webinars',
      'FAQ'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Data Protection',
      'Accessibility',
      'Sitemap'
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const certifications = [
    'ISO 9001:2015',
    'AS9100D',
    'IATF 16949',
    'FDA Registered'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Stay Updated with Industry Insights
            </h3>
            <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Get the latest engineering trends, case studies, and expert insights delivered to your inbox.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-base sm:text-lg font-medium">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-r-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline text-sm sm:text-base">Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Settings className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-lg sm:text-2xl font-bold">Pinnakl Technologies</span>
            </div>
            
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Leading engineering and manufacturing consultancy delivering innovative solutions 
              that drive industrial excellence and technological advancement.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <span className="text-gray-300 text-sm sm:text-base">+1 (000) 000-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <span className="text-gray-300 text-sm sm:text-base">info@pinnakl.tech</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <span className="text-gray-300 text-sm sm:text-base">Location</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-gray-800 hover:bg-blue-600 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Certifications - Hidden on mobile for space */}
          <div className="hidden lg:block lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.slice(0, 4).map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <h5 className="text-sm font-semibold mb-3 text-white">Certifications</h5>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-gray-300 text-sm">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-0 text-center sm:text-left">
              © 2025 Pinnakl Technologies. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <span>🔒 Secure & Compliant</span>
              <span className="hidden sm:inline">⚡ Fast Delivery</span>
              <span className="hidden sm:inline">🏆 Industry Leading</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;