
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
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-modern-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <span className="text-2xl font-bold text-modern-primary">Het Witte Bolletje</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-2">
              <Link
                to="/"
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive('/') 
                    ? 'text-white bg-modern-primary shadow-lg' 
                    : 'text-modern-text hover:text-modern-primary hover:bg-modern-secondary'
                }`}
              >
                Home
              </Link>
              <Link
                to="/assortiment"
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive('/assortiment') 
                    ? 'text-white bg-modern-primary shadow-lg' 
                    : 'text-modern-text hover:text-modern-primary hover:bg-modern-secondary'
                }`}
              >
                Assortiment
              </Link>
              <Link
                to="/contact"
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive('/contact') 
                    ? 'text-white bg-modern-primary shadow-lg' 
                    : 'text-modern-text hover:text-modern-primary hover:bg-modern-secondary'
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
              className="text-modern-text hover:text-modern-primary p-2 rounded-lg transition-colors"
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
          <div className="px-2 pt-2 pb-3 space-y-2 bg-modern-secondary rounded-2xl mt-2">
            <Link
              to="/"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'text-white bg-modern-primary shadow-lg' 
                  : 'text-modern-text hover:text-modern-primary hover:bg-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/assortiment"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive('/assortiment') 
                  ? 'text-white bg-modern-primary shadow-lg' 
                  : 'text-modern-text hover:text-modern-primary hover:bg-white'
              }`}
            >
              Assortiment
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                isActive('/contact') 
                  ? 'text-white bg-modern-primary shadow-lg' 
                  : 'text-modern-text hover:text-modern-primary hover:bg-white'
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
