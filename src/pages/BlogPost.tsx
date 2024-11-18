import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialBlogs } from '../data/initialBlogs';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blogs] = useLocalStorage('blogs', initialBlogs);
  
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link 
          to="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        to="/"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>

      <img 
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <div className="prose lg:prose-xl max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{blog.title}</h1>
        
        <div className="flex items-center gap-4 text-gray-500 mb-8">
          <span>{format(new Date(blog.date), 'MMMM dd, yyyy')}</span>
          <span>•</span>
          <span>{blog.author}</span>
        </div>

        <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
          {blog.content}
        </div>
      </div>
    </article>
  );
}