import React from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer le token (ou les infos de session) du localStorage
    localStorage.removeItem("token");

    // Rediriger vers la page de connexion
    navigate("/login");
  };

  return (
   <div className="logout-content">
    <button onClick={handleLogout}>
        <FiLogOut />
      Log out
    </button>
    </div>
  );
};

export default LogoutButton;