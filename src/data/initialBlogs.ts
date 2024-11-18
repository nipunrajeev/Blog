export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
  tags: string[];
}

export const initialBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Modern Web Development',
    description: 'Exploring the latest trends and best practices in web development for 2024.',
    content: `Web development has evolved significantly over the past decade. Modern web applications demand a perfect blend of performance, user experience, and maintainability.

In this post, we'll explore key concepts that define modern web development:

1. Component-Based Architecture
2. State Management Patterns
3. Performance Optimization
4. Responsive Design Principles
5. Accessibility Considerations

Stay tuned as we dive deep into each of these topics in future posts!`,
    date: '2024-03-15',
    author: 'Sarah Chen',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    tags: ['Web Development', 'Frontend', 'Best Practices']
  },
  {
    id: '2',
    title: 'Mastering React Hooks',
    description: 'A comprehensive guide to using React Hooks effectively in your applications.',
    content: `React Hooks have revolutionized how we write React components. They provide a more elegant way to handle state and side effects in functional components.

Let's explore some key advantages of using hooks:

• Simplified state management
• Better code organization
• Improved reusability
• Reduced boilerplate

Understanding these concepts is crucial for modern React development.`,
    date: '2024-03-14',
    author: 'Michael Rodriguez',
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'JavaScript', 'Programming']
  }
];