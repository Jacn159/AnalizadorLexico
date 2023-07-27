import React from "react";
import ReactDom from "react-dom/client";
import "./colores.css"
import "./index.css";
import "./reset.css";
import AppAnalizadorLexico from "./AppAnalizadorLexico";
ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppAnalizadorLexico />
  </React.StrictMode>
);
