import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Aurora = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./gastronomia/aurora/1.jpg",
    "./gastronomia/aurora/2.jpg",
    "./gastronomia/aurora/3.jpg",
    "./gastronomia/aurora/4.jpg",
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
              Local de doña Aurora de propiedad de la Señora del Mismo nombre te
              abre las puertas con paisajes pintorescos de la agricultura del
              municipio en la comunidad de Chillcar al este del municipio a 10
              minutos del centro de la provincia con la atención de los días
              Sábados y Domingos a partir de las 13:00 p.m. con sus ya
              tradicionales platos de escabeche, enrollado mixto y chicharon de
              cerdo y pescado a la parrilla (domingos y feriados) y no puede
              faltar la riquísima chicha kully y amarilla.
            </div>
          </div>
          <Link to="/gastronomia">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Aurora;
