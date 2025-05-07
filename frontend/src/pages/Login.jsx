import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert('Connexion réussie!');
    // Logique de connexion à insérer ici
  };

  return (
    <div className="login-container">
      <h2>Page de Connexion</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Nom d'utilisateur :</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Entrez votre nom d'utilisateur"
        />
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Entrez votre mot de passe"
        />
        <Link to = "/home" type="submit">Se connecter</Link>
      </form>
    </div>
    
  );
}
