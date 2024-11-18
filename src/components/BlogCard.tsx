import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowRight, Trash2, Edit } from 'lucide-react';
import { BlogPost } from '../data/initialBlogs';

interface BlogCardProps {
  blog: BlogPost;
  onDelete: () => void;
  hideActions?: boolean;
}

export function BlogCard({ blog, onDelete, hideActions = false }: BlogCardProps) {
  // Ensure tags is always an array
  const tags = blog.tags || [];

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img 
        src={blog.imageUrl} 
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(blog.date), 'MMM dd, yyyy')}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{blog.author}</span>
        </div>
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{blog.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Link 
            to={`/blog/${blog.id}`}
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
          >
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          
          {!hideActions && (
            <div className="flex gap-2">
              <Link
                to={`/blog/${blog.id}/edit`}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <Edit className="h-5 w-5" />
              </Link>
              <button
                onClick={onDelete}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}