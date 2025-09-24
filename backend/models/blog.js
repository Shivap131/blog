// models/Blog.js
const mongoose = require('mongoose');

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
    required: true
  }
});

// Create a model for the schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
