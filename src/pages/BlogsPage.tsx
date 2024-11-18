import React, { useState, useMemo } from 'react';
import { BlogCard } from '../components/BlogCard';
import { NewBlogForm } from '../components/NewBlogForm';
import { SearchBar } from '../components/SearchBar';
import { DateFilter } from '../components/DateFilter';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialBlogs, BlogPost } from '../data/initialBlogs';
import { Pagination } from '../components/Pagination';

const ITEMS_PER_PAGE = 6;

export function BlogsPage() {
  const [blogs, setBlogs] = useLocalStorage('blogs', initialBlogs);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleNewBlog = (newBlog: BlogPost) => {
    setBlogs([newBlog, ...blogs]);
  };

  const handleDeleteBlog = (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDateRange = (!startDate || blog.date >= startDate) &&
        (!endDate || blog.date <= endDate);
      
      const matchesTag = !selectedTag || (blog.tags || []).includes(selectedTag);

      return matchesSearch && matchesDateRange && matchesTag;
    });
  }, [blogs, searchQuery, startDate, endDate, selectedTag]);

  const pageCount = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(offset, offset + ITEMS_PER_PAGE);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogs.forEach(blog => {
      if (blog.tags) {
        blog.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags);
  }, [blogs]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Modern Blog Platform
      </h1>
      
      <NewBlogForm onSubmit={handleNewBlog} />

      <div className="mb-8">
        <SearchBar onSearch={setSearchQuery} />
        <DateFilter
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
        />
        
        <div className="flex flex-wrap gap-2 mb-6">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTag === tag
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentBlogs.map((blog) => (
          <BlogCard 
            key={blog.id} 
            blog={blog}
            onDelete={() => handleDeleteBlog(blog.id)}
          />
        ))}
      </div>

      {pageCount > 1 && (
        <Pagination
          pageCount={pageCount}
          onPageChange={({ selected }) => setCurrentPage(selected)}
        />
      )}
    </div>
  );
}