import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "swiper/css";
import "./Turismo.css";
import { sliderSettings } from "../../utils/common";

const places = [
  {
    name: "LA VILLA",
    image: "./portada4.jpg",
    link: '/villa'
  },
  {
    name: "LA ERA",
    image: "./portada4.jpg",
    link: '/era'
  },
  {
    name: "Nombre del lugar 2",
    image: "./portada4.jpg",
    link: '/lugar2'
  },
  {
    name: "Nombre del lugar 3",
    image: "./portada4.jpg",
    link: '/lugar3'
  },
  {
    name: "Nombre del lugar 4",
    image: "./portada4.jpg",
    link: '/lugar4'
  },
  {
    name: "Nombre del lugar 5",
    image: "./portada4.jpg",
    link: '/lugar5'
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
                <Link to={place.link}> {/* Utiliza Link para redireccionar */}
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
