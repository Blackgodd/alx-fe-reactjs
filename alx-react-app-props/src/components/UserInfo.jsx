// src/components/UserInfo.jsx

import React from 'react';

function UserInfo() {
  return (
    <div>
      <UserDetails /> {/* No need to pass userData as a prop */}
    </div>
  );
}

export default UserInfo;
