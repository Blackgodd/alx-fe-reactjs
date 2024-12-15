import React, { useState } from 'react';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSearch = async (username) => {
    setIsLoading(true);
    setError(null);
    setUser(null);
    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-center text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <SearchResults user={user} isLoading={isLoading} error={error} />
    </div>
  );
  
};

export default App;