import React, { useState, useEffect } from 'react';


function Boton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verificar si el usuario tiene activado el modo oscuro en su sistema/navegador
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Cambiar el atributo class del elemento raíz (normalmente <html>) para aplicar el modo
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return (
    <div>
      {/* Tu contenido de la aplicación aquí */}
      <button onClick={toggleDarkMode}>Cambiar Modo</button>
    </div>
  );
}

export default Boton;
