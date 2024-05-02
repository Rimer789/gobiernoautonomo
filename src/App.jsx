import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/referencias/Footer"; // Asegúrate de importar el footer aquí
import Companies from "./components/Companies/Companies";
import Contact from "./components/servicios/Contact";
import GetStarted from "./components/Ferias/GetStarted";
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
import Economia from "./components/Direcciones/EconomiaFinanzas/Economia";
import IngresoMunicipal from "./components/Direcciones/IngresosMunicipales/IngresosMunicipales";
import UrbanismoCatastro from "./components/Direcciones/UrbanismoCatastro/UrbanismoCatastro";
import ObrasPublicas from "./components/Direcciones/ObrasPublicas/ObrasPublicas";
import Planificacion from "./components/Direcciones/Planificacion/Planificacion";
import MedioAmbiente from "./components/Direcciones/ProductivoMedioAmbiente/ProductivoMedioAmbiente";
import DesarrolloHumano from "./components/Direcciones/DesarrolloHumano/Humano";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/value" element={<Value />} />
            <Route path="/residencies" element={<Residencies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/turismo" element={<Turismo />} />
            <Route path="/cultura" element={<Cultura />} />
            <Route path="/gastronomia" element={<Gastronomia />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/villa" element={<Villa />} />
            <Route path="/era" element={<Era />} />
            <Route path="/sivingani" element={<Sivingani />} />
            <Route path="/cementerio" element={<Cementerio />} />
            <Route path="/rosquete" element={<Rosquete />} />
            <Route path="/chicha" element={<Chicha />} />
            <Route path="/economia" element={<Economia />} />
            <Route path="/ingresosmunicipales" element={<IngresoMunicipal />} />
            <Route path="/urbanismocatastro" element={<UrbanismoCatastro/>} />
            <Route path="/obraspuplicas" element={<ObrasPublicas/>} />
            <Route path="/planificacion" element={<Planificacion/>} />
            <Route path="/productivomedioambiente" element={<MedioAmbiente/>} />
            <Route path="/desarrollohumano" element={<DesarrolloHumano/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
