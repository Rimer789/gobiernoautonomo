import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/servicios/Contact";
import Footer from "./components/referencias/Footer";
import GetStarted from "./components/Ferias/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Inicio/Hero";
import Residencies from "./components/Proyectos/Residencies";
import Value from "./components/Informacion/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Value/>
      <Residencies/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
