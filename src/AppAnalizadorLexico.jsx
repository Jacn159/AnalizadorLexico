import React, { useState } from "react";
import Input from "./components/input";

import Header from "./components/header";
import Tarjeta from "./components/tarjeta";

const AppAnalizadorLexico = ({ setmostrar }) => {
  const [valor, setvalor] = useState("");
  const [valorOutput, setvalorOutput] = useState("");
  const [borrar, setborrar] = useState(false);

  return (
    <>
      <Header></Header>
      <main>
        {" "}
        <Tarjeta
          titulo={"INPUT"}
          posicion={"left"}
          valor={valor}
          setvalor={setvalor}
          setvalorOutput={setvalorOutput}
          borrar={borrar}
          setborrar={setborrar}
        ></Tarjeta>
        <Tarjeta
          titulo={"OUTPUT"}
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
