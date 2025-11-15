export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
  // gradient: string;
  // category?: 'web' | 'mobile' | 'fullstack' | 'tool';
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sports Events Collaborator Platform',
    description:
      'A modern platform for sports enthusiasts to connect with like-minded individuals.',
    image:
      'https://images.unsplash.com/photo-1639493115941-a70fcef4f715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwY29sb3JmdWx8ZW58MXx8fHwxNzYyODk1NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
    title: '2D Game Engine',
    description:
      'A 2D Game, named Solong, that allows the player to control a character and collect items.',
    image:
      '/solong.png',
    tags: ['React', 'WebSocket', 'Redis', 'Express'],
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
    // gradient: 'from-orange-500 to-red-500',
    // category: 'web',
  },
  // {
  //   id: '4',
  //   title: 'Motion Design System',
  //   description:
  //     'A comprehensive component library with beautiful animations and accessibility built-in.',
  //   image:
  //     'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NjI4NjM1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //   tags: ['React', 'Motion', 'Storybook', 'Tailwind'],
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  //   featured: false,
  //   // gradient: 'from-blue-500 to-cyan-500',
  //   // category: 'tool',
  // },
];

// Helper function to get featured projects
// export const getFeaturedProjects = () => projects.filter((p) => p.featured);

// Helper function to get projects by category
// export const getProjectsByCategory = (category: Project['category']) =>
//   projects.filter((p) => p.category === category);
