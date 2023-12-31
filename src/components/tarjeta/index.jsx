import React, { useState, useEffect } from "react";
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
  };
  const borrarValor = () => {
    setborrar(true);
  };

  const eventDefault = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (borrar) {
      setborrar(true); // Vuelve a poner borrar a falso para evitar bucles infinitos
    }
  }, [borrar, setborrar]);

  return (
    <div className={"fondo__tarjeta-" + posicion}>
      <div className={"header__tarjeta-" + posicion}>
        <img className={"puntos-" + posicion} src="/puntos.png" alt="" />
        <h1 className="title">{titulo}</h1>
      </div>
      <div className={"subfondo-" + posicion}>
        {posicion == "left" ? (
          <form onSubmit={eventDefault}>
            <Input
              setvalue={setvalor}
              valor={valor}
              borrar={borrar}
              setborrar={setborrar}
            ></Input>
          </form>
        ) : (
          <Output value={valorOutput} borrar={borrar}></Output>
        )}
      </div>

      <div className={"imagen-" + posicion}></div>

      <div
        className={"circulo-" + posicion}
        onClick={titulo == "INPUT" ? enviarValor : borrarValor}
      ></div>
    </div>
  );
};

export default Tarjeta;
