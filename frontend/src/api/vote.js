import api from './axios.js';

export const submitVote = async (postId, type, jwt) => {
  // type = 'upvote' ou 'downvote'
  const res = await axios.post('/votes', {
    data: {
      type,
      post: postId,
    }
  });
  return res.data;
};
