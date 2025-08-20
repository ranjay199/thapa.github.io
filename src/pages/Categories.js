import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import { products, categories } from '../data/mockData';

const Categories = () => {
  const { categoryId } = useParams();
  const [sortBy, setSortBy] = useState('rating');
  const [priceRange, setPriceRange] = useState('all');

  // Filter products by category if categoryId is provided
  let filteredProducts = categoryId 
    ? products.filter(p => p.category === categoryId)
    : products;

  // Apply price filter
  if (priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    filteredProducts = filteredProducts.filter(p => 
      max ? (p.price >= min && p.price <= max) : p.price >= min
    );
  }

  // Apply sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'reviews': return b.reviews - a.reviews;
      default: return 0;
    }
  });

  const currentCategory = categoryId 
    ? categories.find(c => c.id === categoryId)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-4 mb-6">
            {currentCategory && (
              <>
                <span className="text-4xl">{currentCategory.icon}</span>
                <h1 className="text-3xl font-bold">{currentCategory.name}</h1>
              </>
            )}
            {!currentCategory && (
              <h1 className="text-3xl font-bold">All Categories</h1>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Price Range:</label>
              <select 
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="all">All Prices</option>
                <option value="0-500">Under $500</option>
                <option value="500-1000">$500 - $1000</option>
                <option value="1000-2000">$1000 - $2000</option>
                <option value="2000">Above $2000</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid (if no specific category) */}
      {!categoryId && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Browse Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
              {categories.map(category => (
                <a 
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {products.filter(p => p.category === category.id).length} products
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {currentCategory ? `${currentCategory.name} Products` : 'All Products'}
              <span className="text-gray-500 text-lg ml-2">
                ({filteredProducts.length} found)
              </span>
            </h2>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters or browse other categories</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Categories;