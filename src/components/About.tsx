import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
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

  const infoCards = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Istanbul, Turkey',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GraduationCap,
      label: 'University',
      value: 'İstanbul Topkapı Üniversitesi',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      label: 'Certification',
      value: 'Google Certified',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-900/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 border border-accent-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 border border-accent-400 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About <span className="text-accent-400">Me</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              <motion.div 
                className="w-80 h-80 rounded-full bg-gradient-to-br from-accent-500 to-accent-700 p-1"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                  <motion.img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Sadek Elzakzouk"
                    className="w-72 h-72 rounded-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500 rounded-full blur-xl opacity-50"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-400 rounded-full blur-lg opacity-40"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Orbiting elements */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-accent-400 rounded-full -translate-x-1/2 -translate-y-6" />
              </motion.div>
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent-300 rounded-full translate-x-6 translate-y-6" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p 
              variants={itemVariants}
              className="text-lg text-dark-300 leading-relaxed"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              I am a motivated <motion.span 
                className="text-accent-400 font-semibold"
                whileHover={{ scale: 1.1, color: "#06b6d4" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                IT Support Specialist
              </motion.span> and 
              <motion.span 
                className="text-accent-400 font-semibold"
                whileHover={{ scale: 1.1, color: "#06b6d4" }}
                transition={{ type: "spring", stiffness: 400 }}
              > Software Engineering student</motion.span> at İstanbul Topkapı Üniversitesi.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-dark-300 leading-relaxed"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              I have completed the <motion.span 
                className="text-accent-400 font-semibold"
                whileHover={{ scale: 1.1, color: "#06b6d4" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Google IT Support Professional Certificate
              </motion.span> and 
              have hands-on experience with customer service, networking, system administration, and security on 
              <motion.span 
                className="text-accent-400 font-semibold"
                whileHover={{ scale: 1.1, color: "#06b6d4" }}
                transition={{ type: "spring", stiffness: 400 }}
              > Windows & Linux</motion.span> systems.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-dark-300 leading-relaxed"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              I am passionate about learning and helping people solve their technical problems. My goal is to bridge 
              the gap between complex technology and user-friendly solutions.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
            >
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  className={`bg-gradient-to-br ${card.color} p-1 rounded-xl`}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                >
                  <div className="bg-dark-800 p-4 rounded-lg text-center h-full">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="inline-block mb-2"
                    >
                      <card.icon className="w-6 h-6 text-white mx-auto" />
                    </motion.div>
                    <p className="text-dark-400 text-xs mb-1">{card.label}</p>
                    <p className="text-dark-200 font-medium text-sm">{card.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Passion indicator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2 pt-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-red-400 fill-current" />
              </motion.div>
              <span className="text-dark-400 text-sm">Passionate about technology and problem-solving</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;