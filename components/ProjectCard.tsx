import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
// import { ImageWithFallback } from './ImageWithFallback';
// import {Image} from 'next/image'

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
  // gradient: string;
  index: number;
  isInView: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  // featured,
  // gradient,
  index,
  isInView,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br ${gradient}"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />

        {/* Hover overlay with actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/50 flex items-center justify-center gap-4"
        >
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
            className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={24} className="text-gray-900" />
          </motion.a>
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -360 }}
            transition={{ duration: 0.3 }}
            className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={24} className="text-white" />
          </motion.a>
        </motion.div>

        {/* Gradient accent on top corner */}
        {/* <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-40 blur-2xl`}
        /> */}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-gray-900 mb-3 text-xl">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
