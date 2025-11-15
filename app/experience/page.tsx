'use client'
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      company: 'Personal Development',
      role: 'Full-Stack Developer',
      period: '2024 - Present',
      location: 'Self-Directed',
      description: 'Building full-stack applications to leverage my proficiency in modern web technologies.',
      highlights: [
        'Developed several personal projects using React, Node.js, and MySQL',
        'Implemented responsive design, clean architecture, and reusable components',
        'Gained hands-on experience with deployment using modern hosting platforms',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
    company: 'Academic Projects',
    role: 'Project Developer',
    period: '2024 - 2025',
    location: 'SUTD (Singapore)',
    description: 'Worked on multiple collaborative software projects during academic coursework, focusing on practical development and team-based problem solving.',
    highlights: [
      'Contributed to group projects involving backend APIs, frontend interfaces, and database design',
      'Improved code structure, debugging skills, and development workflow',
      'Strengthened understanding of data structures, algorithms, and system design basics',
    ],
    gradient: 'from-orange-500 to-red-500',
    },
      {
      company: 'Thate Pan Hub',
      role: 'Technical Educator',
      period: '2021 - 2022',
      location: 'Remote (Yangon)',
      description: 'Guided youth in developing programming skills while supporting team coordination and contributing to problem-solving initiatives.',
      highlights: [
        'Mentored students in programming fundamentals and digital literacy',
        'Encouraged effective communication and teamwork within the learning environment',
        'Contributed problem-solving ideas during the Ideation Challenge 2022',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 rounded-full mb-6 shadow-sm"
          >
            <Briefcase className="text-blue-600" size={16} />
            <span className="text-gray-700">Experience & Learning</span>
          </motion.div> */}
          
          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            My Development{' '}
            <span className="gradient-text">
              Journey
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Building skills through hands-on projects, teaching others, and continuous learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-200 hover:shadow-2xl transition-all relative overflow-hidden group"
                    >
                      {/* Gradient background on hover */}
                      <motion.div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${exp.gradient}`}
                      />

                      <div className="relative z-10">
                        <div className={`flex items-start gap-3 mb-4 ${
                          index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                        }`}>
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${exp.gradient}`}
                          >
                            <Briefcase size={24} className="text-white" />
                          </div>
                          <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                            <h3 className="text-gray-900 text-2xl mb-1">{exp.role}</h3>
                            <p className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <div className={`flex flex-wrap gap-4 mb-4 ${
                          index % 2 === 0 ? 'lg:justify-end' : ''
                        }`}>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6">{exp.description}</p>

                        <div className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + i * 0.1 + 0.5 }}
                              className={`flex items-start gap-3 ${
                                index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''
                              }`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${exp.gradient}`}
                              />
                              <span className="text-gray-600">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      whileHover={{ scale: 1.5 }}
                      className={`w-6 h-6 rounded-full border-4 border-white relative bg-gradient-to-br ${exp.gradient} shadow-lg`}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.gradient}`}
                      />
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
