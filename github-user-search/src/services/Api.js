import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

export const fetchUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, {
      headers: {
        Authorization: `token ${API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('User not found.');
  }
};