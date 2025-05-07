import { Routes, Route } from 'react-router-dom';
import Wider from './pages/wider';
import Login from './pages/login/login';
import Home from './pages/home';
import ForgotPassword from './pages/forgotpassword/forgotpassword'
import ResetPassword from './pages/resetpassword/resetpassword'
import Register from './pages/Register/Register'


function App() {

  return (
    <>
      <Routes >

        <Route path="/" element={<Wider />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  );
}

export default App;
