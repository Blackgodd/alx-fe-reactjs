import React from 'react';

const SearchResults = ({ users, isLoading, error }) => {
  if (isLoading) return <p className="text-blue-500">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
      {users.map(user => (
        <div key={user.id} className="bg-white p-4 rounded-lg shadow-md">
          <img 
            src={user.avatar_url} 
            alt={`${user.login}'s avatar`} 
            className="w-24 h-24 rounded-full mx-auto" 
          />
          <h2 className="text-lg font-semibold text-center mt-2">{user.login}</h2>
          <p className="text-center mt-1">
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500"
            >
              View Profile
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
