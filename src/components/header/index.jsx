import React from "react";
import "./header.css";
import Boton from "../boton";
const Header = () => {
  return (
    <header className="header">
      <div className="music"></div>
      <h1 className="titulo">ANALIZADOR LEXICO</h1>
      <Boton></Boton>
    </header>
  );
};

export default Header;
