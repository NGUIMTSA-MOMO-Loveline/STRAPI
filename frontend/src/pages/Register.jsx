import React, { useState } from 'react';
import axios from '../api/axios';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    axios.post('/auth/local/register', {
      username,
      email,
      password
    }).then(() => alert('Inscription réussie !'));
  };

  return (
    <form onSubmit={submit}>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'utilisateur" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button>Register</button>
    </form>
  );
}