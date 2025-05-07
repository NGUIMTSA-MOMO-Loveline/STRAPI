import api from './axios.js';

export const getSubreddits = async () => {
  const res = await api.get('/subreddits');
  return res.data.data;
};

export const createSubreddit = async (name, jwt) => {
  const res = await api.post('/subreddits', {
    data: { name }});
  return res.data;
};
