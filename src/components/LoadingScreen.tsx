import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        setTimeout(onLoadingComplete, 500);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [currentStep, onLoadingComplete]);

  const logoVariants = {
    hidden: { 
      scale: 0, 
      rotate: -180,
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.6
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        type: "spring",
        stiffness: 150
      }
    })
  };

  const fadeOutVariants = {
    visible: { opacity: 1 },
    exit: { 
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center z-50"
        variants={fadeOutVariants}
        initial="visible"
        exit="exit"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 1.5,
                repeat: Infinity,
                delay: Math.random() * 1.5,
              }}
            />
          ))}
        </div>

        {/* Al-Qassam Brigades Logo */}
        <motion.div
          className="relative mb-8"
          variants={logoVariants}
          initial="hidden"
          animate={currentStep >= 1 ? "visible" : "hidden"}
        >
          <motion.div
            animate={currentStep >= 2 ? "pulse" : {}}
            className="w-40 h-40 flex items-center justify-center shadow-2xl"
          >
            <img 
              src="/Al-Qassam_Brigades-removebg-preview.png" 
              alt="Al-Qassam Brigades Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Free Palestine Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={currentStep >= 2 ? "visible" : "hidden"}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {["F", "R", "E", "E", " ", "P", "A", "L", "E", "S", "T", "I", "N", "E"].map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={currentStep >= 2 ? "visible" : "hidden"}
                className="inline-block mx-1"
                style={{
                  color: i < 4 ? "#FFFFFF" :
                         i === 4 ? "transparent" :
                         i < 8 ? "#009736" :
                         i < 11 ? "#FFFFFF" :
                         "#CE1126"
                }}
                whileHover={{
                  scale: 1.2,
                  rotateY: 180,
                  transition: { duration: 0.2 }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          
          <motion.p
            className="text-xl text-gray-300 mt-4"
            initial={{ opacity: 0 }}
            animate={currentStep >= 3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 5px #009736",
                  "0 0 20px #009736",
                  "0 0 5px #009736"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✊ Resistance & Freedom ✊
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          className="w-64 h-2 bg-gray-700 rounded-full mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={currentStep >= 1 ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 to-green-600"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / 3) * 100}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-gray-400 mt-4 text-sm"
          initial={{ opacity: 0 }}
          animate={currentStep >= 1 ? { opacity: 1 } : { opacity: 0 }}
        >
          {currentStep === 0 && "Initializing..."}
          {currentStep === 1 && "Loading..."}
          {currentStep === 2 && "Almost ready..."}
          {currentStep === 3 && "Welcome!"}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen; 