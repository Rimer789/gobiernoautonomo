import React  from "react";
import { FaFacebookF, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";
import mediumImage from "./escudopunata.jpg"; 

const Footer = () => {
<<<<<<< HEAD
=======
  const [status, setStatus] = useState("Cargando..."); 

  useEffect(() => {
    const obtenerHoraActual = async () => {
      try {
        const timestamp = new Date().getTime(); 
        const response = await fetch(`http://worldtimeapi.org/api/timezone/America/La_Paz?timestamp=${timestamp}`);
        if (!response.ok) {
          throw new Error('Error en la solicitud a la API de hora');
        }
        const data = await response.json();
        const horaBoliviaLocal = new Date(data.datetime);
        const horaActual = horaBoliviaLocal.getHours();
        const horaInicioManana = 8;
        const horaFinManana = 12;
        const horaInicioTarde = 13;
        const horaFinTarde = 17;

        if ((horaActual >= horaInicioManana && horaActual < horaFinManana) || (horaActual >= horaInicioTarde && horaActual < horaFinTarde)) {
          setStatus("Abierto ahora");
        } else {
          setStatus("Cerrado ahora");
        }
      } catch (error) {
        console.error('Error al obtener la hora:', error);
        setStatus("Error: Verifica tu conexión a Internet");
      }
    };

    obtenerHoraActual();
  }, []); 

  useEffect(() => {
  
    if (status !== "Cargando...") {
      console.log('Status:', status);
    }
  }, [status]); 

>>>>>>> c0672fa695bf0a70719c85bd1cb2b9e8eb51dad7
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
