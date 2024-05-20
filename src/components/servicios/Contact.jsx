import { React , useState } from "react";
import data from "../../utils/servicios.json";
import { sliderSettings } from "../../utils/common";
import "./Contact.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaMoneyBillAlt, FaBalanceScale, FaCity, FaTools, FaClipboardList, FaLeaf, FaUser } from 'react-icons/fa'; // Importa los iconos de React Icons
import { Link } from "react-router-dom";

const icons = [
  <FaMoneyBillAlt />,
  <FaBalanceScale />,
  <FaCity />,
  <FaTools />,
  <FaClipboardList />,
  <FaLeaf />,
  <FaUser />
];

const Contact = () => {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    if (zoom < 500) {
      setZoom(zoom + 30);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 100) {
      setZoom(zoom - 30);
    }
  };
  return (
    <div id="contact-us" className="v-wrapper">
      <div className="d-container2">
          <div className="flexColStart r-head">
            <span className="orangeText">ORGANIGRAMA 2024 GAM PUNATA </span>
          </div>
          <div
            className="image-container"
            style={{ overflow: "auto" }}
          >
            <div className="zoom-buttons">
              <button onClick={handleZoomIn}>+</button>
              <button onClick={handleZoomOut}>-</button>
            </div>
            <img
              src={require("./1.jpg")}
              alt="Organigrama"
              style={{
                width: `${zoom}%`
              }}
            />
        </div>
      </div>
      <div className="paddings innerWidth g-container">
          <div className="flexColStart r-head">
            <span className="orangeText">DIRECCIONES MUNICIPALES </span>
          </div>
          <Swiper {...sliderSettings}>
            <SlideNextButton />
            {data.map((card, i) => (
              <SwiperSlide key={i} >
                <Link to={card.link}>
                <div className="flexColStart r-cards">
                  <span className="primaryTexts">
                     {card.name}
                  </span>
                  <span className="secondaryText">{icons[i % icons.length]}</span>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          
      </div>
    </div>
  );
};

export default Contact;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};


