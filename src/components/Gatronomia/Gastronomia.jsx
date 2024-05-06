import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom"; 
import "swiper/css";
import "./Gastronomia.css";
import { sliderSettings } from "../../utils/common";

const places = [
 
  {
    name: "LOCAL CANTARITOS",
    image: "./proyectos/cantaritos/cantaritos1.jpg",
    link: '/cantaritos'
  },
  {
    name: "LOCAL LAS K´JARAS",
    image: "./proyectos/kjaras/kjaras1.jpg",
    link: '/kjaras'
  },
  {
    name: "LOCAL LOS ARCHIS",
    image: "./proyectos/archis/archis1.jpg",
    link: '/archis'
  },
  {
    name: "LOCAL LA LLAJTA",
    image: "./proyectos/llajta/llajta1.jpg",
    link: '/llajta'
  },
  {
    name: "LOCAL EL POBLADO",
    image: "./proyectos/poblado/poblado1.jpg",
    link: '/poblado'
  },
  {
    name: "LOCAL DOÑA AURORA",
    image: "./proyectos/aurora/aurora1.jpg",
    link: '/aurora'
  },
  {
    name: "LOCAL JOTA JOTITA",
    image: "./proyectos/jotita/jotita1.jpg",
    link: '/jotita'
  },
  {
    name: "LOCAL 3 HERMANOS",
    image: "./proyectos/hermanos/hermanos1.jpg",
    link: '/hermanos'
  },
  {
    name: "LOCAL PAKAY HUASI",
    image: "./proyectos/pakayhuasi/pakayhuasi1.jpg",
    link: '/pakayhuasi'
  },
  
];

const Gastronomia = () => {
  return (
    <div id="gastronomia" className="r-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="paddings innerWidth t-container">
          <div className="flexColStart r-head">
            <span className="orangeText">GASTRONOMIA</span>
          </div>
          <Swiper {...sliderSettings}>
            <SlideNextButton />
            {places.map((place, index) => (
              <SwiperSlide key={index}>
                <Link to={place.link}> 
                  <div className="flexColStart r-cardg">
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

export default Gastronomia;
