// src/components/HomePage.js

import React from 'react';
import '../styles/HomePage.css';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Firebase import

function HomePage() {
  const handleButtonClick = () => {
    const timestamp = new Date();

    // Log the button click event to Firebase Firestore
    addDoc(collection(db, 'userActivity'), {
      event: 'Button Click',
      button: 'Download The App',
      timestamp
    }).then(() => {
      console.log('Button click logged successfully.');
    }).catch((error) => {
      console.error('Error logging button click:', error);
    });
  };

  return (
    <div className="homepage">
      <div className="content">
        <h1>Welcome to Nebula PWA's Information Portal</h1>
        <p>Nebula Progressive Web App (PWA) is your gateway to your new place. The revolutionizing the way you search for rental housing. 
          Our progressive web app is designed to streamline the process of finding and securing your next home. 
          Whether you’re looking for a single room or an entire property, 
          Nebula makes it easier, faster, and more efficient.
        </p>
      </div>

      <div className="content">
        <p>Explore Nebula PWA to find your perfect home.</p>
        <a href="https://nebula-topaz-seven.vercel.app/home" target="_blank" rel="noopener noreferrer">
          <button className="cta-button" onClick={handleButtonClick}>Download The App</button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
