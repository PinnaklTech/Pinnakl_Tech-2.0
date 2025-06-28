import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/low-angle-shot-tall-city-building-with-blue-sky-background-new-york.jpg')" }}
      >
        {/* Enhanced overlay for better readability */}
        <div className="absolute inset-0 bg-black/55"></div>
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
            <span className="block text-blue-300">Excellence</span>
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
              className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:shadow-2xl"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={scrollToAbout}
              className="text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
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