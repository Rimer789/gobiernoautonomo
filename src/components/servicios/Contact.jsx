import React, { useState } from "react";
import data from "../../utils/servicios.json";
import { sliderSettings } from "../../utils/common";
import "./Contact.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaMoneyBillAlt, FaBalanceScale, FaCity, FaTools, FaClipboardList, FaLeaf, FaUser } from 'react-icons/fa'; // Importa los iconos de React Icons

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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="paddings innerWidth s-container">
          <div className="flexColStart r-head">
            <span className="orangeText">DIRECCIONES MUNICIPALES </span>
          </div>
          <Swiper {...sliderSettings}>
            <SlideNextButton />
            {/* slider */}
            {data.map((card, i) => (
              <SwiperSlide key={i} /*onClick={() => handleCardClick(card)}*/>
                <div className="flexColStart r-cards">
                  <span className="primaryTexts">
                     {card.name}
                  </span>
                  <span className="secondaryText">{icons[i % icons.length]}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {modalOpen && (
            <Modal onClose={() => setModalOpen(false)} selectedService={selectedService} />
          )}
        </div>
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

const Modal = ({ onClose, selectedService }) => {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        <h2>
          {icons[data.findIndex(service => service.name === selectedService.name) % icons.length]}{" "}
          {selectedService.name}
        </h2>
        <p>{selectedService.detail}</p>
      </div>
    </div>
  );
};
