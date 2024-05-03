import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import mediumImage from "./escudopunata.jpg"; // Importa la imagen mediana

const Footer = () => {
  const [status, setStatus] = useState("Desconocido");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/America/La_Paz');
        const data = await response.json();
        const hour = parseInt(data.datetime.slice(11, 13)); // Obtener la hora en formato de 24 horas
        const minute = parseInt(data.datetime.slice(14, 16));

        // Convertir la hora de UTC a la hora local de Bolivia (GMT-4)
        const localHour = hour - 4;

        if (
          // Abierto desde las 8:01 AM (481 minutos) hasta las 12:00 PM (720 minutos)
          (localHour === 8 && minute >= 1) ||
          (localHour > 8 && localHour < 12) ||
          (localHour === 12 && minute === 0) ||
          // Cerrado desde las 12:01 PM (721 minutos) hasta las 1:30 PM (810 minutos)
          (localHour === 12 && minute > 0 && minute <= 30) ||
          (localHour === 13 && minute <= 30) ||
          // Abierto desde las 1:31 PM (811 minutos) hasta las 5:30 PM (1050 minutos)
          (localHour === 13 && minute > 30) ||
          (localHour > 13 && localHour < 17) ||
          (localHour === 17 && minute === 30) ||
          // Cerrado desde las 5:31 PM (1051 minutos) hasta las 8:00 AM (480 minutos)
          (localHour === 17 && minute > 30) ||
          (localHour > 17 && localHour <= 23) ||
          (localHour >= 0 && localHour < 8) ||
          (localHour === 8 && minute === 0)
        ) {
          setStatus("Abierto");
        } else {
          setStatus("Cerrado");
        }
      } catch (error) {
        console.error('Error al obtener la hora:', error);
        setStatus("Desconocido");
      }
    };

    fetchStatus();
  }, []);

  const statusColor = status === "Abierto" ? "#4CAF50" : "#FF5733";

  return (
    <footer className="f-wrapper">
      <div className="dividir">
        <div className="footer-section">
          <div className="title">Gobierno Autónomo Municipal de Punata</div>
          <div className="description">Oficina central: Calle Sucre entre calle Antofagasta y calle Rafael Urquidi</div>
          <div className="description">Lunes-Viernes, de 8:00 AM a 12:00 PM y de 1:30 PM a 5:30 PM</div>
          <div style={{ fontSize: "20px", color: statusColor }}>{status}</div>
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
      <div className="flexColEnd f-right">
        <span className="footerText">Correo electrónico:***gmail.com</span>
      </div>
    </footer>
  );
};

export default Footer;
