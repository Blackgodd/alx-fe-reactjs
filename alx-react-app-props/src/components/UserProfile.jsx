// src/components/UserProfile.jsx

import React, { useContext } from 'react'; // Import useContext from React
import UserContext from './UserContext';   // Import UserContext

function UserProfile() {
  // Use useContext to consume data from UserContext
  const user = useContext(UserContext);

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserProfile;
