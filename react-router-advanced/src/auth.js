import { useState } from 'react';

export function useAuth() {
  // Simulate authentication state (you can replace this with real logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true); // Simulate login
  const logout = () => setIsAuthenticated(false); // Simulate logout

  return {
    isAuthenticated,
    login,
    logout,
  };
}