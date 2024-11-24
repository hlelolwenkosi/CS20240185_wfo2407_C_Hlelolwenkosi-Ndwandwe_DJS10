import { useState, useEffect } from 'react';

function useFetchPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Data fetching failed.');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Data fetching failed.');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { posts, error, loading };
}

export default useFetchPosts;
