import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Archis = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./gastronomia/archis/1.jpg",
    "./gastronomia/archis/2.jpg",
    "./gastronomia/archis/3.jpg",
    "./gastronomia/archis/4.jpg",
    "./gastronomia/archis/5.jpg",
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
              Un viernes con la Familia y comer algo rico y tradicional de
              muestro municipio el lugar es el “local los Archis” de sus
              propietarios Roger Jaldin (tío archi) y Mildred Daza Prado el día
              viernes con los platos de Cuzqueño, Aji de Lengua, Laping, Pique,
              Lechón, Charque, Pato, Conejo Lambreado, Conejo Puta Changa,
              Picante Mixto y conejo de castillas ubicado en la calle Jorge
              Rojas Tardío Y Pastor Mendes.
            </div>
          </div>
          <Link to="/gastronomia">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Archis;
