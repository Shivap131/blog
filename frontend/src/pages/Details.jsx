// src/pages/Details.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Details = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = () => {
    if (confirm('Delete this blog?')) {
      axios.delete(`${API_BASE_URL}/api/blogs/${id}`)
        .then(() => navigate('/'))
        .catch(err => console.error(err));
    }
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><em>{new Date(blog.createdAt).toLocaleString()}</em></p>
      <button onClick={handleDelete} style={{ backgroundColor: '#dc3545', marginTop: '1rem' }}>
        Delete
      </button>
    </div>
  );
};

export default Details;
