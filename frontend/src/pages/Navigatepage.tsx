import React from "react";
import logo from "../assets/hetic.jpg";

function NavigatePage() {
  return (
    <div className="navigate-content">
      <h1>Bienvenue sur Hetic</h1>
      <img src={logo} alt="Logo Hetic"  style={{ width: "70px", height: "auto" }} />
    </div>
  );
}

export default NavigatePage;
