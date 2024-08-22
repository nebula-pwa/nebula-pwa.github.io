import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaInfoCircle, FaEnvelope, FaBook } from 'react-icons/fa'; // Import icons
import { MdInstallMobile } from "react-icons/md";
import '../styles/Navbar.css';
import logo from '../assets/nebula_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      
      <div className="navbar-right">
        <div className="navbar-logo-container">
          <Link to="/"> {/* Wrap the logo in a Link component */}
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
      <Link to="/install">
          <MdInstallMobile className="icon" />
          How to Install
        </Link>
        <Link to="/terms">
          <FaBook className="icon" />
          Terms & Privacy Policy
        </Link>
        <Link to="/about">
          <FaInfoCircle className="icon" />
          About
        </Link>
        <Link to="/contact">
          <FaEnvelope className="icon" />
          Contact
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
