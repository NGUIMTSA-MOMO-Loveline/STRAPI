import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Windo from './pages/Windo';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import Subreddit from './components/Subreddit';
import ForgotPassword from "./pages/forgotpassword";
import ResetPassword from './pages/resetpassword';
import Post from './pages/posts/postPage';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>
          <Routes>
            <Route path="/" element={<Windo />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/r/:name" element={<Subreddit />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            <Route path="/post/:documentId" element={<Post/>} />

          </Routes>
          <ToastContainer />

    </>
  );
}

export default App;
