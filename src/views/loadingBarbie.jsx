import React, { useEffect, useState } from "react";
import "./loading.css";

const LoadingBarbie = ({ setmostrar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const pasarView = () => {
    setmostrar(true);
  };

  return (
    <div
      className="loading"
      onClick={pasarView}
      style={{
        "--imagen-loading": isDarkMode
          ? "url(/openhaimer.jpg) no-repeat center center"
          : "url(/logobarbie.png) no-repeat center center",
        "--size-loading": isDarkMode ? "100%" : "30%",
      }}
    >
      <div className="img__movile"></div>
    </div>
  );
};

export default LoadingBarbie;
