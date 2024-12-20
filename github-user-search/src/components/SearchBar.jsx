import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
      setUsername(''); // clear the input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input 
        type="text" 
        placeholder="Enter GitHub username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        className="p-2 border rounded-l"
      />
      <button 
        type="submit" 
        className="p-2 bg-blue-500 text-white rounded-r">
        Search
      </button>
    </form>
  );
}

export default SearchBar;

