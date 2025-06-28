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
      {/* Background Images Container - Fully Responsive */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-3000 ease-in-out ${
              index === currentImageIndex ? "opacity-90" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              transform: index === currentImageIndex ? "scale(1.02)" : "scale(1)",
              transitionProperty: "opacity, transform",
              transitionDuration: "3000ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
            }}
          />
        ))}

        {/* Enhanced gradient overlays for better mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 sm:from-black/60 sm:via-black/50 sm:to-black/70 lg:from-black/50 lg:via-black/40 lg:to-black/60"></div>
        <div className="absolute inset-0 bg-black/30 sm:bg-black/20 lg:bg-black/10"></div>
      </div>

      {/* Carousel Indicators - Ultra Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        {/* Mobile: Ultra-small minimal dots */}
        <div className="flex sm:hidden space-x-1.5 px-3 py-2 bg-black/20 backdrop-blur-sm rounded-full">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`rounded-full transition-all duration-300 touch-manipulation ${
                index === currentImageIndex
                  ? "bg-white/90 w-2 h-2"
                  : "bg-white/30 hover:bg-white/50 w-1.5 h-1.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Tablet and up: Enhanced dots */}
        <div className="hidden sm:flex space-x-2 md:space-x-3 px-4 py-3 bg-black/20 backdrop-blur-sm rounded-full">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`rounded-full transition-all duration-300 touch-manipulation ${
                index === currentImageIndex
                  ? "bg-white w-3 h-3 md:w-4 md:h-4 scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/70 w-2.5 h-2.5 md:w-3 md:h-3 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content - Fully Responsive */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Responsive heading with proper scaling */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Engineering
            <span className="block text-blue-300">Excellence</span>
            <span className="block text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-white/90 mt-1 sm:mt-2 lg:mt-3">
              Delivered
            </span>
          </h1>

          {/* Responsive description */}
          <p
            className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-6 sm:mb-8 lg:mb-10 max-w-5xl mx-auto leading-relaxed px-2 sm:px-4 lg:px-8 transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Transforming ideas into reality through cutting-edge engineering
            solutions, advanced manufacturing processes, and innovative design
            consultancy.
          </p>

          {/* Responsive buttons with proper touch targets */}
          <div
            className={`flex flex-col xs:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center px-2 sm:px-4 lg:px-8 transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <button
              onClick={scrollToContact}
              className="w-full xs:w-auto min-w-[160px] sm:min-w-[180px] lg:min-w-[200px] bg-blue-600 text-white px-6 xs:px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full text-sm xs:text-base sm:text-lg lg:text-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm touch-manipulation flex items-center justify-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </button>

            <button
              onClick={scrollToAbout}
              className="w-full xs:w-auto min-w-[160px] sm:min-w-[180px] lg:min-w-[200px] text-white border-2 border-white/30 px-6 xs:px-8 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full text-sm xs:text-base sm:text-lg lg:text-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm touch-manipulation"
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