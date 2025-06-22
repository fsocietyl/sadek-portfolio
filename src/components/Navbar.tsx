import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-950/95 backdrop-blur-md border-b border-dark-800 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold text-accent-400 cursor-pointer relative"
            onClick={() => scrollToSection('home')}
          >
            <motion.span
              className="relative z-10"
              whileHover={{ 
                textShadow: "0 0 20px rgba(20, 184, 166, 0.8)"
              }}
            >
              SE
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-accent-400/20 rounded-lg blur-sm"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                    activeSection === item.id
                      ? 'text-accent-400'
                      : 'text-dark-300 hover:text-accent-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-400 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-accent-400/10 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-300 hover:text-accent-400 p-2 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="bg-dark-900/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-dark-700">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-3 w-full text-left px-3 py-3 text-sm font-medium transition-all duration-300 rounded-lg mb-1 last:mb-0 ${
                  activeSection === item.id
                    ? 'text-accent-400 bg-accent-400/10'
                    : 'text-dark-300 hover:text-accent-400 hover:bg-dark-800'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon size={18} />
                </motion.div>
                <span>{item.label}</span>
                
                {activeSection === item.id && (
                  <motion.div
                    className="ml-auto w-2 h-2 bg-accent-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-accent-400"
        style={{
          width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.nav>
  );
};

export default Navbar;