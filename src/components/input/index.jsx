import React, { useState } from "react";

const Input = ({ setvalue, valor }) => {
  const [inputValue, setinputValue] = useState(valor);
  const handdleValue = (event) => {
    setinputValue(event.target.value);
    setvalue(event.target.value);

  };

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
