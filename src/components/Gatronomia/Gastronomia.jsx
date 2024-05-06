import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom"; 
import "swiper/css";
import "./Gastronomia.css";
import { sliderSettings } from "../../utils/common";

const places = [
 
  {
    name: "LOCAL CANTARITOS",
    image: "./gastronomia/cantaritos/3.jpg",
    link: '/cantaritos'
  },
  {
    name: "LOCAL LAS K´JARAS",
    image: "./gastronomia/kjaras/1.jpg",
    link: '/kjaras'
  },
  {
    name: "LOCAL LOS ARCHIS",
    image: "./gastronomia/archis/3.jpg",
    link: '/archis'
  },
  {
    name: "LOCAL LA LLAJTA",
    image: "./gastronomia/llajta/4.jpg",
    link: '/llajta'
  },
  {
    name: "LOCAL EL POBLADO",
    image: "./gastronomia/poblado/4.jpg",
    link: '/poblado'
  },
  {
    name: "LOCAL DOÑA AURORA",
    image:"./gastronomia/aurora/3.jpg", 
    link: '/aurora'
  },
  {
    name: "LOCAL JOTA JOTITA",
    image: "./gastronomia/jotita/1.jpg",
    link: '/jotita'
  },
  {
    name: "LOCAL 3 HERMANOS",
    image: "./gastronomia/hermanos/3.jpg",
    link: '/hermanos'
  },
  {
    name: "LOCAL PAKAY HUASI",
    image: "./gastronomia/huasi/2.jpg",
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
