import React from 'react';

const Button = ({ text, onClick, type = "button", variant = "primary", size = "md", icon }) => {
  // Tailwind classes for different button variants and sizes
  const buttonVariants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const buttonSizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-full transition-all duration-300 ${buttonVariants[variant]} ${buttonSizes[size]} flex items-center justify-center`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
