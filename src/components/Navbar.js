import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInfoCircle, FaEnvelope, FaBook } from 'react-icons/fa';
import { GrClose } from "react-icons/gr";
import { MdInstallMobile } from "react-icons/md";
import '../styles/Navbar.css';
import logo from '../assets/nebula_pwa.png';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore'; // Firestore imports
import { db } from '../firebaseConfig'; // Firestore database

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, 15000);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleNavClick = async (pageName) => {
    logEvent(analytics, 'navbar_click', { page: pageName });
    console.log(`Navbar clicked: ${pageName}`);

    // Log the click event to Firestore
    const timestamp = new Date();
    try {
      await addDoc(collection(db, 'userActivity'), {
        event: `Navbar Clicked: ${pageName}`,
        timestamp
      });
      console.log('Navigation activity logged successfully to Firestore.');
    } catch (error) {
      console.error('Error logging navigation activity to Firestore:', error);
    }
  };

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-right">
        <div className="navbar-logo-container">
          <Link to="/" onClick={() => handleNavClick('Home')}>
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
      </div>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger">
          <span></span>
          <span></span>
        </div>
        <GrClose className="close-icon" />
      </div>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/install" className={isActive('/install') ? 'active' : ''} onClick={() => handleNavClick('How to Install')}>
          <MdInstallMobile className="icon" />
          Install
        </Link>
        <Link to="/terms" className={isActive('/terms') ? 'active' : ''} onClick={() => handleNavClick('Terms & Privacy Policy')}>
          <FaBook className="icon" />
          Terms
        </Link>
        <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => handleNavClick('About')}>
          <FaInfoCircle className="icon" />
          About
        </Link>
        <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => handleNavClick('Contact')}>
          <FaEnvelope className="icon" />
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;