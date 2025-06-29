import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Section intersection observer for homepage only
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is 20% from top
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['about', 'services', 'projects', 'blog', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isHomePage]);

  // Force scrolled state on non-home pages for visibility
  const shouldShowScrolledState = !isHomePage || isScrolled;

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Conditional navigation items based on current route
  const homePageNavItems = [
    { label: "About", id: "about", type: "scroll" },
    { label: "Projects", id: "projects", type: "scroll" },
    { label: "Blog", id: "blog", type: "scroll" },
    { label: "Contact", id: "contact", type: "scroll" },
  ];

  const otherPagesNavItems = [
    { label: "Home", id: "/", type: "link" },
    { label: "Projects", id: "projects", type: "scroll" },
    { label: "Services", id: "services", type: "scroll" },
    { label: "Contact", id: "contact", type: "scroll" },
  ];

  const navItems = isHomePage ? homePageNavItems : otherPagesNavItems;

  const serviceItems = [
    { label: "Product Development", path: "/services/product-development" },
    { label: "Odoo ERP Solutions", path: "/services/odoo-erp" },
    { label: "Failure Analysis", path: "/services/failure-analysis" },
    { label: "Technical Specifications", path: "/services/technical-specifications" },
    { label: "Manufacturing Solutions", path: "/services/manufacturing" },
    { label: "Supply Chain Optimization", path: "/services/supply-chain" },
  ];

  const handleNavItemClick = (item: any) => {
    if (item.type === "link") {
      // Navigate to home page
      window.location.href = item.id;
    } else {
      // Scroll to section
      scrollToSection(item.id);
    }
  };

  const getNavItemClasses = (item: any) => {
    const isActive = isHomePage && activeSection === item.id;
    const baseClasses = "font-medium transition-all duration-300 hover:scale-105 text-sm lg:text-base xl:text-lg px-2 lg:px-3 py-1 lg:py-2 rounded-md whitespace-nowrap relative";
    
    if (shouldShowScrolledState) {
      return `${baseClasses} ${
        isActive 
          ? "text-blue-600 bg-blue-50" 
          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
      }`;
    } else {
      return `${baseClasses} ${
        isActive 
          ? "text-white bg-white/20" 
          : "text-white/90 hover:text-white hover:bg-white/10"
      }`;
    }
  };

  const getActiveIndicator = (item: any) => {
    const isActive = isHomePage && activeSection === item.id;
    if (!isActive) return null;

    return (
      <motion.div
        layoutId="activeIndicator"
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-8 rounded-full ${
          shouldShowScrolledState ? "bg-blue-600" : "bg-white"
        }`}
        initial={false}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
    );
  };

  const renderNavItem = (item: any) => {
    if (item.type === "link") {
      return (
        <Link
          key={item.id}
          to={item.id}
          className={getNavItemClasses(item)}
        >
          {item.label}
          {getActiveIndicator(item)}
        </Link>
      );
    } else {
      return (
        <button
          key={item.id}
          onClick={() => handleNavItemClick(item)}
          className={getNavItemClasses(item)}
        >
          {item.label}
          {getActiveIndicator(item)}
        </button>
      );
    }
  };

  const renderMobileNavItem = (item: any, index: number) => {
    const isActive = isHomePage && activeSection === item.id;
    
    const content = (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`w-full text-center text-lg sm:text-xl md:text-2xl font-semibold transition duration-200 py-3 px-6 rounded-xl touch-manipulation relative ${
          isActive 
            ? "text-blue-600 bg-blue-50" 
            : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
        }`}
      >
        {item.label}
        {isActive && (
          <motion.div
            layoutId="mobileActiveIndicator"
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-8 bg-blue-600 rounded-full"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          />
        )}
      </motion.div>
    );

    if (item.type === "link") {
      return (
        <Link
          key={item.id}
          to={item.id}
          onClick={() => setIsMenuOpen(false)}
        >
          {content}
        </Link>
      );
    } else {
      return (
        <button
          key={item.id}
          onClick={() => handleNavItemClick(item)}
          className="w-full"
        >
          {content}
        </button>
      );
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowScrolledState ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0 min-w-0">
            <img
              src={shouldShowScrolledState ? "/logo_b.png" : "/logo_w.png"}
              alt="Pinnakl Technologies Logo"
              className="h-6 w-auto sm:h-8 md:h-10 lg:h-12 object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 2xl:space-x-8">
            {navItems.map((item) => renderNavItem(item))}
            
            {/* Services Dropdown - Only show on non-home pages or as separate item */}
            {!isHomePage && (
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`font-medium transition-all duration-300 hover:scale-105 text-sm lg:text-base xl:text-lg px-2 lg:px-3 py-1 lg:py-2 rounded-md whitespace-nowrap flex items-center gap-1 ${
                    shouldShowScrolledState
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden"
                    >
                      {serviceItems.map((service, index) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Services Dropdown for Homepage */}
            {isHomePage && (
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`font-medium transition-all duration-300 hover:scale-105 text-sm lg:text-base xl:text-lg px-2 lg:px-3 py-1 lg:py-2 rounded-md whitespace-nowrap flex items-center gap-1 ${
                    shouldShowScrolledState
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-2xl z-50 overflow-hidden"
                    >
                      {serviceItems.map((service, index) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-3 lg:px-4 xl:px-6 2xl:px-8 py-2 lg:py-2.5 xl:py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm lg:text-base xl:text-lg whitespace-nowrap"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`xl:hidden p-2 sm:p-3 rounded-lg transition-colors duration-300 touch-manipulation ${
              shouldShowScrolledState ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-md flex flex-col justify-center items-center px-4 sm:px-6"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-gray-100 text-gray-700 hover:text-blue-600 hover:bg-blue-100 transition duration-200 shadow-sm touch-manipulation"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex flex-col items-center space-y-4 sm:space-y-6 w-full max-w-sm">
              {navItems.map((item, index) => renderMobileNavItem(item, index))}
              
              {/* Mobile Services Menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="w-full"
              >
                <div className="text-center text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold mb-3">
                  Services
                </div>
                <div className="space-y-2">
                  {serviceItems.map((service, index) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full text-center text-sm sm:text-base text-gray-600 hover:text-blue-600 transition duration-200 py-2 px-4 rounded-lg hover:bg-blue-50 touch-manipulation"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
                onClick={() => scrollToSection("contact")}
                className="w-full mt-4 bg-blue-600 text-white px-6 py-4 sm:py-5 rounded-full font-medium hover:bg-blue-700 transition duration-300 shadow-md text-lg sm:text-xl touch-manipulation"
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;