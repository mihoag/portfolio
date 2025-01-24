import { Outlet } from 'react-router-dom'; // Importing the Outlet component from react-router-dom // Importing the ToastContainer component from react-toastify
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import SocialSidebar from '../components/shared/SocialSidebar';
import Footer from '../components/layout/Footer';

/**
 * MainLayout component that serves as the main layout for the application.
 * It includes the Navbar, an Outlet for nested routes, a ToastContainer for notifications, and a Footer.
 */
const MainLayout: React.FC = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-pink-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Navbar onThemeToggle={toggleTheme} currentTheme={theme} />
      <main className="container mx-auto px-4 pt-20 relative">
        <Outlet />
        <SocialSidebar />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; // Export the MainLayout component as the default export.
