import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import mediumImage from "./escudopunata.jpg"; // Importa la imagen mediana

const Footer = () => {
  const [status, setStatus] = useState("Desconocido");

  useEffect(() => {
    const obtenerHoraActual = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/America/La_Paz');
        const data = await response.json();
        const horaBolivia = new Date(data.datetime);
        const horaBoliviaLocal = horaBolivia.toLocaleString("en-US", { timeZone: "America/La_Paz" });
        console.log('Hora actual en Bolivia:', horaBoliviaLocal);
        const horaActual = new Date(horaBoliviaLocal);
        const horaInicioManana = new Date(horaBoliviaLocal);
        horaInicioManana.setHours(8, 0, 0); // 8:00 AM
        const horaFinManana = new Date(horaBoliviaLocal);
        horaFinManana.setHours(12, 0, 0); // 11:36 AM
        const horaInicioTarde = new Date(horaBoliviaLocal);
        horaInicioTarde.setHours(13, 30, 0); // 1:30 PM
        const horaFinTarde = new Date(horaBoliviaLocal);
        horaFinTarde.setHours(17, 30, 0); // 5:30 PM
        const horaFinDiaSiguiente = new Date(horaBoliviaLocal);
        horaFinDiaSiguiente.setDate(horaFinDiaSiguiente.getDate() + 1);
        horaFinDiaSiguiente.setHours(8, 0, 0); // 8:00 AM

        if ((horaActual >= horaInicioManana && horaActual <= horaFinManana) || (horaActual >= horaInicioTarde && horaActual <= horaFinTarde)) {
          setStatus("Abierto");
        } else if (horaActual >= horaInicioTarde && horaActual <= horaFinTarde) {
          setStatus("Abierto");
        } else {
          setStatus("Cerrado");
        }
        console.log('Status:', status);
      } catch (error) {
        console.error('Error al obtener la hora:', error);
        setStatus("Desconocido");
      }
    };

    obtenerHoraActual();
  }, []);

  return (
    <footer className="f-wrapper">
      <div className="dividir">
        <div className="footer-section">
          <div className="title">Gobierno Autónomo Municipal de Punata</div>
          <div className="description">Oficina central: Calle Sucre entre calle Antofagasta y calle Rafael Urquidi</div>
          <div className="description">Lunes-Viernes, de 8:00 AM a 12:00 PM y de 1:30 PM a 5:30 PM</div>
          <div style={{ fontSize: "20px", color: status === "Abierto" ? "#4CAF50" : "#FF5733" }}>{status}</div>
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
        <span className="footerText">Correo electrónico: ***gmail.com</span>
      </div>
    </footer>
  );
};

export default Footer;
