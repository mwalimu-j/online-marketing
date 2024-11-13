import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer content */}
        <div className="flex justify-between items-center">
          {/* Left side: Links */}
          <div className="space-x-6">
            <a
              href="/about"
              className="hover:text-blue-300 transition duration-300"
            >
              About Us
            </a>
            <a
              href="/services"
              className="hover:text-blue-300 transition duration-300"
            >
              Services
            </a>
            <a
              href="/contact"
              className="hover:text-blue-300 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Center: Logo or company name */}
          <div className="text-lg font-bold">
            <a href="/" className="hover:text-blue-300 transition duration-300">
              MyWebsite
            </a>
          </div>

          {/* Right side: Social media links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition duration-300"
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
                  d="M18 2c1.104 0 2 .896 2 2v16c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2V4c0-1.104.896-2 2-2h12zm-6 8v6h-2v-6H9V9h3V7c0-2.209 1.791-4 4-4h2v3h-2c-1.104 0-2 .896-2 2v2h4l-1 3h-3z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition duration-300"
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
                  d="M8 19s4-4 9-9-4-9-9-9-9 4-9 9 4 9 9 9zm0 0v4l4-2 4 2v-4m4-4l4-4m-4 0l-4-4"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition duration-300"
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
                  d="M12 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zM12 0C7.03 0 3 4.03 3 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom section: Copyright or additional info */}
        <div className="mt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
