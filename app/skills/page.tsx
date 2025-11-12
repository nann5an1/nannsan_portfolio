'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Terminal, Sparkles } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: 'Core Skills',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 85, icon: '⚛️' },
        { name: 'TypeScript', level: 70, icon: '📘' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'Motion/Animations', level: 85, icon: '✨' },
        { name: 'Node.js', level: 85, icon: '🟢' },
      ],
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-32 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            My{' '}
            <span className="gradient-text">
              Toolkit
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated collection of technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.gradient}`}
                >
                  <Sparkles size={24} className="text-white" />
                </div>
                <h3 className="text-gray-900 text-2xl">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(`${category.category}-${skill.name}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700 flex items-center gap-2">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          hoveredSkill === `${category.category}-${skill.name}`
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 1, scale: 1 }
                        }
                        className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                          ease: 'easeOut',
                        }}
                        className={`h-full rounded-full relative bg-gradient-to-r ${category.gradient}`}
                        style={{
                          boxShadow:
                            hoveredSkill === `${category.category}-${skill.name}`
                              ? '0 0 10px rgba(99, 102, 241, 0.5)'
                              : 'none',
                        }}
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
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
