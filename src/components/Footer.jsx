import React from "react";

function Footer({ className = "", ...props }) {
  return (
    <footer className={`bg-white dark:bg-gray-900 shadow px-4 py-4 mt-8 text-center text-gray-500 dark:text-gray-400 ${className}`} {...props}>
      <div>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:underline mx-2">GitHub</a>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="hover:underline mx-2">Vercel</a>
        <a href="https://netlify.com/" target="_blank" rel="noopener noreferrer" className="hover:underline mx-2">Netlify</a>
      </div>
      <div className="mt-2">
        &copy; {new Date().getFullYear()} React App. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer; 