import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import PostCard from '../components/PostCard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts?populate=*')
      .then((res) => setPosts(res.data.data));
  }, []);

  const [communities, setCommunities] = useState([]);

  const addCommunity = (newCommunity) => {
    setCommunities([...communities, newCommunity]);
  };

  return (
    <>
      <Navbar communities={communities} />
      <div style={{ display: 'flex' }}>
        <Sidebar addCommunity={addCommunity} communities={communities} />
      </div>
    </>
  );
}
