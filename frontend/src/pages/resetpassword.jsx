import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);  // Ajout de l'état de chargement
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  const handleResetPassword = async (event) => {
    event.preventDefault();

    if (!code) {
      setMessage("Lien invalide ou code manquant.");
      return;
    }

    if (password !== confirmation) {
      setMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    // Optionnel : Validation de la force du mot de passe (par exemple, longueur minimale)
    if (password.length < 6) {
      setMessage("Le mot de passe doit comporter au moins 6 caractères.");
      return;
    }

    setLoading(true);  // Activation de l'état de chargement

    try {
      await axios.post("http://localhost:1337/api/auth/reset-password", {
        code,
        password,
        passwordConfirmation: confirmation,
      });

      setMessage("Mot de passe réinitialisé avec succès !");
    } catch (error) {
      console.error("Erreur :", error);
      const apiError = error?.response?.data?.error?.message || "Une erreur est survenue.";
      setMessage(apiError);
    } finally {
      setLoading(false);  // Désactivation de l'état de chargement
    }
  };

  return (
    <div>
      <form onSubmit={handleResetPassword} className="reset-password-form">
        <h2>Réinitialiser le mot de passe</h2>
        <label>
          Vous avez reçu un email avec un lien pour réinitialiser votre mot de
          passe.
        </label>

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
        <button type="submit" disabled={loading}>
          {loading ? "Réinitialisation en cours..." : "Réinitialiser"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPassword;
