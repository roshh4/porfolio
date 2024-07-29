import React from 'react';
import { Link } from 'react-scroll'; 
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item"><Link to="home" smooth={true} duration={500}>Home</Link></li>
      <li className="navbar-item"><Link to="about" smooth={true} duration={500}>Skills</Link></li>
      <li className="navbar-item"><Link to="project" smooth={true} duration={500}>Projects</Link></li>
    </ul>
  </nav>
);

export default Navbar;
