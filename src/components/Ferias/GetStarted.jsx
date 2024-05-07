/* GetStarted.js */
import React, { useState, useEffect } from "react";
import "./GetStarted.css";

const GetStarted = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const jsonData = require("../../utils/noticias.json");
    setNews(jsonData);
  }, []);

  return (
    <div className="page-background">
      {news.map((item, index) => (
        <div key={index} className="news-container">
          <NewsItem news={item} />
        </div>
      ))}
    </div>
  );
};

const NewsItem = ({ news }) => {
  return (
    <div className="container">
      <div className="news-item">
        <h2>{news.title}</h2>
        <p>{renderDescription(news.description)}</p>
        <p>{news.date}</p>
        <ImageSlider imagePaths={news.imagePaths} altText={news.title} />
      </div>
    </div>
  );
};

const renderDescription = (description) => {
  return description.split("||").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const ImageSlider = ({ imagePaths, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagePaths.length]);

  return (
    <div className="image-slider">
      {imagePaths.map((imagePath, index) => (
        <img
          key={index}
          src={imagePath}
          alt={`${altText} ${index}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default GetStarted;

