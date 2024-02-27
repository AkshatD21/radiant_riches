import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex flex-col md:flex-row items-center">
      {/* Logo or Branding can be added here */}

      {/* Search Bar */}
      <div className="relative text-gray-600 focus-within:text-gray-400 ml-0 md:ml-32 mb-4 md:mb-0">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </span>
        <input
          type="search"
          className="py-2 pl-10 text-sm text-gray-800 bg-white rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center ml-0 md:ml-20">
        <a href="#" className="text-gray-300 hover:text-gray-400 ml-4 md:ml-8">
          Categories
        </a>
        <a href="#" className="text-gray-300 hover:text-gray-400 ml-4 md:ml-8">
          Website Builders
        </a>
        <a href="#" className="text-gray-300 hover:text-gray-400 ml-4 md:ml-8">
          Today's Deal
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
