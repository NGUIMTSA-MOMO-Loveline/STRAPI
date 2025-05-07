import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  
  const code = searchParams.get("code");

  const handleResetPassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!code) {
      setMessage("Lien invalide ou code manquant.");
      return;
    }

    try {
      await axios.post("http://localhost:1337/api/auth/reset-password", {
        code,
        password,
        passwordConfirmation: confirmation,
      });

      setMessage("Mot de passe réinitialisé avec succès !");
    } catch (error: any) {
      console.error("Erreur :", error);
      const apiError = error?.response?.data?.error?.message || "Une erreur est survenue.";
      setMessage(apiError);
    }
  };

  return (
    <div>
      <form onSubmit={handleResetPassword} className="reset-password-form">
        <h2>Réinitialiser le mot de passe</h2>
        <label>Vous avez reçu un email avec un lien pour réinitialiser votre mot de passe.</label>
        <input
          type="password"
          placeholder="Nouveau mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
          required
        />
        <button type="submit">Réinitialiser</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ResetPassword;
