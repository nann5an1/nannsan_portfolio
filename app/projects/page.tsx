'use client'
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Sparkles, ArrowRight, Github, Filter } from 'lucide-react';
import { ProjectCard } from '../../components/ProjectCard';
import { projects, type Project } from '../data/projects';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filter, setFilter] = useState<'all' | Project['category']>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

//   const categories = [
//     { value: 'all' as const, label: 'All Projects' },
//     { value: 'web' as const, label: 'Web Apps' },
//     { value: 'fullstack' as const, label: 'Full Stack' },
//     { value: 'tool' as const, label: 'Tools' },
//   ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >

          <h2 className="text-4xl md:text-6xl text-gray-900 mb-6">
            Projects That{' '}
            <span className="gradient-text">Make an Impact</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of projects where design meets functionality. Each one
            tells a story of problem-solving and innovation.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm">
            <Filter size={14} />
            <span>Filter:</span>
          </div>
          {categories.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.value)}
              className={`px-5 py-2 rounded-full transition-all ${
                filter === category.value
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div> */}

        {/* Projects Grid - Equal Size Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">
              Try selecting a different category
            </p>
          </motion.div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/nann5an1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all group"
          >
            <Github size={20} />
            Explore All Projects
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </motion.a>
        </motion.div>

       
      </div>
    </section>
  );
}
