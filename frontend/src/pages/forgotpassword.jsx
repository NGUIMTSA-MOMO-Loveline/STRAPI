import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    setLoading(true); 

    try {
      await axios.post("http://localhost:1337/api/auth/forgot-password", {
        email: email,
      });

      setMessage("Un email a été envoyé pour réinitialiser le mot de passe.");

      // Redirection après 2 secondes
      setTimeout(() => {
        navigate("/reset-password");
      }, 2000);
    } catch (error) {
      console.error("Erreur :", error);
      setMessage("Une erreur est survenue lors de l'envoi de l'email.");
    } finally {
        setLoading(false);  // On désactive le chargement après la requête
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

        <button type="submit" disabled={loading}>
                {loading ? "Envoi en cours..." : "Réinitialiser le mot de passe"}
        </button>


        <div>
          <Link to="/besoin-d-aide">Besoin d'aide ?</Link>
        </div>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPassword;
