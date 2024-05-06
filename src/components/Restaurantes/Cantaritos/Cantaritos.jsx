import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cantaritos = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./gastronomia/cantaritos/1.jpg",
    "./gastronomia/cantaritos/2.jpg",
    "./gastronomia/cantaritos/3.jpg",
    "./gastronomia/cantaritos/4.jpg",

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
              Ubicado en la Av. Siles al lado del Surtidor Libertadores al mismo
              ingreso del municipio de Punata sin dudarlo tu primera parada para
              degustar los ricos platos que te ofrece “los cantaritos” como ser
              el conejo cuy en sus variedades de putachanga, lambreado y changa,
              pato, matambre, charque, pique y planchita obviamente no pude
              faltar la chicha kully y amarrilla, la atención son los días
              lunes, martes, miércoles, viernes, sábado y domingo a partir de
              mediodía.
            </div>
          </div>
          <Link to="/gastronomia">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Cantaritos;
