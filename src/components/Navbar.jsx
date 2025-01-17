import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="p-4 shadow-md bg-gray-100 dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Theme Switcher</h1>
        <div className="flex space-x-4">
          {/* Using Link components for navigation */}
          <Link
            to="/"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
          >
            Contact
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded-md"
        >
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;