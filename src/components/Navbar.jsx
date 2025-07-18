import React from "react";
import { Link } from "react-router-dom";

function Navbar({ className = "", ...props }) {
  return (
    <nav className={`w-full flex flex-col items-center justify-center bg-transparent shadow-none mb-4 ${className}`} {...props}>
      <div className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg py-4 select-none">
        React App
      </div>
      <div className="space-x-4 mb-2">
        <Link to="/" className="text-gray-700 dark:text-gray-200 hover:underline font-semibold">Home</Link>
        <Link to="/posts" className="text-gray-700 dark:text-gray-200 hover:underline font-semibold">Posts</Link>
        <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:underline font-semibold">About</Link>
      </div>
    </nav>
  );
}

export default Navbar; 