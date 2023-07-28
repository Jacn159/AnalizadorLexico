import React from "react";
import "./header.css";
import Boton from "../boton";
import Sonido from "../audio";
const Header = () => {
  return (
    <header className="header">
      <div className="contenedor-music">
        <div className="music">
          <Sonido></Sonido>
        </div>
      </div>

      <h1 className="titulo">ANALIZADOR LEXICO</h1>
      <div className="contenedor-music">
        <Boton></Boton>
      </div>
    </header>
  );
};

export default Header;
