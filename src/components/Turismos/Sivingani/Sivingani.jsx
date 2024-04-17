import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sivingani = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["./portada1.jpg", "./portada2.jpg", "./portada3.jpg"]; // Agregamos las rutas de las imágenes

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambiamos el intervalo a 3 segundos

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
            <h1>
              La hacienda de Sivingani está ubicada en el distrito 4 de la
              comunidad de Sivingani, al noreste de la ciudad de Punata, a solo
              15minutos, cuya construcción data al año 1740. Concebida de dos
              plantas, con un patio central y una capilla, su arquitectura es
              esencialmente colonial. Salta a la vista el portón de medio punto,
              como el altillo, que denotan a la arquitectura colonial. Ni hablar
              de su capilla, ahí se resguarda la virgen de Santa Ana, además de
              pinturas coloniales y fotografías antiguas, muchas de ellas con un
              toque francés. En esta hacienda se filmó la película “Los Granos
              del Sol”, bajo la dirección de Ramón Rocha Monrroy, el año 2008.
            </h1>
          </div>
          <Link to="/turismo">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Sivingani;
