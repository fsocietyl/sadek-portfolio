import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 border border-accent-500 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-24 h-24 border border-accent-400 rounded-full"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main footer text */}
          <motion.p 
            className="text-dark-400 text-sm mb-3 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span>© 2025 Sadek Elzakzouk. Built with</span>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <span>using</span>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -360 }}
              transition={{ duration: 0.6 }}
            >
              <Code className="w-4 h-4 text-accent-400" />
            </motion.div>
            <span>React & Tailwind CSS</span>
          </motion.p>

          {/* Secondary text */}
          <motion.p 
            className="text-dark-500 text-xs flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span>Designed and developed with passion in Istanbul, Turkey</span>
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <Coffee className="w-3 h-3 text-amber-400" />
            </motion.div>
          </motion.p>

          {/* Animated dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-accent-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>

          {/* Back to top hint */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-dark-500 text-xs hover:text-accent-400 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              ↑ Back to top
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;