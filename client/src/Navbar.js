import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.svg" alt="SkillSnap" className="navbar-logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <button className="logout-button">Logout</button>
    </nav>
  );
}

export default Navbar;


