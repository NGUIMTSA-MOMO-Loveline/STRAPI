import React, { useState } from 'react';
import './CreatePost.css';

const AddPost = () => {
  const [activeTab, setActiveTab] = useState('text');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [link, setLink] = useState('');
  const [pollOptions, setPollOptions] = useState(['', '']);
  const [community, setCommunity] = useState('');
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5000000) { // 5MB max size
        setError('Le fichier est trop volumineux. Veuillez choisir un fichier de moins de 5 Mo.');
      } else {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
        setError('');
      }
    }
  };

  const isValidUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!community) return setError("Veuillez sélectionner une communauté.");
    if (!title) return setError("Le titre est obligatoire.");
    if (activeTab === 'link' && !isValidUrl(link)) return setError("L'URL est invalide.");

    const post = {
      title,
      community,
      type: activeTab,
      content: activeTab === 'text' ? content :
               activeTab === 'image' ? image?.name :
               activeTab === 'link' ? link :
               activeTab === 'poll' ? pollOptions :
               null
    };

    console.log("Post créé :", post);
    alert("Post simulé !");
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setImage(null);
    setLink('');
    setPollOptions(['', '']);
    setCommunity('');
    setError('');
    setImagePreview(null);
    setIsLoading(false);
  };

  const handlePollOptionChange = (index, value) => {
    const updated = [...pollOptions];
    updated[index] = value;
    setPollOptions(updated);
  };

  const addPollOption = () => {
    if (pollOptions.length < 6) {
      setPollOptions([...pollOptions, '']);
    }
  };

  return (
    <form className="add-post" onSubmit={handleSubmit}>
      <h2>Créer une publication</h2>

      <select value={community} onChange={(e) => setCommunity(e.target.value)} required>
        <option value="">Sélectionner une communauté</option>
      </select>

      <div className="tab-menu">
        <button type="button" className={activeTab === 'text' ? 'active' : ''} onClick={() => setActiveTab('text')}>Texte</button>
        <button type="button" className={activeTab === 'image' ? 'active' : ''} onClick={() => setActiveTab('image')}>Images et vidéo</button>
        <button type="button" className={activeTab === 'link' ? 'active' : ''} onClick={() => setActiveTab('link')}>Lien</button>
        <button type="button" className={activeTab === 'poll' ? 'active' : ''} onClick={() => setActiveTab('poll')}>Sondage</button>
      </div>

      {error && <p className="error">{error}</p>}

      <input
        type="text"
        maxLength={300}
        placeholder="Titre *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      {activeTab === 'text' && (
        <textarea
          placeholder="Exprimez-vous..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
        />
      )}

      {activeTab === 'image' && (
        <>
          <input type="file" accept="image/*,video/*" onChange={handleImageChange} />
          {imagePreview && <img src={imagePreview} alt="Aperçu" width="100" />}
          {isLoading && <p>Chargement en cours...</p>}
        </>
      )}

      {activeTab === 'link' && (
        <input
          type="url"
          placeholder="https://exemple.com"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      )}

      {activeTab === 'poll' && (
        <div className="poll-options">
          {pollOptions.map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handlePollOptionChange(index, e.target.value)}
              required
            />
          ))}
          {pollOptions.length < 6 && (
            <button type="button" onClick={addPollOption}>+ Ajouter une option</button>
          )}
        </div>
      )}

      <button type="submit">Publier</button>
      <button type="button" onClick={handleCancel} className="cancel-button">Annuler</button>
    </form>
  );
};

export default AddPost;
