import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import logo from "../assets/hetic.jpg";
import { login } from '../api/auth';
import axios from 'axios';
 


export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: username,
        password: password,
        message: message,
      });
      if (response.data && response.data.jwt) {
      console.log(response.data.jwt);
      console.log(response.data.user);
      localStorage.setItem("jwt", response.data.jwt);
      localStorage.setItem("user", JSON.stringify(response.data.user));
     
        setMessage('✅ Success : Vous êtes à présent connecté.');
         setTimeout(() => {
          navigate('/navigate'); // 👈 redirige vers la page d'accueil après 1.5 sec
        }, 1500);
      } else {
        setMessage(' Échec : réponse inattendue du serveur.');
      }
    } catch (error) {
      
      console.error('Erreur lors de la connexion :', error.response?.data || error.message);
      setMessage("Connexion échouée : " + (error.response?.data?.error?.message || "Vérifiez vos identifiants."));
    }
  };

  return (
    <div className="login-content">
      <div className="login-header">
        <img src={logo} alt="Logo HETIC" className="logo" />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a href="/forgot-password">Forgot Password?</a>
        <p>Tu as déjà un compte ? <Link to="/login">Se connecter</Link></p>
        <h4>Tu n'as pas de compte ? <Link to="/register">S'inscrire</Link></h4>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
