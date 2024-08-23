import React from 'react';
import { db, analytics } from '../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { logEvent } from 'firebase/analytics';
import '../styles/CookieConsent.css';

const CookieConsent = ({ onConsent }) => {
  const handleAccept = async () => {
    localStorage.setItem('cookieConsent', 'true');
    onConsent();

    // Log an event in Firebase Analytics
    logEvent(analytics, 'cookie_consent_given');

    // Store user data in Firestore
    const userRef = doc(db, 'users', 'some-unique-id');
    await setDoc(userRef, {
      device: getDeviceType(),
      location: 'User Location (implement geolocation)',
      age: 'User Age (collect from form)',
      timestamp: new Date().toISOString(),
    });
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    onConsent();
  };

  return (
    <div className="cookie-consent">
      <p>We use cookies and other tracking technologies to improve your browsing experience on our website. By accepting, you consent to our use of these technologies.</p>
      <div className="cookie-consent-buttons">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleReject}>Reject</button>
      </div>
    </div>
  );
};

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/mobile/i.test(ua)) return 'Mobile';
  if (/tablet/i.test(ua)) return 'Tablet';
  return 'Desktop';
};

export default CookieConsent;
