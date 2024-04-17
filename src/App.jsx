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

function App() {
  

  return (
    <Router>
      <Routes> {/* Utiliza Routes para definir tus rutas */}
          <Route path="/villa" element={<Villa />} /> {/* Define la ruta */}
          <Route path="/era" element={<Era />} /> {/* Define la ruta */}
          <Route path="/sivingani" element={<Sivingani/>}/>
          <Route path="/cementerio" element={<Cementerio />} /> {/* Define la ruta */}
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
        <GetStarted />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
