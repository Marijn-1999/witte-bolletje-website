
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-bakery-gold rounded-full flex items-center justify-center">
              <span className="text-bakery-brown font-bold text-lg">🥖</span>
            </div>
            <span className="text-xl font-bold text-bakery-brown">Het Witte Bolletje</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-bakery-brown bg-bakery-cream' 
                    : 'text-gray-700 hover:text-bakery-brown hover:bg-bakery-light-cream'
                }`}
              >
                Home
              </Link>
              <Link
                to="/assortiment"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/assortiment') 
                    ? 'text-bakery-brown bg-bakery-cream' 
                    : 'text-gray-700 hover:text-bakery-brown hover:bg-bakery-light-cream'
                }`}
              >
                Assortiment
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/contact') 
                    ? 'text-bakery-brown bg-bakery-cream' 
                    : 'text-gray-700 hover:text-bakery-brown hover:bg-bakery-light-cream'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-bakery-brown p-2 rounded-md"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-bakery-light-cream rounded-md mt-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-bakery-brown bg-bakery-cream' 
                  : 'text-gray-700 hover:text-bakery-brown hover:bg-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/assortiment"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/assortiment') 
                  ? 'text-bakery-brown bg-bakery-cream' 
                  : 'text-gray-700 hover:text-bakery-brown hover:bg-white'
              }`}
            >
              Assortiment
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-bakery-brown bg-bakery-cream' 
                  : 'text-gray-700 hover:text-bakery-brown hover:bg-white'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
