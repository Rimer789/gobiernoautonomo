import React, { useState } from 'react';
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="residencies" className="r-wrapper">
            <div className="paddings innerWidth g-container">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Nuestros </span>
          <span className="primaryText">Proyectos.</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {data.map((project, i) => (
            <SwiperSlide key={i} onClick={() => handleProjectClick(project)}>
              <div className="flexColStart r-cardp">
                <img src={project.image} alt="home" />
                <span className="primaryText">{project.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
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

const ProjectModal = ({ project, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-content">
          <h2>{project.name}</h2>
          <span className="close" onClick={onClose}>&times;</span>
          <p>{project.additionalDetails.description}</p>
          <br />
          <div className="images">
            {project.additionalDetails.images.map((image, index) => (
              <img key={index} src={image} alt={`Project ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};





export default Residencies;
