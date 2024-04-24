import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Chicha = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["./proyectos/chicha/chicha1.jpg", "./proyectos/chicha/chicha2.jpg", "./proyectos/chicha/chicha3.jpg","./proyectos/chicha/chicha4.jpg"]; 

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
            <h1>
              La chicha punateña también conocido como el néctar del valle, es
              considerada como la mejor chicha de Bolivia, hecha a base maíz
              amarillo, Maíz Patillo, maíz morado, y otros donde se elabora la
              chicha amarilla y la chicha Kulli y chicha de chuspillo.
            </h1>
          </div>
          <Link to="/cultura">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Chicha;
