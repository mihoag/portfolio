import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LightbulbIcon } from 'lucide-react';
import { skillCategories } from '../../data/Skills';

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

export default function SkillsPage() {
  const [mounted, setMounted] = useState(false);

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
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full flex items-center gap-2 mb-16 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <LightbulbIcon className="w-5 h-5" />
          <span className="text-lg font-medium">My Skills</span>
        </motion.button>

        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          My Technical and Soft Skills.
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-20 leading-relaxed max-w-4xl text-justify"
        >
          As a passionate Full Stack Developer, I've honed a diverse set of skills that enable me to create seamless,
          efficient, and visually stunning web applications. From frontend frameworks to backend technologies, I'm
          equipped to handle every aspect of modern web development.
        </motion.p>

        <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeIn}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-semibold dark:text-white">{category.title}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating gradient orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
