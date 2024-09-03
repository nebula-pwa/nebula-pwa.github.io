import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeToInstallPage from './components/HowToInstallPage';
import PolicyPage from './components/PolicyPage';
import HomePage from './components/HomePage2';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NotFound from './components/NotFound';
import './styles/App.css';
import CookieConsent from './components/CookieConsent'; // Import the CookieConsent component

import Footer from './components/Footer.js';


function App() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      setConsentGiven(true);
    } else if (consent === 'false') {
      setConsentGiven(true);
    }
  }, []);

  return (
    <div className="app-container">
      {!consentGiven && <CookieConsent onConsent={() => setConsentGiven(true)} />}
      
      
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/install" element={<HomeToInstallPage />} />
          <Route path="/terms" element={<PolicyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
