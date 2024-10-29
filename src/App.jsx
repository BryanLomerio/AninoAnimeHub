// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './auth/components/Login'
import SignupForm from './auth/components/SignupForm'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupForm />} />

      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App;
