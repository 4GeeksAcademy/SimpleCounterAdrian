import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home";
// include your styles into the webpack bundle
import "../styles/index.css";

let counter = 0;
let miIntervalo;

function startInterval() {
  // Iniciar el intervalo
  miIntervalo = setInterval(() => {
    ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
    counter++;
  }, 1000);
}

function stopInterval() {
  clearInterval(miIntervalo);
}

function restartInterval() {
  // Clear the current interval
  clearInterval(miIntervalo);
  // Reset the counter
  counter = 0;
  // Restart the interval
  startInterval();
}

document.addEventListener("DOMContentLoaded", function () {
  // Iniciar el intervalo on page load
  startInterval();
  

});
export {stopInterval , startInterval , restartInterval}