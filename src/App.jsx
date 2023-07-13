import "./styles.css";

const valor = { mensaje: "mensaje", titulo: "jajaja" };

const funcion = () => {
  return "esto es una funcion";
};
export default function App() {
  return (
    <>
      <h2>{valor.mensaje}</h2>
      <h3>{valor.titulo}</h3>
      <h4>{JSON.stringify(valor)}</h4>
      <p>{funcion()}</p>
      <h1>Hola</h1>
    </>
  );
}
