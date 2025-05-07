import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { login } from '../api/auth'; // Assurez-vous d'importer la fonction de connexion depuis votre API

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log('Login clicked');
    try {
      const res = await login(email, password);
      console.log(res.data);
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Page de Connexion aaa</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Email :</label>
        <input
          type="email"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Entrez votre email"
        />
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Entrez votre mot de passe"
        />
        <input type='submit' value='Se connecter' />
      </form>
    </div>
    
  );
}