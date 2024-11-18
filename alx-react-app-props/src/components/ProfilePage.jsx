// src/components/ProfilePage.jsx

import React from 'react';
import UserDetails from './UserDetails';

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <UserDetails /> {/* No need to pass userData as a prop */}
    </div>
  );
}

export default ProfilePage;
