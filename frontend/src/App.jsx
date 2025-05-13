import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Windo from './pages/Windo';
import Home from './pages/Home';
import Post from './pages/Post';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import Subreddit from './components/Subreddit';
import ForgotPassword from "./pages/forgotpassword";
import ResetPassword from './pages/resetpassword';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Posts from "./Components/Posts"
import PostPage from "./Components/PostPage"
import Container from '@mui/material/Container';



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
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            <Container>    
              <div className='App'>
        
                <Routes>
                  <Route path="/bld" element={<Posts/>} />
                  <Route path="/bld/post/:id" element={<PostPage/>} />
                </Routes>

              </div>
            </Container>

          </Routes>
          <ToastContainer />

    </>
  );
}
    


export default App;