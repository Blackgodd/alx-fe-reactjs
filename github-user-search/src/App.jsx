import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchUser } from './services/Api';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    try {
      const userData = await fetchUser(username);
      setUser(userData);
      setError(''); // clear error on success
    } catch (error) {
      setError(error.message);
      setUser(null);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-bold mb-6">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
