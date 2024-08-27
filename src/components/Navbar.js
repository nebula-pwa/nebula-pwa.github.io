import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInfoCircle, FaEnvelope, FaBook } from 'react-icons/fa';
import { GrClose } from "react-icons/gr";
import { MdInstallMobile } from "react-icons/md";
import '../styles/Navbar.css';
import logo from '../assets/nebula_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  let lastScrollY = 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, 20000); // 20 seconds
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-right">
        <div className="navbar-logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
      </div>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <GrClose className="close-icon" />
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/install" className={isActive('/install') ? 'active' : ''}>
          <MdInstallMobile className="icon" />
          How to Install
        </Link>
        <Link to="/terms" className={isActive('/terms') ? 'active' : ''}>
          <FaBook className="icon" />
          Terms & Privacy Policy
        </Link>
        <Link to="/about" className={isActive('/about') ? 'active' : ''}>
          <FaInfoCircle className="icon" />
          About
        </Link>
        <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
          <FaEnvelope className="icon" />
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;