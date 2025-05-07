import React, { useState } from 'react';
import { register } from '../api/auth';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    console.log('hello')
    e.preventDefault();
    const res = await register(username,email,password)
    console.log(res.data);
    
  };

  return (
    <form onSubmit={submit}>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'utilisateur" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" />
      <input type="submit" value='REgister' />
    </form>
  );
}