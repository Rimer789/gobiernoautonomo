// GetStarted.js
import React from "react";
import "./GetStarted.css";
import { FiMapPin } from "react-icons/fi"; // Importa el icono de ubicación

const GetStarted = () => {
  const handleUbicacionClick = () => {
    // Lógica para abrir Google Maps aquí
    window.open("https://www.google.com/maps", "_blank");
  };

  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">PLAYA DE GANADO </span>
          <div className="image-containe">
            <img src="./portada4.jpg" alt="Imagen 1" className="image" />
            <img src="./portada2.jpg" alt="Imagen 2" className="image" />
          </div>
          <div className="ubicacion-container" onClick={handleUbicacionClick}>
            <FiMapPin className="ubicacion-icono" />
            <span className="ubicacion-texto">Ubicación</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
