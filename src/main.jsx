import React from "react";
import ReactDom from "react-dom/client";
import "./colores.css";
import "./index.css";
import "./reset.css";
import Principal from "./principal";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Principal></Principal>
  </React.StrictMode>
);
