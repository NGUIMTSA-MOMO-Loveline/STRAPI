import axios from './axios';

export const getSubreddits = async () => {
  const res = await axios.get('/subreddits');
  return res.data.data;
};

export const createSubreddit = async (name, jwt) => {
  const res = await axios.post('/subreddits', {
    data: { name },
  }, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  return res.data;
};
