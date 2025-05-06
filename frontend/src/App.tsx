import React from 'react';
import Register from "./pages/Register/Register";
import Home from './pages/Home/Home';
import Login from "./pages/login/login";
import LogoutButton from "./pages/logout/logout";
import ForgotPassword from "./pages/forgotpassword/forgotpassword";
import ResetPassword from './pages/resetpassword/resetpassword';

import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<LogoutButton />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
