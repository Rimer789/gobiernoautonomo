import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "swiper/css";
import "./Cultura.css";
import { sliderSettings } from "../../utils/common";

const places = [
  {
    name: "EL ROSQUETE",
    image: "./portada4.jpg",
    link: "/rosquete",
  },
  {
    name: "LA CHICHA PUNATEÑA",
    image: "./portada4.jpg",
    link: "/chicha",
  },
];

const Cultura = () => {
  return (
    <div id="cultura" className="r-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="paddings innerWidth t-container">
          <div className="flexColStart r-head">
            <span className="orangeText">CULTURA PUNATEÑA</span>
          </div>
          <Swiper {...sliderSettings}>
            <SlideNextButton />
            {places.map((place, index) => (
              <SwiperSlide key={index}>
                <Link to={place.link}>
                  <div className="flexColStart r-cardc">
                    <img src={place.image} alt={place.name} />
                    <span className="primaryTextt">{place.name}</span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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

export default Cultura;
