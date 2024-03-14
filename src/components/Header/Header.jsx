import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <header className={`h-wrapper ${menuOpened ? "menu-open" : ""}`}>

        {/* menu */}
        <nav className={`h-menu ${menuOpened ? "open" : ""}`}>
          <a href="#hero" onClick={closeMenu}>
            Inicio
          </a>
          <a href="#value" onClick={closeMenu}>
            Informacion{" "}
          </a>
          <a href="#residencies" onClick={closeMenu}>
            Proyectos
          </a>
          <a href="#contact-us" onClick={closeMenu}>
            Servicios
          </a>
          <a href="#get-started" onClick={closeMenu}>
            Ferias  
          </a>
        </nav>
        {/* Icono del menú */}
        <div className="menu-icon" onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
      </div>
    </header>
  );
};

export default Header;
