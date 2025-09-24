// src/pages/Create.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Access the base URL from .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${API_BASE_URL}/api/blogs`, {
      title,
      content,
      author
    })
    .then(() => navigate('/'))
    .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Create New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
        />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Create;
