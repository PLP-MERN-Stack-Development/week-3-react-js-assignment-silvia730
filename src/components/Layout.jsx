import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children, className = "" }) {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-100 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-500 ${className}`}>
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center justify-center px-2 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout; 