import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import './styles/App.css'; // Global styling

// Add the NotFound component for handling 404 errors
function NotFound() {
  return <h1>404: Page Not Found</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} /> {/* Wildcard route for 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
