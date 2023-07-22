import Johan from "./components/Johan";
import "./styles.css";

const valor = { mensaje: "mensaje", titulo: "jajaja" };

const funcion = () => {
  return "esto es una funcion";
};
export default function App() {
  return (
    <>
      <h1>Integrantes:</h1>
      <ul>
        <li><Johan></Johan></li>
      </ul>           
    </>
  );
}
