'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Zap, Users2, Rocket, Heart } from 'lucide-react';
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
// import {Image} from 'next/image'

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const traits = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Write code that humans love to read',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users2,
      title: 'Team Player',
      description: 'Great products are built together',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Building for people, not features',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  const logos = [
    {
        icon: "React",
        path: "/react.svg",
    },
     {
        icon: "Next",
        path: "/next.svg",
    },
    {
        icon: "Node.js",
        path: "/node.svg",
    },
    {
        icon: "MySQL",
        path: "/mysql.svg",
    },
    {
        icon: "Express",
        path: "express.svg",
    },
    {
        icon: "HTML",
        path: "/html.svg",
    },
     {
        icon: "SASS",
        path: "/sass.svg",
    },
    {
        icon: "Javascript.js",
        path: "/javascript.svg",
    },
    {
        icon: "C Language",
        path: "/C.svg",
    },
    {
        icon: "C++ Language",
        path: "/cpp.svg",
    },
    {
      icon: "Tailwind CSS",
      path: "/tailwind.svg",
    }

  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            The Story Behind{' '}
            <span className="gradient-text">
              The Code
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative ">
              <motion.div
                className=" absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 rounded-full"
                initial={{ height: 0 }}
                animate={isInView ? { height: '100%' } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <div className="pl-8 space-y-6 col-start-1 col-end-3">
                <p className="text-gray-700 text-lg leading-relaxed font-serif">
                  For me, coding didn’t start with a “lightbulb moment.” 
                  It started with building things — small projects at first, then bigger ones that demanded cleaner logic, 
                  better structure, and real problem-solving.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-serif">
                  Every project I’ve worked on, whether a full-stack web app, a mobile interface, 
                  or a backend feature under tight constraints, taught me the same lesson: good software is clear, reliable, and built for real people.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-serif">
                  Today, I focus on creating products that feel intuitive and are reliable to build on. 
                  Clean architecture, maintainable code, and thoughtful design guide every decision — whether I’m refining a flow, optimizing performance, 
                  or designing a UI that improves someone’s experience.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100 rounded-3xl p-8"
            >
              <h3 className="text-gray-900 text-xl mb-4">Quick Facts</h3>
              <div className="space-y-3">
                {[
                  { label: 'Based in', value: 'Singapore' },
                  { label: 'Experience', value: 'Personal Projects' },
                  { label: 'Focus', value: 'Full-Stack Development' },
                  { label: 'Superpower', value: 'Turning coffee into code ☕' },
                ].map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600 font-semibold italic">{fact.label}</span>
                    <span className="text-indigo-800">{fact.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="align-center justify-center flex flex-row bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-xl transition-all relative overflow-hidden group"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${trait.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
                
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${trait.gradient}`}
                  >
                    <trait.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-gray-900 mb-2 text-[1.2rem]">{trait.title}</h4>
                  <p className="text-gray-600 text-md">{trait.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative overflow-hidden"
        >
          <h3 className="text-gray-900 text-2xl text-center mb-8 font-semibold">Languages & Frameworks I Build In</h3>
          <div className="flex gap-4 animate-scroll pt-12">
            {logos.map((tech, index) => (
              <div
                key={index}
                className="px-12 py-8 w-full h-12 flex justify-center items-center gap-8 bg-white border-2 border-gray-200 rounded-full text-lg font-semibold text-gray-700 whitespace-nowrap hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <img src={tech.path}/>
                {tech.icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
