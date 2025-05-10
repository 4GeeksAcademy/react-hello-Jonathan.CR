import React from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

//Contador de segundos
import SecondsCounter from "./components/SecondsCounter";
import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="contenedorPrincipal">
      <h1 className="contenedorTexto">Contador de Segundos con REACT</h1>
      <div className="contenedorContadorIcono">
        <i className="fas fa-clock iconoReloj"></i>
        <SecondsCounter seconds={seconds} />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);