import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-blue-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-36 sm:h-36 bg-purple-100/20 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 bg-emerald-100/20 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1
          }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <div className="relative">
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl scale-110"></div>
            
            {/* Logo */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-200/50">
              <img
                src="/logo_b.png"
                alt="Pinnakl Technologies"
                className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3
          }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Pinnakl Technologies
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
            Engineering Excellence Delivered
          </p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut",
            delay: 0.5
          }}
          className="flex flex-col items-center"
        >
          {/* Animated Loading Bars */}
          <div className="flex space-x-1 sm:space-x-1.5 md:space-x-2 mb-4 sm:mb-6">
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                className="w-1 sm:w-1.5 md:w-2 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full"
                animate={{
                  height: ["8px", "24px", "8px"],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
                style={{ height: "8px" }}
              />
            ))}
          </div>

          {/* Loading Text with Dots Animation */}
          <div className="flex items-center space-x-1">
            <span className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
              Loading
            </span>
            <div className="flex space-x-0.5">
              {[0, 1, 2].map((index) => (
                <motion.span
                  key={index}
                  className="text-sm sm:text-base md:text-lg text-gray-700 font-medium"
                  animate={{
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  .
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            delay: 0.7
          }}
          className="mt-6 sm:mt-8 w-full max-w-xs sm:max-w-sm"
        >
          <div className="h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        {/* Subtle Loading Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6,
            delay: 1.0
          }}
          className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 text-center max-w-sm"
        >
          Preparing your engineering solutions...
        </motion.p>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-blue-200 border-t-blue-500 rounded-full"
        />
      </div>
      
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-6 h-6 sm:w-10 sm:h-10 border-2 border-purple-200 border-t-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;