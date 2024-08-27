import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import '../styles/Footer.css'; // Import the CSS file for the footer

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="copyright">© {currentYear} Nebula. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/company/nebula-software-technology/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/nebulatechspace" target="_blank" rel="noopener noreferrer">
          <BsTwitterX />
        </a>
        <a href="https://www.tiktok.com/@nebula.software.company?_t=8oxBiAZJfAt&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <a href="https://www.facebook.com/share/4z39Hw2UkzYcWzyQ/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/nebula.software.solutions?igsh=OHR3enJ5ZzRscmh0&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
