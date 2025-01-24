import { useState, useEffect } from 'react';
import {
  Languages,
  Flag,
  UserIcon as GenderMale,
  Heart,
  User,
  Code,
  BookOpen,
  Music,
  Monitor,
  Film,
  Bike,
  Gamepad2,
} from 'lucide-react';
import { motion } from 'framer-motion';

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

export default function AboutMe() {
  const [mounted, setMounted] = useState(false);

  const hobbies = [
    { name: 'Coding', icon: Code },
    { name: 'Researching', icon: BookOpen },
    { name: 'Listening to Music', icon: Music },
    { name: 'Reading Tech Blogs', icon: Monitor },
    { name: 'Watching Movies', icon: Film },
    { name: 'Riding Bicycle', icon: Bike },
    { name: 'Playing Video Games', icon: Gamepad2 },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative p-6 md:p-6 transition-colors duration-300">
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
          <User className="w-5 h-5" />
          <span className="text-lg font-medium">About me</span>
        </motion.button>

        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          Software Engineer And Web <br />
          Developer, Based In Vietnam.
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-20 leading-relaxed max-w-4xl text-justify"
        >
          I am a passionate full-stack developer with expertise in building scalable, user-friendly web applications and
          designing system architectures. My technical skills include Java, JavaScript, Spring Boot, MySQL ..., which
          enable me to create intuitive and efficient solutions tailored to user needs. Currently, I am exploring AI and
          System Design to integrate innovative features into my projects. I value continuous learning, teamwork, and
          adaptability, striving to contribute to impactful projects while driving success for my team.
        </motion.p>

        <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Languages, title: 'Language', value: 'Vietnamese, English' },
            { icon: Flag, title: 'Nationality', value: 'Vietnam' },
            { icon: GenderMale, title: 'Gender', value: 'Male' },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeIn}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2 dark:text-white">{item.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn}>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
              <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-semibold dark:text-white">Hobbies</h2>
          </div>

          <motion.div variants={staggerChildren} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.name}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <hobby.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">{hobby.name}</span>
              </motion.div>
            ))}
          </motion.div>
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
