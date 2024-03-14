import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        

        <div className="flexColStart f-right">
          <span className="primaryText">siguenos en </span>
          <div className="flexCenter f-menu">
            <span>Facebook</span>
            <span>Tik Tok</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

