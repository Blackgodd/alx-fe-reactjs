import React from 'react';

function UserCard({ user }) {
  if (!user) return null;

  return (
    <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
      <img 
        src={user.avatar_url} 
        alt={`${user.login}'s avatar`} 
        className="w-24 h-24 rounded-full"
      />
      <h2 className="mt-2 text-xl font-bold">{user.name || 'No Name Provided'}</h2>
      <p className="text-gray-700">{user.bio || 'No bio available.'}</p>
      <div className="mt-2">
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 mt-2 block">
          View Profile
        </a>
      </div>
    </div>
  );
}

export default UserCard;

