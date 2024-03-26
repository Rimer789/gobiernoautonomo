import React from "react";
import "./Era.css";

const Villa = () => {
  const handleBackClick = () => {
    window.location.reload();
  };

  return (
    <div id="villa" className="villa">
      <div className="villa-container">
        <div className="villa-content">
          <div className="villa-title">
            <h1>La Era</h1>
          </div>
          <a href="/" onClick={handleBackClick}>Atrás</a>
        </div>
      </div>
    </div>
  );
};

export default Villa;
