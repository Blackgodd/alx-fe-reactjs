import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Use the authentication hook

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the protected content if authenticated
  return children;
}

export default ProtectedRoute;
