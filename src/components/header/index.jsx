import React from "react";
import "./header.css";
import Boton from "../boton";
import Sonido from "../audio";
const Header = () => {
  return (
    <header className="header">
      <div className="music">
        <Sonido></Sonido>
      </div>
      <h1 className="titulo">ANALIZADOR LEXICO</h1>
      <Boton ></Boton>
    </header>
  );
};

export default Header;
