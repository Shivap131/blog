// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="container">
    <Link to="/">Home</Link>
    <Link to="/create">Create</Link>
  </nav>
);

export default Navbar;
