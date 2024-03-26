import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Turismo.css";
import { sliderSettings } from "../../utils/common";

const places = [
  {
    name: "LA VILLA",
    image: "./portada4.jpg"
  },
  {
    name: "LA ERA",
    image: "./portada4.jpg"
  },
  {
    name: "Nombre del lugar 2",
    image: "./portada4.jpg"
  },
  {
    name: "Nombre del lugar 3",
    image: "./portada4.jpg"
  },
  {
    name: "Nombre del lugar 4",
    image: "./portada4.jpg"
  },
  {
    name: "Nombre del lugar 5",
    image: "./portada4.jpg"
  }
];

const Turismo = ({ onShowPlace, onShowEra }) => {
  const handleShowPlace = (place) => {
    if (place.name === "LA VILLA") {
      onShowPlace();
    } else if (place.name === "LA ERA") {
      onShowEra();
    }
  };

  return (
    <div id="turismo" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Nuestros Lugares </span>
          <span className="primaryText">Turisticos.</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {places.map((place, index) => (
            <SwiperSlide key={index}>
              {/* Renderiza un cuadro para cada lugar */}
              <div className="flexColStart r-card" onClick={() => handleShowPlace(place)}>
                <img src={place.image} alt={place.name} />
                <span className="primaryText">{place.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

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

export default Turismo;