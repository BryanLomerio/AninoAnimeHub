import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './auth/components/Login';
import SignupForm from '../src/auth/components/SignupForm';
import Home from './views/home/Home'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/home" element={<Home />} /> 
    </Routes>
  );
}

export default App;
