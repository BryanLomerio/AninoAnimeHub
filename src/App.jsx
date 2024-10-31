import './index.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './auth/components/Login';
import SignupForm from './auth/components/SignupForm';
import Home from './views/home/Home'; 
import MyLists from './views/MyLists/MyLists'; 
import Layout from './layout/Layout';

function App() {
  const initialTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(initialTheme);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme; 
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleUserClick = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    alert("Logging out...");
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        
        <Route path="/home" element={
          <Layout 
            toggleTheme={toggleTheme} 
            isLightMode={theme === 'light'}
            isUserDropdownOpen={isUserDropdownOpen}
            handleUserClick={handleUserClick}
            handleLogout={handleLogout}
          >
            <Home />
          </Layout>
        } />

        <Route path="/mylists" element={
          <Layout 
            toggleTheme={toggleTheme} 
            isLightMode={theme === 'light'}
            isUserDropdownOpen={isUserDropdownOpen}
            handleUserClick={handleUserClick}
            handleLogout={handleLogout}
          >
            <MyLists />
          </Layout>
        } />
      </Routes>
    </div>
  );
}

export default App;
