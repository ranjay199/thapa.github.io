import React from 'react';
import BlogCard from '../components/common/BlogCard';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  const trendingPosts = blogPosts.filter(p => p.trending);
  const allPosts = blogPosts;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tech Blog & Reviews</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth reviews, comparisons, buying guides, and the latest tech news 
              to help you make informed purchasing decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Trending Posts */}
      {trendingPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="mr-2">🔥</span>
              Trending Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
          <p className="text-xl mb-8 text-gray-300">
            Subscribe to get the latest reviews and tech insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900"
            />
            <button className="bg-primary-600 px-6 py-3 rounded-r-lg hover:bg-primary-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;