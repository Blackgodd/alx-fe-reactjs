import axios from 'axios';

export const fetchUserData = async (criteria) => {
  const { username, location, minRepos } = criteria;

  // Construct the query string
  let query = '';
  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
  
  try {
    const response = await axios.get(url);
    return response.data.items; // Returns an array of user objects
  } catch (error) {
    throw new Error('Error fetching user data from GitHub API');
  }
};