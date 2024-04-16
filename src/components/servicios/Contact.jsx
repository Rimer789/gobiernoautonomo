import React from "react";
import data from "../../utils/servicios.json";
import datos from "../../utils/colegios.json";
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
          
        </div>
      </div>
      <div className="paddings innerWidth g-container">
        <div className="paddings innerWidth s-container">
          <div className="flexColStart r-head">
            <span className="orangeText">UNIDADES EDUCATIVAS  </span>
          </div>
          <Swiper {...sliderSettings}>
            <SlideNextButton />
            {/* slider */}
            {datos.map((card, i) => (
              <SwiperSlide key={i} /*onClick={() => handleCardClick(card)}*/>
                <div className="flexColStart r-cardss">
                  <span className="">
                     {card.unidad}
                  </span>
                  <span className="">
                     {card.director}
                  </span>
                  <span className="">
                     {card.ref}
                  </span>
                  <span className="">
                     {card.nivel}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
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


