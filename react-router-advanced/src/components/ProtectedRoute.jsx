import React from 'react';
import { Navigate } from 'react-router-dom';
import auth from '../auth';

function ProtectedRoute({ children }) {
  if (!auth.isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  // Render the protected content if authenticated
  return children;
}

export default ProtectedRoute;
