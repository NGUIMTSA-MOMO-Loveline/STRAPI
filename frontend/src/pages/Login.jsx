import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import logo from "../assets/hetic.jpg";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setIsError(true);
      toast.error("❌ Veuillez remplir tous les champs.");
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

        toast.success("✅ Connexion réussie. Redirection...");
        navigate('/home'); // Redirection immédiate
      } else {
        toast.error("❌ Réponse inattendue du serveur.");
      }
     } catch (error) {
      console.error('Erreur lors de la connexion :', error.response?.data || error.message);
      const msg = error.response?.data?.error?.message || "Vérifiez vos identifiants.";
      toast.error("❌ Connexion échouée : " + msg);
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
        
      
      </form>
    </div>
  );
}