import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-links-wrapper">
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="mobile-only">
            <button className="btn">Login</button>
            <button className="btn">Signup</button>
          </li>
        </ul>
      </div>
      <div className="navbar-buttons desktop-only">
        <button className="btn">Login</button>
        <button className="btn">Signup</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
