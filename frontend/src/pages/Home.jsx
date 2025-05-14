import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import Navbar from '../components/NavbarLogin';
import Sidebar from '../components/sidebar';
import Posts from './posts/Post';
import Container from '@mui/material/Container';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
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

      <Container style={{marginLeft : "30%", marginTop : "5%"}}>    
        <div className='App'>
          
          <Posts/>

        </div>
      </Container>
      
    </>
  );
}