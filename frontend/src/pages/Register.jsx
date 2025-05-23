import React, { useState } from 'react';
import { register } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/hetic.jpg";

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

 
  

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Vérification si les mots de passe correspondent
  if (password !== confirmPassword) {
    alert(" Les mots de passe ne correspondent pas.");
    return;
  }

  
 
  try {
    const res = await register(username, email, password);

    if (res?.jwt && res?.user) {
      console.log("Utilisateur inscrit :", res.user);
      console.log("Token JWT :", res.jwt);

      // Redirection vers la page de connexion
      navigate('/login');
  } else {
    alert("Succces : Vous êtes à présent inscrit.");
}

  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    const msg = error.response?.data?.error?.message || "Erreur inconnue lors de l'inscription.";
    alert("erreur: " + msg);
  }
};


  return (
    <div className="register-container">
      <div className="register-header">
              <img src={logo} alt="Logo HETIC" className="logo" />
            </div>
      
      <form onSubmit={handleSubmit} className="register-form">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
