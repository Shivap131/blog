// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="card">
      <h2>{blog.title}</h2>
      <p>{blog.content.slice(0, 150)}...</p>
      <small>By {blog.author} — {new Date(blog.createdAt).toLocaleDateString()}</small>
      <br />
      <Link to={`/blog/${blog._id}`}>Read More</Link>
    </div>
  );
};

export default BlogCard;
