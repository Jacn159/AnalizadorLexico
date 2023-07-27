import React, { useState } from "react";
import Input from "./components/input";
import BotonMode from "./components/boton";
import Header from "./components/header";
import Tarjeta from "./components/tarjeta";

const AppAnalizadorLexico = () => {
  const [valor, setvalor] = useState("");
  const [valorOutput, setvalorOutput] = useState(valor);
  const [borrar, setborrar] = useState(false);
  return (
    <>
      <Header></Header>
      <BotonMode></BotonMode>
      <main>
        {" "}
        <Tarjeta
          titulo={"Input"}
          posicion={"left"}
          valor={valor}
          setvalor={setvalor}
          setvalorOutput={setvalorOutput}
          borrar={borrar}
          setborrar={setborrar}
        ></Tarjeta>
        <Tarjeta
          titulo={"Output"}
          posicion={"rigth"}
          valor={valor}
          valorOutput={valorOutput}
          borrar={borrar}
          setborrar={setborrar}
        ></Tarjeta>
      </main>
    </>
  );
};

export default AppAnalizadorLexico;
