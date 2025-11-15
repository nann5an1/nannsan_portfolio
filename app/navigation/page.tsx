'use client';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Work', id: 'projects' },
    { label: 'Story', id: 'about' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Experience', id: 'experience' },
    { label: 'Connect', id: 'contact' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl border-b border-gray-200 shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors group"
          >
            <Code2 className="group-hover:rotate-180 transition-transform duration-500 text-blue-600" size={24} />
            <span className="text-lg tracking-tight">Nann Su Htet San</span>
          </motion.button>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-1"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors relative group"
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.button>
            ))}
            
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-gray-200 pt-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-600 hover:text-blue-600 transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-center"
            >
              Let's Talk
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
