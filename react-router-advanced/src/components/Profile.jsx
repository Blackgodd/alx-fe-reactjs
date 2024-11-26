import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../auth';

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => {
      navigate('/'); // Redirect to home after logout
    });
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome to your profile!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
