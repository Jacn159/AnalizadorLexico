import React from "react";
import analyzeCode from "../../logic/logic";
import "./output.css";
const Output = ({ value, borrar }) => {
  let mensaje = analyzeCode(value).split("\n");
  return (
    <div className="salida">
      {borrar == true
        ? ""
        : mensaje.map((linea, index) =>
            linea != "" ? <li key={index}>{linea}</li> : undefined
          )}
    </div>
  );
};

export default Output;
