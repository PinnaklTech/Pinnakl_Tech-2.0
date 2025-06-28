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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Industry Insights
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest engineering trends, case studies, and expert insights delivered to your inbox.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center space-x-2 text-blue-100">
                <CheckCircle className="h-6 w-6" />
                <span className="text-lg font-medium">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-r-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Settings className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Pinnakl Technologies</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading engineering and manufacturing consultancy delivering innovative solutions 
              that drive industrial excellence and technological advancement.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 (000) 000-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@pinnakl.tech</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Location</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
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
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
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
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
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
          </div>

          {/* Legal & Certifications */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link) => (
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
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Pinnakl Technologies. All rights reserved.
            </div>
            {/* <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🔒 Secure & Compliant</span>
              <span>⚡ Fast Delivery</span>
              <span>🏆 Industry Leading</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;