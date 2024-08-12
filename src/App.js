import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFound from './components/NotFound'; // Ensure you have this component
import './styles/App.css'; // Global styling

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} /> {/* Wildcard route for 404 */}
        </Routes>
      </div>
    </>
  );
}

export default App;
