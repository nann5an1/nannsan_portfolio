'use client'

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Terminal, Sparkles } from 'lucide-react';
import { TypingAnimation } from '@/components/ui/typing-animation';
import Spline from '@splinetool/react-spline';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const roles = ['Developer', 'Designer', 'Creator', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (currentIndex > 0) {
              currentIndex--;
              setTypedText(fullText.slice(0, currentIndex));
            } else {
              clearInterval(deleteInterval);
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [roleIndex, roles]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-12">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
          </motion.div> */}
          <div>
            <div className='w-screen h-40'>
            <Spline
              scene="https://prod.spline.design/2SWENWvrng576y5j/scene.splinecode" 
            />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl mb-6 text-gray-900"
            >
              Hi, I'm{' '}
              <span className="gradient-text">
                Nann Su Htet San
              </span>
            </motion.h1>
          </div>
          

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-4xl mb-8 text-gray-700 h-20 flex items-center justify-center"
          >
            <span>I'm a </span>
            <span className="ml-3 text-blue-600 min-w-[300px] text-left">
             
              {/* <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-12 bg-blue-600 ml-1"
              /> */}
              <TypingAnimation> Software Developer</TypingAnimation>
            </span>
            
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12"
          >
            I craft digital experiences where beautiful design meets practical functionality.
            From concept through launch, I transform ambitious visions into real products.
          </motion.p>

          {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12"
            >
              I craft digital experiences that merge beautiful design with powerful functionality. 
              From concept to launch, I turn ambitious ideas into reality.
          </motion.p> */}
         

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0, 102, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center gap-2 shadow-lg group"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>

            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-full border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors shadow-sm"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/nann5an1', color: 'blue' },
              { icon: Linkedin, href: 'https://linkedin.com/in/nannsan-laura/', color: 'purple' },
              { icon: Mail, href: 'mailto:nannsuhtetsan@gmail.com', color: 'pink' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ duration: 0.2 }}
                className={`p-3 bg-white rounded-full border-2 border-gray-200 hover:border-${social.color}-600 hover:shadow-lg transition-all`}
              >
                <social.icon size={20} className="text-gray-700" />
              </motion.a>
            ))}
          </motion.div>
        </div>

    
      </div>
    </section>
  );
}
