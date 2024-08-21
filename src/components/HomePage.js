import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
  return (
    
    <div className="homepage">
      <div className="content">
        <h1>Welcome to Nebula PWA</h1>
        <p>Nebula Progressive Web App (PWA) is your gateway to your new place. The revolutionizing the way you search for rental housing. 
          Our progressive web app is designed to streamline the process of finding and securing your next home. 
          Whether you’re looking for a single room or an entire property, 
          Nebula makes it easier, faster, and more efficient.
        </p>
      </div>

      <div className="content">
        <p>Explore Nebula PWA to find your perfect home.</p>
        <a href="https://nebula-topaz-seven.vercel.app/home" target="_blank" rel="noopener noreferrer">
          <button className="cta-button">Download The App</button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
