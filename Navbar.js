import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-2xl font-bold transition-transform duration-500 hover:scale-110"
        >
          MyLogo
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`md:flex ${isOpen ? "block" : "hidden"} md:block`}>
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 text-white mr-6 transition-colors duration-300 hover:text-yellow-300"
          >
            Home
          </Link>
          <Link
            to="about"
            className="block mt-4 md:inline-block md:mt-0 text-white mr-6 transition-colors duration-300 hover:text-yellow-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block mt-4 md:inline-block md:mt-0 text-white mr-6 transition-colors duration-300 hover:text-yellow-300"
          >
            Services
          </Link>
          <Link
            to="/login"
            className="block mt-4 md:inline-block md:mt-0 text-white transition-colors duration-300 hover:text-yellow-300"
          >
           Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
