import React, { useState } from 'react';
import './components.css';

const CommentBox = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <div className="comment-box">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Votre commentaire..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button type="submit">Commenter</button>
      </form>
    </div>
  );
};

export default CommentBox;
