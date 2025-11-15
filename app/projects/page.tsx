'use client'
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Sparkles, ArrowRight, Github, Filter } from 'lucide-react';
import { ProjectCard } from '../../components/ProjectCard';
// import { projects, type Project } from '../data/projects';

const projects =[
  {
      id: '1',
      title: 'Sports Events Collaborator Platform',
      description:
        'A modern platform for sports enthusiasts to connect with like-minded individuals.',
      image:
        '/sukhuma.jpeg',
      tags: ['React', 'Node.js', 'Express', 'MySQL', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/nann5an1/joiin',
      demo: 'https://github.com/nann5an1/joiin/',
      featured: true,
      // gradient: 'from-blue-500 to-cyan-500',
      // category: 'web', 'fullstack',
    },
    {
      id: '2',
      title: 'AI-Based Skincare Generator',
      description:
        'Personalized skincare routine generator using cutting-edge AI technology.',
      image:
        '/sukhuma.jpeg',
      tags: ['Next.js', 'ReactNative','Tailwind CSS', 'Express', 'Groq', 'TypeScript', 'Llama 3.3'],
      github: 'https://github.com/nann5an1/sukhuma',
      demo: 'https://github.com/nann5an1/sukhuma',
      featured: true,
      // gradient: 'from-purple-500 to-pink-500',
      // category: 'mobile',
    },
    {
      id: '3',
      title: 'SoLong 2D Game',
      description:
        'A dynamic 2D game with character movement and collision detection.',
      image:
        '/solong.png',
      tags: ['C Language', 'minilibx library', 'Makefile', 'Figma'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
      // gradient: 'from-orange-500 to-red-500',
      // category: 'web',
    },
    {
      id: '4',
      title: 'minishell',
      description:
        'A simple shell mimicking the properties and functionality of the bash shell',
      image:
        'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjI4NjM1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Motion', 'Storybook', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
      // gradient: 'from-blue-500 to-cyan-500',
      // category: 'tool',
    },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  // const [filter, setFilter] = useState<'all' | Project['category']>('all');

  // const filteredProjects = filter === 'all' 
  //   ? projects 
  //   : projects.filter(p => p.category === filter);

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
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              demo={project.demo}
              featured={project.featured}
              // gradient={project.gradient}
              index={index}
              isInView={isInView}
            />
          ))}
           
          {/* ))} */}
        </div>

        {/* Empty State */}
        {/* {filteredProjects.length === 0 && (
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
        )} */}

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
