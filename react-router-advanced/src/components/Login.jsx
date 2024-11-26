import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../auth';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(() => {
      navigate('/profile'); // Redirect to profile after login
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <p>You need to log in to access this page.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
