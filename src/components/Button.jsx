import React from "react";

const VARIANT_STYLES = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

function Button({ variant = "primary", children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-200 transform hover:scale-105 active:scale-95 ${VARIANT_STYLES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button; 