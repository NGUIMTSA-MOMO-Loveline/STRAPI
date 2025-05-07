import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>{post.attributes.title}</h3>
      <p>{post.attributes.content}</p>
      <Link to={`/post/${post.id}`}>Voir les commentaires</Link>
    </div>
  );
}
