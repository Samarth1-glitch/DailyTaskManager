import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Add Task', path: '/add' },
    { name: 'Tasks', path: '/tasks' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-600 dark:text-yellow-400">TaskMaster</h1>
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium px-3 py-1 rounded transition-colors hover:bg-indigo-100 dark:hover:bg-gray-700 ${
                location.pathname === item.path
                  ? 'bg-indigo-200 dark:bg-gray-700 text-indigo-800 dark:text-yellow-300'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="ml-4 px-3 py-1 rounded-md bg-indigo-500 dark:bg-yellow-500 text-white dark:text-black transition-colors"
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
