import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Windo from './pages/Windo';
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import Subreddit from './components/Subreddit';
import LogoutButton from "./pages/logout";
import ForgotPassword from "./pages/forgotpassword";
import ResetPassword from './pages/resetpassword';
import Navigatepage from './pages/Navigatepage';
import './App.css';



function App() {

  return (
    <>
          <Routes>
            <Route path="/" element={<Windo />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/r/:name" element={<Subreddit />} />
            <Route path="/logout" element={<LogoutButton />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/navigate" element={<Navigatepage />} />
          </Routes>
    </>
  );
}

export default App;
