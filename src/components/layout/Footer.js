import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">⚡</span>
              <span className="text-xl font-bold">TechReviews</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted source for the latest electronics reviews, comparisons, and buying guides. 
              We help you make informed decisions on your next tech purchase.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                📧 Newsletter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                🐦 Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                📺 YouTube
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/categories/mobile" className="text-gray-300 hover:text-white transition-colors">Mobile Phones</Link></li>
              <li><Link to="/categories/tv" className="text-gray-300 hover:text-white transition-colors">Smart TVs</Link></li>
              <li><Link to="/categories/laptop" className="text-gray-300 hover:text-white transition-colors">Laptops</Link></li>
              <li><Link to="/categories/ac" className="text-gray-300 hover:text-white transition-colors">Air Conditioners</Link></li>
              <li><Link to="/categories/fridge" className="text-gray-300 hover:text-white transition-colors">Refrigerators</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/top-picks" className="text-gray-300 hover:text-white transition-colors">Top Picks</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Latest Reviews</Link></li>
              <li><Link to="/search" className="text-gray-300 hover:text-white transition-colors">Search Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechReviews. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;