import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">X-Ack</div>
        <ul className="nav-list">
          <li>About Us</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Other</li>
        </ul>
        <div className="auth-buttons">
          <span>Log in</span>
          <span>Sign up</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
