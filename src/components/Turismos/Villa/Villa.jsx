import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Villa.css";

const Villa = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["./portada1.jpg", "./portada2.jpg", "./portada3.jpg"]; // Agregamos las rutas de las imágenes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambiamos el intervalo a 3 segundos

    return () => clearInterval(interval);
  }, );

  return (
    <div className="villa">
      <div className="villa-container">
        <div className="villa-content">
          <div className="villa-title">
            <h1>
              La comunidad de la Villa es una zona turística apta para un día de recreación con la familia y los amigos, donde podrás encontrar molinos antiguos de agua y está ubicada en la antigua carretera Santa Cruz.
            </h1>
          </div>
          <div className="villa-gallery">
            <img src={images[currentImageIndex]} alt="houses" />
          </div>
          <Link to="/turismo">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Villa;
