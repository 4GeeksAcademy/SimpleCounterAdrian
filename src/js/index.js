//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

window.onload = function () {
  // Esperar a que la página esté completamente cargada
  contarHastaDiez();
};

function contarHastaDiez() {
  var numeroElement = document.querySelector("#numero");

  // Inicializar el contador en 1
  var contador = 1;

  // Utilizar setInterval para ejecutar la función cada segundo (1000 milisegundos)
  var intervalo = setInterval(function () {
    // Mostrar el número actual en el elemento con id "numero"
    numeroElement.innerHTML = contador;

    // Incrementar el contador
    contador++;

    // Si hemos alcanzado 10, detener el intervalo
    if (contador > 10) {
      clearInterval(intervalo);
    }
  }, 1000); // Intervalo de 1000 milisegundos (1 segundo)
}
