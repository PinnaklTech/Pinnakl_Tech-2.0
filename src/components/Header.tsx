import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      // Close mobile menu on resize to desktop
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu first
      setIsMenuOpen(false);
      
      // Small delay to allow menu close animation
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={isScrolled ? "/logo_b.png" : "/logo_w.png"}
              alt="Pinnakl Technologies Logo"
              className="h-8 sm:h-10 w-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 text-sm xl:text-base ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm xl:text-base"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 z-50 relative ${
              isScrolled || isMenuOpen ? "text-gray-900" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay - Now inside the header */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ top: 0 }} // Ensure it starts from the very top
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img
                  src="/logo_b.png"
                  alt="Pinnakl Technologies"
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-8">
                <nav className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors py-2"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 + 0.2 }}
                    onClick={() => scrollToSection("contact")}
                    className="w-full mt-8 bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    Get Quote
                  </motion.button>
                </nav>
              </div>

              {/* Contact Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Ready to get started?</p>
                  <p className="text-sm font-medium text-gray-800">info@pinnakl.tech</p>
                  <p className="text-sm font-medium text-gray-800">+1 (000) 000-0000</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;