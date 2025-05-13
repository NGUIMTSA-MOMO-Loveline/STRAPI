import React, { useState, useEffect } from 'react';
import './CreatePost.css';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  
  const [community, setCommunity] = useState('');
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [subreddits, setSubreddits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/api/subreddits")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur réseau");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.data) {
          setSubreddits(data.data);
        } else {
          setError("Données des communautés incorrectes.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Erreur de chargement des subreddits.");
        setLoading(false);
      });
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        setError('Le fichier est trop volumineux. Veuillez choisir un fichier de moins de 5 Mo.');
      } else {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
        setError('');
      }
    }
  };

  const uploadImage = async (file, token) => {
    const formData = new FormData();
    formData.append('files', file);

    const res = await fetch("http://localhost:1337/api/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Échec de l'upload de l'image.");
    }

    const data = await res.json();
    return data[0]; // Retourne l'objet image (avec id)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!community) return setError("Veuillez sélectionner une communauté.");
    if (!title) return setError("Le titre est obligatoire.");

    setIsLoading(true);

    const token = localStorage.getItem("jwt");

    try {
      let imageId = null;

      if (image) {
        const uploadedImage = await uploadImage(image, token);
        imageId = uploadedImage.id;
      }

      const res = await fetch('http://localhost:1337/api/posts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            title,
            content,
            subreddit: community,
            image: imageId,
          },
        }),
      });

      if (!res.ok) {
        throw new Error('Erreur lors de la création du post.');
      }

      const data = await res.json();
      console.log("Post enregistré :", data);
      alert("Post publié avec succès !");
      handleCancel();
    } catch (err) {
      console.error(err);
      setError("Échec de la création du post.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    setImage(null);
    setCommunity('');
    setError('');
    setImagePreview(null);
    setIsLoading(false);
  };

  return (
    <form className="add-post" onSubmit={handleSubmit}>
      <h2>Créer une publication</h2>

      {loading ? (
        <p>Chargement des communautés...</p>
      ) : (
        <select value={community} onChange={(e) => setCommunity(e.target.value)} required>
          <option value="">Sélectionner une communauté</option>
          {subreddits.map((sub) => (
            <option key={sub.id} value={sub.id}>
              {sub.name}
            </option>
          ))}
        </select>
      )}

      {error && <p className="error">{error}</p>}

      <input
        type="text"
        maxLength={300}
        placeholder="Titre *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Exprimez-vous..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
      />

      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imagePreview && <img src={imagePreview} alt="Aperçu" width="100" />}

      {isLoading && <p>Chargement en cours...</p>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Publication en cours..." : "Publier"}
      </button>
      <button type="button" onClick={handleCancel} className="cancel-button">Annuler</button>
    </form>
  );
};

export default AddPost;
