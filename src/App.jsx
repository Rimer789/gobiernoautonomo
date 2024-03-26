import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Companies from "./components/Companies/Companies";
import Contact from "./components/servicios/Contact";
import Footer from "./components/referencias/Footer";
import GetStarted from "./components/Ferias/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Inicio/Hero";
import Residencies from "./components/Proyectos/Residencies";
import Value from "./components/Informacion/Value";
import Turismo from "./components/Turismo/Turismo";
import Villa from "./components/Turismos/Villa/Villa";
import Era from "./components/Turismos/Laera/Era";

function App() {
  const [showVilla, setShowVilla] = useState(false);
  const [showEra, setShowEra] = useState(false);

  const handleShowVilla = () => {
    setShowVilla(true);
    setShowEra(false); // Asegurarse de ocultar Era si se muestra Villa
  };

  const handleShowEra = () => {
    setShowEra(true);
    setShowVilla(false); // Asegurarse de ocultar Villa si se muestra Era
  };

  const handleHideVilla = () => {
    setShowVilla(false);
  };

  return (
    <Router>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Value />
        <Residencies />
        <Contact />
        {showVilla ? (
          <Villa onBack={handleHideVilla} />
        ) : showEra ? (
          <Era /> // Mostrar Era si showEra es true
        ) : (
          <Turismo onShowPlace={handleShowVilla} onShowEra={handleShowEra} /> // Pasar función para mostrar Era
        )}
        <GetStarted />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
