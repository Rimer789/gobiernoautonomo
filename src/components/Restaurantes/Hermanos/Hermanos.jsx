import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hermanos = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./gastronomia/hermanos/1.jpg",
    "./gastronomia/hermanos/2.jpg",
    "./gastronomia/hermanos/3.jpg",
    "./gastronomia/hermanos/4.jpg",
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
              Relleno de locoto y achojcha? Fideos Uchu?, Planchitas?,
              parrillada mixta?, Pescado a la parrilla?, Costillitas de cerdo?,
              el lugar propicio es local “3 Hermanos” con la atención los días
              jueves, viernes, sábado y domingo a partir de las 12: 00 p.m.
              ubicado en la av. Gualberto Villarroel y no podía faltar los vinos
              preparados por sus propietarios.
            </div>
          </div>
          <Link to="/gastronomia">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Hermanos;
