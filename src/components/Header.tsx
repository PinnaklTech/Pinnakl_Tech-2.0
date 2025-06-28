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

      {/* Mobile Menu Overlay - Only visible on mobile */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
        
        {/* Menu Panel - Slides in from right */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Content */}
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo_b.png"
                  alt="Pinnakl Technologies"
                  className="h-8 w-auto"
                />
                <div>
                  <h2 id="mobile-menu-title" className="text-lg font-semibold text-gray-900">
                    Menu
                  </h2>
                  <p className="text-sm text-gray-600">Navigation</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6 py-8 overflow-y-auto">
              <nav className="space-y-2" role="navigation">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-lg font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-4 px-4 rounded-lg border-b border-gray-100 last:border-b-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50 ${
                      'transform hover:translate-x-2'
                    }`}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                    }}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </span>
                  </button>
                ))}
                
                {/* CTA Button */}
                <div className="pt-6">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    style={{ 
                      animationDelay: `${navItems.length * 50}ms`,
                      animation: isMenuOpen ? 'slideInFromRight 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    Get Quote
                  </button>
                </div>
              </nav>
            </div>

            {/* Footer Contact Info */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <div className="text-center space-y-3">
                <p className="text-sm font-medium text-gray-900 mb-3">Ready to get started?</p>
                
                <div className="space-y-2">
                  <a 
                    href="mailto:info@pinnakl.tech"
                    className="flex items-center justify-center space-x-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Mail className="w-4 h-4" />
                    <span>info@pinnakl.tech</span>
                  </a>
                  
                  <a 
                    href="tel:+1000000000"
                    className="flex items-center justify-center space-x-2 text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Phone className="w-4 h-4" />
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