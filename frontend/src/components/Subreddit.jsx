import React from 'react';
import { useParams } from 'react-router-dom';

const Subreddit = () => {
  const { name } = useParams();

  // Exemple : on fetcherait ici les posts liés au subreddit
  return (
    <div>
      <h2>r/{name}</h2>
      <p>Contenu du subreddit</p>
    </div>
  );
};

export default Subreddit;
