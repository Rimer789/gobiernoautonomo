import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Rosquete = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./cultura/rosquete/1.jpeg",
    "./cultura/rosquete/2.jpeg",
    "./cultura/rosquete/3.jpeg",
    "./cultura/rosquete/4.jpeg",
    "./cultura/rosquete/5.jpeg",
    "./cultura/rosquete/6.jpeg",
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
              El rosquete punateño, una de las exquisiteces del valle alto; más
              conocido como “el manjar blanco” y declarado patrimonio cultural
              del municipio de Punata y del Departamento de Cochabamba por la
              calidad y producciónón artesanal mantenida en el tiempo y
              exportada a dodos los departamentos de nuestro País.
            </div>
          </div>
          <Link to="/turismo">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Rosquete;
