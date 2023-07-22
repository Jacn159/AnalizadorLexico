// import Johan from "./components/Johan";
import { useState } from "react";
import Props from "./components/props";
import "./styles.css";
// import Casma from "./components/casma";
// import Magallanes from "./components/magallanes.jsx";
const valor = { mensaje: "mensaje", titulo: "jajaja" };

let edad = 5 > 2 ? 15 : 20;

export default function App() {
  // me crea una variable, junto con su actualizador
  // const [nombreVariable, actualizarValor]= useState(valorInicial);

  const [varnombre, cambiarValor] = useState("toñito");



  return (
    <>
      {/* le enviamos 2 props con los nombres, edad y nombre */}
      <Props nombre={varnombre} edad={edad} cambiarValor={cambiarValor} ></Props>
    </>
  );
}
