import axios from './axios';

export const fetchPosts = async () => {
  const res = await axios.get('/posts?populate=*');
  return res.data.data;
};

export const fetchPost = async (id) => {
  const res = await axios.get(`/posts/${id}?populate=comments`);
  return res.data.data;
};

export const createPost = async (data, jwt) => {
  const res = await axios.post('/posts', { data }, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  return res.data;
};
