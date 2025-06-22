import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Shield, Users, Star } from 'lucide-react';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'IT Support & Networking',
      icon: Server,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'IT Support', level: 90 },
        { name: 'TCP/IP', level: 85 },
        { name: 'DHCP', level: 80 },
        { name: 'DNS', level: 85 },
        { name: 'Firewall Configuration', level: 75 },
        { name: 'Network Switches', level: 80 },
        { name: 'Troubleshooting', level: 95 }
      ]
    },
    {
      title: 'Operating Systems',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Linux Administration', level: 85 },
        { name: 'Windows Server', level: 80 },
        { name: 'VMware', level: 75 },
        { name: 'Virtualization', level: 80 },
        { name: 'System Administration', level: 85 },
        { name: 'Security Management', level: 75 }
      ]
    },
    {
      title: 'Programming',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'C++', level: 70 },
        { name: 'C', level: 65 },
        { name: 'Python', level: 75 },
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 70 },
        { name: 'Problem Solving', level: 90 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Customer Service', level: 95 },
        { name: 'Technical Communication', level: 90 },
        { name: 'Problem Analysis', level: 85 },
        { name: 'Team Collaboration', level: 88 },
        { name: 'Documentation', level: 80 },
        { name: 'Training & Support', level: 85 }
      ]
    }
  ];

  const certifications = [
    {
      name: 'Google IT Support Professional',
      issuer: 'Google',
      logo: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100',
      color: 'from-blue-500 to-blue-600',
      year: '2024'
    },
    {
      name: 'Programming Fundamentals',
      issuer: 'Mimo',
      logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=100',
      color: 'from-purple-500 to-purple-600',
      year: '2023'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            Skills & <span className="text-accent-400">Certifications</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-dark-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Technical expertise and professional certifications that drive my passion for technology
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`bg-gradient-to-br ${category.color} p-1 rounded-xl`}>
                <div className="bg-dark-800 p-6 rounded-lg h-full relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-20 h-20 border border-white rounded-full" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border border-white rounded-full" />
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      className="flex items-center mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="mr-3"
                      >
                        <category.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    </motion.div>

                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="relative"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-dark-300 text-sm">{skill.name}</span>
                            <motion.span 
                              className="text-accent-400 text-xs font-medium"
                              animate={{ 
                                scale: hoveredSkill === skill.name ? 1.1 : 1,
                                color: hoveredSkill === skill.name ? "#06b6d4" : "#14b8a6"
                              }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-accent-400 to-accent-600 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                                duration: 1,
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                              whileHover={{ 
                                boxShadow: "0 0 10px rgba(20, 184, 166, 0.5)"
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 text-accent-400"
            whileHover={{ scale: 1.05 }}
          >
            Professional Certifications
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className={`bg-gradient-to-br ${cert.color} p-1 rounded-xl relative overflow-hidden group`}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />

                <div className="bg-dark-800 p-6 rounded-lg text-center min-w-[200px] relative z-10">
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-cover" />
                    <motion.div
                      className="absolute inset-0 bg-accent-400/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  <motion.h4 
                    className="font-semibold text-dark-100 mb-2"
                    whileHover={{ color: "#14b8a6" }}
                  >
                    {cert.name}
                  </motion.h4>
                  
                  <p className="text-dark-400 text-sm mb-2">{cert.issuer}</p>
                  
                  <motion.div
                    className="flex items-center justify-center space-x-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Star className="w-4 h-4 text-accent-400 fill-current" />
                    <span className="text-accent-400 text-xs font-medium">{cert.year}</span>
                  </motion.div>

                  {/* Floating particles */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;