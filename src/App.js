import React from 'react';
import useFetchPosts from './hooks/useFetchPosts';

function App() {
  const { posts, error, loading } = useFetchPosts();

  return (
    <div>
      <h1>Posts</h1>
      {loading ? (
        <p>Loading</p>
      ) : error ? (
        <p style={{ color: 'black' }}>{error}</p>
      ) : (
        posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
