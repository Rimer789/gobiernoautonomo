import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Kjaras = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./gastronomia/kjaras/1.jpg",
    "./gastronomia/kjaras/2.jpg",
    "./gastronomia/kjaras/3.jpg",

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="villa">
      <div className="villa-container">
        <div className="villa-content">
          <div className="villa-gallery">
            <img src={images[currentImageIndex]} alt="houses" />
          </div>
          <div className="villa-title">
            <div className="dess">
              Visitar Punata y no servirte el plato de Kjaritas en la Comunidad
              de Santa Ana es no haber visitado Punata, ubicado al Oeste del
              municipio el local la K´jaras de Santa Ana te atiende los días
              viernes, sábado y domingo a partir del mediodía con su ya
              tradicional plato de k´jaras y costillas de cerdo que son
              amenizados por grupos en vivo y no puede faltar el néctar del
              valle en sus dos variedades kully y amarilla.
            </div>
          </div>
          <Link to="/gastronomia">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Kjaras;
