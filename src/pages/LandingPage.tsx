import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialBlogs } from '../data/initialBlogs';
import { BlogCard } from '../components/BlogCard';

export function LandingPage() {
  const [blogs] = useLocalStorage('blogs', initialBlogs);
  const recentBlogs = blogs.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold mb-6">Modern Blog Platform</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Discover insightful articles about web development, programming, and technology.
            Share your knowledge with our growing community.
          </p>
          <Link
            to="/blogs"
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Explore All Blogs
          </Link>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Recent Posts</h2>
          <Link 
            to="/blogs"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentBlogs.map((blog) => (
            <BlogCard 
              key={blog.id} 
              blog={blog}
              onDelete={() => {}}
              hideActions={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 