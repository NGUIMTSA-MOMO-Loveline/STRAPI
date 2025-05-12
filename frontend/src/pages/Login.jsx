import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import logo from "../assets/hetic.jpg";
import axios from 'axios';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setIsError(true);
      setMessage("❌ Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: username,
        password: password,
      });

      if (response.data && response.data.jwt) {
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setIsError(false);
        setMessage('✅ Connexion réussie. Redirection...');
        
        setTimeout(() => {
          navigate('/home');
        }, 1500);
      } else {
        setIsError(true);
        setMessage("❌ Réponse inattendue du serveur.");
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error.response?.data || error.message);
      setIsError(true);
      setMessage("❌ Connexion échouée : " + (error.response?.data?.error?.message || "Vérifiez vos identifiants."));
    }
  };

  return (
    <div className="login-content">
      <div className="login-header">
        <img src={logo} alt="Logo HETIC" className="logo" />
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <label>Nom d'utilisateur ou Email</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <a href="/forgot-password">Mot de passe oublié ?</a>
        <p>Tu as déjà un compte ? <Link to="/login">Se connecter</Link></p>
        <h4>Tu n'as pas de compte ? <Link to="/register">S'inscrire</Link></h4>
        
        <button type="submit">Connexion</button>
        
        {/* Alerte de message */}
        {message && (
          <div
            className={`alert ${isError ? 'alert-error' : 'alert-success'}`}
            style={{
              marginTop: "1em",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: isError ? "#f8d7da" : "#d4edda",
              color: isError ? "#721c24" : "#155724",
              border: isError ? "1px solid #f5c6cb" : "1px solid #c3e6cb"
            }}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}