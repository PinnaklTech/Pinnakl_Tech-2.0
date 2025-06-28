import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://ycoscldrfhbmknqvjepm.supabase.co/storage/v1/object/public/pinnakl.tech/Hero2.jpg",
    "https://ycoscldrfhbmknqvjepm.supabase.co/storage/v1/object/public/pinnakl.tech/Hero3.jpg",
    "https://ycoscldrfhbmknqvjepm.supabase.co/storage/v1/object/public/pinnakl.tech/Hero4.jpg",
    "https://ycoscldrfhbmknqvjepm.supabase.co/storage/v1/object/public/pinnakl.tech//PowerTransmission.webp",
  ];

  useEffect(() => {
    setIsVisible(true);
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(imageInterval);
  }, [backgroundImages.length]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-3000 ease-in-out ${
              index === currentImageIndex ? "opacity-90" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              transform: index === currentImageIndex ? "scale(1.02)" : "scale(1)",
              transitionProperty: "opacity, transform",
              transitionDuration: "3000ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
            }}
          />
        ))}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Subtle Dot Indicators - Responsive design */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? // Active dot - subtle on mobile, more prominent on desktop
                  "bg-white/60 sm:bg-white scale-110 sm:scale-125 w-1.5 h-1.5 sm:w-3 sm:h-3"
                : // Inactive dots - very subtle on mobile, semi-transparent on desktop
                  "bg-white/20 sm:bg-white/50 hover:bg-white/40 sm:hover:bg-white/70 w-1 h-1 sm:w-2.5 sm:h-2.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Engineering
            <span className="block text-blue-300">Excellence</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-white/90 mt-2">
              Delivered
            </span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Transforming ideas into reality through cutting-edge engineering
            solutions, advanced manufacturing processes, and innovative design
            consultancy.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span>Get a Quote</span>
            </button>

            <button
              onClick={scrollToAbout}
              className="w-full sm:w-auto text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;