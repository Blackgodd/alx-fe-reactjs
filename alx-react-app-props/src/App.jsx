
import React from 'react';
import UserContext from './UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
  <UserContext.Provider value={userData}>
      <div className="App">
        <ProfilePage /> {/* Wrapped in UserContext.Provider */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
