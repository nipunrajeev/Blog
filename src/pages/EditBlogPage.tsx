import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EditBlogForm } from '../components/EditBlogForm';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialBlogs } from '../data/initialBlogs';

export function EditBlogPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useLocalStorage('blogs', initialBlogs);
  
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Blog post not found</h1>
        <button
          onClick={() => navigate('/blogs')}
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleSave = (updatedBlog: BlogPost) => {
    const updatedBlogs = blogs.map(b => 
      b.id === id ? { ...updatedBlog, id, date: blog.date, author: blog.author } : b
    );
    setBlogs(updatedBlogs);
    navigate(`/blog/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Edit Blog Post</h1>
      <EditBlogForm 
        blog={blog}
        onSave={handleSave}
        onCancel={() => navigate(`/blog/${id}`)}
      />
    </div>
  );
} 