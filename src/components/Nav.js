// src/components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ padding: '20px', textAlign: 'center', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' }}>About</Link>
      <Link to="/contact" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
};

export default Nav;
