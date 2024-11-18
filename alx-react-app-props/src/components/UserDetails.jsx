// src/components/UserDetails.jsx

import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  // Use useContext to access user data from UserContext
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserDetails;
