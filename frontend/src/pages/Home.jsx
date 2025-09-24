// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';

// Use the API base URL from the .env file
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/blogs`)
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
      )}
    </div>
  );
};

export default Home;
