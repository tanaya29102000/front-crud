import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   axios.get('https://crud-website-12.vercel.app/api/blog/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div className="container">
        <h2>My Posts</h2>
        <Link to="/create">
          <button>Create New Post</button>
        </Link>
      </div>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post._id} className="post-card">
            <Link to={`/posts/${post._id}`}>
              <h3>{post.title}</h3>
              <p className="post-content">{post.content.substring(0, 100)}...</p>
              <p><Link to={`/posts/${post._id}`}>
              </Link></p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;