'use client'
import { Github, Linkedin, Mail, Heart, Code2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/nann5an1', gradient: 'from-blue-500 to-cyan-500', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nannsan-laura/', gradient: 'from-purple-500 to-pink-500', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:nannsuhtetsan@gmail.com', gradient: 'from-orange-500 to-red-500', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-900 mb-4"
            >
              <Code2 className="text-blue-600" size={28} />
              <span className="text-2xl">Nann Su Htet San</span>
            </motion.div>
            <p className="text-gray-600 mb-6">
              Building digital experiences that make a difference. One line of code at a time.
            </p>
            <div className="flex items-center gap-2 text-gray-600">
              <Sparkles className="text-purple-600" size={16} />
              <span>Available for freelance work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-gray-900 mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-gradient-to-br ${social.gradient} text-white rounded-xl shadow-md hover:shadow-lg transition-all`}
                  title={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-600 mt-6">
              Let's create something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" fill="currentColor" />
            </motion.div>
            <span>using React, Tailwind & Motion</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
