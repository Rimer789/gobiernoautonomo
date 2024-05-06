import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Villa.css";

const Villa = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./turismo/villa/villa1.jpg",
    "./turismo/villa/villa2.jpg",
    "./turismo/villa/villa3.jpg",
    "./turismo/villa/villa4.jpg",
    "./turismo/villa/villa5.jpg",
    "./turismo/villa/villa6.jpg",
    "./turismo/villa/villa7.jpg",
    "./turismo/villa/villa8.jpg",
    "./turismo/villa/villa9.jpg",
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
              La comunidad de la Villa es una zona turística apta para un día de
              recreación con la familia y los amigos, donde podrás encontrar
              molinos antiguos de agua y está ubicada en la antigua carretera
              Santa Cruz.
            </div>
          </div>
          <Link to="/turismo">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Villa;
