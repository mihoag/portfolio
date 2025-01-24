'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2 },
};

export default function EducationPage() {
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
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.button
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full flex items-center gap-2 mb-16 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <GraduationCap className="w-5 h-5" />
          <span className="text-lg font-medium">Education</span>
        </motion.button>
        {/* Timeline Section */}
        <div className="relative">
          {/* Timeline Entry */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative pl-8 md:pl-0 md:grid md:grid-cols-[180px_1fr] md:gap-8"
          >
            {/* Date */}
            <div className="absolute md:relative left-0 flex items-center md:justify-end">
              <div className="hidden md:flex items-center text-gray-500 mr-8 mb-8 text-blue-800 dark:text-blue-200">
                <Calendar className="mr-2" /> <span> Sep 2021 - 2025</span>
              </div>
            </div>

            {/* Content */}
            <div className="pb-12">
              <div className="relative pl-8 md:pl-0">
                {/* Vertical Line */}
                <div className="absolute top-0 left-0 md:left-[-24px] bottom-0 w-[2px] bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400" />

                {/* Mobile Date */}
                <div className="md:hidden md:flex text-gray-500 mb-2 dark:text-blue-200">
                  {' '}
                  <Calendar /> <span> Sep 2021 - 2025</span>
                </div>

                {/* Education Details */}
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Bachelor of Software Engineering,
                    <br />
                    University of Science, VNU-HCM.
                  </h2>
                  <p className="text-gray-600 leading-relaxed dark:text-blue-200">
                    I am currently studying Bachelor of Software Engineering from University of Science, VNU-HCM
                    (HCMUS). The program has provided me with a well-rounded education, covering both theoretical
                    foundations and practical applications of computer science.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Timeline Entries can be added here following the same structure */}
        </div>
      </motion.div>
      {/* Floating gradient orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
