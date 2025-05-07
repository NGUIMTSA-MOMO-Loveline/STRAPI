import React, { useState } from "react";
import logo from "../../assets/hetic.jpg";
import axios from "axios";
import "../../App.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:1337/api/auth/local", {
        identifier: username,
        password: password,
      });
  
      console.log(res.data.jwt);
      console.log(res.data.user);
      localStorage.setItem("jwt", res.data.jwt);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.href = "/home";
  
    } catch (error: any) {
      console.error("Erreur de connexion :", error.response?.data || error.message);
      alert("Échec de la connexion : vérifiez vos identifiants.");
    }
  };  

  return (
    <div className="login-content">
      <div className="login-header">
        <img src={logo} alt="Logo HETIC" className="logo" />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Username</label>
        <input  type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>   setUsername(e.target.value)  } required   />
      <label>Password</label>
        <input    type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) =>   setPassword(e.target.value)  } required   />
        <a href="/forgot-password">Forgot Password?</a>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
