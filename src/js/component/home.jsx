import React from "react";
import SimplecounterSegundos from "./simplecounterSegundos";
import SimplecounterMinutos from "./simpleCounterMinutos";
import SimplecounterHoras from "./simplecounterHoras";

import RelojIcon from "./reloj";
import Portada from "./titular";
import Botones from "./botones";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="bg-black">
      <Portada ></Portada>
      <div className="fondo">
        <RelojIcon></RelojIcon>
        <SimplecounterHoras></SimplecounterHoras>
        <SimplecounterMinutos></SimplecounterMinutos>
        <SimplecounterSegundos></SimplecounterSegundos>
      </div>
      <div >
        <Botones></Botones>
      </div>
    </div>
  );
};

export default Home;
