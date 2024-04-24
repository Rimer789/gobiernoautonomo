import React from "react";
import { BrowserRouter as Router ,Route, Routes } from "react-router-dom";
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
import Sivingani from "./components/Turismos/Sivingani/Sivingani";
import Cementerio from "./components/Turismos/Cementerio/Cementerio";
import Gastronomia from "./components/Gatronomia/Gastronomia";
import Cultura from "./components/Cultura/Cultura";
import Rosquete from "./components/culturas/Rosquete/Rosquete";
import Chicha from "./components/culturas/Chicha/Chicha";

function App() {
  

  return (
    <Router>
      <Routes> 
          <Route path="/villa" element={<Villa />} /> 
          <Route path="/era" element={<Era />} /> 
          <Route path="/sivingani" element={<Sivingani/>}/>
          <Route path="/cementerio" element={<Cementerio />} /> 
          <Route path="/rosquete" element={<Rosquete />} /> 
          <Route path="/chicha" element={<Chicha />} /> 
        </Routes>
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
        <Turismo />
        <Cultura />
        <Gastronomia />
        <GetStarted />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
