import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Jotita = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./gastronomia/jotita/1.jpg",
    "./gastronomia/jotita/2.jpg",
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
              Jota Jotita de su Propietario Jorge Ovando un lugar ameno para
              compartir con toda la familia ubicado al Oeste de del municipio de
              Punata en la Calle Heroínas antes de llegar al complejo turístico
              Marcelo con la atención de platos como Churrasco Mixto, Churrasco
              Normal, pollo a la Parrilla, Planchita, pique macho y charque los
              días martes, jueves, viernes sábados y domingos a partir del
              mediodía.
            </div>
          </div>
          <Link to="/gastronomia">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Jotita;
