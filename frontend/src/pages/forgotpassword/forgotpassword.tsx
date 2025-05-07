import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleReset = () => {
    navigate("/reset-password");
  };

  const handleForgotPassword =async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  

    try {
      await axios.post("http://localhost:1337/api/auth/forgot-password", {
        email: email,
      });

      setMessage("Un email a été envoyé pour réinitialiser le mot de passe.");
      // Redirection vers la page de reset APRÈS le succès
      setTimeout(() => {
      navigate("/reset-password");
      }
      , 2000); // Redirection après 2 secondes
    } catch (error) {
      console.error("Erreur :", error);
      setMessage("Une erreur est survenue lors de l'envoi de l'email.");
    }
  };

  return (
    <div>
      <h2>Mot de passe oublié</h2>
      <form onSubmit={handleForgotPassword} className="forgot-password-form">
        <label>Réinitialiser le mot de passe</label>
        <p>
          Saisis ton adresse email ou ton pseudo et nous t’enverrons un lien
          pour réinitialiser ton mot de passe.
        </p>

        <input
          type="email"
          placeholder="Adresse email ou pseudo *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        

        <Link to="/besoin-d-aide">Besoin d'aide ?</Link>

        
        <button onClick={handleReset}>Réinitialiser le mot de passe</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default ForgotPassword;
