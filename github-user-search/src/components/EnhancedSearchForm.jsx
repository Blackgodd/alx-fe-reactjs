import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchCriteria = {
      username,
      location,
      minRepos
    };
    onSearch(searchCriteria);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md grid gap-4 md:grid-cols-3">
      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="username">
          Username
        </label>
        <input 
          type="text" 
          id="username" 
          className="mt-1 p-2 w-full border rounded-md" 
          placeholder="Enter GitHub username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="location">
          Location
        </label>
        <input 
          type="text" 
          id="location" 
          className="mt-1 p-2 w-full border rounded-md" 
          placeholder="Enter location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="minRepos">
          Min Repos
        </label>
        <input 
          type="number" 
          id="minRepos" 
          className="mt-1 p-2 w-full border rounded-md" 
          placeholder="Minimum Repositories" 
          value={minRepos} 
          onChange={(e) => setMinRepos(e.target.value)} 
        />
      </div>

      <div className="md:col-span-3">
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
