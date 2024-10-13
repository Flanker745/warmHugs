// src/Components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  
  // Check if the user is logged in
  const isLoggedIn = storedUser && storedUser.login === true;

  // If not logged in, redirect to Login page
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
