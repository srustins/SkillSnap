// src/App.js
import React, { useState, useEffect } from 'react';
import './styles/theme.css';
import './pages/Login.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Profile from './pages/Profile';

function AnimatedRoutes({ isLoggedIn, skills, setSkills, setIsLoggedIn }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={isLoggedIn ? <Home skills={skills} setSkills={setSkills} /> : <Navigate to="/login" />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
        <Route path="/explore" element={isLoggedIn ? <Explore skills={skills} /> : <Navigate to="/login" />} />
        <Route path="/profile/:id" element={<Profile skills={skills} setSkills={setSkills} />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('skills');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn && (
        <nav style={{
          background: '#1e3a8a',
          padding: '10px',
          color: 'white',
          display: 'flex',
          gap: '15px',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/explore" style={{ color: 'white', textDecoration: 'none' }}>Explore</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          <button
             onClick={handleLogout}
             style={{
               marginLeft: 'auto',
               backgroundColor: '#1e3a8a',
               color: 'white',
               border: 'none',
               padding: '8px 14px',
               borderRadius: '6px',
               cursor: 'pointer',
               fontWeight: 'bold',
               transition: 'background-color 0.3s ease'
             }}
             onMouseOver={(e) => (e.target.style.backgroundColor = '#374fc7')}
             onMouseOut={(e) => (e.target.style.backgroundColor = '#1e3a8a')}
           >
  Logout
</button>


        </nav>
      )}

      <AnimatedRoutes
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        skills={skills}
        setSkills={setSkills}
      />
    </Router>
  );
}

export default App;













