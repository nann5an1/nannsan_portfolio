'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, MessageCircle, Sparkles } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! This is a demo form.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-white via-pink-50/30 to-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-pink-200 rounded-full mb-6 shadow-sm"
          >
            <MessageCircle className="text-pink-600" size={16} />
            <span className="text-gray-700">Get in Touch</span>
          </motion.div> */}
          
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            Let's Build{' '}
            <span className="gradient-text">
              Something Amazing
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-gray-900 text-2xl mb-8">Connect With Me</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    value: 'nannsuhtetsan@gmail.com',
                    href: 'mailto:nannsuhtetsan@gmail.com',
                    gradient: 'from-blue-500 to-cyan-500',
                  },
                  {
                    icon: MapPin,
                    title: 'Location',
                    value: 'Singapore',
                    subtitle: 'Open to remote work',
                    gradient: 'from-purple-500 to-pink-500',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-gradient-to-br ${item.gradient}`}
                    >
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">{item.title}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-900 text-lg hover:underline bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <>
                          <p className="text-gray-900 text-lg">{item.value}</p>
                          {item.subtitle && (
                            <p className="text-gray-500">{item.subtitle}</p>
                          )}
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-3">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 focus:outline-none transition-all"
                  placeholder="John Doe"
                  style={{
                    borderColor: focused === 'name' ? '#0066ff' : undefined,
                    boxShadow: focused === 'name' ? '0 0 0 3px rgba(0, 102, 255, 0.1)' : 'none',
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-3">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 focus:outline-none transition-all"
                  placeholder="john@example.com"
                  style={{
                    borderColor: focused === 'email' ? '#9333ea' : undefined,
                    boxShadow: focused === 'email' ? '0 0 0 3px rgba(147, 51, 234, 0.1)' : 'none',
                  }}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-3">
                  Phone Number
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 focus:outline-none transition-all"
                  placeholder="+65 1234-5678"
                  style={{
                    borderColor: focused === 'phone' ? '#ec4899' : undefined,
                    boxShadow: focused === 'phone' ? '0 0 0 3px rgba(236, 72, 153, 0.1)' : 'none',
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl transition-all relative overflow-hidden group shadow-lg hover:shadow-xl"
              >
                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative z-10 flex items-center gap-3">
                  <Send size={20} />
                  Get In Touch
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
