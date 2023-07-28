import React, { useEffect, useState } from "react";
import AppAnalizadorLexico from "./AppAnalizadorLexico";
import LoadingBarbie from "./views/loadingBarbie";

const principal = () => {
  const [mostrar, setmostrar] = useState(false);

  return (
    <>
      {window.innerWidth < 768 || mostrar ? (
        <AppAnalizadorLexico />
      ) : (
        <LoadingBarbie setmostrar={setmostrar}></LoadingBarbie>
      )}
    </>
  );
};

export default principal;
