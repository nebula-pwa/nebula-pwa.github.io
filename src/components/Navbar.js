// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css'; // Import the CSS file

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img src="/assets/logo192.png" alt="Logo" className="logo" />
//       </div>
//       <button className="menu-toggle" onClick={toggleMenu}>
//         ☰
//       </button>
//       <ul className={`navbar-right ${isOpen ? 'open' : ''}`}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//       </ul>
//     </nav>
//   );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Import icons
import '../styles/Navbar.css';
import logo from '../assets/logo192.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/about">
          <FaInfoCircle className="icon" />
          About
        </Link>
        <Link to="/contact">
          <FaEnvelope className="icon" />
          Contact
        </Link>
      </div>
      <div className="navbar-right">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
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
