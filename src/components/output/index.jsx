import React from "react";
import analyzeCode from "../../logic/logic";

const Output = ({ value, borrar }) => {
  let mensaje = analyzeCode(value).split("\n");
  return (
    <>
      {borrar == true
        ? ""
        : mensaje.map((linea, index) => <p key={index}>{linea}</p>)}
    </>
  );
};

export default Output;
