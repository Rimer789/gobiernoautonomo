import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Huasi = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./gastronomia/huasi/1.jpg",
    "./gastronomia/huasi/2.jpg",
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
              La chicha y el Chicharrón hacen eco para disfrutar de estas
              delicias y que mejor que en el Local “Pakay Huasi” donde la
              naturaleza y la cordialidad son los anfitriones para disfrutar de
              un rico plato de chicharrón de cerdo y de pollo preparado por las
              manos de su propietaria y acompañado siempre de la rica garapiña
              ubicada en la Av. Final Alemania. Rumi Rumi y con su atención los
              días domingos desde horas 12:00 p.m.
            </div>
          </div>
          <Link to="/gastronomia">Atrás</Link>
        </div>
      </div>
    </div>
  );
};

export default Huasi;
