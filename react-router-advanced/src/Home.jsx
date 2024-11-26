import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to the React Query & React Router Demo</h1>
      <p>
        This is the home page of our application. Use the navigation menu to explore the app features.
      </p>
      <ul>
        <li>Go to the <strong>Posts</strong> page to see data fetched with React Query.</li>
        <li>Visit the <strong>Profile</strong> page to check nested routes.</li>
        <li>Test <strong>Dynamic Routing</strong> with a blog post at /blog/:id.</li>
      </ul>
    </div>
  );
}

export default Home;