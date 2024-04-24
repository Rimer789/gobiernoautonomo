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
      <Routes> {/* Utiliza Routes para definir tus rutas */}
          <Route path="/villa" element={<Villa />} /> {/* Define la ruta */}
          <Route path="/era" element={<Era />} /> {/* Define la ruta */}
          <Route path="/sivingani" element={<Sivingani/>}/>
          <Route path="/cementerio" element={<Cementerio />} /> {/* Define la ruta */}
          <Route path="/rosquete" element={<Rosquete />} /> {/* Define la ruta */}
          <Route path="/chicha" element={<Chicha />} /> {/* Define la ruta */}
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
