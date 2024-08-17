import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="content">
        <h1>Welcome to Nebula</h1>
        <p>Your gateway to your new place. Explore the infinite possibilities.</p>
        <a href="https://nebula-topaz-seven.vercel.app/home" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Download The App</button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
