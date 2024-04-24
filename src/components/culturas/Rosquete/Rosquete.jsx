import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Rosquete = () => {
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
              El rosquete punateño, una de las exquisiteces del valle alto; más
              conocido como “el manjar blanco” y declarado patrimonio cultural
              del municipio de Punata y del Departamento de Cochabamba por la
              calidad y producciónón artesanal mantenida en el tiempo y
              exportada a dodos los departamentos de nuestro País.
            </h1>
          </div>
          <Link to="/cultura">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Rosquete;
