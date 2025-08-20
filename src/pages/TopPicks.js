import React from 'react';
import ProductCard from '../components/common/ProductCard';
import { products, categories } from '../data/mockData';

const TopPicks = () => {
  // Get top products by category
  const getTopProductsByCategory = (categoryId, limit = 5) => {
    return products
      .filter(p => p.category === categoryId)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🏆 Monthly Top Picks
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our experts have tested and reviewed hundreds of products. 
              Here are the best electronics in each category for January 2024.
            </p>
          </div>
        </div>
      </div>

      {/* Monthly Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-700">Products Tested</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-700">Testing Process</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-700">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks by Category */}
      {categories.map(category => {
        const topProducts = getTopProductsByCategory(category.id);
        if (topProducts.length === 0) return null;

        return (
          <section key={category.id} className="py-12">
            <div className="container mx-auto px-4">
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-4">{category.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Best {category.name}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Top {topProducts.length} products in this category
                  </p>
                </div>
              </div>

              {/* Winner Card */}
              {topProducts[0] && (
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🥇</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Editor's Choice Winner
                      </h3>
                      <p className="text-yellow-100">
                        {topProducts[0].name} - Outstanding performance across all categories
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                    <ProductCard product={topProducts[0]} />
                  </div>
                </div>
              )}

              {/* Runner-ups */}
              {topProducts.length > 1 && (
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-700">
                    Runner-ups & Other Great Options
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topProducts.slice(1).map((product, index) => (
                      <div key={product.id} className="relative">
                        <div className="absolute -top-2 -left-2 z-10">
                          <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-sm font-medium">
                            #{index + 2}
                          </span>
                        </div>
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparison Table */}
              <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 bg-gray-50 border-b">
                  <h3 className="text-xl font-semibold">Quick Comparison</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rating
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Best For
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {topProducts.map((product, index) => (
                        <tr key={product.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img className="h-10 w-10 rounded-lg object-cover" src={product.image} alt={product.name} />
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                <div className="text-sm text-gray-500">{product.brand}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">${product.price}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="text-yellow-400 mr-1">⭐</span>
                              <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">
                              {index === 0 ? 'Overall Best Choice' : 
                               index === 1 ? 'Best Value' : 
                               index === 2 ? 'Premium Option' : 'Budget Friendly'}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Methodology */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Testing Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-3">Rigorous Testing</h3>
                <p className="text-gray-300">
                  Each product undergoes extensive real-world testing across multiple scenarios and use cases.
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Data-Driven Analysis</h3>
                <p className="text-gray-300">
                  We analyze performance metrics, user reviews, and market data to provide objective rankings.
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold mb-3">Expert Panel</h3>
                <p className="text-gray-300">
                  Our team of tech experts brings years of experience in evaluating consumer electronics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopPicks;