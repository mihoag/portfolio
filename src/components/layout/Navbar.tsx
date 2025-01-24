import { Sun, Moon, Menu } from 'react-feather';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { menuItems } from '../../data/MenuItem';

interface NavbarProps {
  onThemeToggle: () => void;
  currentTheme: string;
}

export default function Navbar({ onThemeToggle, currentTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-[1100] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Hoang's Portfolio
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-gray-600 dark:hover:text-gray-300">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {currentTheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
