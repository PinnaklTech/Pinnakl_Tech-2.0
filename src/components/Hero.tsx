import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images - replace with your actual image URLs
  const backgroundImages = [
    // "https://ycoscldrfhbmknqvjepm.supabase.co/storage/v1/object/public/pinnakl.tech/Hero1.jpg", // Building
    "https://ycoscldrfhbmknqvjepm.supabase.co/storage/v1/object/public/pinnakl.tech/Hero2.jpg", // Oil And Gas
    "https://ycoscldrfhbmknqvjepm.supabase.co/storage/v1/object/public/pinnakl.tech/Hero3.jpg", // Manufacturing
    "https://ycoscldrfhbmknqvjepm.supabase.co/storage/v1/object/public/pinnakl.tech/Hero4.jpg", // Supply chain
    "https://ycoscldrfhbmknqvjepm.supabase.co/storage/v1/object/public/pinnakl.tech//PowerTransmission.webp", //power Transmission
  ];

  useEffect(() => {
    setIsVisible(true);

    // Carousel effect - change image every 10 seconds for smoother experience
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => {
      clearInterval(imageInterval);
    };
  }, [backgroundImages.length]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Container */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-3000 ease-in-out ${
              index === currentImageIndex ? "opacity-90" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              transform:
                index === currentImageIndex ? "scale(1.02)" : "scale(1)",
              transitionProperty: "opacity, transform",
              transitionDuration: "3000ms",
              transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)",
            }}
          />
        ))}

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70"></div>

        {/* Additional overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Engineering
            <span className="block text-blue-300 ">Excellence</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-white/90 mt-2">
              Delivered
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Transforming ideas into reality through cutting-edge engineering
            solutions, advanced manufacturing processes, and innovative design
            consultancy.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <button
              onClick={scrollToContact}
              className="text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span>Get a Quote</span>
              
            </button>

            <button
              onClick={scrollToAbout}
              className="text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
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
