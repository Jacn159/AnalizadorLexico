import React from "react";

// entre los paretensis colocaremos props
function Props(props) {
  const funcion = () => {
    props.cambiarValor("sadasd");
  };
  const funcion2 = () => {
    props.cambiarValor("sadasdsadas");
  };
  return (
    <>
      {/* <span onClick={()=>props.cambiarValor("pepe")}>Botón</span> */}
      <span onClick={funcion}>Botón</span>
      <span onClick={funcion2}>Botón</span>
      <button></button>
      <h1>Practican con props</h1>
      <h2>Mi nombre es: {props.nombre}</h2>
      <h2>Mi edad es: {props.edad}</h2>
    </>
  );
}

export default Props;
