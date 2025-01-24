'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const slideIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
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

      {/* Floating gradient orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0.6,
          }}
          className="w-32 h-32 rounded-full overflow-hidden mb-8 ring-4 ring-white dark:ring-gray-800 shadow-xl relative"
        >
          <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 dark:to-black/30" />
        </motion.div>

        <motion.h1
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="text-4xl  md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          Le Minh Hoang
        </motion.h1>

        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <motion.p
            variants={slideIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            Hello everyone! I'm{' '}
            <span className="bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full font-medium text-yellow-900 dark:text-yellow-200">
              Minh Hoang
            </span>
            , a passionate full-stack developer with strong technical expertise in building web applications.
          </motion.p>

          <motion.p
            variants={slideIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
            className="text-gray-600 dark:text-gray-400"
          >
            You can find me on{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-300"
            >
              LinkedIn
            </a>{' '}
            and{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full text-green-900 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-300"
            >
              GitHub
            </a>{' '}
            — check out my{' '}
            <Link
              to="/about"
              className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300"
            >
              About
            </Link>{' '}
            for more info.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex gap-4"
        >
          <Link to="/project">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Projects
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
