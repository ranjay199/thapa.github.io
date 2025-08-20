import React, { useState } from 'react';
import ProductCard from '../components/common/ProductCard';
import BlogCard from '../components/common/BlogCard';
import { products, blogPosts } from '../data/mockData';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Filter results based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const hasResults = filteredProducts.length > 0 || filteredPosts.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Search Electronics & Reviews</h1>
            
            {/* Search Input */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search for products, brands, reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <span className="absolute left-4 top-3 text-gray-400 text-xl">🔍</span>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center space-x-4">
              {['all', 'products', 'articles'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="container mx-auto px-4 py-12">
        {!searchTerm ? (
          /* No Search Term */
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Start Your Search</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Enter a product name, brand, or keyword to find the best electronics and expert reviews.
            </p>
            
            {/* Popular Searches */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Popular Searches</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['iPhone', 'Samsung TV', 'MacBook', 'Air Conditioner', 'Gaming Laptop'].map(term => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow text-sm"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : !hasResults ? (
          /* No Results */
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😕</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">No Results Found</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              We couldn't find any products or articles matching "{searchTerm}". 
              Try different keywords or browse our categories.
            </p>
          </div>
        ) : (
          /* Results */
          <div>
            {/* Results Count */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Search Results for "{searchTerm}"
              </h2>
              <p className="text-gray-600 mt-1">
                Found {filteredProducts.length} products and {filteredPosts.length} articles
              </p>
            </div>

            {/* Products Section */}
            {(activeTab === 'all' || activeTab === 'products') && filteredProducts.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6">Products ({filteredProducts.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}

            {/* Articles Section */}
            {(activeTab === 'all' || activeTab === 'articles') && filteredPosts.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Articles & Reviews ({filteredPosts.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;