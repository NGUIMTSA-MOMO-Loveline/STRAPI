import { useEffect, useState } from "react";
import './components.css';
import AddSubredditForm from "../pages/AddSubredditsForm";


const Subreddits = () => {
  const [subreddits, setSubreddits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showThematics, setShowThematics] = useState(false);
  const [showCommunityForm, setShowCommunityForm] = useState(false);

  // Récupérer les subreddits
  useEffect(() => {
    fetch("http://localhost:1337/api/subreddits")
      .then(res => {
        if (!res.ok) {
          throw new Error("Erreur réseau");
        }
        return res.json();
      })
      .then(data => {
        setSubreddits(data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Erreur de chargement des subreddits.");
        setLoading(false);
      });
  }, []);

  const renderSubreddit = (sub) => {

    return (
      <div key={sub.id} className="element">
        <p>{sub.name}</p>
      </div>
    )
  }

  return (
    <div>

      <div className='element1' onClick={() => setShowThematics(!showThematics)}>
        THEMATICS <span className="arrow">⌵</span>
      </div>

      {showThematics && (
        <>

          {loading && <p>Chargement...</p>}
          {error && <p>{error}</p>}

          {!loading && !error && subreddits.length === 0 && (
            <p>Aucune communauté trouvée.</p>
          )}

          {!loading && !error && subreddits.map(renderSubreddit)}


          <div className='element' onClick={() => setShowCommunityForm(!showCommunityForm)}>
            <p>
              <img src="https://cdn.pixabay.com/photo/2022/03/15/09/11/plus-7069842_1280.png" alt="Community" className="sidebar-icon" style={{ padding:'5px' }} />
              Create a community
            </p>
          </div>

          {showCommunityForm && (
            
            <AddSubredditForm />

          )}


        </>
      )}

    </div>
  );
}

export default Subreddits;