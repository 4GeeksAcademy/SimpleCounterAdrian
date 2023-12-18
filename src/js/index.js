//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home";

// include your styles into the webpack bundle
import "../styles/index.css";


 let counter = 0
 //la clave
  
  setInterval(() => {
    ReactDOM.render(<Home counter = {counter} />, document.querySelector("#app"));
    counter++
    
  },1000);
      





