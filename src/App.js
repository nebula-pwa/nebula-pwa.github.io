// export default App;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeToInstallPage from './components/HowToInstallPage.js';
import PolicyPage from './components/PolicyPage.js';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NotFound from './components/NotFound'; 
import './styles/App.css'; 

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
