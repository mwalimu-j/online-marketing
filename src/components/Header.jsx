import React, { useState } from 'react';

const Header = () => {
  // State for toggling mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu when the hamburger icon is clicked
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  // Close the menu when any link is clicked
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <a href="/">MyWebsite</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={handleMenuToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`lg:flex space-x-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a
            href="/"
            className="text-white hover:text-blue-300 transition duration-300"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:text-blue-300 transition duration-300"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="/services"
            className="text-white hover:text-blue-300 transition duration-300"
            onClick={handleLinkClick}
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-white hover:text-blue-300 transition duration-300"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Menu (when toggled open) */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-700 py-4 px-8 space-y-4`}
      >
        <a
          href="/"
          className="text-white hover:text-blue-300 transition duration-300"
          onClick={handleLinkClick}
        >
          Home
        </a>
        <a
          href="/about"
          className="text-white hover:text-blue-300 transition duration-300"
          onClick={handleLinkClick}
        >
          About
        </a>
        <a
          href="/services"
          className="text-white hover:text-blue-300 transition duration-300"
          onClick={handleLinkClick}
        >
          Services
        </a>
        <a
          href="/contact"
          className="text-white hover:text-blue-300 transition duration-300"
          onClick={handleLinkClick}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
