import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [message, setMessage] = useState("");

  const query = new URLSearchParams(useLocation().search);
  const code = query.get("code");

  const handleResetPassword = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:1337/api/auth/reset-password", {
        code: code,
        password: password,
        passwordConfirmation: confirmation,
      });

      setMessage("Mot de passe réinitialisé avec succès !");
    } catch (error) {
      console.log("Erreur :", error);
      setMessage("Une erreur est survenue.");
    }
  };

  return (
    <div>
     
      <form onSubmit={handleResetPassword} className="reset-password-form">
      <h2>Réinitialiser le mot de passe</h2>
        <label>Vous avez réçu un email avec un lien pour réinitialiser votre mot de passe.</label>
        <input  type="password" placeholder="Nouveau mot de passe"  value={password}  onChange={(e) => setPassword(e.target.value)}    required/>
         
        <input type="password"  placeholder="Confirmer le mot de passe"   value={confirmation} onChange={(e) => setConfirmation(e.target.value)}  required   />
      
        <button type="submit">Réinitiliser </button>
        <p>Tu as déjà un compte ?</p>
        <a href="/login">Se connecter</a>
        
       
        <h4> Tu n'as pas de compte?</h4>
        <a href="/register">S'inscrire</a>
       
        
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ResetPassword;
