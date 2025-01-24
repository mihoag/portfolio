import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Lightbulb } from 'lucide-react';
import { projects } from '../../data/Projects';

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

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative p-2 md:p-12 transition-colors duration-300">
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
        className="relative z-10 max-w-4xl mx-auto overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="p-6 md:p-10">
          <Link to="/project">
            <motion.button
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2 mb-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg font-medium">Back to Projects</span>
            </motion.button>
          </Link>

          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {project.title}
          </motion.h1>

          <motion.div
            variants={fadeIn}
            className="relative aspect-video mb-8 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </motion.div>

          <motion.p
            variants={fadeIn}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 leading-relaxed text-justify"
          >
            {project.description}
          </motion.p>

          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">Started: {project.startDate}</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">Team Size: {project.teamSize} developers</span>
            </div>
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">
                {project.linesOfCode.toLocaleString()}+ lines of code
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">{project.majorFeatures} major features</span>
            </div>
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Technologies Used
          </motion.h2>

          <motion.div variants={fadeIn} className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Key Features
          </motion.h2>

          <motion.ul variants={fadeIn} className="list-disc list-inside mb-8 text-gray-600 dark:text-gray-300">
            <li>Real-time inventory management</li>
            <li>Secure payment integration</li>
            <li>User authentication and authorization</li>
            <li>Responsive design for mobile and desktop</li>
            <li>Performance optimized for high traffic</li>
          </motion.ul>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Live Demo</span>
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating gradient orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
