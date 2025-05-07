import axios from './axios';

export const submitVote = async (postId, type, jwt) => {
  // type = 'upvote' ou 'downvote'
  const res = await axios.post('/votes', {
    data: {
      type,
      post: postId,
    }
  }, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  return res.data;
};
