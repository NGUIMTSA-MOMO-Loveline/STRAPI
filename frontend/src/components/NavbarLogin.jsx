import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './components.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null); // 🔥 Nouvel état pour l'utilisateur

  // Charger l'utilisateur depuis localStorage au chargement
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate("/");
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (postTitle.trim() && postContent.trim()) {
      setPosts([...posts, { title: postTitle, content: postContent }]);
      setPostTitle('');
      setPostContent('');
      setShowPostForm(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E0BAQFzwdJz7hhLxg/company-logo_100_100/company-logo_100_100/0/1715605493969/hetic_logo?e=2147483647&v=beta&t=vveh-mkvUeXxJhTPl-_izXEkCdXjpXrybxH6RQ4K1Bs"
            alt="Popular"
            className="sidebar-icon"
            style={{ width: '50px', height: '50px' }}
          />
          <h2>HETIC</h2>
          <input
            type="text"
            className="search-bar"
            placeholder="Search on HETIC"
          />
        </div>

        <div className="navbar-right">
          <button className="icon-btn" title="Translate">
            <img
              src="https://cdn.pixabay.com/photo/2021/09/20/22/15/translate-6641970_1280.png"
              alt="Translate"
              className="navbar-icon"
              style={{ width: '20px', height: '20px' }}
            />
          </button>

          <button className="btn3">AD</button>

          <button className="icon-btnm" title="Messages">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kc14Lagl_gWNh1dX91SLvjXyTOiIYf0-EA&s"
              alt="Messages"
              className="navbar-icon"
              style={{ width: '20px', height: '20px' }}
            />
          </button>

          <button className="btn4" onClick={() => setShowPostForm(!showPostForm)}>
            + Create Post
          </button>

          <button className="icon-btn" title="Notifications">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
              alt="Notifications"
              className="navbar-icon"
              style={{ width: '20px', height: '20px' }}
            />
          </button>

          {user && (
            <button
              className="icon-btnp"
              title="Profile"
              onClick={() => setShowProfile(!showProfile)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                alt="Profile"
                className="navbar-icon"
                style={{ width: '20px', height: '20px' }}
              />
            </button>
          )}

          <button className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
            &#8942;
          </button>

          {showMenu && (
            <div className="dropdown-menu">
              {user ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <button onClick={() => navigate("/login")}>Login</button>
              )}
              <button onClick={() => alert("Aide bientôt disponible")}>
                Help
                <img
                  src="https://cdn.pixabay.com/photo/2018/02/26/15/36/choice-3183317_1280.png"
                  alt="help"
                  className="navbar-icon"
                  style={{ width: '20px', height: '20px' }}
                />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* 🔥 Section Profil dynamique */}
      {showProfile && user && (
        <div className="profile-panel">
          <p className='profil'>
            <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="film" className="profil-icon" />
            Profil
          </p>
          <p className='profil'>Nom : {user.username}</p>
          <p className='profil'>Email : {user.email}</p>
          <button onClick={() => setShowProfile(false)}>Close</button>
        </div>
      )}

      {/* Formulaire Post */}
      {showPostForm && (
        <div className="create-post-form">
          <form onSubmit={handleCreatePost}>
            <input
              type="text"
              placeholder="Post Title"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Write your post content here..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              required
            />
            <button type="submit">Create Post</button>
          </form>
        </div>
      )}

      {/* Affichage des posts créés */}
      {posts.length > 0 && (
        <div className="posts-list">
          {posts.map((post, index) => (
            <div key={index} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
