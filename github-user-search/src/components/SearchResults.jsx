import React from 'react';

const SearchResults = ({ user, isLoading, error }) => {
  if (isLoading) return <p className="text-blue-500">Loading...</p>;
  if (error) return <p className="text-red-500">Looks like we can’t find the user</p>;

  return user ? (
    <div className="flex flex-col items-center mt-4">
      <img src={user.avatar_url} alt={user.name} className="w-24 h-24 rounded-full" />
      <h1 className="mt-4 text-xl font-bold">{user.name}</h1>
      <a 
        href={user.html_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 mt-2"
      >
        View GitHub Profile
      </a>
    </div>
  ) : null;
};

export default SearchResults;
