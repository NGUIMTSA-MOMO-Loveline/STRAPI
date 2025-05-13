import React, { useState } from 'react';
import './components.css';
import Subreddits from './Subreddit';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [communityName, setCommunityName] = useState('');
  const [description, setDescription] = useState('');
  const [communities, setCommunities] = useState([]);

  const handleCreateCommunity = (e) => {
    e.preventDefault();
    if (communityName.trim()) {
      setCommunities([...communities, { name: communityName, description }]);
      setCommunityName('');
      setDescription('');
      setShowCommunityForm(false);
    }
  };

  // Fonction pour supprimer une communauté
  const handleDeleteCommunity = (index) => {
    const updatedCommunities = communities.filter((_, i) => i !== index);
    setCommunities(updatedCommunities);
  };

  return (
    <div className="sidebar">
      <div className='home'>
        <img
          src="https://cdn.pixabay.com/photo/2016/04/20/15/36/earth-1341377_1280.png"
          alt="Home"
          className="sidebar-icon"
        /> Popular
      </div>

      <br />

      <Subreddits />

    </div>
  );
}
