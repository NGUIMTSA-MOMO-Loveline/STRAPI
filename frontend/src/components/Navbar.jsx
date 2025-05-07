import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './components.css';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false); 
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Déconnecté");
    setShowMenu(false);
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
        <h2>
          HETIC
        </h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search on HETIC"
        />
      </div>

      <div className="navbar-right">
        <button className="btn1">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/04/12/17/qr-code-2816041_1280.png"
            alt="Download"
            className="sidebar-icon"
          />
          Download app
        </button>

        <Link to = "/login" className="btn2" >
          Login
        </Link>

        <button className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          &#8942;
        </button>

        {showMenu && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Logout</button>
            <button onClick={() => alert("Aide bientôt disponible")}>Help
             <img src="https://cdn.pixabay.com/photo/2018/02/26/15/36/choice-3183317_1280.png" alt="help" className="navbar-icon" style={{ width: '20px', height: '20px' }}/></button>
          </div>
        )}
      </div>
      </nav>
    </>
  );
}
