import React, { useState } from "react";
import "./tarjeta.css";
import Input from "../input";
import Output from "../output";

const Tarjeta = ({
  titulo,
  posicion,
  valor,
  setvalor,
  setvalorOutput,
  valorOutput,
  borrar,
  setborrar,
}) => {
  const enviarValor = () => {
    setborrar(false);
    setvalorOutput(valor);
    console.log(borrar);
  };
  const borrarValor = () => {
    setborrar(true);

    console.log(borrar);
  };
  const eventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div className={"fondo__tarjeta-" + posicion}>
      <div className={"header__tarjeta-" + posicion}>
        <img className={"puntos-" + posicion} src="/puntos.png" alt="" />
        <h1 className="title">{titulo}</h1>
      </div>
      <div className={"subfondo-" + posicion}>
        {posicion == "left" ? (
          <form onSubmit={eventDefault}>
            <Input setvalue={setvalor} valor={valor}></Input>
          </form>
        ) : (
          <Output value={valorOutput} borrar={borrar}></Output>
        )}
      </div>

      <div
        className={"circulo-" + posicion}
        onClick={titulo == "Input" ? enviarValor : borrarValor}
      ></div>
    </div>
  );
};

export default Tarjeta;
