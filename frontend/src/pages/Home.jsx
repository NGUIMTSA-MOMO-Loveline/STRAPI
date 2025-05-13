import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import PostCard from '../components/PostCard';
import Navbar from '../components/NavbarLogin';
import Sidebar from '../components/sidebar';

import { Link } from 'react-router-dom'; // ⬅️ Ajoute ceci en haut

// Puis dans ton return (par exemple juste après <Sidebar />) :
<div style={{ padding: '20px' }}>
  <Link to="/create-post">
    <button style={{ padding: '10px 20px', fontSize: '16px' }}>
      Créer une publication
    </button>
  </Link>
</div>

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