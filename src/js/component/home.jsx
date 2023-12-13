import React from "react";
import Simplecounter from "./simplecounter";
import RelojIcon from "./reloj";
import Portada from "./titular";
import Botones from "./botones";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="bg-black">
      <Portada />
      <div className="fondo">
        <RelojIcon />
        <Simplecounter />
        <Simplecounter />
        <Simplecounter />
        <Simplecounter />
        <Simplecounter />
        <Simplecounter/>
      </div>
      <div >
        <Botones/>
      </div>
    </div>
  );
};

export default Home;
