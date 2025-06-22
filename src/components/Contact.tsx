import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'spacewalkersa@gmail.com',
      href: 'mailto:spacewalkersa@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+90 0551 152 7310',
      href: 'tel:+905511527310',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/spacewalkersa',
      href: 'https://www.linkedin.com/in/spacewalkersa/',
      color: 'from-purple-500 to-purple-600'
    }
  ];

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

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
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
            Get In <span className="text-accent-400">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-dark-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to collaborate or need IT support? Let's connect and discuss how I can help with your technical challenges.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-accent-400 mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                Let's Connect
              </h3>
              <motion.p 
                className="text-dark-300 mb-8 leading-relaxed"
                whileHover={{ x: 5 }}
              >
                I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
                Whether you need IT support, have a technical question, or want to discuss potential projects, 
                I'd love to hear from you.
              </motion.p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  className="flex items-center space-x-4 p-4 bg-dark-900 rounded-lg hover:bg-dark-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`bg-gradient-to-r ${info.color} p-1 rounded-xl`}>
                    <div className="bg-dark-800 p-4 rounded-lg flex items-center space-x-4 relative overflow-hidden">
                      {/* Background animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />

                      <motion.div 
                        className="bg-gradient-to-br from-accent-500 to-accent-600 p-3 rounded-lg relative z-10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <info.icon className="w-6 h-6 text-dark-950" />
                      </motion.div>
                      
                      <div className="relative z-10">
                        <p className="text-dark-400 text-sm">{info.label}</p>
                        <motion.p 
                          className="text-dark-200 font-medium group-hover:text-accent-400 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {info.value}
                        </motion.p>
                      </div>

                      {/* Floating particles */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100"
                          style={{
                            right: `${10 + i * 15}%`,
                            top: `${20 + i * 20}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional info */}
            <motion.div
              variants={itemVariants}
              className="bg-dark-800/50 p-6 rounded-xl border border-dark-700"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-5 h-5 text-accent-400" />
                <h4 className="text-lg font-semibold text-dark-200">Response Time</h4>
              </div>
              <p className="text-dark-300 text-sm">
                I typically respond to messages within 24 hours. For urgent matters, 
                please call directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-dark-300 mb-2 font-medium">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:border-accent-500 focus:outline-none transition-all text-dark-100 focus:ring-2 focus:ring-accent-500/20"
                  placeholder="Your full name"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-dark-300 mb-2 font-medium">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:border-accent-500 focus:outline-none transition-all text-dark-100 focus:ring-2 focus:ring-accent-500/20"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-dark-300 mb-2 font-medium">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:border-accent-500 focus:outline-none transition-all text-dark-100 resize-none focus:ring-2 focus:ring-accent-500/20"
                  placeholder="Tell me about your project or how I can help..."
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-600 hover:bg-accent-500 text-dark-950 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: isSubmitting ? "-100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-dark-950 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </div>

                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;