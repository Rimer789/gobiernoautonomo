import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cusqueno = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./cultura/cusqueno/1.jpeg",
    "./cultura/cusqueno/2.jpg",
    "./cultura/cusqueno/3.jpg",
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
              El cuzqueño es un delicioso plato típico de Punata, por su
              originalidad y sabor; el mismo es elaborado con carne de gallina y
              lengua de vaca; contiene papa, arroz, chuño, su lawa de rosquete
              sin su crema (jarwilawa), además de relleno de locoto, ensalada de
              cebolla, tomate, zanahoria y locoto.se llama cusqueño porque la
              preparación del ají, es preparado a base del ají amarillo en vaina
              que es traído de cusco Perú.
            </div>
          </div>
          <Link to="/turismo">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Cusqueno;
