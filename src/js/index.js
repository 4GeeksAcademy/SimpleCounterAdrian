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
  let segundos = 0;
  let minutos = 0;
  
  setInterval(() => {
      if (segundos <= 60) {
          setTimeout(() => {
              document.querySelector("#segundos").innerHTML = `${segundos}`;
              console.log(segundos);
              segundos++;
          }, 1000);
      } else {
          minutos++;
          segundos = 0;
          document.querySelector("#segundos").innerHTML = `${minutos}`;
          console.log(minutos);
      }
  }, 1000);


};


