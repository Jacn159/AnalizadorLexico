import React, { useState, useEffect } from "react";
import "./input.css"
const Input = ({ setvalue, valor, borrar, setborrar }) => {
  const [inputValue, setinputValue] = useState(valor);

  const handdleValue = (event) => {
    setinputValue(event.target.value);
    setvalue(event.target.value);
  };

  useEffect(() => {
    if (borrar) {
      setinputValue(""); // Limpia el valor del textarea cuando borrar es verdadero
      setvalue("");
      setborrar(false); // Vuelve a poner borrar a falso para evitar bucles infinitos
    }
  }, [borrar, setborrar]);

  return (
    <>
      <textarea
        type="text"
        placeholder="Ingresa tu código"
        value={inputValue}
        onChange={handdleValue}
      />
    </>
  );
};

export default Input;
