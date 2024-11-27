import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Extract the dynamic `id` from the URL

  // Simulated blog post data
  const blogPosts = {
    1: { title: 'Learning React', content: 'React is a powerful library for building UIs.' },
    2: { title: 'Understanding React Router', content: 'React Router makes routing easy and declarative.' },
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <p>We couldn’t find the blog post you’re looking for.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;