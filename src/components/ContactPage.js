import React from 'react';
import '../styles/ContactPage.css';
import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Have questions or inquiries? Reach out to us at Nebula. We're here to help!</p>
      <button 
        className="email-button" 
        onClick={() => window.location.href = 'mailto:nebulahousing@gmail.com'}>
        Email Us
      </button>
      <p>Follow Nebula for more information and updates:</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/company/nebula-software-technology/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/share/4z39Hw2UkzYcWzyQ/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/nebula.software.solutions?igsh=OHR3enJ5ZzRscmh0&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@nebula.software.company?_t=8oxBiAZJfAt&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
