import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        {post.trending && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            🔥 Trending
          </span>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{post.category.toUpperCase()}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          <Link to={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              {post.author.charAt(0)}
            </div>
            <span className="text-sm text-gray-700">{post.author}</span>
          </div>
          
          <div className="flex space-x-1">
            {post.tags.slice(0, 2).map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <Link 
          to={`/blog/${post.slug}`}
          className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;