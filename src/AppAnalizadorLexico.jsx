import React, { useState } from "react";
import Input from "./components/input";

const AppAnalizadorLexico = () => {
  const [value, setvalue] = useState("");
  return (
    <>
      <h1>asdas</h1>
      {/* input */}

      <Input setvalue={setvalue} valor={value}></Input>
      <h2>{value}</h2>
    </>
  );
};

export default AppAnalizadorLexico;
