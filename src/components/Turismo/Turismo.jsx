import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "swiper/css";
import "./Turismo.css";
import { sliderSettings } from "../../utils/common";

const places = [
  {
    name: "LA VILLA",
    image: "./turismo/villa/villa7.jpg",
    link: '/villa'
  },
  {
    name: "LA ERA",
    image: "./portada4.jpg",
    link: '/era'
  },
  {
    name: "HACIENDA DE SIVINGANI",
    image: "./turismo/sivingani/6.jpg",
    link: '/sivingani'
  },
  {
    name: "CEMENTERIO GENERAL",
    image: "./turismo/cementerio/1.jpg",
    link: '/cementerio'
  },

];

const cultura = [
  {
    name: "EL ROSQUETE",
    image: "./proyectos/rosquete/rosquete1.jpg",
    link: "/rosquete",
  },
  {
    name: "LA CHICHA PUNATEÑA",
    image: "./proyectos/chicha/chicha1.jpg",
    link: "/chicha",
  },
  {
    name: "El CUZQUEÑO",
    image: "./cultura/cusqueno/1.jpeg",
    link: '/cusqueno'
  },
];

const Turismo = () => {
  return (
    <div id="turismo" className="r-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="paddings innerWidth t-container">
          <div className="flexColStart r-head">
            <span className="orangeText">LUGARES TURISTICOS</span>
          </div>
          <Swiper {...sliderSettings}>
            <SlideNextButton />
            {places.map((place, index) => (
              <SwiperSlide key={index}>
                <Link to={place.link}> 
                  <div className="flexColStart r-cardt">
                    <img src={place.image} alt={place.name} />
                    <span className="primaryTextt">{place.name}</span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="paddings innerWidth g-container">
        <div className="paddings innerWidth t-container">
          <div className="flexColStart r-head">
            <span className="orangeText">CULTURA PUNATEÑA</span>
          </div>
          <Swiper {...sliderSettings}>
            <SlideNextButton />
            {cultura.map((cultur, index) => (
              <SwiperSlide key={index}>
                <Link to={cultur.link}>
                  <div className="flexColStart r-cardc">
                    <img src={cultur.image} alt={cultur.name} />
                    <span className="primaryTextt">{cultur.name}</span>
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

export default Turismo;
