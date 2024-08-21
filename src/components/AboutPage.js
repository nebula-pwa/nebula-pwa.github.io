import React from 'react';
import NebulaBackground from '../components/NebulaBackground';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <NebulaBackground />  {/* Nebula background should be behind everything */}
      <div className="content">
        <h1>About Us</h1>
        <p>This is the about page.</p>
      </div>
    </div>
  );
};

export default AboutPage;