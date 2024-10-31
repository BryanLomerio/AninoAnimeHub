import './index.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './auth/components/Login';
import SignupForm from './auth/components/SignupForm';
import Home from './views/home/Home'; 

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/home" element={<Home toggleTheme={toggleTheme} />} /> 
      </Routes>
    </div>
  );
}

export default App;