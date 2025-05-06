import React, { useState } from "react";
import logo from "../../assets/hetic.jpg";
import axios from "axios";

function Register() {
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords are different");
      return;
    }
    console.log("Email",email);
    const res = await axios.post("http://localhost:1337/api/auth/local/register", {
      username: uname,
      email: email,
      password: password,
    });
    console.log(res.data.jwt); // Affiche le token JWT dans la console
    console.log(res.data.user); // Affiche les informations de l'utilisateur dans la console
    // Redirection vers la page de connexion après l'inscription réussie 
    window.location.href = "/login";
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <img src={logo} alt="Logo HETIC" className="logo" />
        <span className="logo-text">HETIC</span>
      </div>
      <form onSubmit={handleSubmit} className="register-form">
      <label>Username</label>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUname(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
