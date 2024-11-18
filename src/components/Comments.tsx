import React, { useState } from 'react';
import { format } from 'date-fns';

interface Comment {
  id: string;
  content: string;
  author: string;
  date: string;
}

interface CommentsProps {
  blogId: string;
  comments: Comment[];
  onAddComment: (comment: Omit<Comment, 'id' | 'date'>) => void;
}

export function Comments({ blogId, comments, onAddComment }: CommentsProps) {
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && author.trim()) {
      onAddComment({
        content: newComment,
        author: author,
      });
      setNewComment('');
      setAuthor('');
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 dark:text-gray-200">Comments</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name"
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 border rounded dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold dark:text-gray-200">
                {comment.author}
              </span>
              <span className="text-sm text-gray-500">
                {format(new Date(comment.date), 'MMM dd, yyyy')}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}