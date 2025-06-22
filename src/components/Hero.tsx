import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Server, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate tilt based on mouse position
  const calculateTilt = () => {
    const windowWidth = window.innerWidth;
    const mouseX = mousePosition.x;
    
    // Calculate tilt angle based on mouse position
    // Center of screen = 0deg, left edge = -5deg, right edge = 5deg
    const tiltAngle = ((mouseX - windowWidth / 2) / (windowWidth / 2)) * 5;
    
    return {
      rotateY: tiltAngle,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    };
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Wave animation for letters
  const letterVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0, -8, 0],
      rotateX: [0, 15, 0, -10, 0],
      rotateY: [0, 5, 0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.1,
        ease: "easeInOut"
      }
    })
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, x: '10%', y: '20%' },
    { Icon: Server, delay: 2, x: '85%', y: '30%' },
    { Icon: Zap, delay: 4, x: '15%', y: '70%' },
  ];

  // Split text into letters for wave effect
  const firstName = "Sadek";
  const lastName = "Elzakzouk";

  return (
    <motion.section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-pattern"
      animate={calculateTilt()}
      style={{ perspective: "1000px" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-accent-400 opacity-20"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      {/* Mouse follower */}
      <motion.div
        className="fixed w-6 h-6 bg-accent-400 rounded-full opacity-20 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2
              }}
            >
              {/* First Name with wave effect */}
              <div className="flex justify-center items-center mb-2">
                {firstName.split('').map((letter, index) => (
                  <motion.span
                    key={`first-${index}`}
                    className="text-dark-100 inline-block mx-1 group"
                    custom={index}
                    variants={letterVariants}
                    animate="animate"
                    whileHover={{ 
                      scale: 1.2,
                      textShadow: "0 0 20px rgba(20, 184, 166, 0.8)",
                      rotateZ: 10
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.span
                      className="relative"
                      whileHover={{
                        color: index < 2 ? "#000000" : // Black for first 2 letters
                               index < 3 ? "#FFFFFF" : // White for 3rd letter
                               index < 4 ? "#009736" : // Green for 4th letter
                               "#CE1126" // Red for last letter
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {letter}
                    </motion.span>
                  </motion.span>
                ))}
              </div>
              
              {/* Last Name with wave effect */}
              <div className="flex justify-center items-center">
                {lastName.split('').map((letter, index) => (
                  <motion.span
                    key={`last-${index}`}
                    className="text-gradient inline-block mx-1"
                    custom={index}
                    variants={letterVariants}
                    animate="animate"
                    whileHover={{ 
                      scale: 1.2,
                      textShadow: "0 0 25px rgba(20, 184, 166, 1)",
                      rotateZ: -10
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.p
              className="text-xl md:text-2xl text-dark-400 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ color: "#14b8a6", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                IT Support Specialist
              </motion.span>
              <span className="mx-2">•</span>
              <motion.span
                className="inline-block"
                whileHover={{ color: "#14b8a6", scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Software Engineer in Training
              </motion.span>
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <motion.p
              className="text-lg text-dark-500 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.span
                className="inline-flex items-center"
                whileHover={{ scale: 1.1 }}
              >
                📍 Based in Istanbul, Turkey
              </motion.span>
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <motion.button
              onClick={scrollToAbout}
              className="bg-accent-600 hover:bg-accent-500 text-dark-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={scrollToAbout}
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown className="w-8 h-8 text-dark-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
    </motion.section>
  );
};

export default Hero;