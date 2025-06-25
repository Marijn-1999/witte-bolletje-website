
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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="w-12 h-12 bg-gradient-to-br from-bakery-gold to-bakery-warm-brown rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">🥖</span>
            </div>
            <span className="text-2xl font-bold text-bakery-brown">Het Witte Bolletje</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-2">
              <Link
                to="/"
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive('/') 
                    ? 'text-white bg-bakery-brown shadow-lg' 
                    : 'text-gray-700 hover:text-bakery-brown hover:bg-bakery-light-cream'
                }`}
              >
                Home
              </Link>
              <Link
                to="/assortiment"
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive('/assortiment') 
                    ? 'text-white bg-bakery-brown shadow-lg' 
                    : 'text-gray-700 hover:text-bakery-brown hover:bg-bakery-light-cream'
                }`}
              >
                Assortiment
              </Link>
              <Link
                to="/contact"
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive('/contact') 
                    ? 'text-white bg-bakery-brown shadow-lg' 
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
              className="text-gray-700 hover:text-bakery-brown p-2 rounded-lg transition-colors"
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
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-2 bg-bakery-light-cream rounded-2xl mt-2">
            <Link
              to="/"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'text-white bg-bakery-brown shadow-lg' 
                  : 'text-gray-700 hover:text-bakery-brown hover:bg-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/assortiment"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive('/assortiment') 
                  ? 'text-white bg-bakery-brown shadow-lg' 
                  : 'text-gray-700 hover:text-bakery-brown hover:bg-white'
              }`}
            >
              Assortiment
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive('/contact') 
                  ? 'text-white bg-bakery-brown shadow-lg' 
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
