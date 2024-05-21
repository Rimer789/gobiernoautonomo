import React  from "react";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import mediumImage from "./escudopunata.jpg"; 

const Footer = () => {

  return (
    <footer className="f-wrapper">
      <div className="dividir"> 
        <div className="footer-section">
          <div className="title">Gobierno Autónomo Municipal de Punata</div>
          <div className="description">Oficina central: Calle Sucre entre calle Antofagasta y calle Rafael Urquidi</div>
          <div className="description">Lunes-Viernes, de 8:00 AM a 12:00 PM y de 1:30 PM a 5:30 PM</div>
        </div>
        <div className="image-container">
          <img src={mediumImage} alt="Imagen Mediana" className="medium-image" />
        </div>
      </div>

      <div className="flexCenter f-menu">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="iconn" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="iconn" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="iconn" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="iconn" />
        </a>
      </div>
     
    </footer>
  );
};

export default Footer;
