import { useState, useEffect } from 'react';
import { BlogPost } from '../data/initialBlogs';

export function useLocalStorage(key: string, initialValue: BlogPost[]) {
  // Get initial value from localStorage or use provided initialValue
  const [value, setValue] = useState<BlogPost[]>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // Update localStorage when value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}