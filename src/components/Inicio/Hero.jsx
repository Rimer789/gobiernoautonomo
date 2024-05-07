import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";

import "./Hero.css";
import background1 from "../../imagenes/portada1.jpg";
import background2 from "../../imagenes/portada2.jpg";
import background3 from "../../imagenes/portada3.jpg";
import background4 from "../../imagenes/portada4.jpg";
import background5 from "../../imagenes/portada5.jpg";
import background7 from "../../imagenes/portada7.jpg";

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const [descriptions, setDescriptions] = useState([
    "Ciclo via en la avenida gualberto villarroel",
    "Arco de bienbenida a municipio de punata",
    "Estatuas de madera en el parque",
    "Plaza 18 de mayo",
    "Tmplo san juan bautista",
    "Centro de la plaza 18 de mayo ",
  ]);

  // Array con las imágenes de fondo
  const backgrounds = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background7,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <section
      id="hero"
      className="hero-wrapper"
      style={{
        backgroundImage: `url(${backgrounds[backgroundImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
       <head>
                <title> ALCALDIA DE PUNATA</title>
                <meta name="description" content=" Satisfacer las necesidades y aspiraciones de desarrollo de la
          población del municipio de Punata, direccionando los servicios
          públicos municipales hacia la mejora de su calidad de vida, en un
          contexto de transparencia, eficacia, eficiencia, calidad y
          oportunidad." />
            </head>
      <div className="hero-container">
        <div className="hero-title">
          GOBIERNO AUTÓNOMO <br /> MUNICIPAL DE PUNATA
        </div>
        <div className="descripcion-inicio">
          {descriptions[backgroundImage]}
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;
