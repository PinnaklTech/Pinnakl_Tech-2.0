import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

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

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  const serviceItems = [
    { label: "Product Development", path: "/services/product-development" },
    { label: "Odoo ERP Solutions", path: "/services/odoo-erp" },
    { label: "Failure Analysis", path: "/services/failure-analysis" },
    { label: "Technical Specifications", path: "/services/technical-specifications" },
    { label: "Manufacturing Solutions", path: "/services/manufacturing" },
    { label: "Supply Chain Optimization", path: "/services/supply-chain" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0 min-w-0 z-50">
            <img
              src={isScrolled ? "/logo_b.png" : "/logo_w.png"}
              alt="Pinnakl Technologies Logo"
              className="h-6 w-auto sm:h-8 md:h-10 lg:h-12 object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 2xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 text-sm lg:text-base xl:text-lg px-2 lg:px-3 py-1 lg:py-2 rounded-md whitespace-nowrap ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`font-medium transition-all duration-300 hover:scale-105 text-sm lg:text-base xl:text-lg px-2 lg:px-3 py-1 lg:py-2 rounded-md whitespace-nowrap flex items-center gap-1 ${
                  isScrolled
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
            className={`xl:hidden p-2 sm:p-3 rounded-lg transition-colors duration-300 touch-manipulation z-50 ${
              isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
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
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-center text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold hover:text-blue-600 transition duration-200 py-3 px-6 rounded-xl hover:bg-blue-50 touch-manipulation"
                >
                  {item.label}
                </motion.button>
              ))}
              
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
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
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