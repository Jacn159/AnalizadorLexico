import React, { useState } from "react";

const Input = ({ setvalue, valor }) => {
  const [inputValue, setinputValue] = useState(valor);
  const handdleValue = (event) => {
    setinputValue(event.target.value);
  };
  const eventDefault = (event) => {
    event.preventDefault();
    setinputValue("");
    setvalue(inputValue);
  };

  return (
    <form onSubmit={eventDefault}>
      <textarea
        type="text"
        placeholder="Ingresa tu código"
        value={inputValue}
        onChange={handdleValue}
      />
      <button type="submit">Validar</button>
    </form>
  );
};

export default Input;
