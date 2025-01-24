import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Github, ChevronDown } from 'lucide-react';
import { projects } from '../../data/Projects';
import { Link } from 'react-router-dom';
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative p-6 md:p-12 transition-colors duration-300">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.1,
            animation: 'drift 20s linear infinite',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.button
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full flex items-center gap-2 mb-10 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Code className="w-5 h-5" />
          <span className="text-lg font-medium">Projects</span>
        </motion.button>

        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          My Projects
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-4xl"
        >
          Here are some of the projects I've worked on. Each one has taught me something new and helped me grow as a
          developer.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl z-[50]"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative">
              <img src={project.image || '/placeholder.svg'} alt={project.title} className="w-full h-48 object-cover" />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                animate={{ opacity: hoveredProject === index ? 1 : 0 }}
              >
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 dark:bg-gray-200 dark:text-gray-800 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors duration-300"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 dark:bg-gray-200 dark:text-gray-800 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-blue-900/50 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Link to={`/project/${project.id}`}>
              <motion.button
                className="w-full text-gray-500 dark:text-blue-200 text-sm flex items-center justify-center gap-1  mb-2 focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See More
                <ChevronDown className={`w-5 h-5 transition-transform duration-300`} />
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      {/* Floating gradient orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
