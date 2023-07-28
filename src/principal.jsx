import React, { useEffect, useState } from "react";
import AppAnalizadorLexico from "./AppAnalizadorLexico";
import LoadingBarbie from "./views/loadingBarbie";
// const [isDarkMode, setIsDarkMode] = useState(false);

// useEffect(() => {
//   // Verificar si el usuario tiene activado el modo oscuro en su sistema/navegador
//   const prefersDarkMode = window.matchMedia(
//     "(prefers-color-scheme: dark)"
//   ).matches;
//   setIsDarkMode(prefersDarkMode);
// }, []);
const principal = () => {
  const [mostrar, setmostrar] = useState(false);

  return (
    <>
      {mostrar ? (
        <AppAnalizadorLexico />
      ) : (
        <LoadingBarbie setmostrar={setmostrar}></LoadingBarbie>
      )}
    </>
  );
};

export default principal;
