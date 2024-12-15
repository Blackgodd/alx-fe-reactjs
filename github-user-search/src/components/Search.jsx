import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
      <input 
        type="text" 
        placeholder="Enter GitHub username" 
        value={searchTerm} 
        onChange={handleInputChange} 
        className="border p-2 rounded-md mb-4"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
