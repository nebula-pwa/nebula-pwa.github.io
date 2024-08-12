// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
// import NotFound from './components/NotFound'; // Ensure you have this component
// import './styles/App.css'; // Global styling

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="*" element={<NotFound />} /> {/* Wildcard route for 404 */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; // Import global styles if you have any
import App from './App'; // Import your main App component
import reportWebVitals from './reportWebVitals'; // Optional for performance monitoring

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
