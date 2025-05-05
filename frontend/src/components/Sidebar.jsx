import React, { useState } from 'react';
import './components.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [showThematics, setShowThematics] = useState(false);
  const [showCommunityForm, setShowCommunityForm] = useState(false);
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

      <div className='element1' onClick={() => setShowThematics(!showThematics)}>
        THEMATICS <span className="arrow">⌵</span>
      </div>

      {showThematics && (
        <>
          <div className='element'>
            <p>
              <img src="https://www.usine-digitale.fr/mediatheque/9/8/0/000643089.jpg" alt="Game" className="sidebar-icon"  style={{ padding:'5px' }} />
              About HETIC <span className="arrow">〉</span>
            </p>
          </div>
          <div className='element'>
            <p>
              <img src="https://cdn.pixabay.com/photo/2021/11/30/00/42/airplane-icon-6834138_1280.png" alt="plane" className="sidebar-icon" style={{ padding:'5px' }} />
              Explore <span className="arrow">〉</span>
            </p>
          </div>
          <div className='element'>
            <p>
              <img src="https://cdn.pixabay.com/photo/2014/11/25/21/04/package-545658_1280.png" alt="box" className="sidebar-icon" style={{ padding:'5px' }} />
              All <span className="arrow">〉</span>
            </p>
          </div>
          <div className='element'>
            <p>
              <img src="https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699071_1280.png" alt="star" className="sidebar-icon" style={{ padding:'5px' }} />
              Pop Culture <span className="arrow">〉</span>
            </p>
          </div>
          <div className='element'>
            <p>
              <img src="https://cdn.pixabay.com/photo/2016/02/01/18/59/filmstrip-1174228_1280.png" alt="film" className="sidebar-icon" style={{ padding:'5px' }} />
              Film <span className="arrow">〉</span>
            </p>
          </div>
        </>
      )}

      <div className='element' onClick={() => setShowCommunityForm(!showCommunityForm)}>
        <p>
          <img src="https://cdn.pixabay.com/photo/2022/03/15/09/11/plus-7069842_1280.png" alt="Community" className="sidebar-icon" style={{ padding:'5px' }} />
          Create a community
        </p>
      </div>

      {showCommunityForm && (
        <form className="community-form" onSubmit={handleCreateCommunity}>
          <input
            type="text"
            placeholder="Community name"
            value={communityName}
            onChange={(e) => setCommunityName(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Créer</button>
        </form>
      )}

      {/* Liste des communautés créées */}
      {communities.length > 0 && (
        <div className="community-list">
          {communities.map((community, index) => (
            <div key={index} className="element">
              <p>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="icon" className="sidebar-icon" style={{ padding:'5px' }} />
                {community.name}
                <button onClick={() => handleDeleteCommunity(index)} className="delete-button">Supprimer</button>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
