import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return alert("Veuillez vous connecter");

    // Requête d'envoi fictive
    console.log('Nouveau post:', { title, content, author: user.username });
  };

  return (
    <div>
      <h2>Créer un post</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Contenu"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default CreatePost;
