import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";

const Value = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["./escudo.png", "./plaza.jpg", "./r1.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="value" className="v-wrappera">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src={images[currentImageIndex]} alt="" />
          </div>
        </div>

        <div className="flexColStart v-right">
     

          <span className="secondaryText">
            <span className="bold-subtitle">MUNICIPIO:</span> Punata <br />
            <span className="bold-subtitle">CARACTERÍSTICA:</span> La Perla del
            Valle <br />
            <span className="bold-subtitle">FUNDACIÓN:</span> 4 de enero 1972{" "}
            <br />
            <span className="bold-subtitle">ANIVERSARIO:</span> 18 de mayo{" "}
            <br />
            <span className="bold-subtitle">CLIMA:</span> Templado DISTANCIA: 50
            km. PARADA: Av. República frente al Templo San Carlos <br />
            <span className="bold-subtitle">EXTENSIÓN:</span> 178,17 km2 FERIA
            SEMANAL: Martes FERIAS: Feria de la Chicha y el Rosquete (2ª semana
            de mayo) <br />
            <span className="bold-subtitle">FESTIVIDAD:</span> Señor de los
            Milagros (22 al 24 de septiembre) <br />
            Punata tiene principalmente producción agrícola. Los cultivos más
            importantes son el trigo, papa, avena, maíz, arveja, frutales como
            durazno, pera, manzana, ciruela, frutillas etc. La actividad
            agrícola de Punata es reconocida por la producción de peras,
            duraznos y otras frutas en huertos frutales. También se producen
            hortalizas y pasturas mejoradas de alto rendimiento, como la
            alfalfa. En las partes altas se cultiva variedades de papa, la
            papaliza, la oca, trigo y maíz.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem className="accordionItem" uuid={i} key={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton ">
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
