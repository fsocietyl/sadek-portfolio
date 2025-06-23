/// <reference types="vite/client" />

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 1200); // Fast loading
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  // Animated S and E letters
  const letters = [
    { char: 'S', color: '#14b8a6' },
    { char: 'E', color: '#8b5cf6' },
    { char: 'S', color: '#14b8a6' },
    { char: 'E', color: '#8b5cf6' },
    { char: 'S', color: '#14b8a6' },
    { char: 'E', color: '#8b5cf6' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-dark-950 flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {letters.map((l, i) => (
            <motion.span
              key={i}
              className="text-6xl md:text-8xl font-extrabold absolute"
              style={{ color: l.color, left: `${20 + i * 10}%`, top: `${40 + Math.sin(i) * 10}%`, pointerEvents: 'none' }}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [0, -30, 0, 30, 0],
                opacity: [0, 1, 1, 1, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
            >
              {l.char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen; 