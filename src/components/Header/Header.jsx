import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importamos Link desde react-router-dom
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
        {/* Utilizamos Link en lugar de <a> para la navegación */}
        <Link to="/" onClick={closeMenu}>
          INICIO
        </Link>
        <Link to="/value" onClick={closeMenu}>
          GOBIERNO MUNICIPAL
        </Link>
        
        <Link to="/contact" onClick={closeMenu}>
          DIRECCIONES MUNICIPALES
        </Link>
        <Link to="/turismo" onClick={closeMenu}>
          Turismo
        </Link>
        <Link to="/cultura" onClick={closeMenu}>
          Cultura
        </Link>
        <Link to="/gastronomia" onClick={closeMenu}>
          Gastronomia
        </Link>
        <Link to="/get-started" onClick={closeMenu}>
          Ferias
        </Link>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <BiMenuAltRight size={30} />
      </div>
    </header>
  );
};

export default Header;

