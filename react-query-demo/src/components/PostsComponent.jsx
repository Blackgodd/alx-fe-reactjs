import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

function PostsComponent() {
  const { data, isLoading, error, refetch, isFetching } = useQuery(
    ['posts'], // Query key
    fetchPosts, // Fetching function
    {
      staleTime: 5000, // Cache data is fresh for 5 seconds
      cacheTime: 10000, // Cache persists for 10 seconds
    }
  );

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refresh Posts'}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
