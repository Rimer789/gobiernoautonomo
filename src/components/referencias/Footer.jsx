import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <span className="primaryTexto">Síguenos en: </span>
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
      <div className="flexColEnd f-right">
          <span className="footerText">Desarrollado por: Tu Nombre</span>
          <span className="footerText">Correo electrónico: tu@email.com</span>
        </div>
    </div>
  );
};

export default Footer;
