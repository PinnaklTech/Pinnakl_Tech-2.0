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
      {/* Background Images Container - Mobile Responsive */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-3000 ease-in-out ${
              index === currentImageIndex ? "opacity-90" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              // Mobile-first responsive background positioning
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              transform: index === currentImageIndex ? "scale(1.02)" : "scale(1)",
              transitionProperty: "opacity, transform",
              transitionDuration: "3000ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
            }}
          >
            {/* Mobile-specific background positioning using CSS media queries */}
            <style jsx>{`
              @media (max-width: 640px) {
                div {
                  background-position: center 30% !important;
                  background-size: cover !important;
                }
              }
              @media (min-width: 641px) and (max-width: 1024px) {
                div {
                  background-position: center 40% !important;
                  background-size: cover !important;
                }
              }
              @media (min-width: 1025px) {
                div {
                  background-position: center center !important;
                  background-size: cover !important;
                }
              }
            `}</style>
          </div>
        ))}

        {/* Enhanced gradient overlays for better mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 sm:from-black/60 sm:via-black/50 sm:to-black/70"></div>
        <div className="absolute inset-0 bg-black/30 sm:bg-black/20"></div>
      </div>

      {/* Ultra Subtle Carousel Indicators - Mobile Optimized */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        {/* Mobile: Ultra-small minimal dots */}
        <div className="flex sm:hidden space-x-1.5 px-3 py-2 bg-black/20 backdrop-blur-sm rounded-full">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white/90 w-[2px] h-[2px]"
                  : "bg-white/30 hover:bg-white/50 w-[1px] h-[1px]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Desktop: Classic dots with enhanced styling */}
        <div className="hidden sm:flex space-x-2 px-4 py-3 bg-black/20 backdrop-blur-sm rounded-full">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-3 h-3 scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/70 w-2.5 h-2.5 hover:scale-110"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content - Mobile Responsive */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Mobile-optimized heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Engineering
            <span className="block text-blue-300">Excellence</span>
            <span className="block text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-white/90 mt-1 sm:mt-2">
              Delivered
            </span>
          </h1>

          {/* Mobile-optimized description */}
          <p
            className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4 transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Transforming ideas into reality through cutting-edge engineering
            solutions, advanced manufacturing processes, and innovative design
            consultancy.
          </p>

          {/* Mobile-optimized buttons */}
          <div
            className={`flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-4 transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <button
              onClick={scrollToContact}
              className="w-full xs:w-auto min-w-[140px] text-white border-2 border-white/30 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm xs:text-base sm:text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span>Get a Quote</span>
            </button>

            <button
              onClick={scrollToAbout}
              className="w-full xs:w-auto min-w-[140px] text-white border-2 border-white/30 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm xs:text-base sm:text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
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