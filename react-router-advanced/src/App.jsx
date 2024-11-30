import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Home';
import PostsComponent from './components/PostsComponent';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import { AuthProvider } from './components/AuthContext';

// React Query client setup
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/blog/1">Blog Post 1</Link>
            </li>
            <li>
              <Link to="/blog/2">Blog Post 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsComponent />} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          {/* Dynamic route for blog posts */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
      <AuthProvider>
      {/* Rest of your App components */}
    </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;