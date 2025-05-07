import api from './axios.js';

export const fetchPosts = async () => {
  const res = await api.get('/posts?populate=*');
  return res.data.data;
};

export const fetchPost = async (id) => {
  const res = await api.get(`/posts/${id}?populate=comments`);
  return res.data.data;
};

export const createPost = async (data, jwt) => {
  const res = await api.post('/posts', { data });
  return res.data;
};
