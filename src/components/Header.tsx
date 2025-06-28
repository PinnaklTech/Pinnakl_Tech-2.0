import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (isMenuOpen) setIsMenuOpen(false); // Auto-close on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close after navigation
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
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img
              src={isScrolled ? "/logo_b.png" : "/logo_w.png"}
              alt="Pinnakl Technologies Logo"
              className="h-8 w-auto sm:h-10 md:h-12 object-contain transition-all duration-300"
            />
          </div>

          {/* Desktop Nav - Hidden on mobile/tablet */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 text-sm xl:text-base 2xl:text-lg px-2 py-1 rounded-md ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-4 xl:px-6 2xl:px-8 py-2 xl:py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm xl:text-base 2xl:text-lg whitespace-nowrap"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button - Visible on mobile/tablet */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 touch-manipulation ${
              isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fullscreen Animated */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-md flex flex-col justify-center items-center px-4 sm:px-6"
          >
            {/* Close button - Positioned absolutely */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-gray-100 text-gray-700 hover:text-blue-600 hover:bg-blue-100 transition duration-200 shadow-sm touch-manipulation"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Navigation Links - Centered and spaced */}
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 w-full max-w-sm">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-center text-xl sm:text-2xl md:text-3xl text-gray-800 font-semibold hover:text-blue-600 transition duration-200 py-3 px-6 rounded-xl hover:bg-blue-50 touch-manipulation"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={() => scrollToSection("contact")}
                className="w-full mt-6 bg-blue-600 text-white px-8 py-4 sm:py-5 rounded-full font-medium hover:bg-blue-700 transition duration-300 shadow-md text-lg sm:text-xl touch-manipulation"
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