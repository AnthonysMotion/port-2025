import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
        </Link>
        <div className="links">
          <Link to="/about">About</Link>
          <span className="nav-divider">/</span>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="social-icons">
          {/* Add your social media icons here */}
          <a href="https://x.com/anthonysmotion" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/anthonysmotion/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/anthonythach/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
