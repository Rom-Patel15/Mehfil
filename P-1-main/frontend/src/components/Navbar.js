import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">🎵</span>
          <Link to="/" className="logo-text">Mehfil</Link>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/venues" className="nav-link">Venues</Link>
          </li>
          <li className="nav-item">
            <Link to="/artists" className="nav-link">Artists</Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link">Events</Link>
          </li>
        </ul>
        
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Log In</Link>
          <Link to="/signup" className="signup-btn">SignUp</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;