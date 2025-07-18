import React from "react";

function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow rounded-lg p-6 transition-all duration-500 ease-in-out animate-fade-in ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Card; 