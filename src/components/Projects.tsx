import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code2, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Network Troubleshooting Practice Lab',
      description: 'Comprehensive hands-on laboratory environment for diagnosing and resolving TCP/IP network issues using VMware virtual machines. Includes scenarios for DNS resolution, DHCP conflicts, and firewall configuration.',
      technologies: ['VMware', 'TCP/IP', 'DNS', 'DHCP', 'Linux', 'Windows'],
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      category: 'Infrastructure'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and hosted on Linux server infrastructure. Features dark theme, smooth animations, and optimized performance for showcasing technical projects.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Linux', 'Nginx'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      category: 'Web Development'
    },
    {
      title: 'Sign Dekorasyon IT Infrastructure',
      description: 'Designed and implemented comprehensive IT systems infrastructure to support business operations. Managed network setup, security protocols, and system maintenance for improved operational efficiency.',
      technologies: ['Network Administration', 'Windows Server', 'Security', 'System Maintenance'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      category: 'Infrastructure'
    },
    {
      title: 'Automated System Monitoring',
      description: 'Python-based monitoring solution for tracking system performance, network connectivity, and security events. Includes automated alerting and reporting capabilities for proactive system management.',
      technologies: ['Python', 'Linux', 'Bash Scripting', 'System Monitoring', 'Automation'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      category: 'Automation'
    },
    {
      title: 'Customer Support Ticketing System',
      description: 'Web-based ticketing system for managing IT support requests with priority classification, automated routing, and comprehensive tracking. Improved response times and customer satisfaction.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Database Management', 'Customer Service'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      category: 'Web Development'
    },
    {
      title: 'Virtualization Lab Environment',
      description: 'Multi-platform virtualization environment using VMware for testing different operating systems, network configurations, and security scenarios. Used for learning and demonstration purposes.',
      technologies: ['VMware', 'Virtualization', 'Multiple OS', 'Network Testing', 'Security Testing'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      category: 'Infrastructure'
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Infrastructure': return Code2;
      case 'Web Development': return Eye;
      case 'Automation': return Zap;
      default: return Code2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Infrastructure': return 'from-blue-500 to-blue-600';
      case 'Web Development': return 'from-purple-500 to-purple-600';
      case 'Automation': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="projects" className="section-padding bg-dark-900/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 border border-accent-500 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-accent-400 rounded-full"
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
            Projects & <span className="text-accent-400">Experience</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-dark-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            A showcase of technical projects and professional experience in IT support and software development
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative"
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-dark-800/50 rounded-xl overflow-hidden border border-dark-700 hover:border-accent-500/50 transition-all duration-500 relative">
                  {/* Category badge */}
                  <motion.div
                    className={`absolute top-4 left-4 z-20 bg-gradient-to-r ${getCategoryColor(project.category)} px-3 py-1 rounded-full`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-1">
                      <CategoryIcon className="w-3 h-3 text-white" />
                      <span className="text-white text-xs font-medium">{project.category}</span>
                    </div>
                  </motion.div>

                  {/* Image container */}
                  <div className="relative overflow-hidden h-48">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/40 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Action buttons */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center space-x-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-accent-600 p-3 rounded-full text-dark-950 hover:bg-accent-500 transition-colors shadow-lg"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-accent-600 p-3 rounded-full text-dark-950 hover:bg-accent-500 transition-colors shadow-lg"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </motion.div>

                    {/* Floating particles on hover */}
                    {hoveredProject === index && (
                      <>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-accent-400 rounded-full"
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + i * 10}%`,
                            }}
                            animate={{
                              y: [0, -20, 0],
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-semibold text-dark-100 mb-3 group-hover:text-accent-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-dark-300 mb-4 text-sm leading-relaxed"
                      whileHover={{ x: 5 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="bg-dark-700 text-accent-400 px-3 py-1 rounded-full text-xs font-medium border border-dark-600 hover:border-accent-500/50 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "#14b8a6",
                            color: "#0f172a"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-accent-400 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;