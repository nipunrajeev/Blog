import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LandingPage } from './pages/LandingPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogPost } from './pages/BlogPost';
import { EditBlogPage } from './pages/EditBlogPage';
import { ThemeToggle } from './components/ThemeToggle';
import { AuthProvider } from './contexts/AuthContext';
import { LoginForm } from './components/LoginForm';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors text-gray-900 dark:text-gray-100">
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/blog/:id/edit" element={<EditBlogPage />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;