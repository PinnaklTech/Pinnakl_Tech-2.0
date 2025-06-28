import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      // Close mobile menu when screen becomes desktop size
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Small delay to allow menu close animation
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // Account for fixed header
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer z-50 relative transition-transform duration-300 hover:scale-105"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
              aria-label="Go to homepage"
            >
              <img
                src={isScrolled ? "/logo_b.png" : "/logo_w.png"}
                alt="Pinnakl Technologies Logo"
                className="h-8 sm:h-10 w-auto object-contain transition-all duration-500"
              />
            </div>

            {/* Desktop Navigation - Hidden on mobile (< 768px) */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" role="navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-3 py-2 ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600 focus:ring-offset-white"
                      : "text-white/90 hover:text-white focus:ring-offset-transparent"
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                aria-label="Get a quote - Contact us"
              >
                Get Quote
              </button>
            </nav>

            {/* Mobile Menu Button - Visible only on mobile (< 768px) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-3 rounded-lg transition-all duration-300 z-50 relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isScrolled || isMenuOpen 
                  ? "text-gray-900 hover:bg-gray-100 focus:ring-offset-white" 
                  : "text-white hover:bg-white/10 focus:ring-offset-transparent"
              }`}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu - Only visible on mobile */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Full Screen Menu Panel */}
        <div 
          className={`absolute inset-0 w-full h-full bg-white transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Menu Content */}
          <div className="flex flex-col h-full">
            {/* Minimal Header - Just close button */}
            <div className="flex items-center justify-end px-4 sm:px-6 h-16 md:h-20 bg-white border-b border-gray-100">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links - Centered */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-8">
              <nav className="space-y-4" role="navigation">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-center text-2xl sm:text-3xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 py-4 px-6 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50 transform hover:scale-105 ${
                      'opacity-0 animate-fade-in-up'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* CTA Button */}
                <div className="pt-8">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-6 rounded-2xl text-xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 opacity-0 animate-fade-in-up`}
                    style={{ 
                      animationDelay: `${navItems.length * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    Get Quote
                  </button>
                </div>
              </nav>
            </div>

            {/* Footer Contact Info */}
            <div className="px-6 sm:px-8 py-8 bg-gray-50 border-t border-gray-100">
              <div className="text-center space-y-4">
                <p className="text-lg font-semibold text-gray-900 mb-4">Ready to get started?</p>
                
                <div className="space-y-3">
                  <a 
                    href="mailto:info@pinnakl.tech"
                    className="flex items-center justify-center space-x-3 text-base text-gray-700 hover:text-blue-600 transition-colors duration-200 p-3 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@pinnakl.tech</span>
                  </a>
                  
                  <a 
                    href="tel:+1000000000"
                    className="flex items-center justify-center space-x-3 text-base text-gray-700 hover:text-blue-600 transition-colors duration-200 p-3 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 (000) 000-0000</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;