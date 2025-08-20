import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-bold text-primary-600">TechReviews</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-primary-600 transition-colors">
              Categories
            </Link>
            <Link to="/top-picks" className="text-gray-700 hover:text-primary-600 transition-colors">
              Top Picks
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary-600 transition-colors">
              Blog
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-primary-600 transition-colors">
              Search
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Home
              </Link>
              <Link to="/categories" className="py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Categories
              </Link>
              <Link to="/top-picks" className="py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Top Picks
              </Link>
              <Link to="/blog" className="py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Blog
              </Link>
              <Link to="/search" className="py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Search
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;