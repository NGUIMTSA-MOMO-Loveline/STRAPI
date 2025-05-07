import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import './Post.css';
import { useParams } from 'react-router-dom';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    axios.get(`/posts/${id}?populate=comments`)
      .then((res) => setPost(res.data.data));
  }, [id]);

  const submitComment = (e) => {
    e.preventDefault();
    axios.post('/comments', {
      data: {
        text: comment,
        post: id,
      },
    }).then(() => {
      alert("Commentaire ajouté");
      setComment('');
    });
  };

  if (!post) return <p>Chargement...</p>;

  return (
    <div>
      <h2>{post.attributes.title}</h2>
      <p>{post.attributes.content}</p>
      <form onSubmit={submitComment}>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        <button>Commenter</button>
      </form>
      <h4>Commentaires</h4>
      {(post.attributes.comments?.data || []).map(c => (
        <p key={c.id}>{c.attributes.text}</p>
      ))}
    </div>
  );
}
