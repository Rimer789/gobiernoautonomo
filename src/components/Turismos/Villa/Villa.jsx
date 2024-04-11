import React from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "./Villa.css";

const Villa = () => {
  const handleBackClick = () => {
    window.location.reload();
  };

  return (
    <div id="villa" className="villa">
      <div className="villa-container">
        <div className="villa-content">
          <div className="villa-title">
            <h1>Villa</h1>
          </div>
          <Link to = "/turismo">atras </Link>
        </div>
      </div>
    </div>
  );
};

export default Villa;
