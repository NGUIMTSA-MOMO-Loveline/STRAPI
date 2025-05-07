import axios from 'axios'; // Ton instance Axios

export const register = async (username, email, password) => {
  const res = await axios.post('http://localhost:1337/api/auth/local/register', {
    username,
    email,
    password,
  });
  return res.data;
};

export const login = async (identifier, password) => {
  const res = await axios.post('http://localhost:1337/api/auth/local', {
    identifier,
    password,
  });
  return res.data;
};
