import React from 'react';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

function DataFetcher() {
  const { data, isLoading, error } = useQuery(['post'], fetchData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export default DataFetcher;
