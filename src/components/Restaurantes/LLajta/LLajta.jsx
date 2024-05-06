import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LLajta = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./gastronomia/llajta/1.jpg",
    "./gastronomia/llajta/2.jpg",
    "./gastronomia/llajta/3.jpg",
    "./gastronomia/llajta/4.jpg",
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
              El encanto con la naturaleza, espacios verdes y familiares para
              compartir y disfrutar en familia “local el Poblado” abre sus
              puertas los días viernes sábados y domingos con los platos el
              tradicional como el cuzqueño y el conejo cuy con su mejor versión
              de la Putachanga, también el riquísimo plato del pato, pique macho
              y el charque y no podía faltar la riquísima chicha en sus dos
              variedades kully, Amarilla y Garapiña todo esto a partir del medio
              y esta ubicado Av. Perla del Valle A 200 metros de la Av. Siles
              antes de pasar el Puente Paracaya.
            </div>
          </div>
          <Link to="/gastronomia">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default LLajta;
