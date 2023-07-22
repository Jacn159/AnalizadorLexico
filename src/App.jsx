import "./styles.css";
import Casma from "./components/casma";
import Magallanes from "./components/magallanes.jsx"
const valor = { mensaje: "mensaje", titulo: "jajaja" };

const funcion = () => {
  return "esto es una funcion";
};
export default function App() {
  return (
    <>
      <h1>Integrantes:</h1>
      <ul>
        <li><Casma></Casma></li>
        <li><Magallanes></Magallanes></li>
        <li></li>
      </ul>
      
    </>
  );
}
