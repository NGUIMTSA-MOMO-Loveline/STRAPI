import React, { useState } from "react";
import logo from "../../assets/hetic.jpg";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('USERNAME', username);
    console.log('PASSWORD', password);

    const res = await axios.post("http://localhost:1337/api/auth/local", {
      identifier: username,
      password: password,
    });
    console.log(res.data.jwt); // Affiche le token JWT dans la console
    console.log(res.data.user); // Affiche les informations de l'utilisateur dans la console  
    localStorage.setItem("jwt", res.data.jwt); // Stocke le token JWT dans le localStorage
    localStorage.setItem("user", JSON.stringify(res.data.user)); // Stocke les informations de l'utilisateur dans le localStorage

    // Redirection vers la page d'accueil après la connexion réussie
    window.location.href = "/home";
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
