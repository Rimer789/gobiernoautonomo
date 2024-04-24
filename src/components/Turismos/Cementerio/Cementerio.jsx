import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cementerio = () => {
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
              El cementerio general de Punata, un hermoso patrimonio de la perla
              del valle, que aloja la memoria de nuestros antepasados punateños,
              como el Dr. Andrés María Torrico, Dr. Manuel Ascencio Villarroel,
              Dn. Nataniel Daza, Dn. Paulino Crespo, Dr. Rubén Ferrufino, Dr.
              Saúl Orellana, Prof. Atilio Sucre tataranieto del Mariscal Antoni
              José de Sucre y otros.
            </h1>
          </div>
          <Link to="/turismo">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Cementerio;
