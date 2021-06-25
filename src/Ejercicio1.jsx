import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const myInput = useRef();

  function focusMyInput() {
    myInput.current.focus();
  }

  return (
    <div className="app">
      <h1>
        Usos de useRef Hook <br />
        (Modificar elementos del DOM):
      </h1>

      <h4>Ejemplo 1.</h4>
      {/* Ejemplo 1. Al hacer click en el botón "Enfocar myInput", */}
      {/* se enfoca el input "myInput" */}
      <input ref={myInput} />
      <button onClick={focusMyInput}>Enfocar myInput</button>
      <br />
      <br />

      <h4>Ejercicio 1.</h4>
      {/* Ejercicio 1. Al hacer click en el botón "Remover myLabel", */}
      {/* se debe remover el label "myLabel" */}
      {/* hint: usa la funcion remove() remover elementos del DOM */}
      <label>myLabel</label>
      <button>Remover myLabel</button>
      <br />
      <br />

      {/* Para realizar el Ejercicio 2, modifica el archivo src/Ejercicio2.jsx */}
      <a href="/Ejercicio2">Ir a Ejercicio 2</a>
    </div>
  );
}
